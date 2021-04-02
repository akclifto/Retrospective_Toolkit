// eslint-disable-next-line arrow-body-style
jest.mock("react-dom", () => {
  return {
    unstable_createRoot: jest.fn(() => ({ render: jest.fn() })),
  };
});

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    // eslint-disable-next-line global-require
    require("../../index.js");
  });
});
