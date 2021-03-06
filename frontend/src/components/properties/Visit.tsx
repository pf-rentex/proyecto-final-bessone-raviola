import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import CustomButton from '../commons/Button/CustomButton';
import Modal from '../commons/Modal/Modal';
import { RiSendPlane2Fill } from 'react-icons/all';
import React, { useState } from 'react';

const Visit = ({ onClose }: { onClose: () => void }) => {
    const schedules: { time: string; period: string }[] = [
        { time: '09:00', period: 'AM' },
        {
            time: '10:30',
            period: 'AM',
        },
        { time: '16:00', period: 'PM' },
        { time: '17:30', period: 'PM' },
    ];

    const [selectedSchedule, setSelectedSchedule] = useState(schedules[0]);

    const selectSchedule = (schedule: { time: string; period: string }) => {
        setSelectedSchedule(schedule);
    };

    return (
        <Modal
            title="Organizar visita"
            action={{
                text: 'Enviar solicitud',
                callback: () => {},
                icon: <RiSendPlane2Fill className="text-alt" color={'#7bf3ff'} />,
            }}
            onClose={onClose}
            content={
                <>
                    <div className="px-3 py-6 flex items-center border-b">
                        <div className="flex-1 flex-col  space-y-6 mx-2">
                            <p>
                                <b>Ciudad:</b> San Francisco
                            </p>
                            <p>
                                <b>Domicilio:</b> General Paz
                            </p>
                            <div className="flex justify-center py-3">
                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                    <Dimensions />
                                    <p>45m</p>
                                </div>
                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                    <Bedrooms />
                                    <p>2 Dormitorios</p>
                                </div>
                                <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                                    <Bathrooms />
                                    <p>1 Ba??o</p>
                                </div>
                            </div>
                            <div>
                                <CustomButton text="Ver mas detalles" color="alt" callback={() => {}} />
                            </div>
                        </div>
                        <div className="hidden md:block flex-1 border-2 mx-2 space-y-6">
                            <img
                                className="h-56 w-full"
                                alt="map"
                                src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg"
                            />
                        </div>
                    </div>

                    <div className="flex-1 md:hidden border-2 mx-2 space-y-6">
                        <img
                            className="h-56 w-full"
                            alt="map"
                            src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg"
                        />
                    </div>

                    <div className="flex items-start justify-between p-3">
                        <h3 className="text-gray-900 text-md lg:text-lg font-semibold dark:text-white">
                            Seleccionar fecha y hora
                        </h3>
                    </div>
                    <div className="px-4 flex flex-col md:flex-row justify-center">
                        <div className="mx-3 hidden md:flex">
                            <div inline-datepicker="true" className="flex"></div>
                        </div>

                        <input type="date" className="block md:hidden bg-gray-100 rounded p-2 my-2" />

                        <div className="flex flex-col mx-3">
                            <h3 className="font-semibold">Horarios disponibles</h3>
                            <div className="my-6 px-3">
                                {schedules.map((schedule, index) => {
                                    const { time, period } = schedule;
                                    const isSelected = selectedSchedule.time === time;
                                    const classes = `rounded px-3 py-1 m-2 cursor-pointer ${
                                        isSelected ? 'bg-blue-800 shadow-inner-xl' : 'bg-gray-200 shadow-md'
                                    }`;

                                    return (
                                        <div
                                            key={index + time}
                                            className={classes}
                                            onClick={() => selectSchedule(schedule)}
                                        >
                                            <div className={`text-lg text-center ${isSelected ? 'text-gray-100' : ''}`}>
                                                {time}
                                                <b>{period}</b>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex-1 mx-3 ">
                            <textarea
                                name=""
                                id=""
                                className="bg-gray-200 p-4 rounded w-full h-3/6 max-h-48	"
                                placeholder="Aclaraci??n"
                            ></textarea>
                        </div>
                    </div>
                </>
            }
        />
    );
};

export default Visit;
