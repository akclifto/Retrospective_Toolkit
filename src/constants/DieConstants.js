/**
 * This class will create a "constants" file for the dicethat will populate at the start of the project's runtime. It will
 * contain useful information about each dice image: name, url to use, and which theme it is from.
 */
const AWS = require("aws-sdk");
const config = require("../resources/awsConfig.json");

const BASEURL = "https://retrospective-toolkit.s3-us-west-1.amazonaws.com/";
const formattedDiceArray = [];

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

 * @param S3Content the content array from the S3 Bucket
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

    formattedDiceArray.push(formattedDiceEntry);
  });

  return formattedDiceArray;
};

async function initDiceImages() {
  // Initialize s3 object to point to our S3 bucket for the class
  try {
    AWS.config.update({
      accessKeyId: config.accessKey,
      secretAccessKey: config.secretAccessKey,
      region: "eu-west-1",
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
  // eslint-disable-next-line
  console.log("TEST!!!");
  return formattedDiceArray;
}

module.export = { initDiceImages, formattedDiceArray };
