import React from 'react';

const RequestForm = () => {
    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
            <div className="container p-20 mx-auto">
                <div className="flex flex-col w-full">
                    <div className="flex justify-start">
                        <h1 className="text-4xl text-white font-light w-5/12">
                            Solicitar Alquiler
                        </h1>
                        <div className="flex w-7/12 justify-start items-center">
                            <div className="rounded-full border-2 boder-opacity-20 border-primary h-10 w-10 flex items-center justify-center bg-indigo-700 text-white">
                                1
                            </div>
                            <div className="border-b px-5 border-indigo-600 flex items center content-center justify-center self-center my-0 py-0"></div>
                            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-700 text-white">
                                2
                            </div>
                            <div className="border-b px-5 border-indigo-600 flex items center content-center justify-center self-center my-0 py-0"></div>
                            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-700 text-white">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="border-b w-4/12 p-5 border-indigo-600"></div>
                        <h1 className="text-indigo-900 font-semibold">
                            Detalles de la propiedad
                        </h1>
                        <div className="border-b w-4/12 p-5 border-indigo-600"></div>
                    </div>
                </div>

                {/* Step 1 */}
                <div className="flex space-x-20 py-10">
                    <div className="flex flex-col w-6/12">
                        <div className="flex flex-col">
                            <h1 className="text-blue-900 text-3xl font-semibold my-3">
                                Hermoso Chalet
                            </h1>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>

                            <div className="flex my-10">
                                <div>amenitie 1</div>
                                <div>amenitie 2</div>
                                <div>amenitie 3</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-6/12">segunda mitad</div>
                </div>
            </div>
        </section>
    );
};

export default RequestForm;
