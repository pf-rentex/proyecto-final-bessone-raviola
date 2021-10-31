import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Header from "../Header";

describe("Header test cases", () => {

  test("renders component", () => {
    const wrapper = render(<Header setIsOpenSidebar={() => {
    }}/>);

    expect(wrapper.container).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  test('It contains the App logo', () => {
    const {getByTestId} = render(<Header setIsOpenSidebar={() => {
    }}/>);

    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('It contains the sidebar toggle', () => {
    const {getByTestId} = render(<Header setIsOpenSidebar={() => {
    }}/>);

    expect(getByTestId('sidebar-toggle')).toBeInTheDocument();
  });

  test('Callback gets called on sidebar-toggle click', () => {
    const setIsOpenSidebar = jest.fn();
    const {getByTestId} = render(<Header setIsOpenSidebar={setIsOpenSidebar}/>);

    fireEvent.click(getByTestId('sidebar-toggle'));

    expect(setIsOpenSidebar).toHaveBeenCalled();
  });

  test('Contains the button to register', () => {
    const {getByText} = render(<Header setIsOpenSidebar={() => {
    }}/>);

    getByText('Registrarse');
  });
});
