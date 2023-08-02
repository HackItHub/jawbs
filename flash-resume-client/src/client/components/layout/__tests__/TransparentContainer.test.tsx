import React from "react";
import { render } from "@testing-library/react";
import TransparentContainer from "../TransparentContainer";

describe("Transparent Container", () => {
  it("renders transparent container with children jsx component", () => {
    const view = render(
      <TransparentContainer>
        <div className='rendering-test-class'>Test JSX Element Children</div>
      </TransparentContainer>,
    );

    expect(view.getByText("Test JSX Element Children")).toBeInTheDocument();
  });
});
