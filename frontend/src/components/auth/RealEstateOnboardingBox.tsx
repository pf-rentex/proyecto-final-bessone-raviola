import CustomButton from "../commons/Button/CustomButton";
import { ReactComponent as OnboardingImage } from "../../assets/onboardingRE.svg";
import { FaCircleNotch, FaCheckCircle, FaTimesCircle } from "react-icons/all";

const RealEstateOnboardingBox = () => {
  return (
    <div className="flex flex-row p-5 xl:w-6/12 break-words mb-3 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center content-center">
      <div className="w-12/12 xl:w-8/12 flex justify-center">
        <form className="lg:w-4/5">
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
                type="number"
                className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="CUIT"
                style={{ transition: "all 0.15s ease 0s" }}
              />
            </div>
            <div className="mx-1">
              <FaCircleNotch className="animate-spin opacity-60" />
            </div>
            <div className="mx-1">
              <FaCheckCircle
                className="opacity-75"
                style={{ color: "green" }}
              />
            </div>
            <div className="mx-1">
              <FaTimesCircle className="opacity-75" style={{ color: "red" }} />
            </div>
          </div>
          <div className="relative w-full">
            <p className="text-red-500 text-xs text-left">
              Al parecer, tu agencia no se encuentra inscripta en el padrón de
              inmobiliarias de AFIP. Tu perfil no será{" "}
              <span className="font-bold underline">verificado</span> hasta que
              podamos validar esta información
            </p>
          </div>

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
          <div className="w-6/12 mx-auto my-5">
            <CustomButton text="Continuar" />
          </div>
        </form>
      </div>
      <div className="hidden lg:flex lg:w-4/12">
        <div className="w-52 h-52 lg:self-end">
          <OnboardingImage />
        </div>
      </div>
    </div>
  );
};

export default RealEstateOnboardingBox;
