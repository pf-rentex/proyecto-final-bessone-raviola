import React from "react";

interface IFeatureSectionProps {
  title: string;
  features: Feature[];
}

interface Feature {
  logo: React.ReactNode;
  title: string;
  text: string;
}

const FeatureSection = ({ title, features }: IFeatureSectionProps) => {
  return (
    <div className="my-20 xl:my-40 xl:space-y-36">
      <h1 className="flex justify-center text-2xl xl:text-5xl font-extrabold text-blue-900 mb-10">
        {title}
      </h1>
      <div className="flex flex-col space-y-24 xl:flex-row xl:space-y-0 xl:space-x-24">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              {feature.logo}
              <div>
                <h1 className="text-blue-800 text-4xl xl:text-5xl font-thin text-center tracking-widest my-5">
                  {feature.title}
                </h1>
                <p className="text-white text-center text-2xl xl:text-2xl font-thin">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
