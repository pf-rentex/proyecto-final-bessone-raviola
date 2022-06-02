import React from 'react';
import { BiSearch, BiPlus } from 'react-icons/bi';
import CustomButton from '../../components/commons/Button/CustomButton';
import PropertyCard from '../../components/properties/PropertyCard';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
    const navigate = useNavigate();

    const redirectCreateProperty = () => {
        navigate('create');
    };

    return (
        <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="flex justify-between items-center mb-4 space-y-4">
                <h1 className="text-white text-xl md:text-4xl font-semibold ">Mis Inmuebles</h1>
                <div className="flex self-end">
                    <CustomButton text="Agregar" color="alt" callback={redirectCreateProperty}>
                        <BiPlus className="w-7 h-7" color="#7bf3ff"></BiPlus>
                    </CustomButton>
                </div>
            </div>

            <div className="flex w-full p-4 my-2 ">
                <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearch className="w-7 h-7" />
                    </span>
                    <input
                        type="search"
                        name="search"
                        className="px-10 py-3 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
                        placeholder="Buscar"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PropertyCard></PropertyCard>
                <PropertyCard></PropertyCard>
                <PropertyCard></PropertyCard>
                <PropertyCard></PropertyCard>
                <PropertyCard></PropertyCard>
            </div>
        </section>
    );
};

export default Properties;
