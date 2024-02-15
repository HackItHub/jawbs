import React from "react";
import { render, screen } from "@testing-library/react";
import TransparentContainer from "../TransparentContainer";

describe("Transparent Container", () => {
  it("renders transparent container with children jsx component", async () => {
    render(
      <TransparentContainer>
        <div className='rendering-test-class'>Test JSX Element Children</div>
      </TransparentContainer>,
    );

    const container = await screen.findByText("Test JSX Element Children");

    expect(container).toBeInTheDocument();
  });
});
