import React from 'react';
import { BiSearch, BiPlus } from 'react-icons/bi';
import CustomButton from '../../components/commons/Button/CustomButton';
import CardProperty from '../../components/properties/CardProperty';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
    const navigate = useNavigate();

    const redirectCreateProperty = () => {
        navigate('/create');
    };

    return (
        <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="container">
                <div className="flex justify-center lg:justify-end mb-8 space-x-16">
                    <h1 className="text-white text-5xl font-semibold lg:text-left text-left mr-10">Mis Inmuebles</h1>
                    <div className="relative lg:w-9/12 text-gray-600 focus-within:text-gray-400 pr-4">
                        <span className="absolute inset-y-0 left-0 flex items-center ml-4">
                            <BiSearch className="w-7 h-7" />
                        </span>
                        <input
                            type="search"
                            name="search"
                            className="px-14 py-4 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
                            placeholder="Buscar"
                        />
                    </div>
                </div>
                <div className="mb-4 grid justify-end mr-4">
                    <CustomButton text="Agregar" color="secondary" callback={redirectCreateProperty}>
                        <BiPlus className="w-7 h-7"></BiPlus>
                    </CustomButton>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CardProperty></CardProperty>
                    <CardProperty></CardProperty>
                    <CardProperty></CardProperty>
                    <CardProperty></CardProperty>
                    <CardProperty></CardProperty>
                </div>
            </div>
        </section>
    );
};

export default Properties;
