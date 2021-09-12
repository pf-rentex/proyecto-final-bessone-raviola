import React from "react";
import CustomButton from "../commons/Button/CustomButton";

const RealEstateOnboardingBox = () => {
  return (
    <div className="flex flex-col pb-5 xl:w-8/12 break-words mb-3 px-4 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center">
      <div className="xl:w-4/12">
        <form>
          <div className="relative w-full mt-6 mb-3">
            <input
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Nombre"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <div className="relative w-full mt-6 mb-3">
            <input
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="CUIT"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <div className="relative w-full mt-6 mb-3">
            <input
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Domicilio"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <div className="relative w-full mt-6 mb-3">
            <input
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Telefono"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <CustomButton text="Continuar" />
        </form>
      </div>
    </div>
  );
};

export default RealEstateOnboardingBox;
