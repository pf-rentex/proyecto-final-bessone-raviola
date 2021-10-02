import React from "react";
import { ReactComponent as RealtorLogo } from "../assets/realtor.svg";
import { ReactComponent as HomeSearchLogo } from "../assets/home_search.svg";
import { ReactComponent as SecurityLogo } from "../assets/security.svg";
import CustomButton from "../components/commons/Button/CustomButton";
import Blob from "../components/commons/Blob";
import Wave from "../components/commons/Wave";
import { AiOutlineSearch, AiFillHome } from "react-icons/all";

const Home = () => {
  return (
    <React.Fragment>
      {/* Section 1 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 overflow-hidden">
        <div className="container mx-auto px-5 lg:px-10 mt-16">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:flex lg:w-6/12 lg:justify-center">
              <RealtorLogo className="h-80 z-10 lg:h-auto" />
              <Blob
                size="medium"
                color="#7DC5EE"
                class="hidden lg:block"
                opacity="0.8"
              />
            </div>

            <div className="lg:flex lg:flex-col lg:w-6/12 mt-10 lg:my-auto">
              <h1 className="font-medium text-white text-4xl lg:text-5xl text-center lg:text-left">
                Gestionar tu alquiler nunca fue{" "}
                <span className="font-bold text-primary">tan fácil</span>
              </h1>
              <p className="text-center text-white my-5 lg:text-left lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sagittis eros sit amet nulla tempus semper. Nullam tincidunt
                nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis
                lectus id libero efficitur luctus.
              </p>

              <div className="w-6/12 mx-auto">
                <CustomButton text="COMENZÁ AHORA" />
              </div>
            </div>
          </div>
        </div>

        <Wave fromColor="#12498A" toColor="#76BBFF" />
      </section>

      {/* Section 2 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
        <div className="container mx-auto px-5 lg:px-10 mt-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:flex lg:w-6/12 lg:justify-center">
              <HomeSearchLogo className="h-60 z-10 lg:h-auto" />
              <Blob
                size="medium"
                color="#7DC5EE"
                class="hidden lg:block"
                opacity="0.8"
              />
            </div>

            <div className="lg:flex lg:flex-col lg:w-6/12 mt-10 lg:my-auto">
              <h1 className="font-thin text-blue-700 text-4xl lg:text-5xl text-center lg:text-left">
                Encuentra tu{" "}
                <span className="font-bold text-blue-800">hogar ideal</span>
              </h1>
              <p className="text-center text-white my-5 lg:text-left lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sagittis eros sit amet nulla tempus semper. Nullam tincidunt
                nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis
                lectus id libero efficitur luctus.
              </p>
              <div className="flex justify-evenly">
                <div className="w-100 lg:w-4/12">
                  <CustomButton text="Publicar mi propiedad" color="alt">
                    <AiFillHome className="text-white" />
                  </CustomButton>
                </div>
                <div className="w-100 lg:w-4/12">
                  <CustomButton text="Buscar inmuebles" color="alt">
                    <AiOutlineSearch className="text-white" />
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center mt-60">
            <div className="lg:flex lg:w-6/12 lg:justify-center">
              <SecurityLogo className="h-60 z-10 lg:h-auto" />
              <Blob
                size="medium"
                color="#7DC5EE"
                class="hidden lg:block"
                opacity="0.8"
              />
            </div>

            <div className="lg:flex lg:flex-col lg:w-6/12 mt-10 lg:my-auto">
              <h1 className="font-thin text-blue-700 text-4xl lg:text-5xl text-center lg:text-left">
                La <span className="font-bold text-blue-800">seguridad</span> de
                tus datos es nuestra prioridad
              </h1>
              <p className="text-center text-white my-5 lg:text-left lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sagittis eros sit amet nulla tempus semper. Nullam tincidunt
                nulla ut faucibus tempor. Sed quis rutrum ex. Maecenas quis
                lectus id libero efficitur luctus.
              </p>
              <div className="flex justify-evenly">
                <a href="#" className="text-white my-auto">
                  publicar mi propiedad
                </a>
                <div className="w-6/12 lg:w-4/12">
                  <CustomButton text="Buscar inmuebles" color="alt">
                    <AiOutlineSearch className="text-white" />
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Wave fromColor="#18ACFF" toColor="#A7DFFF" />
      </section>

      {/* Section 3 */}
      <section className="w-full bg-gradient-to-b from-bg-gradient-7 to-bg-gradient-8 overflow-hidden">
        <div className="container mx-auto px-5 lg:px-10 mt-16">
          <h1 className="flex justify-center text-5xl font-extrabold text-blue-900">
            INQUILINO
          </h1>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
