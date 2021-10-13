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
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      }  items-center`}
    >
      <div className="xl:flex xl:w-6/12 xl:justify-center">
        {logo}
        <Blob
          size="medium"
          color="#7DC5EE"
          class="hidden xl:block"
          opacity="0.4"
        />
      </div>
      <div className="xl:flex xl:flex-col xl:w-6/12 mt-10 xl:my-auto">
        <h1 className="font-medium text-white text-4xl xl:text-5xl text-center xl:text-left">
          {title}
        </h1>
        <p className="text-center text-white my-5 xl:text-left xl:text-xl">
          {text}
        </p>
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
