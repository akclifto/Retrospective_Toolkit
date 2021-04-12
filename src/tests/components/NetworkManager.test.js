import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import NetworkManager from "../../components/ThreeDice/NetworkManager";

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <MemoryRouter initialEntries={["/retro/room:Id"]} keyLength={0}>
      <NetworkManager />
    </MemoryRouter>
  ).dive();
});

describe("ThreeDice/NetworkManager Testing", () => {
  // Snapshot for NetworkManager
  test("SNAPSHOT: NetworkManager", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
