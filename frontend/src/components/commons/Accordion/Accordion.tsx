import React, { useRef, useState } from "react";
import { FaChevronCircleDown } from "react-icons/all";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children = <></>,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-300 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(!active);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-300 ease"
        : "transform duration-300 ease rotate-180"
    );
  }

  return (
    <div className="flex flex-col">
      <button
        className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">{title}</p>
        <FaChevronCircleDown
          className={`${rotate} inline-block text-alt w-7 h-7`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
};
