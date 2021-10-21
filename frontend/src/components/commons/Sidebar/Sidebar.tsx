import React, { useEffect, useState, useRef } from "react";
import { BiSearch, BsPlusCircleFill } from "react-icons/all";
import { Accordion } from "../Accordion/Accordion";
import { Badge } from "../Badge/Badge";

interface ISidebarProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const Sidebar = ({ isOpen, setIsOpen }: ISidebarProps) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: Event) {
      //@ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={`flex flex-col w-8/12 lg:w-5/12 xl:w-3/12 h-full fixed z-20 bg-gradient-to-b from-bg-gradient-11 to-bg-gradient-12 text-white transition duration-300 transform ${
        isOpen ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <div
        className={`bg-alt w-full p-3  ${
          !isOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h1 className="text-center text-3xl font-semibold">Dashboard</h1>
      </div>
      <div
        className={`p-4 ${!isOpen ? "translate-x-0 " : "-translate-x-full"}`}
      >
        <ul className="divide-y text-xl">
          <li className="px-3 py-5">
            <div className="flex justify-between items-center cursor-pointer select-none">
              Solicitudes
              <Badge>4</Badge>
            </div>
          </li>
          <li className="px-3 py-5">
            <Accordion title="Mis inmuebles">
              <ul className="font-thin space-y-5">
                <li className="flex justify-between">Opción 1</li>
                <li className="flex justify-between">Opción 2</li>
              </ul>
            </Accordion>
          </li>

          <li className="px-3 py-5">
            <Accordion title="Contratos">
              <ul className="font-thin space-y-5">
                <li className="flex justify-between">
                  Ver contratos
                  <BiSearch className="text-alt w-7 h-7" />
                </li>{" "}
                <li className="flex justify-between">
                  Crear nuevo <BsPlusCircleFill className="text-alt w-7 h-7" />
                </li>
              </ul>
            </Accordion>
          </li>
          <li className="px-3 py-5">Reclamos</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
