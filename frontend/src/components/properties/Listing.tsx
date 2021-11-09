import React from 'react';
import CustomButton from '../commons/Button/CustomButton';
import { ReactComponent as RealEstateLogo } from '../../assets/real_estate.svg';
import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import { MdLocationOn } from 'react-icons/all';

const Listing = () => {
    return (
        <section className="bg-white m-5 rounded">
            <div className="flex">
                <div className="w-3/12">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_ceHb4jLPBNjhubi9vguyXxpq0sNV9bhA&usqp=CAU"
                        className="rounded-l h-full"
                    />
                </div>
                <div className="w-9/12 p-5">
                    <div className="flex items-center">
                        <div className="w-4/12">
                            <h1 className="text-2xl font-medium">
                                Hermoso chalet
                            </h1>
                        </div>
                        <div className="w-4/12 flex space-x-2 font-medium items-center">
                            <MdLocationOn color="#FF5050" />
                            <p>San Francisco, Córdoba</p>
                        </div>
                        <div className="flex justify-end w-4/12">
                            <p className="text-primary font-bold">
                                $651.100.000
                            </p>
                        </div>
                    </div>
                    <div className="w-8/12">
                        <p className="font-thin my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="flex space-x-5 border-t-2 mt-5 w-6/12">
                            <div className="flex space-x-2 p-2">
                                <Dimensions />
                                <p>45m</p>
                            </div>
                            <div className="flex space-x-2 p-2">
                                <Bedrooms />
                                <p>2 Dormitorios</p>
                            </div>
                            <div className="flex space-x-2 p-2">
                                <Bathrooms />
                                <p>1 Baño</p>
                            </div>
                        </div>
                        <div className="flex space-x-5 w-6/12 justify-end">
                            <div>
                                <CustomButton
                                    text="Organizar visita"
                                    outlined={true}
                                />
                            </div>
                            <div>
                                <CustomButton
                                    text="Solicitar alquiler"
                                    color="alt"
                                >
                                    <RealEstateLogo className="w-5 h-5" />
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Listing;
