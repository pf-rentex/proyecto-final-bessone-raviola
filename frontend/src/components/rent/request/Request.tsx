import React from 'react';
import {
    AiOutlineHome,
    FaBuilding,
    ImCheckmark,
    ImCross,
} from 'react-icons/all';
import CustomButton from '../../commons/Button/CustomButton';
import { IRentalRequest } from '../../../views/rent/request/Requests';

const Request = ({ type, address, tenant, seeDetailsUrl }: IRentalRequest) => {
    return (
        <div className="flex flex-col w-full md:w-2/6 xl:w-3/12 py-2 m-2 relative bg-alt rounded-xl shadow-2xl transition ease-in-out hover:shadow-lg">
            <div className="p-3">
                <div className="p-1 flex justify-center">
                    <div className="bg-blue-200 rounded-full p-6 md:p-8 ">
                        {type === 'apartment' && (
                            <FaBuilding size={110} color={'#333'} />
                        )}
                        {type === 'house' && (
                            <AiOutlineHome size={110} color={'#333'} />
                        )}
                    </div>
                </div>
                <div className="flex flex-col text-center text-gray-300 py-2 my-2 border-b-2 border-gray-500">
                    <span className="uppercase font-bold text-lg">{type}</span>
                    <span className="font-normal text-sm">{address}</span>
                </div>
                <h1 className="text-white text-2xl font-bold text-center">
                    {tenant.name}
                </h1>
                <div className="flex flex-col justify-center content-center items-center mt-4 ">
                    <div className="w-2/3">
                        <CustomButton text="Ver Perfil" />
                    </div>
                    <div className="w-2/3">
                        <CustomButton text="Ver detalles" outlined />
                    </div>
                </div>
                <div className="flex justify-evenly mt-4">
                    <div className="cursor-pointer text-center">
                        <div className="bg-green-500 inline-block p-3 rounded-full shadow-2xl my-1">
                            <ImCheckmark size={25} color="white" />
                        </div>
                        <p className="text-white font-semibold">Aceptar</p>
                    </div>
                    <div className="cursor-pointer text-center">
                        <div className="bg-red-500 inline-block p-3 rounded-full shadow-2xl my-1">
                            <ImCross size={25} color="white" />
                        </div>
                        <p className="text-center text-white font-semibold">
                            Rechazar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;
