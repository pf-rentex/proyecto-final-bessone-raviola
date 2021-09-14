import CustomButton from "../commons/Button/CustomButton";
import { ReactComponent as OnboardingImage } from "../../assets/onboardingOwner.svg";

const OwnerOnboardingBox = () => {
  return (
    <div className="flex flex-row p-5 w-full xl:w-6/12 break-words mb-3 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center content-center">
      <div className="w-full flex flex justify-center">
        <form className="w-full lg:w-4/5">
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
              type="number"
              className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
              placeholder="DNI"
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
              style={{
                transition: "all 0.15s ease 0s",
              }}
            />
          </div>
          <div className="lg:w-6/12 mx-auto my-5">
            <CustomButton text="Continuar" />
          </div>
        </form>
        <div className="w-52 h-52 lg:self-center">
          <OnboardingImage />
        </div>
      </div>
    </div>
  );
};

export default OwnerOnboardingBox;
