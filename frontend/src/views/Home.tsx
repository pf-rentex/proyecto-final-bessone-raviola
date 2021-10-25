import React from "react";
import { ReactComponent as RealtorLogo } from "../assets/realtor.svg";
import { ReactComponent as HomeSearchLogo } from "../assets/home_search.svg";
import { ReactComponent as SecurityLogo } from "../assets/security.svg";
import { ReactComponent as TenantRent } from "../assets/tenant_feature_1.svg";
import { ReactComponent as TenantManagement } from "../assets/tenant_feature_2.svg";
import { ReactComponent as TenantTracking } from "../assets/tenant_feature_3.svg";
import { ReactComponent as REOwnerPublication } from "../assets/re_owner_feature_1.svg";
import { ReactComponent as REOwnerVerification } from "../assets/re_owner_feature_2.svg";
import { ReactComponent as REOwnerManagement } from "../assets/re_owner_feature_3.svg";
import { ReactComponent as AppDownload } from "../assets/app_download.svg";
import CustomButton from "../components/commons/Button/CustomButton";
import Wave from "../components/commons/Wave";
import InfoSection from "../components/home/InfoSection";
import FeatureSection from "../components/home/FeatureSection";
import { AiOutlineSearch, AiFillHome, HiDownload } from "react-icons/all";
import Footer from "../components/commons/Footer";

const tenantFeatures = [
  {
    logo: <TenantRent className="h-72" />,
    title: "ALQUILER",
    text: "Luego de encontrar tu hogar ideal, podés concretar tu alquiler en pocos y sencillos pasos",
  },
  {
    logo: <TenantManagement className="h-72" />,
    title: "GESTIÓN",
    text: "Gestioná todo lo relacionado a tu alquiler, desde reclamos y pagos hasta la renovación/rescisión de tu contrato",
  },
  {
    logo: <TenantTracking className="h-72" />,
    title: "SEGUIMIENTO",
    text: "Mantenete informado sobre las operaciones de tu alquiler a través de notificaciones personalizadas",
  },
];

const ownerFeatures = [
  {
    logo: <REOwnerPublication className="h-72" />,
    title: "PUBLICACIÓN",
    text: "Publicá tus propiedades y sus características para que todos los usuarios de la plataforma puedan visualizarlas",
  },
  {
    logo: <REOwnerVerification className="h-72 xl:h-72" />,
    title: "VERIFICACIÓN",
    text: "Verificá tu inscripción en AFIP. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis eros sit amet nulla tempus semper",
  },
  {
    logo: <REOwnerManagement className="h-72 xl:h-72" />,
    title: "ORGANIZACIÓN",
    text: "La información de todos tus clientes centralizada y sincronizada en todos tus dispositivos. Lorem ipsum dolor sit amet, consectetur",
  },
];

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 overflow-hidden">
        <div className="container mx-auto px-5 xl:px-10 mt-16 xl:my-40">
          <InfoSection
            logo={<RealtorLogo className="h-80 z-10 xl:h-auto" />}
            title={
              <div>
                Gestionar tu alquiler nunca fue
                <span className="font-bold text-blue-400"> tan fácil</span>
              </div>
            }
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis eros sit amet nulla tempus semper. Nullam tincidunt nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis lectus id libero efficitur luctus."
            reverse={true}
          >
            <div className="w-6/12 mx-auto">
              <CustomButton
                text="COMENZÁ AHORA"
                callback={() => window.location.replace("/login")}
              />
            </div>
          </InfoSection>
        </div>

        <Wave fromColor="#12498A" toColor="#76BBFF" />
      </section>

      {/* Section 2 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
        <div className="container mx-auto px-5 xl:px-10 mt-16 xl:my-40 space-y-32 xl:space-y-60">
          <InfoSection
            logo={<HomeSearchLogo className="h-60 z-10 xl:h-auto" />}
            reverse={false}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sagittis eros sit amet nulla tempus semper. Nullam tincidunt
            nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis
            lectus id libero efficitur luctus."
            title={
              <div>
                Encuentra tu
                <span className="font-bold text-blue-800"> hogar ideal</span>
              </div>
            }
          >
            <div className="xl:flex justify-evenly">
              <div className="w-100 xl:w-4/12">
                <CustomButton text="Publicar mi propiedad" color="alt">
                  <AiFillHome className="text-white" />
                </CustomButton>
              </div>
              <div className="w-100 xl:w-4/12">
                <CustomButton text="Buscar inmuebles" color="alt">
                  <AiOutlineSearch className="text-white" />
                </CustomButton>
              </div>
            </div>
          </InfoSection>
          <InfoSection
            logo={<SecurityLogo className="h-60 z-10 xl:h-auto" />}
            reverse={true}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sagittis eros sit amet nulla tempus semper. Nullam tincidunt
            nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis
            lectus id libero efficitur luctus."
            title={
              <div>
                La <span className="font-bold text-blue-800">seguridad</span> de
                tus datos es nuestra prioridad
              </div>
            }
          >
            <div className="xl:flex justify-evenly">
              <div className="w-100 xl:w-4/12">
                <CustomButton text="Publicar mi propiedad" color="alt">
                  <AiFillHome className="text-white" />
                </CustomButton>
              </div>
              <div className="w-100 xl:w-4/12">
                <CustomButton text="Buscar inmuebles" color="alt">
                  <AiOutlineSearch className="text-white" />
                </CustomButton>
              </div>
            </div>
          </InfoSection>
        </div>
        <Wave fromColor="#18ACFF" toColor="#A7DFFF" />
      </section>

      {/* Section 3 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-7 to-bg-gradient-8 overflow-hidden">
        <div className="container mx-auto px-5 xl:px-10 mt-16 xl:my-40">
          <FeatureSection title="INQUILINO" features={tenantFeatures} />
          <FeatureSection
            title="INMOBILIARIA/PROPIETARIO"
            features={ownerFeatures}
          />
        </div>
        <Wave fromColor="#12498A" toColor="#70C6FF" />
      </section>

      {/* Section 4 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-9 to-bg-gradient-10 overflow-hidden">
        <div className="container mx-auto px-5 xl:px-10 mt-16 xl:my-40">
          <div className="flex flex-col xl:flex-row items-center">
            <AppDownload className="h-96 xl:h-full" />
            <div className="flex flex-col items-center xl:w-6/12 divide-y-2 divide-blue-900 divide-solid">
              <h1 className="text-center text-2xl xl:text-4xl text-blue-900 mb-10">
                Descargá nuestra <span className="font-bold">APP</span> mobile y
                comenzá a disfrutar de una{" "}
                <span className="font-bold">
                  experiencia de alquiler diferente
                </span>
              </h1>
              <div className="w-full py-5 xl:px-40 xl:py-10">
                <CustomButton text="DESCARGAR" color="alt">
                  <HiDownload className="text-white" />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
