import React from 'react';
import { MdLocationOn } from 'react-icons/all';
import { ReactComponent as Dimensions } from '../../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../../assets/amenities_bathrooms.svg';
import CustomButton from '../../commons/Button/CustomButton';
import { RiSendPlane2Fill } from 'react-icons/all';

interface ISummaryProps {
    isOpen?: boolean;
    setIsOpen?: Function;
}

export default function Summary({
    isOpen = false,
    setIsOpen = () => null,
}: ISummaryProps) {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto lg:max-w-4xl max-h-screen">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        Solicitar Alquiler
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <h1 className="text-center font-semibold mb-5">
                                        PROPIEDAD
                                    </h1>
                                    <div className="flex flex-col md:flex-row items-center mb-5">
                                        <div className="flex flex-col w-6/12 space-y-5">
                                            <div className="w-full justify-center md:justify-start flex space-x-2 items-center">
                                                <MdLocationOn color="#FF5050" />
                                                <p>San Francisco Córdoba</p>
                                            </div>
                                            <p className="flex justify-center md:justify-start">
                                                Domicilio: Av. Siempreviva 123
                                            </p>
                                            <div className="flex w-full justify-center md:flex-col">
                                                <div className="flex flex-col md:flex-row items-center space-x-2 p-2">
                                                    <Dimensions />
                                                    <p>45m</p>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center space-x-2 p-2">
                                                    <Bedrooms />
                                                    <p>2 Dormitorios</p>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center space-x-2 p-2">
                                                    <Bathrooms />
                                                    <p>1 Baño</p>
                                                </div>
                                            </div>
                                            <div className="flex space-x-3 justify-center md:justify-start items-center">
                                                <p className="font-semibold">
                                                    Detalle:
                                                </p>
                                                <p className="text-xl font-bold text-primary">
                                                    $23.450
                                                </p>
                                                <p> + </p>
                                                <p className="text-xl font-bold text-primary">
                                                    $3.000
                                                </p>
                                                <p className="font-semibold">
                                                    Expensas
                                                </p>
                                            </div>
                                            <div className="flex space-x-3 justify-center md:justify-start items-center">
                                                <p className="font-semibold">
                                                    Monto total:
                                                </p>
                                                <p className="text-xl font-bold text-green-400">
                                                    $26.450
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="p-5">
                                                <img
                                                    className="h-56 w-full"
                                                    alt="map"
                                                    src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <h1 className="text-center font-semibold mb-5">
                                            SOLICITUD
                                        </h1>
                                        <div className="flex flex-col items-center md:flex-row md:space-x-10">
                                            <div className="flex flex-col sm:w-full md:w-5/12 space-y-3">
                                                <input
                                                    type="text"
                                                    className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Nombre"
                                                    style={{
                                                        transition:
                                                            'all 0.15s ease 0s',
                                                    }}
                                                    disabled
                                                />
                                                <input
                                                    type="text"
                                                    className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Email"
                                                    style={{
                                                        transition:
                                                            'all 0.15s ease 0s',
                                                    }}
                                                    disabled
                                                />
                                                <input
                                                    type="date"
                                                    className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Fecha de nacimiento"
                                                    style={{
                                                        transition:
                                                            'all 0.15s ease 0s',
                                                    }}
                                                    disabled
                                                />
                                            </div>
                                            <div className="flex flex-col sm:w-full mt-3 md:mt-0 md:w-7/12 space-y-3">
                                                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center">
                                                    <p className="px-5">
                                                        PERÍODO:
                                                    </p>
                                                    <input
                                                        type="date"
                                                        className="px-3 py-2  placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline sm:w-5/12"
                                                        placeholder="Fecha de inicio"
                                                        style={{
                                                            transition:
                                                                'all 0.15s ease 0s',
                                                        }}
                                                        disabled
                                                    />
                                                    <input
                                                        type="date"
                                                        className="px-3 py-2  placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline sm:w-5/12"
                                                        placeholder="Fecha de fin"
                                                        style={{
                                                            transition:
                                                                'all 0.15s ease 0s',
                                                        }}
                                                        disabled
                                                    />
                                                </div>

                                                <input
                                                    type="text"
                                                    className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Otro dato"
                                                    style={{
                                                        transition:
                                                            'all 0.15s ease 0s',
                                                    }}
                                                    disabled
                                                />
                                                <input
                                                    type="text"
                                                    className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Otro dato"
                                                    style={{
                                                        transition:
                                                            'all 0.15s ease 0s',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        CANCELAR
                                    </button>
                                    <div>
                                        <CustomButton
                                            text="Enviar solicitud"
                                            color="primary"
                                        >
                                            <RiSendPlane2Fill className="text-alt" />
                                        </CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
