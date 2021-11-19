import React from 'react';
import { ReactComponent as Dimensions } from '../../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../../assets/amenities_bathrooms.svg';

const FirstStep = () => {
    return (
        <div className="flex space-x-20 py-5">
            <div className="flex flex-col w-6/12">
                <div className="flex flex-col">
                    <h1 className="text-blue-900 text-3xl font-semibold mb-3">
                        Hermoso Chalet
                    </h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>

                    <div className="flex my-10 space-x-20">
                        <div className="flex flex-col items-center space-y-2">
                            <Dimensions className="w-8 h-8" />
                            <p className="text-white">45m2</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Bathrooms className="w-8 h-8" />
                            <p className="text-white">1 Baño</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Bedrooms className="w-8 h-8" />
                            <p className="text-white">2 Dormitorios</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-white font-semibold">
                            Características:
                        </h5>
                        <p className="text-white">Característica 1</p>
                        <p className="text-white">Característica 2</p>
                        <p className="text-white">Característica 3</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-6/12">
                <div className="space-y-2 mb-10">
                    <h5 className="text-white">
                        Ubicación: Av. Rivadavia 1492
                    </h5>
                    <img
                        className="h-56 w-full"
                        alt="map"
                        src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg"
                    />
                </div>
                <div className="space-y-2">
                    <h5 className="text-white">Galería de fotos</h5>
                    <img
                        className="h-56 w-full"
                        src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstStep;
