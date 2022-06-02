import CustomButton from '../../components/commons/Button/CustomButton';
import { GiCancel, AiFillCheckCircle } from 'react-icons/all';

const CreateProperty = () => {
    return (
        <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="container">
                <div className="flex flex-col container">
                    <h1 className="text-4xl mb-4 text-blue-900 font-secondary uppercase font-semibold tracking-wide text-center md:text-left">
                        Crear Propiedad
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
                            placeholder="Domicilio"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <textarea
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Descripción"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <input
                            type="number"
                            className="px-3 py-3 lg:w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Precio"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <input
                            type="number"
                            className="px-3 py-3 lg:w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Precio de Expensas"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="flex flex-col lg:w-6/12 space-y-10 mt-5 lg:mt-0">
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Provincia"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Ciudad"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <div className="flex flex-col space-y-1 xl:space-y-0">
                            <p className="text-white font-thin text-center w-1/4 xl:text-left text-2xl mb-4">
                                Caracteristicas:
                            </p>
                            <div className="flex w-full space-y-3 xl:space-y-0 mb-2">
                                <input
                                    type="text"
                                    className="px-3 py-3 w-full h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                    placeholder="Nueva caracteristica"
                                    style={{ transition: 'all 0.15s ease 0s' }}
                                />
                            </div>
                            <div className="w-36">
                                <CustomButton color="alt" text="Agregar" />
                            </div>
                        </div>
                        <div className="ml-12">
                            <li>Cocina con calefactor</li>
                            <li>Amplio Garage</li>
                            <li>Cocina / Comedor amplio</li>
                        </div>
                        <div className="flex flex-col space-y-3 xl:space-y-0">
                            <p className="text-white font-thin text-center w-1/4 xl:text-left text-2xl mb-6">
                                Comodidades:
                            </p>
                            <label className="text-xl items-center">
                                <input type="checkbox" id="cbox1" className="rounded w-6 h-6 bg-gray-200" />
                                {'  '}
                                Acepta mascotas
                            </label>
                            <label className="text-xl items-center">
                                <input type="checkbox" id="cbox1" className="rounded w-6 h-6 bg-gray-200" />
                                {'  '}1 baño
                            </label>
                            <label className="text-xl items-center">
                                <input type="checkbox" id="cbox1" className="rounded w-6 h-6 bg-gray-200" />
                                {'  '}2 Dormitorios
                            </label>
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

export default CreateProperty;
