import React from 'react';
import { BsInfoCircleFill, AiOutlineFileText } from 'react-icons/all';
import Attachment from '../../commons/Attachment/Attachment';
import AttachmentRequest from '../../commons/Attachment/AttachmentRequest';

const SecondStep = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 py-5">
                <div className="flex flex-col lg:w-6/12 space-y-5">
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
                        className="px-3 py-3 lg:w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                        placeholder="DNI"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                </div>
                <div className="flex flex-col lg:w-6/12 space-y-5 mt-5 lg:mt-0">
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
                    <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row items-center">
                        <p className="text-white font-thin text-center w-full xl:text-left">
                            Fecha de inicio estimada:
                        </p>
                        <div className="flex w-full items-center">
                            <div className="flex w-full flex-col xl:flex-row space-y-3 xl:space-y-0 xl:justify-center">
                                <input
                                    type="date"
                                    className="px-3 py-3 xl:w-6/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                    placeholder="Inicio"
                                    style={{ transition: 'all 0.15s ease 0s' }}
                                />
                                <input
                                    type="date"
                                    className="px-3 py-3 xl:w-6/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                    placeholder="Fin"
                                    style={{ transition: 'all 0.15s ease 0s' }}
                                />
                            </div>

                            <BsInfoCircleFill className="h-6 w-6 text-alt mx-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-5">
                <h5 className="text-white font-semibold text-xl">
                    Adjunte 3 garantes
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    <Attachment
                        name="garante_perez_12305012.pdf"
                        size="216.32 kb"
                        attachedDate="01-08-2015"
                    />

                    <AttachmentRequest />
                </div>
                <h5 className="text-white font-semibold text-xl">
                    Adjunte foto de su DNI
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    <AttachmentRequest />
                </div>
                <h5 className="text-white font-semibold text-xl">
                    Adjunte Recibos de sueldo
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    <AttachmentRequest />
                </div>
            </div>
        </div>
    );
};

export default SecondStep;
