import React from "react";
import { mount, ReactWrapper } from "enzyme";

import App from "./App";

let component: ReactWrapper;

describe("app", () => {
  beforeAll(() => {
    component = mount(<App />);
  });

  it("should have a test", () => {
    expect(component).toMatchSnapshot();
  });
});
