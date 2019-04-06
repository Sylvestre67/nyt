import React from "react";
import { mount, ReactWrapper } from "enzyme";

import HomeScreen from "./HomeScreen";

let component: ReactWrapper;

describe("app", () => {
  beforeAll(() => {
    component = mount(<HomeScreen />);
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
