/**
 * Tests DiceConstants that pulling data from AWS works and is formatted.
 */
import { initDiceImages, fullDiceArray } from "../../components/Dice/Dice";

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
