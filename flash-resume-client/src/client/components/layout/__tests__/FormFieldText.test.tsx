import React from "react";
import { render, screen } from "@testing-library/react";
import FormFieldText from "../FormFieldText";

describe("Tests input", () => {
  it("should render input", () => {
    render(
      <FormFieldText
        id='address_line_1'
        placeholder='Address Line 1'
        label='address'
        onChange={() => {}}
        required={true}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Address Line 1");

    expect(inputElement).toBeInTheDocument();
  });
  // it("should be able to type in the input", async () => {

  // })
});
