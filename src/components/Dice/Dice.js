/**
 * This class will create a full dice array that will be loaded from AWS. It will have useful information like: name,
 * theme, and the URL to find the picture. This file is inherently async, so it needs to be called at the
 * beginning part of the DOM lifecycle.
 *
 * There will be two main variables that will be used from this class, randomDiceThemes and randomDiceImages.
 * randomDiceImages is an array or URLs that is taken from randomDiceThemes, so they are inherently linked.
 */
import randomIconSelector from "../RandomIconSelector";

const AWS = require("aws-sdk");
const config = require("../../resources/awsConfig.json");

const BASEURL = "https://retrospective-toolkit.s3-us-west-1.amazonaws.com/";

// import errorIcon from "../resources/dangerous-24px.svg"
const fullDiceArray = [];
let workingGroup = [];

// Contains information about different types of dice that can be used
const dieSides = {
  ONE: {
    sides: 1,
    chance: 1,
  },
  FOUR: {
    sides: 4,
    chance: 1 / 4,
  },
  SIX: {
    sides: 6,
    chance: 1 / 6,
  },
  EIGHT: {
    sides: 8,
    chance: 1 / 8,
  },
  TEN: {
    sides: 10,
    chance: 1 / 10,
  },
  TWELVE: {
    sides: 12,
    chance: 1 / 12,
  },
  TWENTY: {
    sides: 20,
    chance: 1 / 20,
  },
};

/**
 * Checks to see if the fullDiceArray is already initialized from the CDN.
 * @returns true if it is. False if not..
 */
const isDiceInit = () => {
  if (fullDiceArray.length > 0) return true;
  return false;
};

/**
 * Formats the Content into a usuable array for the rest of the project.
  
 * An example object is:
  {
    Key: 'Dice/Themes/insert_photo.png',
    LastModified: 2021-01-23T03:46:55.000Z,
    ETag: '"3610cd99a0afa5fdd64dcdda8a62ea97"',
    Size: 329,
    StorageClass: 'STANDARD'
  }

  We really only care about "Key" field here. It has all the info we need.

 * @param S3Content the content array received from the S3 Bucket
 */
const formatDiceArray = (S3Content) => {
  // Iterate over each object in Content Array
  S3Content.forEach((S3Object) => {
    // Make sure no info is clean through each iteration
    let name = "";
    const formattedDiceEntry = {
      URL: BASEURL,
      Name: "",
      Theme: "",
    };

    // An example URL is "https://retrospective-toolkit.s3-us-west-1.amazonaws.com/Dice/Themes/Action/alt_route-24px.svg"
    formattedDiceEntry.URL += S3Object.Key;

    // Second to last in array should be theme, last one should be unformatted name
    const KeyArray = S3Object.Key.split("/");
    name = KeyArray[KeyArray.length - 1];
    formattedDiceEntry.Theme = KeyArray[KeyArray.length - 2];

    // In case we take out the "-24px" in the S3 bucket
    const pxIndex = name.indexOf("-");
    if (pxIndex !== -1) {
      name = name.substr(0, pxIndex);
    }
    name = name.replace("_", " ");
    formattedDiceEntry.Name = name;

    fullDiceArray.push(formattedDiceEntry);
  });
};

/**
 * Makes the call to AWS and formats the response into a neat Array of JSON objects, each object representing an image.
 * @returns the full dice array, non randomized, containing all useful information.
 */
const initDiceImages = async () => {
  // Initialize s3 object to point to our S3 bucket for the class
  try {
    AWS.config.update({
      accessKeyId: config.accessKey,
      secretAccessKey: config.secretAccessKey,
      region: "us-west-1",
    });

    const s3 = new AWS.S3();

    // Parameters needed to get to the folder we're looking for in the S3 bucket
    const params = {
      Bucket: "retrospective-toolkit",
      Prefix: "Dice/Themes/",
    };
    // Getting the folder and its contents from S3 Bucket
    AWS.config.setPromisesDependency();
    const getS3Objects = await s3.listObjectsV2(params).promise();

    getS3Objects.Contents.shift(); // Removes first element, which is the Dice/Themes/Action folder "object"
    formatDiceArray(getS3Objects.Contents);
  } catch (e) {
    // eslint-disable-next-line
    console.log("error occured", e);
  }
  workingGroup = [...fullDiceArray];
  return fullDiceArray;
};

/**
 *  This will return a set of 6 images. The unique part is that it will remove the images it returns from the "working
 *  group". If the working pool is less than 6 images when the function is ready to return the images, it will
 *  reset the pool to contain all the images originally pulled from AWS.
 */
const uniqueImageSet = () => {
  if (workingGroup.length < dieSides.SIX.sides) {
    // remove images still remaining so we do not push duplicates into the array
    workingGroup = [];
    workingGroup = [...fullDiceArray];
  }

  const randomDiceThemes = randomIconSelector(dieSides.SIX.sides, workingGroup);

  randomDiceThemes.forEach((image) => {
    const index = workingGroup.indexOf(image);
    workingGroup.splice(index, 1);
  });

  const uniqueImages = randomDiceThemes.map((Theme) => Theme.URL);

  return uniqueImages;
};

/**
 *
 *  This will return one random image. The unique part is that it will remove the image it returns from the "working
 *  group". If the working pool is less than 1 image, it will reset the pool to contain all the images originally pulled from AWS.
 */
const uniqueImage = () => {
  if (workingGroup.length < dieSides.ONE.sides) {
    // remove images still remaining so we do not push duplicates into the array
    workingGroup = [];
    workingGroup = [...fullDiceArray];
  }

  const randomDiceThemes = randomIconSelector(dieSides.ONE.sides, workingGroup);

  randomDiceThemes.forEach((image) => {
    const index = workingGroup.indexOf(image);
    workingGroup.splice(index, 1);
  });

  return randomDiceThemes.map((Theme) => Theme.URL);
};

export { initDiceImages, uniqueImageSet, uniqueImage, isDiceInit };
