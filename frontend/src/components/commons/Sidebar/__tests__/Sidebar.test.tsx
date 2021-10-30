import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("Sidebar", () => {

  test("renders component", () => {
    const wrapper = render(<Sidebar isOpen={false} setIsOpen={() => {}}/>);

    expect(wrapper.container).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  test("Sidebar has corresponding classes when closed and open", () => {
    const wrapper = render(<Sidebar isOpen={false} setIsOpen={() => {}}/>);

    expect(wrapper.getByTestId('sidebar')).toHaveClass('-translate-x-full');

    wrapper.rerender(<Sidebar isOpen={true} setIsOpen={() => {}}/>);

    expect(wrapper.getByTestId('sidebar')).toHaveClass('translate-x-0');
  });

  test('Sidebar initially open is closed by clicking outside', () => {
    const setIsOpen = jest.fn();
    const wrapper = render(<Sidebar isOpen={true} setIsOpen={setIsOpen}/>);

    expect(wrapper.getByTestId('sidebar')).toHaveClass('translate-x-0');
    fireEvent.mouseDown(document);

    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
