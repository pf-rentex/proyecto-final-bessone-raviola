import React from 'react';
import {
    BiPencil,
    BiCalendarEdit,
    FaCheckCircle,
    RiCloseCircleFill,
    IoArrowBackCircle,
    IoArrowBack,
    IoArrowForward,
    BsLightningFill,
} from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';

const ComplaintDetails = () => {
    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <IoArrowBackCircle className="w-14 h-14 text-alt my-5 cursor-pointer" />
            <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl px-10 py-14">
                <div className="flex flex-col mb-10">
                    <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
                        <div className="rounded-full bg-alt p-5">
                            <BsLightningFill className="text-white w-5 h-5 md:w-14 md:h-14" />
                        </div>
                        <div className="flex items-center text-center space-x-5">
                            <h1 className="text-white text-3xl font-bold">
                                Falla toma de corriente
                            </h1>
                            <div className="rounded-full bg-alt p-2">
                                <BiPencil className="text-white w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 md:mt-0 md:flex-row md:px-28">
                        <div className="flex flex-col space-y-3 w-full xl:w-4/12 text-white">
                            <p>Categoría: Electricidad</p>
                            <p>
                                Estado:{' '}
                                <span className="text-yellow-300 font-bold">
                                    EN CURSO
                                </span>
                            </p>
                            <p>Fecha de carga: 07/01/2022</p>
                            <p>Fecha de visita programada: 07/01/2022</p>
                            <div className="w-full lg:w-8/12">
                                <CustomButton
                                    text="Reprogramar visita"
                                    callback={() => {}}
                                    color="alt"
                                >
                                    <BiCalendarEdit />
                                </CustomButton>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 w-full xl:w-3/12 text-white">
                            <p>Domicilio propiedad: Belgrano 2624</p>
                            <p>Técnico responsable: Claudio hernán bessone</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:px-28 mb-10">
                    <div className="flex space-x-5 mb-5">
                        <h1 className="text-white text-3xl font-bold">
                            Descripción
                        </h1>
                        <div className="rounded-full bg-alt p-2">
                            <BiPencil className="text-white w-5 h-5" />
                        </div>
                    </div>
                    <div className="w-full md:w-8/12">
                        <p className="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris volutpat lacinia dui, id porta tortor.
                            Praesent eu faucibus odio, ut tempus dui.
                            Suspendisse vehicula, erat eleifend finibus
                            tristique, est lacus placerat ante, sed tempor erat
                            metus a tellus. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc ullamcorper neque
                            sit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row w-full md:w-6/12 sm:space-x-5 sm:px-20 md:px-28">
                    <CustomButton
                        text="Resolver"
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
            <div className="flex w-full justify-end my-5">
                <div className="flex flex-col lg:flex-row w-full lg:w-4/12 lg:space-x-3">
                    <CustomButton
                        text="Reclamo anterior"
                        callback={() => {}}
                        color="alt"
                    >
                        <IoArrowBack className="text-white" />
                    </CustomButton>
                    <CustomButton
                        text="Siguiente reclamo"
                        callback={() => {}}
                        color="alt"
                    >
                        <IoArrowForward className="text-white" />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default ComplaintDetails;
