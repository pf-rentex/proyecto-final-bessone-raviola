import React from 'react';
import {
    FaCheckCircle,
    RiCloseCircleFill,
    IoArrowBackCircle,
    BsFillDropletFill,
    BsFillGearFill,
    BsLightningFill,
} from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';

const CreateComplaint = () => {
    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <IoArrowBackCircle className="w-14 h-14 text-alt my-5 cursor-pointer" />
            <h1 className="text-white text-3xl font-bold p-5">Nuevo Reclamo</h1>
            <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl px-10 py-14">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Título
                        </h1>
                        <input
                            type="text"
                            className="px-3 pt-3 w-full md:w-8/12 border-b-2 border-primary bg-transparent text-white rounded text-lg font-medium shadow focus:outline-none focus:shadow-outline"
                            style={{
                                transition: 'all 0.15s ease 0s',
                            }}
                            name="title"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Categoría
                        </h1>
                        <div className="flex justify-center md:justify-start space-x-10">
                            <div className="flex flex-col items-center space-y-2 cursor-pointer focus:text-black">
                                <div
                                    className="rounded-full bg-alt p-5 w-14 h-14 sm:w-20 sm:h-20 focus:bg-primary"
                                    tabIndex={0}
                                >
                                    <BsLightningFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Electricidad
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 cursor-pointer">
                                <div
                                    className="rounded-full bg-alt p-5 w-14 h-14 sm:w-20 sm:h-20 focus:bg-primary"
                                    tabIndex={0}
                                >
                                    <BsFillDropletFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Plomería
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 cursor-pointer">
                                <div
                                    className="rounded-full bg-alt p-5 w-14 h-14 sm:w-20 sm:h-20 focus:bg-primary"
                                    tabIndex={0}
                                >
                                    <BsFillGearFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Infraestructura
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Fecha de programación de visita
                        </h1>
                        <input
                            type="date"
                            className="px-3 py-3 w-full md:w-4/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Fecha de nacimiento"
                            name="date"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Descripción
                        </h1>
                        <textarea
                            className="px-3 py-3 resize-none placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            rows={4}
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="flex flex-col md:flex-row w-full lg:w-4/12 md:space-x-5">
                            <CustomButton
                                text="Confirmar"
                                callback={() => {}}
                                color="alt"
                            >
                                <FaCheckCircle className="text-green-500" />
                            </CustomButton>
                            <CustomButton
                                text="Cancelar"
                                callback={() => {}}
                                color="alt"
                            >
                                <RiCloseCircleFill className="text-red-500" />
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateComplaint;
