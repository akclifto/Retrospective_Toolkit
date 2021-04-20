import IconsArr, {
  actionArr,
  destinationArr,
  feelingArr,
} from "../testhelpers/IconsDataStructure";

describe("Constants/IconDataStructure Testing", () => {
  it("Check valid length of Total Icons Array block", () => {
    const allIcons = IconsArr;
    expect(allIcons).not.toBeNull();
    expect(allIcons.length).toEqual(48);
  });

  it("Check valid length of Action Array block", () => {
    const actions = actionArr;
    expect(actions).not.toBeNull();
    expect(actions.length).toEqual(16);
  });

  it("Check valid length of Destination Array block", () => {
    const destinations = destinationArr;
    expect(destinations).not.toBeNull();
    expect(destinations.length).toEqual(16);
  });

  it("Check valid length of Feeling Array block", () => {
    const feelings = feelingArr;
    expect(feelings).not.toBeNull();
    expect(feelings.length).toEqual(16);
  });
});
