import React, {useEffect, useState} from "react";
import CustomButton from "../commons/Button/CustomButton";
import { ReactComponent as OnboardingImage } from "../../assets/onboardingOwner.svg";
import { FaCircleNotch, FaTimesCircle, GoVerified } from "react-icons/all";
import {checkContributor} from "../../api";

export interface IOnboardingBoxData {
  name: string;
  birthdate: string;
  email: string;
  address: string;
  phone: string;
  cuit: string;
}

const initialFormData: IOnboardingBoxData = {
  name: '',
  birthdate: '',
  email: '',
  address: '',
  phone: '',
  cuit: '',
}
const OwnerOnboardingBox = () => {
  const [form, setForm] = useState<IOnboardingBoxData>(initialFormData);
  const [verified, setVerified] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // clearErrors();
    setForm({...form, [e.target.name]: e.target.value});
  }


  const verifyCuit = async () => {
    if (form.cuit.length > 0) {
      setVerifying(true);
      const {data} = await checkContributor(form.cuit);
      setVerifying(false);
      setVerified(true);
      setVerificationStatus(data.result.isValid);
    }
  }

  useEffect(() => {
    setVerified(false);
    setVerificationStatus(null);
    if (form.cuit.length >= 11) {
      verifyCuit();
    }
  }, [form.cuit]);

  return (
    <div className="flex flex-row p-5 xl:w-8/12 break-words mb-3 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center content-center z-10">
      <div className="w-full flex flex justify-center">
        <form className="w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-6/12 lg:px-3">
              <div className="relative w-full mt-6 mb-3">
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Nombre"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mt-3 mb-3">
                <input
                  type="email"
                  className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Email"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mt-3 mb-3">
                <input
                  type="date"
                  className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Fecha de nacimiento"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mt-3 mb-3">
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Domicilio"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mt-3 mb-3">
                <input
                  type="number"
                  className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Telefono"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:px-3">
              <div className="flex flex-row items-center">
                <div className="relative w-full mt-3 lg:mt-6 mb-3">
                  <input
                    type="text"
                    onChange={onFormChange}
                    maxLength={11}
                    name="cuit"
                    className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="CUIT"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                {verifying && (<div className="mx-4">
                                <FaCircleNotch className="animate-spin opacity-60 text-2xl"/>
                              </div>)
                }
                {!verifying && verified && verificationStatus && (
                    <div className="mx-4">
                      <GoVerified className="text-2xl text-blue-600"/>
                    </div>
                )}
                {!verifying && verified && !verificationStatus && (
                    <div className="mx-4">
                      <FaTimesCircle
                          className="opacity-75 text-2xl"
                          style={{ color: "red" }}
                      />
                    </div>
                )}
              </div>
              {!verifying && verified && verificationStatus && (
                <div className="relative w-full">
                  <p className="text-blue-500 text-xs text-left">
                    Te encuentras registrado en AFIP!
                  </p>
                  <p className="text-xs text-left">
                    Tu perfil se contará con la insignia de verifición exitosa.
                  </p>
                </div>
              )}
              {!verifying && verified && !verificationStatus && (
                  <div className="relative w-full">
                    <p className="text-red-500 text-xs text-left">
                      Al parecer, no se encuentra registrado como persona habilitada
                      para alquilar propiedades en el padrón de AFIP. Tu perfil no
                      será <span className="font-bold underline">verificado</span> hasta que podamos validar esta información
                    </p>
                    <p className="text-blue-600 text-xs text-left">
                      No te preocupes, <b>podrás utilizar la plataforma de todas formas.</b></p>
                  </div>
              )}
              <div className="hidden lg:flex">
                <div className="w-52 h-52 mx-auto">
                  <OnboardingImage />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 mx-auto my-5">
            <CustomButton text="Continuar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerOnboardingBox;
