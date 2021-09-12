import React, { useState } from "react";
import { ReactComponent as RealEstateLogo } from "../../assets/real_estate.svg";
import { ReactComponent as OwnerLogo } from "../../assets/owner.svg";
import { ReactComponent as TenantLogo } from "../../assets/tenant.svg";
import { ReactComponent as Footer } from "../../assets/waves.svg";
import RealEstateOnboardingBox from "../../components/auth/RealEstateOnboardingBox";

const Onboarding = () => {
  const [userType] = useState("realEstate");

  const renderLogo = (userType: string) => {
    switch (userType) {
      case "realEstate":
        return <RealEstateLogo className="w-20 h-20" />;
      case "owner":
        return <OwnerLogo className="w-20 h-20" />;
      case "tenant":
        return <TenantLogo className="w-20 h-20" />;
      default:
        return <TenantLogo className="w-20 h-20" />;
    }
  };

  return (
    <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center">
          <div className="mt-5">{renderLogo(userType)}</div>
          <div className="divide-y-2 divide-blue-800 text-center">
            <h1 className="text-5xl text-blue-800 font-bold mb-3">
              Bienvenido!
            </h1>
            <h3 className="p-3 font-semibold text-white">
              Estas a un paso de poder administrar todos tus inmuebles, sólo
              <br />
              necesitamos un poco más de información sobre tu negocio
            </h3>
          </div>
          <RealEstateOnboardingBox />
        </div>
      </div>
      <footer className="absolute invisible lg:visible w-screen bottom-0">
        <Footer />
      </footer>
    </section>
  );
};

export default Onboarding;
