import React, { useState } from 'react';
import CustomButton from '../../../components/commons/Button/CustomButton';
import { HiArrowCircleRight, HiArrowCircleLeft, RiSendPlane2Fill } from 'react-icons/all';
import FirstStep from '../../../components/rent/request/FirstStep';
import SecondStep from '../../../components/rent/request/SecondStep';
import ThirdStep from '../../../components/rent/request/ThirdStep';
import Summary from '../../../components/rent/request/Summary';
import { connect } from 'react-redux';
import { createRentalRequest } from '../../../actions/rent';

interface IRequestFormProps {
    createRentalRequest: Function;
    isLoading: boolean;
}

const RequestForm = ({ createRentalRequest, isLoading }: IRequestFormProps) => {
    const [steps] = useState<Array<string>>(['Detalles de la propiedad', 'Datos personales', 'Detalles']);
    const [activeStep, setActiveStep] = useState<number>(0);

    const [data, setData] = useState<any>({});

    const [isSummaryOpen, setIsSummaryOpen] = React.useState(false);

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep data={data} onChange={handleDataChange} handleFileDelete={handleFileDelete} />;
            case 2:
                return <ThirdStep />;
            default:
                return <FirstStep />;
        }
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleDataChange = (e: any) => {
        if (e.target.files) {
            setData({
                ...data,
                [e.target.name]:
                    // @ts-ignore
                    data[e.target.name]
                        ? [
                              // @ts-ignore
                              ...data[e.target.name],
                              e.target.files[0],
                          ]
                        : [e.target.files[0]],
            });
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleFileDelete = (arrayName: string, fileName: string) => {
        setData({
            ...data,
            [arrayName]: data[arrayName].filter((file: any) => file.name !== fileName),
        });
    };

    const submitRentalRequest = () => {
        createRentalRequest(data);
    };

    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
            <div className={`container p-20 mx-auto ${isSummaryOpen ? 'filter blur-sm' : ''}`}>
                <div className="flex flex-col w-full">
                    <h1 className="text-4xl text-white font-light flex justify-center xl:justify-start">
                        Solicitar Alquiler
                    </h1>
                    <div className="flex justify-center mt-10 xl:mt-0">
                        <div
                            className={`rounded-full  ${
                                activeStep === 0 ? 'border-2 boder-opacity-20 border-primary' : ''
                            } h-10 w-10 flex items-center justify-center bg-indigo-700 text-white`}
                        >
                            1
                        </div>
                        <div className="border-b px-5 border-indigo-600 flex items center content-center justify-center self-center my-0 py-0"></div>
                        <div
                            className={`rounded-full ${
                                activeStep === 1 ? 'border-2 boder-opacity-20 border-primary' : ''
                            } h-10 w-10 flex items-center justify-center bg-indigo-700 text-white`}
                        >
                            2
                        </div>
                        <div className="border-b px-5 border-indigo-600 flex items center content-center justify-center self-center my-0 py-0"></div>
                        <div
                            className={`rounded-full ${
                                activeStep === 2 ? 'border-2 boder-opacity-20 border-primary' : ''
                            } h-10 w-10 flex items-center justify-center bg-indigo-700 text-white`}
                        >
                            3
                        </div>
                    </div>
                    <div className="flex justify-between py-5">
                        <div className="border-b w-5/12 border-indigo-600 my-auto"></div>
                        <h1 className="text-indigo-900 font-semibold mx-auto text-center">{steps[activeStep]}</h1>
                        <div className="border-b w-5/12 border-indigo-600 my-auto"></div>
                    </div>
                </div>

                {getStepContent(activeStep)}

                {/* Actions */}
                <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-end lg:space-x-5 items-center my-10">
                    <div className="w-full lg:w-2/12 mt-2 lg:mt-0 text-center lg:text-left">
                        {activeStep === 0 ? (
                            <button className="text-white underline">Volver atrás</button>
                        ) : (
                            <CustomButton text="Anterior" color="alt" callback={handleBack}>
                                <HiArrowCircleLeft className="text-red-600" />
                            </CustomButton>
                        )}
                    </div>
                    <div className="w-full lg:w-2/12">
                        {activeStep === 2 ? (
                            <CustomButton
                                text="Enviar solicitud"
                                color="primary"
                                callback={() => setIsSummaryOpen(true)}
                            >
                                <RiSendPlane2Fill className="text-alt" />
                            </CustomButton>
                        ) : (
                            <CustomButton text="Siguiente" color="alt" callback={handleNext}>
                                <HiArrowCircleRight className="text-primary" />
                            </CustomButton>
                        )}
                    </div>
                </div>
            </div>
            <Summary
                isOpen={isSummaryOpen}
                setIsOpen={setIsSummaryOpen}
                submitRentalRequest={submitRentalRequest}
                data={data}
                isLoading={isLoading}
            />
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    isLoading: state.rent.isLoading,
    error: state.error.msg,
});

export default connect(mapStateToProps, { createRentalRequest })(RequestForm);
