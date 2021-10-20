import React, { useState } from "react";
import { ReactComponent as RealEstateLogo } from "../../assets/real_estate.svg";
import { ReactComponent as OwnerLogo } from "../../assets/owner.svg";
import { ReactComponent as TenantLogo } from "../../assets/tenant.svg";
import { ReactComponent as Footer } from "../../assets/waves.svg";
import RealEstateOnboardingBox from "../../components/auth/RealEstateOnboardingBox";
import TenantOnboardingBox from "../../components/auth/TenantOnboardingBox";
import OwnerOnboardingBox from "../../components/auth/OwnerOnboardingBox";
import {useDispatch} from "react-redux";
import {LOGOUT_SUCCESS} from "../../actions/types";

const Onboarding = (): JSX.Element => {
  const [userType] = useState("owner");
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: LOGOUT_SUCCESS});
  }

  const renderLogo = (userType: string) => {
    switch (userType) {
      case "realEstate":
        return <RealEstateLogo className="w-14 h-14 lg:w-20 lg:h-20" />;
      case "owner":
        return <OwnerLogo className="w-14 h-14 lg:w-20 lg:h-20" />;
      case "tenant":
        return <TenantLogo className="w-14 h-14 lg:w-20 lg:h-20" />;
      default:
        return <TenantLogo className="w-14 h-14 lg:w-20 lg:h-20" />;
    }
  };

  const renderWelcomeMessage = (userType: string) => {
    switch (userType) {
      case "realEstate":
        return (
          <h3 className="p-3 text-xs lg:text-base font-semibold text-white">
            Estas a un paso de poder administrar todos tus inmuebles, sólo
            <br />
            necesitamos un poco más de información sobre tu negocio
          </h3>
        );
      case "owner":
        return (
          <h3 className="p-3 text-xs lg:text-base font-semibold text-white">
            Estas a un paso de poder publicar y administrar tus propiedades,
            sólo
            <br />
            necesitamos un poco más de información acerca de ti
          </h3>
        );
      case "tenant":
        return (
          <h3 className="p-3 text-xs lg:text-base font-semibold text-white">
            Estas a un paso de encontrar tu hogar ideal, <br /> sólo necesitamos
            un poco más de información acerca de ti
          </h3>
        );
      default:
        return (
          <h3 className="p-3 text-xs lg:text-base font-semibold text-white">
            Estas a un paso de encontrar tu hogar ideal, sólo necesitamos un
            poco
            <br />
            más de información acerca de ti
          </h3>
        );
    }
  };

  const renderBox = (userType: string) => {
    switch (userType) {
      case "realEstate":
        return <RealEstateOnboardingBox />;
      case "owner":
        return <OwnerOnboardingBox />;
      case "tenant":
        return <TenantOnboardingBox />;
      default:
        return <RealEstateOnboardingBox />;
    }
  };

  return (
    <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2 overflow-hidden">
      <a className="text-md text-blue-900 cursor-pointer px-2 py-3" onClick={logout} >Logout</a>
      <div className="container flex items-center justify-center lg:block mx-auto h-full">
        <div className="flex flex-col items-center">
          <div className="mt-5">{renderLogo(userType)}</div>
          <div className="divide-y-2 divide-blue-800 text-center">
            <h1 className="text-3xl lg:text-5xl text-blue-800 font-bold mb-3">
              Bienvenido!
            </h1>
            {renderWelcomeMessage(userType)}
          </div>
          {renderBox(userType)}
        </div>
      </div>
      <footer className="absolute invisible lg:visible w-screen bottom-0">
        <Footer />
      </footer>
    </section>
  );
};

export default Onboarding;
