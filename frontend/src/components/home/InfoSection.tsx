import React from 'react';
import Blob from '../commons/Blob';
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
                reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
            }  items-center`}
        >
            <div className="xl:flex xl:w-6/12 xl:justify-center">
                {logo}
                <Blob
                    size="large"
                    color={'#317aa3'}
                    class="hidden xl:block -mt-20"
                    opacity="0.3"
                />
            </div>
            <div className="flex flex-col xl:w-6/12 xl:my-auto">
                <h1 className="font-medium text-white text-4xl xl:text-5xl text-center xl:text-left">
                    {title}
                </h1>
                <p className="text-center text-white my-10 xl:text-left xl:text-xl tracking-wider">
                    {text}
                </p>
                {children}
            </div>
        </div>
    );
};

export default InfoSection;
