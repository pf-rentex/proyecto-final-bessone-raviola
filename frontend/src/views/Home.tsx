import React from "react";
import { ReactComponent as RealtorLogo } from "../assets/realtor.svg";
import CustomButton from "../components/commons/Button/CustomButton";
import Blob from "../components/commons/Blob";

const Home = () => {
  return (
    <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row-reverse items-center h-full">
          <div className="lg:flex lg:w-6/12 lg:justify-center">
            <RealtorLogo className="z-10" />
            <Blob size="medium" color="#7DC5EE" class="mx-auto" opacity="0.8" />
          </div>

          <div className="lg:flex lg:flex-col lg:w-6/12">
            <h1 className="font-medium text-white text-4xl lg:text-5xl text-center">
              Gestionar tu alquiler nunca fue{" "}
              <span className="font-bold text-primary">tan fácil</span>
            </h1>
            <p className="text-center text-white my-5 lg:text-left lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sagittis eros sit amet nulla tempus semper. Nullam tincidunt nulla
              ut faucibus tempor. Sed quis rutrum ex. Maecenas quis lectus id
              libero efficitur luctus.
            </p>
            <div className="lg:w-6/12 lg:self-center">
              <CustomButton text="COMENZÁ AHORA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
