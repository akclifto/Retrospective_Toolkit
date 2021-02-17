import RandomIconSelector from "../../components/RandomIconSelector";
import IconsArr from "../../constants/IconsDataStructure";

describe("Components/RandomIconSelector Testing", () => {
  it("Force duplication, should return empty array with log message.", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = RandomIconSelector(49, IconsArr);
    // const consoleLogSpy = console.log.mock.calls[0][0];
    // console.log(consoleLogSpy);
    expect(consoleSpy).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("Check no available icons, should return empty array with log message.", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const emptyIcons = [];
    const result = RandomIconSelector(12, emptyIcons);
    // const consoleLogSpy = console.log.mock.calls[0][0];
    // console.log(consoleLogSpy);
    expect(consoleSpy).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("Test RandomIconSelector, should return valid array of length 12.", () => {
    const result = RandomIconSelector(12, IconsArr);
    expect(result).not.toBeNull();
    expect(result.length).toBe(12);
  });
});
