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
    <div className="my-20 lg:my-40 lg:space-y-36">
      <h1 className="flex justify-center text-2xl lg:text-5xl font-extrabold text-blue-900 mb-10">
        {title}
      </h1>
      <div className="flex flex-col space-y-24 lg:flex-row lg:space-y-0 lg:space-x-24">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              {feature.logo}
              <div>
                <h1 className="text-blue-800 text-4xl lg:text-5xl font-thin text-center tracking-widest my-5">
                  {feature.title}
                </h1>
                <p className="text-white text-center text-2xl lg:text-2xl font-thin">
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
