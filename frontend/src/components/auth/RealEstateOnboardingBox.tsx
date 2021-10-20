import CustomButton from "../commons/Button/CustomButton";
import { ReactComponent as OnboardingImage } from "../../assets/onboardingRE.svg";
import {FaCircleNotch, FaCheckCircle, FaTimesCircle, GoVerified} from "react-icons/all";
import React, {useEffect, useState} from "react";
import {checkContributor} from "../../api";

export interface IOnboardingBoxData {
  name: string;
  address: string;
  phone: string;
  cuit: string;
}

const initialFormData: IOnboardingBoxData = {
  name: '',
  address: '',
  phone: '',
  cuit: '',
}
const RealEstateOnboardingBox = () => {
  const [form, setForm] = useState<IOnboardingBoxData>(initialFormData);

  const [verified, setVerified] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // clearErrors();
    setForm({...form, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    setVerified(false);
    setVerificationStatus(null);
    if (form.cuit.length >= 11) verifyCuit();
  }, [form.cuit]);

  const verifyCuit = async () => {
    if (form.cuit.length > 0) {
      setVerifying(true);
      const {data} = await checkContributor(form.cuit);
      setVerifying(false);
      setVerified(true);
      setVerificationStatus(data.result.isValid);
    }
  }

  return (
    <div className="flex flex-row p-5 xl:w-6/12 break-words mb-3 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center content-center">
      <div className="w-full xl:w-8/12 flex justify-center">
        <form className="w-full lg:w-4/5">
          <div className="relative w-full mt-6 mb-3">
            <input
              type="text"
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Nombre"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="relative w-full mt-6 mb-3">
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
            {verifying && (
                <div className="mx-4">
                  <FaCircleNotch className="animate-spin opacity-60 text-2xl"/>
                </div>
            )}
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
          {!verifying && verificationStatus && (
              <div className="relative w-full">
                <p className="text-blue-500 text-xs text-left">
                  Te encuentras registrado en AFIP!
                </p>
                <p className="text-xs text-left">
                  Tu perfil se contará con la insignia de verifición exitosa.
                </p>
              </div>
          )}
          {!verifying && !verificationStatus && (
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

          <div className="relative w-full mt-6 mb-3">
            <input
              type="text"
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Domicilio"
              style={{ transition: "all 0.15s ease 0s" }}
            />
          </div>
          <div className="relative w-full mt-6 mb-3">
            <input
              type="number"
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="Telefono"
              style={{
                transition: "all 0.15s ease 0s",
              }}
            />
          </div>
          <div className="lg:w-6/12 mx-auto my-5">
            <CustomButton text="Continuar" />
          </div>
        </form>
      </div>
      <div className="hidden lg:flex lg:w-4/12">
        <div className="w-52 h-52 lg:self-center">
          <OnboardingImage />
        </div>
      </div>
    </div>
  );
};

export default RealEstateOnboardingBox;
