import React from 'react';
import { MdLocationOn } from 'react-icons/all';
import { ReactComponent as Dimensions } from '../../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../../assets/amenities_bathrooms.svg';

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
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
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
                                    <h1 className="text-center font-semibold">
                                        PROPIEDAD
                                    </h1>
                                    <div className="flex">
                                        <div className="flex flex-col w-6/12 space-y-5">
                                            <div className="w-full flex space-x-2 items-center">
                                                <MdLocationOn color="#FF5050" />
                                                <p>San Francisco Córdoba</p>
                                            </div>
                                            <p>
                                                Domicilio: Av. Siempreviva 123
                                            </p>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                                    <Dimensions />
                                                    <p>45m</p>
                                                </div>
                                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                                    <Bedrooms />
                                                    <p>2 Dormitorios</p>
                                                </div>
                                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                                    <Bathrooms />
                                                    <p>1 Baño</p>
                                                </div>
                                            </div>
                                            <div className="flex space-x-3 items-center">
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
                                            <div className="flex space-x-3 items-center">
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
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        p
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Save Changes
                                    </button>
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
