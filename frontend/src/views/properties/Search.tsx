import React from "react";
import CustomButton from "../../components/commons/Button/CustomButton";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <section className="flex flex-col h-screen w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 px-20 py-10">
      <div className="flex justify-end">
        <div className="relative w-9/12 text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <BiSearch className="w-7 h-7" />
          </span>
          <input
            type="search"
            name="search"
            className="px-10 py-3 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
            placeholder="Buscar"
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
