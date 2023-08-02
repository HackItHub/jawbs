import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("renders loading icon when no data is available", () => {
    render(
      <DropDownMenu
        data={[]}
        listName='list name'
        handleInput={() => {}}
        placeholder='gotham'
      />,
    );
    const dropdownElement = screen.getByText("gotham");

    fireEvent.click(dropdownElement);

    const loadingElement = screen.getByRole("status");

    expect(loadingElement).toBeInTheDocument();
  });

  it("renders data in drop down menu", () => {
    render(
      <DropDownMenu
        data={["test 1", "test 2", "test 3"]}
        listName='list name'
        handleInput={() => {}}
        placeholder='gotham'
      />,
    );
    const dropdownElement = screen.getByText("gotham");

    fireEvent.click(dropdownElement);

    const menuElement = screen.getAllByRole("menuitem");

    expect(menuElement.length).toBe(3);
  });
});
