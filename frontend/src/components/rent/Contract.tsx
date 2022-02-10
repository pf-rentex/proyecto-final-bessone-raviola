import { string } from 'prop-types';
import React from 'react';
import { CgProfile } from 'react-icons/all';
import { BiSearch, BiDollarCircle } from 'react-icons/bi';

interface IContractProps {
    number: string;
    address: string;
    tenant: string;
    phone: string;
    startDate: string;
    expirationDate: string;
}

export default function Contract({
    number,
    address,
    tenant,
    phone,
    startDate,
    expirationDate,
}: IContractProps) {
    return (
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 2xl:w-3/12 p-2">
            <div className="bg-gray-700 p-2 rounded-t-md">
                <p className="text-white">
                    <span className="font-bold">Contrato Nro:</span> {number}{' '}
                </p>
            </div>
            <div className="bg-blue-300 py-2 px-5">
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
                <div className="flex justify-end w-full mt-5">
                    <p className="font-bold text-green-600 text-lg">
                        Pagos al Día
                    </p>
                </div>
                <div className="flex text-xs justify-between">
                    <p>
                        <span className="font-bold">Inicio:</span>
                        {startDate}
                    </p>
                    <p>
                        <span className="font-bold">Próximo vencimiento:</span>
                        {expirationDate}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row bg-blue-500 p-2 rounded-b-md text-alt justify-center space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <BiSearch />
                    <p>Ver detalle</p>
                </div>
                <div className="flex items-center w-full sm:w-auto justify-center space-x-2  cursor-pointer py-3 border-t border-b sm:py-0 sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r sm:px-3 border-alt">
                    <CgProfile />
                    <p>Ficha inquilino</p>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <BiDollarCircle />
                    <p>Ver pagos</p>
                </div>
            </div>
        </div>
    );
}
