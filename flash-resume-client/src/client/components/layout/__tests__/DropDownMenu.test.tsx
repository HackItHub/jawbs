import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DropDownMenu from "../DropDownMenu";

describe("dropdown", () => {
  it("renders dropdown container", () => {
    render(
      <DropDownMenu
        data={[]}
        id='listName'
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
        id='listName'
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
        id='listName'
      />,
    );
    const dropdownElement = screen.getByText("gotham");

    fireEvent.click(dropdownElement);

    const menuElements = screen.getAllByRole("menuitem");

    expect(menuElements.length).toBe(3);
  });

  it("populates button with clicked on option and closes dropdown", () => {
    render(
      <DropDownMenu
        data={["test 1", "test 2", "test 3"]}
        listName='list name'
        handleInput={() => {}}
        placeholder='gotham'
        id='listName'
      />,
    );
    const dropdownElement = screen.getByText("gotham");

    fireEvent.click(dropdownElement);

    const menuElement = screen.getByText("test 1");

    fireEvent.click(menuElement);

    const dropdownElementFilled = screen.getByText("test 1");

    expect(dropdownElementFilled).toBeInTheDocument();

    const noDropdown = screen.queryByText("test 2");

    expect(noDropdown).toBeNull();
  });
});
