/**
 * This class will create a full dice array that will be loaded from AWS. It will have useful information like: name,
 * theme, and the URL to find the picture. This file is inherently async, so it needs to be called at the
 * beginning part of the DOM lifecycle.
 *
 * There will be two main variables that will be used from this class, randomDiceThemes and randomDiceImages.
 * randomDiceImages is an array or URLs that is taken from randomDiceThemes, so they are inherently linked.
 */
import randomIconSelector from "../RandomIconSelector";

const lambdaURL =
  "https://rdy5i3cmkd.execute-api.us-west-1.amazonaws.com/prod/Dice";

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
 * Makes the call to an URL on AWS that returns a formatted JSON array of all of the dice images.
 * Each entry contains the fields:
 *  URL: points to S3 bucket
 *  Name: name of item
 *  Theme: Which theme folder it resides in the S3 bucket
 * @returns the full dice array, non randomized, containing all useful information.
 */
const initDiceImages = async () => {
  // Initialize s3 object to point to our S3 bucket for the class
  try {
    const response = await fetch(lambdaURL);
    const data = await response.json();
    fullDiceArray.push(...data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
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

export {
  initDiceImages,
  uniqueImageSet,
  uniqueImage,
  isDiceInit,
  fullDiceArray,
};
