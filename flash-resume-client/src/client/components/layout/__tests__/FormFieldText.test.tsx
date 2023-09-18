import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormFieldText from "../FormFieldText";

describe("Tests input", () => {
  it("should render input", () => {
    render(
      <FormFieldText
        id='address_line_1'
        dataId='address_line_1'
        placeholder='Address Line 1'
        label='address'
        value=''
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Address Line 1");

    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type in the input", async () => {
    const FormFieldTest: React.FC = () => {
      const [input, setInput] = useState("");
      return (
        <FormFieldText
          id='address_line_1'
          dataId='address_line_1'
          placeholder='Address Line 1'
          label='address'
          value={input}
          onChange={(_, value) => {
            setInput(value);
          }}
        />
      );
    };
    render(<FormFieldTest />);
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Address Line 1");

    fireEvent.change(inputElement, { target: { value: "1234 Main Ave." } });
    expect(inputElement.value).toBe("1234 Main Ave.");
  });
});
