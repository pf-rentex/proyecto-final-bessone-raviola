import React from "react";
import {render} from "@testing-library/react";
import {Accordion} from "../Accordion";

describe("Accordion tests", () => {
  const content = (
      <ul className="font-thin space-y-5">
        <li className="flex justify-between">Opción 1</li>
        <li className="flex justify-between">Opción 2</li>
      </ul>
  );
  const getWrapper = () =>
      render(<Accordion title="Mis inmuebles">{content}</Accordion>);

  test("renders component", () => {
    const wrapper = getWrapper();

    expect(wrapper.container).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  test("Contains title element", () => {
    const {getByText} = getWrapper();

    getByText("Mis inmuebles");
  });

  test("contains children elements", () => {
    const wrapper = getWrapper();

    wrapper.getByTestId("button");
    wrapper.getByText("Opción 1");
    wrapper.getByText("Opción 2");
  });
});
