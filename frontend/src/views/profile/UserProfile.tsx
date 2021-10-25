import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import CustomButton from "../../components/commons/Button/CustomButton";

const UserProfile = () => {
  return (
    <section className="flex flex-col border-6 h-full lg:h-screen w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 p-4 md:px-20 md:py-10">
      <h3 className="text-4xl mb-4 text-blue-900 font-secondary uppercase font-semibold tracking-wide text-center md:text-left ">
        Mi Perfil
      </h3>
      <div className="py-4 flex flex-col md:flex-row items-center">
        <div className="flex justify-center md:justify-start mb-3 items-center">
          <CgProfile className="w-16 h-16" color="#004972" />
          <p className="text-2xl md:text-4xl ml-6 text-white font-secondary">
            Roberto Carlos
          </p>
        </div>

        <div className="flex md:flex-1 justify-center md:justify-end">
          <div className="bg-blue-900 rounded-lg px-4 py-1 shadow-2xl">
            <span className="text-md font-semibold font-secondary uppercase text-gray-100">
              Inquilino
            </span>
          </div>
        </div>
      </div>

      <span className="flex items-center justify-center space-x-3 my-5">
        <span className="h-px bg-gray-200 flex-1"></span>
        <div className="bg-alt rounded px-4">
          <span className="font-normal text-xl text-gray-100 font-secondary">
            Datos Personales
          </span>
        </div>
        <span className="h-px bg-gray-200 flex-1"></span>
      </span>

      <div className="flex shadow-lg bg-gradient-to-b from-bg-gradient-7 to-bg-gradient-9 border-blue-400 rounded-xl mt-3 p-2 md:p-6 text-white leading-loose">
        <div className="flex flex-col flex-1 font-secondary">
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">Nombre completo:</span>
            <span className="text-blue-900 md:px-3 text-xl font-semibold">
              Roberto Juanito Carlos
            </span>
          </div>
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">DNI:</span>
            <span className="text-blue-900 px-3 text-xl font-semibold">
              25918512
            </span>
          </div>
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">Email:</span>
            <span className="text-blue-900 px-3 text-xl font-semibold">
              robertocarlos@gmail.com
            </span>
          </div>
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">Fecha de nacimiento:</span>
            <span className="text-blue-900 px-3 text-xl font-semibold">
              10-05-1990
            </span>
          </div>
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">Domicilio:</span>
            <span className="text-blue-900 px-3 text-xl font-semibold">
              Av. de la Universidad 1041
            </span>
          </div>
          <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
            <span className="text-xl text-blue-900">Telefono:</span>
            <span className="text-blue-900 px-3 text-xl font-semibold">
              351-401251
            </span>
          </div>
        </div>
        <div className="justify-end hidden md:flex h-16">
          <CustomButton text="Editar" color="alt">
            <MdEdit className="text-xl text-blue-300 cursor-pointer" />
          </CustomButton>
        </div>
      </div>
      <div className="flex md:hidden">
        <CustomButton text="Editar" color="alt">
          <MdEdit className="text-xl text-blue-300 cursor-pointer" />
        </CustomButton>
      </div>
    </section>
  );
};

export default UserProfile;
