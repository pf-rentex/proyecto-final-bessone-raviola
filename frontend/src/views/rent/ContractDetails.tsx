import React from 'react';
import CustomButton from '../../components/commons/Button/CustomButton';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { HiOutlineRefresh } from 'react-icons/hi';
import { BiPencil } from 'react-icons/bi';
import Attachment from '../../components/commons/Attachment/Attachment';

const ContractDetails = () => {
    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="flex flex-col space-y-3">
                <div className="flex">
                    <h1 className="text-white font-bold w-10/12">
                        Contrato 123456
                    </h1>
                    <div className="w-full lg:w-2/12">
                        <CustomButton text="Descargar contrato" color="alt">
                            <AiOutlineDownload className="text-white font-bold" />
                        </CustomButton>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center bg-alt p-2 rounded ">
                        <h1 className="text-white font-semibold px-3">
                            Información del inquilino
                        </h1>
                        <div className="rounded-full bg-primary p-1 cursor-pointer">
                            <BiPencil className="text-alt w-4 h-4" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-bg-gradient-2 to bg-gradient-3 p-10 rounded">
                        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row">
                            <div className="flex flex-col space-y-5 w-full md:w-6/12">
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Nombre completo:{' '}
                                    </span>
                                    Roberto carlos
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Teléfono:{' '}
                                    </span>
                                    3564561314
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">DNI: </span>
                                    36680567
                                </h5>
                            </div>
                            <div className="flex flex-col space-y-5 w-full md:w-6/12">
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Fecha de nacimiento:{' '}
                                    </span>
                                    30/04/1992
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Mail:{' '}
                                    </span>
                                    roberto.carlos@robertocarlos.com
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Garantías:{' '}
                                    </span>
                                    garantia 1
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex bg-alt p-2 rounded ">
                        <h1 className="text-white font-semibold px-3">
                            Información del contrato
                        </h1>
                        <div className="rounded-full bg-primary p-1 cursor-pointer">
                            <BiPencil className="text-alt w-4 h-4" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-bg-gradient-2 to bg-gradient-3 p-10 rounded">
                        <div className="flex items-center justify-center mb-10">
                            <div className="hidden md:block md:flex-grow md:border-t-2 md:border-alt md:mx-5"></div>
                            <div className="bg-alt rounded p-1 px-3">
                                <h1 className="text-white text-xs md:text-base">
                                    INFORMACIÓN GENERAL
                                </h1>
                            </div>
                            <div className="hidden md:block md:flex-grow md:border-t-2 md:border-alt md:mx-5"></div>
                        </div>
                        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0">
                            <div className="flex flex-col space-y-5 w-full md:w-6/12">
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Tarifa mensual:{' '}
                                    </span>
                                    $14.200
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Fecha de inicio:{' '}
                                    </span>
                                    30/03/2022
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Fecha de vencimiento:{' '}
                                    </span>
                                    30/03/2025
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Tiempo restante:{' '}
                                    </span>
                                    3 Meses
                                </h5>
                            </div>
                            <div className="flex flex-col space-y-5 w-full md:w-6/12">
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Expensas:{' '}
                                    </span>
                                    $3.000
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Dirección:{' '}
                                    </span>
                                    Belgrano 2624
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Tipo de alquiler:{' '}
                                    </span>
                                    Permanente
                                </h5>
                                <h5 className="text-white">
                                    <span className="font-semibold">
                                        Estado:{' '}
                                    </span>
                                    Activo
                                </h5>
                            </div>
                        </div>
                        <div className="flex items-center justify-center m-10">
                            <div className="hidden md:block md:flex-grow md:border-t-2 md:border-alt md:mx-5"></div>
                            <div className="bg-alt rounded p-1 px-3">
                                <h1 className="text-white text-xs md:text-base">
                                    CONTRATO DE LOCACIÓN
                                </h1>
                            </div>
                            <div className="hidden md:block md:flex-grow md:border-t-2 md:border-alt md:mx-5"></div>
                        </div>
                        <div className="flex flex-col space-y-3 xl:flex-row xl:space-x-3 xl:space-y-0 w-full">
                            <h5 className="text-white font-semibold">
                                Contrato digital:
                            </h5>
                            <Attachment
                                name="Locación_gral_paz.pdf"
                                size="216.32Kb"
                                attachedDate="26/03/2022"
                                handleDelete={() => {}}
                            />
                            <Attachment
                                name="Gral_paz_renovación.pdf"
                                size="246.35Kb"
                                attachedDate="26/03/2022"
                                handleDelete={() => {}}
                            />
                            <div className="w-full xl:w-2/12">
                                <CustomButton text="Subir archivo">
                                    <FiUpload className="text-white" />
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end space-x-5">
                <div className="w-full lg:w-2/12">
                    <CustomButton text="Renovar contrato" color="alt">
                        <HiOutlineRefresh className="text-primary" />
                    </CustomButton>
                </div>
                <div className="w-full lg:w-2/12">
                    <CustomButton text="Rescindir contrato" color="alt">
                        <RiCloseCircleFill className="text-red-500" />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default ContractDetails;
