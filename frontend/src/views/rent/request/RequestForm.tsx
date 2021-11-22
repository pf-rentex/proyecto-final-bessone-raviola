import React, { useEffect, useState } from 'react';
import CustomButton from '../../../components/commons/Button/CustomButton';
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/all';
import FirstStep from '../../../components/rent/request/FirstStep';
import SecondStep from '../../../components/rent/request/SecondStep';

const RequestForm = () => {
    const [steps, setSteps] = useState<Array<string>>([
        'Detalles de la propiedad',
        'Solicitud',
        'Solicitud',
    ]);
    const [activeStep, setActiveStep] = useState<number>(0);

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep />;
            case 2:
                return <p>Step 3</p>;
            default:
                return 'desconocido';
        }
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
            <div className="container p-20 mx-auto">
                <div className="flex flex-col w-full">
                    <h1 className="text-4xl text-white font-light w-5/12">
                        Solicitar Alquiler
                    </h1>
                    <div className="flex justify-center">
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
                    <div className="flex justify-between py-5">
                        <div className="border-b w-5/12 border-indigo-600 my-auto"></div>
                        <h1 className="text-indigo-900 font-semibold mx-auto">
                            {steps[activeStep]}
                        </h1>
                        <div className="border-b w-5/12 border-indigo-600 my-auto"></div>
                    </div>
                </div>

                {getStepContent(activeStep)}

                {/* Actions */}
                <div className="flex justify-end space-x-5 items-center my-10">
                    <div className="w-2/12">
                        {activeStep == 0 ? (
                            <a href="#" className="text-white underline">
                                Volver atrás
                            </a>
                        ) : (
                            <CustomButton
                                text="Anterior"
                                color="alt"
                                callback={handleBack}
                            >
                                <HiArrowCircleLeft className="text-red-600" />
                            </CustomButton>
                        )}
                    </div>
                    <div className="w-2/12">
                        <CustomButton
                            text="Siguiente"
                            color="alt"
                            callback={handleNext}
                        >
                            <HiArrowCircleRight className="text-primary" />
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequestForm;
