import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import CustomButton from '../commons/Button/CustomButton';
import Modal from '../commons/Modal/Modal';
import { RiSendPlane2Fill } from 'react-icons/all';
import { createSchedule } from '../../actions/schedules';
import { connect } from 'react-redux';
import { ISchedule, ScheduleStatus } from '../../reducers/schedules';
import Map from '../commons/Maps/Map';
import React, { useState } from 'react';

interface IVisitProps {
    createSchedule: Function;
    onClose: () => void;
    // schedules: Array<ISchedule>;
    isLoading: boolean;
}

const Visit = ({ createSchedule, onClose, isLoading }: IVisitProps) => {
    const scheduleTimes: { time: string; period: string }[] = [
        { time: '09:00', period: 'AM' },
        {
            time: '10:30',
            period: 'AM',
        },
        { time: '16:00', period: 'PM' },
        { time: '17:30', period: 'PM' },
    ];

    const [selectedSchedule, setSelectedSchedule] = useState(scheduleTimes[0]);

    const [visitData, setVisitData] = useState<ISchedule>({
        propertyId: '619947dd6f77679edc5bd7ec', // Change later
        date: new Date(),
        time: '',
        comments: '',
        status: ScheduleStatus.Pending,
        userId: '6158ee0fbee2d07b0bcdb2f4', // Change later
    });

    const handleChange = (e: any) => {
        setVisitData({ ...visitData, [e.target.name]: e.target.value });
    };

    const selectSchedule = (scheduleTime: { time: string; period: string }) => {
        setSelectedSchedule(scheduleTime);
        setVisitData({
            ...visitData,
            time: `${scheduleTime.time} ${scheduleTime.period}`,
            date: new Date(
                0,
                //date selected from datepicker -> when datepicker library work properly, remove zero above
            ),
        });
    };

    return (
        <Modal
            title="Organizar visita"
            action={{
                text: 'Enviar solicitud',
                callback: () => {
                    createSchedule(visitData);
                },
                icon: <RiSendPlane2Fill className="text-alt" color={'#7bf3ff'} />,
            }}
            loading={isLoading}
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
                                    <p>1 Baño</p>
                                </div>
                            </div>
                            <div>
                                <CustomButton text="Ver mas detalles" color="alt" callback={() => {}} />
                            </div>
                        </div>
                        <div className="hidden md:block flex-1 border-2 mx-2 space-y-6">
                            <Map address="Av. Rivadavia 1456" />
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
                                {scheduleTimes.map((scheduleTime, index) => {
                                    const { time, period } = scheduleTime;
                                    const isSelected = selectedSchedule.time === time;
                                    const classes = `rounded px-3 py-1 m-2 cursor-pointer ${
                                        isSelected ? 'bg-blue-800 shadow-inner-xl' : 'bg-gray-200 shadow-md'
                                    }`;

                                    return (
                                        <div
                                            key={index + time}
                                            className={classes}
                                            onClick={() => selectSchedule(scheduleTime)}
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
                                name="comments"
                                id=""
                                value={visitData.comments}
                                className="bg-gray-200 p-4 rounded w-full h-3/6 max-h-48	"
                                placeholder="Aclaración"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            ></textarea>
                        </div>
                    </div>
                </>
            }
        />
    );
};

const mapStateToProps = (state: any) => ({
    // schedules: state.schedules.schedules,
    isLoading: state.schedules.isLoading,
});

export default connect(mapStateToProps, { createSchedule })(Visit);
