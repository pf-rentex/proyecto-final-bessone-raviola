import React from "react";
import CustomButton from "../../components/commons/Button/CustomButton";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <section className="flex flex-col h-full lg:h-screen w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 p-4 md:px-20 md:py-10">
      {/* <div className="container my-auto">
        <div className="flex w-full justify-end">
          <input
            type="text"
            // onChange={onFormChange}
            name="search"
            className="px-3 py-3 placeholder-gray-100 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-8/12"
            placeholder="Buscar"
            style={{ transition: "all 0.15s ease 0s" }}
          />
        </div>
      </div> */}
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <BiSearch className=" w-7 h-7" />
        </span>
        <input
          type="search"
          name="search"
          className="px-3 py-3 placeholder-gray-100 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-8/12"
          placeholder={<BiSearch className=" w-7 h-7" /> + "Buscar"}
        />
      </div>
    </section>
  );
};

export default Search;
