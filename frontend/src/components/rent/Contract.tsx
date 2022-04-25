import React, {useEffect, useRef, useState} from 'react';
import {BiDotsVerticalRounded, CgProfile, FaBell, AiFillMessage} from 'react-icons/all';
import {BiSearch, BiDollarCircle} from 'react-icons/bi';
import {IContract} from "../../views/contracts/Contracts";
import {genId, useClickedOutside} from "../../utils";

const Contract = ({
                      number,
                      address,
                      actions,
                      tenant,
                      phone,
                      status,
                      canNotify,
                      startDate,
                      expirationDate
                  }: IContract) => {

    const [showActions, setShowActions] = useState(false);
    const actionsRef = useRef(null);
    const toggleActions = () => setShowActions(!showActions);

    useClickedOutside(actionsRef, toggleActions);

    return (
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 2xl:w-3/12 p-2 relative">
            <div className="bg-gray-700 p-2 flex justify-between">
                <span className="font-bold text-white">Contrato #: {number}</span>
                <span
                    className={`font-semibold uppercase self-center bg-${status.color}-500 rounded px-3 text-white text-sm backdrop-blur-2xl`}>
                    {status.message}
                </span>
                {actions && actions.length > 0 && (
                    <div className="cursor-pointer" onClick={toggleActions}>
                        <BiDotsVerticalRounded size={25} color='white'/>
                    </div>
                )}
            </div>
            {showActions &&
                <div tabIndex={0} ref={actionsRef}
                     className="absolute right-5 top-4 bg-gray-800 rounded py-2 px-1 z-20">
                    {actions?.map(action => (
                        <div key={genId('action')}
                             className="flex justify-between hover:bg-gray-700 rounded py-1 px-1 select-none cursor-pointer">
                            <span className="text-md px-3 text-gray-400">{action.text}</span>
                            <div className="bg-white self-end rounded-full p-1">
                                {action.icon}
                            </div>
                        </div>
                    ))}
                </div>
            }
            <div className="bg-blue-200 flex flex-col px-5 h-44 pt-2 ">
                <div className="flex flex-col space-y-2">
                    <p>
                        <span className="font-bold">Domicilio:</span> {address}
                    </p>
                    <p>
                        <span className="font-bold">Inquilino:</span> {tenant}
                    </p>
                    <p>
                        <span className="font-bold">Tel:</span> {phone}
                    </p>
                </div>
                <div className="flex justify-end w-full items-center">
                    {canNotify && (
                        <button className="bg-alt py-1 px-3 rounded flex items-center shadow-md focus:shadow-sm">
                            <span className="font-semibold text-xs text-white px-1">
                                Notificar
                            </span>
                            <FaBell color="white" size={12}/>
                        </button>
                    )}
                </div>

                <div className="relative flex-1">
                    <div className="absolute bottom-2 w-full">
                        <p className="text-xs md:text-sm text-gray-600 flex flex-row justify-between">
                        <span>
                            <span className="font-bold">Inicio: </span>
                            {startDate}
                        </span>
                            <span>
                            <span className="font-bold">Próximo vencimiento: </span>
                                {expirationDate}
                        </span>
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex bg-blue-300 rounded-b-md text-alt py-2 justify-between">
                <div className="flex flex-1 items-center justify-center cursor-pointer">
                    <BiSearch size={18}/>
                    <p className="px-1 font-medium text-xs md:text-lg">Ver detalle</p>
                </div>
                <div
                    className="flex flex-1 items-center justify-center cursor-pointer border-l border-r border-gray-600">
                    <CgProfile size={18}/>
                    <p className="px-1 font-medium text-xs md:text-lg">Ficha inquilino</p>
                </div>
                <div className="flex flex-1 items-center justify-center cursor-pointer">
                    <BiDollarCircle size={18}/>
                    <p className="px-2 font-medium text-xs md:text-lg">Ver pagos</p>
                </div>
            </div>
        </div>
    );
}

export default Contract;
