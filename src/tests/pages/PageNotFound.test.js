import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../../pages/PageNotFound";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PageNotFound />);
});

describe("Pages/PageNotFound Testing", () => {
  // Snapshot for PageNotFound
  test("SNAPSHOT: PageNotFound", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
