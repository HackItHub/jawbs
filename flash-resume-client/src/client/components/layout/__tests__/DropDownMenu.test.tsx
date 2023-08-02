import React from "react";
import { render, screen } from "@testing-library/react";
import DropDownMenu from "../DropDownMenu";

describe("dropdown", () => {
  it("renders dropdown container", () => {
    render(
      <DropDownMenu
        data={[]}
        listName='list name'
        handleInput={() => {}}
        placeholder='gotham'
      />,
    );
    const dropdownElement = screen.getByText("gotham");

    expect(dropdownElement).toBeInTheDocument();
  });
});
