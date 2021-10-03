import React from "react";
import Blob from "../commons/Blob";
interface IInfoSection {
  logo: React.ReactNode;
  reverse: Boolean;
  children?: React.ReactNode;
  title: React.ReactNode;
  text: string;
}

const InfoSection = ({
  logo,
  reverse = false,
  children = <></>,
  title,
  text,
}: IInfoSection) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }  items-center`}
    >
      <div className="lg:flex lg:w-6/12 lg:justify-center">
        {logo}
        <Blob
          size="medium"
          color="#7DC5EE"
          class="hidden lg:block"
          opacity="0.8"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:w-6/12 mt-10 lg:my-auto">
        <h1 className="font-medium text-white text-4xl lg:text-5xl text-center lg:text-left">
          {title}
        </h1>
        <p className="text-center text-white my-5 lg:text-left lg:text-xl">
          {text}
        </p>
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
