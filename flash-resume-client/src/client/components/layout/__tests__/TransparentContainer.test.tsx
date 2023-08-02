import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TransparentContainer from "../TransparentContainer";

it("renders transparent container", () => {
  const component = renderer.create(<TransparentContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("render transparent container with children text", () => {
  const view = render(<TransparentContainer>Test Text</TransparentContainer>);

  expect(view.getByText("Test Text")).toBeInTheDocument();
});

it("renders transparent container with children jsx component", () => {
  const view = render(
    <TransparentContainer>
      <div className='rendering-test-class'>Test JSX Element Children</div>
    </TransparentContainer>,
  );

  expect(view.getByText("Test JSX Element Children")).toBeInTheDocument();
});
