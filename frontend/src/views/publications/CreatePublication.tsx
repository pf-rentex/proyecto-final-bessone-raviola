import CustomButton from '../../components/commons/Button/CustomButton';
import { GiCancel, AiFillCheckCircle } from 'react-icons/all';
import Attachment from '../../components/commons/Attachment/Attachment';
import { FiUpload } from 'react-icons/fi';

const CreatePublication = () => {
    return (
        <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="container">
                <div className="flex flex-col container">
                    <h1 className="text-4xl mb-4 text-blue-900 font-secondary uppercase font-semibold tracking-wide text-center md:text-left">
                        Crear Publicación
                    </h1>
                </div>
                <span className="flex items-center justify-center space-x-3 my-5">
                    <span className="h-px bg-gray-200 flex-1"></span>
                    <div className="bg-alt rounded px-4">
                        <span className="font-normal text-xl text-gray-100 font-secondary">Información General</span>
                    </div>
                    <span className="h-px bg-gray-200 flex-1"></span>
                </span>
                <div className="flex flex-col lg:flex-row lg:space-x-24 py-10">
                    <div className="flex flex-col lg:w-6/12 space-y-10">
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Titulo"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <select
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Propiedad"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        >
                            <option selected>Seleccione una propiedad</option>
                            <option>Propiedad 1</option>
                            <option>Propiedad 2</option>
                            <option>Propiedad 3</option>
                            <option>Propiedad 4</option>
                            <option>Propiedad 5</option>
                        </select>
                        <input
                            type="number"
                            className="px-3 py-3 lg:w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Monto total"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <select
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Tipo de alquiler"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        >
                            <option selected>Seleccione una tipo de alquiler</option>
                            <option>Temporal</option>
                            <option>Permanente</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:w-6/12 space-y-10 mt-5 lg:mt-0">
                        <select
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Estado de la publicación"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        >
                            <option selected>Seleccione un estado</option>
                            <option>Publicado</option>
                            <option>Pausado</option>
                            <option>Cancelado</option>
                        </select>
                        <div className="flex flex-col space-y-1 xl:space-y-0">
                            <p className="text-white font-thin text-center w-1/4 xl:text-left text-2xl mb-4">Fotos:</p>
                            <Attachment
                                name="Foto_Frente.jpg"
                                size="216.32Kb"
                                attachedDate="21/07/2022"
                                handleDelete={() => {}}
                            />
                            <br></br>
                            <Attachment
                                name="Foto_Cocina.jpg"
                                size="246.35Kb"
                                attachedDate="21/07/2022"
                                handleDelete={() => {}}
                            />
                            <div className="w-full xl:w-2/12">
                                <CustomButton text="Adjuntar Foto">
                                    <FiUpload className="text-white" />
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:space-x-52 w-full justify-center">
                    <div className="xl:justify-start">
                        <CustomButton text="Cancelar" color="alt">
                            <GiCancel className="w-6 h-6" fill="#ef4444"></GiCancel>
                        </CustomButton>
                    </div>

                    <div className="xl:justify-end">
                        <CustomButton text="Guardar" color="alt">
                            <AiFillCheckCircle className="w-6 h-6" fill="#84cc16"></AiFillCheckCircle>
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatePublication;
