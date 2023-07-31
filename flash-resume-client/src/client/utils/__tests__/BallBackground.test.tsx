import React from "react";
import renderer from "react-test-renderer";
import BallBackground from "../BallBackground";

it("renders ball background", () => {
  const component = renderer.create(<BallBackground />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
