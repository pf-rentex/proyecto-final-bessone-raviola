import React from 'react';
import {
    BsInfoCircleFill,
    HiDownload,
    IoClose,
    AiOutlineFileText,
} from 'react-icons/all';

const SecondStep = () => {
    return (
        <div>
            <div className="flex space-x-20 py-5">
                <div className="flex flex-col w-6/12 space-y-5">
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Nombre Completo"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Apellido"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                        placeholder="DNI"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                </div>
                <div className="flex flex-col w-6/12 space-y-5">
                    <input
                        type="date"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Fecha de nacimiento"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <input
                        type="number"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Telefono"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <div className="flex items-center">
                        <p className="text-white font-thin mx-10">
                            Fecha de inicio estimada:
                        </p>

                        <input
                            type="text"
                            className="px-3 py-3 w-2/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Inicio"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <input
                            type="text"
                            className="px-3 py-3 w-2/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Fin"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />

                        <BsInfoCircleFill className="h-6 w-6 text-alt mx-10" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-5">
                <h5 className="text-white font-semibold text-xl">
                    Adjunte 3 garantes
                </h5>
                <div className="flex space-x-2">
                    {/* FILE */}
                    <div className="bg-blue-900 py-2 px-10 rounded shadow-xl">
                        <div className="flex items-center space-x-5">
                            <div className="flex flex-col space-y-3">
                                <p className="text-white">
                                    garante_perez_12305012.pdf
                                </p>
                                <div className="flex space-x-10">
                                    <p className="text-blue-300 font-thin">
                                        216.32 kb
                                    </p>
                                    <p className="text-blue-300 font-thin">
                                        01-08-2015
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-full bg-primary p-2 shadow-xl">
                                <HiDownload className="text-white" />
                            </div>
                            <div className="rounded-full bg-red-600 p-2 shadow-xl">
                                <IoClose className="text-white" />
                            </div>
                        </div>
                    </div>
                    {/* end file  */}
                    <div className="bg-blue-700 py-2 px-10 border-dashed border-2 border-blue-900 rounded shadow-xl flex items-center">
                        <div className="flex items-center space-x-5">
                            <p className="text-white">
                                Haz click para adjuntar archivo
                            </p>
                            <AiOutlineFileText className="text-blue-300 w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondStep;
