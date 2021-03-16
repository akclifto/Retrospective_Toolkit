/**
 * Tests DiceConstants that pulling data from AWS works and is formatted.
 */
import {
  initDiceImages,
  fullDiceArray,
  uniqueImageSet,
  uniqueImage,
} from "../../components/Dice/Dice";

describe("Testing that DieConstants.js pulls information from AWS", () => {
  test("Test Init function that it receives any data", () =>
    initDiceImages().then((data) => {
      expect(data).toBeDefined();
    }));

  test("Test that keys for Dice are correctly defined after init", () => {
    const testJSON = {
      URL: "",
      Name: "",
      Theme: "",
    };
    initDiceImages().then();
    const DiceObject = fullDiceArray[0];

    expect(Object.keys(testJSON)).toMatchObject(Object.keys(DiceObject));
  });
});

describe("Testing uniqueness of image sets", () => {
  beforeEach(() => {
    initDiceImages().then();
  });

  test("Two sets of images are unique", () => {
    const imageSet1 = uniqueImageSet();
    const imageSet2 = uniqueImageSet();

    expect(imageSet1).toBeDefined();
    expect(imageSet2).toBeDefined();

    for (let i = 0; i < imageSet1.length; i += 1) {
      expect(imageSet1[i]).not.toBe(imageSet2[i]);
    }
  });

  test("Working group of images will refill once empty", () => {
    const timesUntilRefill = fullDiceArray.length / 6; // Hardcoded 6 because current functionality only uses 6 sided dice

    for (let i = 0; i < Math.trunc(timesUntilRefill); i += 1) {
      uniqueImageSet();
    }

    expect(uniqueImageSet().length).toBe(6);
  });

  test("Two random images are unique", () => {
    const image1 = uniqueImage();
    const image2 = uniqueImage();

    expect(image1).toBeDefined();
    expect(image2).toBeDefined();

    expect(image1).not.toBe(image2);
  });

  test("uniqueImage will refill workingGroup of images once empty", () => {
    for (let i = 0; i < fullDiceArray.length; i += 1) {
      uniqueImage();
    }

    const refilledImage = uniqueImage();
    expect(refilledImage).toBeDefined();
  });
});
