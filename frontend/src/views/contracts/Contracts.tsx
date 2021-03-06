import React, { ReactNode } from 'react';
import { BiSearch, BiDollar, BiRefresh } from 'react-icons/bi';
import { AiFillEye, AiFillMessage, BsTrashFill, FaSortAlphaDown, ImCross, RiDownloadFill } from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';
import Contract from '../../components/rent/Contract';

export interface IContract {
    number: string;
    address: string;
    tenant: string;
    phone: string;
    status: {
        message: string;
        color: string;
    };
    canNotify: boolean;
    startDate: string;
    expirationDate: string;
    actions?: { text: string; icon: ReactNode }[];
}

const Contracts = () => {
    let contracts: IContract[] = [
        {
            number: '3355189541',
            address: 'Entre Ríos (N) 618',
            tenant: 'Claudio Hernán Bessone',
            phone: '3564-567895',
            status: {
                message: 'Al día',
                color: 'green',
            },
            canNotify: false,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
            actions: [
                {
                    text: 'Enviar mensaje',
                    icon: <AiFillMessage />,
                },
                {
                    text: 'Ver detalle',
                    icon: <AiFillEye />,
                },
                {
                    text: 'Cancelar contrato',
                    icon: <ImCross />,
                },
                {
                    text: 'Rescindir contrato',
                    icon: <BsTrashFill />,
                },
                {
                    text: 'Renovar contrato',
                    icon: <BiRefresh />,
                },
                {
                    text: 'Pagar contrato',
                    icon: <BiDollar />,
                },
                {
                    text: 'Descargar contrato',
                    icon: <RiDownloadFill />,
                },
            ],
        },
        {
            number: '33553541',
            address: 'Panamericana (N) 618',
            tenant: 'Julio César Ramane',
            phone: '3564-567895',
            status: {
                message: 'En deuda',
                color: 'red',
            },
            canNotify: true,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
        {
            number: '3352541',
            address: 'Quilmes (N) 618',
            tenant: 'Juan José Pérez',
            phone: '3564-567895',
            status: {
                message: 'Al día',
                color: 'green',
            },
            canNotify: false,
            actions: [
                {
                    text: 'Enviar mensaje',
                    icon: <AiFillMessage />,
                },
                {
                    text: 'Ver detalle',
                    icon: <AiFillEye />,
                },
                {
                    text: 'Cancelar contrato',
                    icon: <ImCross />,
                },
                {
                    text: 'Rescindir contrato',
                    icon: <BsTrashFill />,
                },
                {
                    text: 'Renovar contrato',
                    icon: <BiRefresh />,
                },
                {
                    text: 'Pagar contrato',
                    icon: <BiDollar />,
                },
                {
                    text: 'Descargar contrato',
                    icon: <RiDownloadFill />,
                },
            ],
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
        {
            number: '33519541',
            address: 'Entre Ríos (N) 618',
            tenant: 'Claudio Hernán Bessone',
            phone: '3564-567895',
            status: {
                message: 'Al día',
                color: 'green',
            },
            canNotify: false,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
        {
            number: '3359541',
            address: 'Entre Ríos (N) 618',
            tenant: 'Claudio Hernán Bessone',
            phone: '3564-567895',
            status: {
                message: 'En deuda',
                color: 'red',
            },
            actions: [
                {
                    text: 'Enviar mensaje',
                    icon: <AiFillMessage />,
                },
                {
                    text: 'Ver detalle',
                    icon: <AiFillEye />,
                },
                {
                    text: 'Cancelar contrato',
                    icon: <ImCross />,
                },
                {
                    text: 'Rescindir contrato',
                    icon: <BsTrashFill />,
                },
                {
                    text: 'Renovar contrato',
                    icon: <BiRefresh />,
                },
                {
                    text: 'Pagar contrato',
                    icon: <BiDollar />,
                },
                {
                    text: 'Descargar contrato',
                    icon: <RiDownloadFill />,
                },
            ],
            canNotify: false,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
        {
            number: '33515189541',
            address: 'Entre Ríos (N) 618',
            tenant: 'Claudio Hernán Bessone',
            phone: '3564-567895',
            status: {
                message: 'Al día',
                color: 'green',
            },
            canNotify: false,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
        {
            number: '31241',
            address: 'Entre Ríos (N) 618',
            tenant: 'Claudio Hernán Bessone',
            phone: '3564-567895',
            status: {
                message: 'Al día',
                color: 'green',
            },
            actions: [
                {
                    text: 'Enviar mensaje',
                    icon: <AiFillMessage />,
                },
                {
                    text: 'Ver detalle',
                    icon: <AiFillEye />,
                },
                {
                    text: 'Cancelar contrato',
                    icon: <ImCross />,
                },
                {
                    text: 'Rescindir contrato',
                    icon: <BsTrashFill />,
                },
                {
                    text: 'Renovar contrato',
                    icon: <BiRefresh />,
                },
                {
                    text: 'Pagar contrato',
                    icon: <BiDollar />,
                },
                {
                    text: 'Descargar contrato',
                    icon: <RiDownloadFill />,
                },
            ],
            canNotify: false,
            startDate: '15/01/2022',
            expirationDate: '15/01/2022',
        },
    ];
    return (
        <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden p-5 sm:p-10 md:p-20">
            <div className="flex flex-col lg:flex-row space-x-5 items-center">
                <h1 className="text-white text-4xl py-10 lg:py-0 text-center lg:text-left font-bold w-full lg:w-3/12">
                    Mis Contratos
                </h1>
                <div className="relative w-full lg:w-5/12 my-3 text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearch className="w-7 h-7" />
                    </span>
                    <input
                        type="search"
                        name="search"
                        className="px-10 py-3 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
                        placeholder="Buscar Contrato"
                    />
                </div>
                <div className="flex flex-col sm:flex-row w-full lg:w-4/12 sm:space-x-3">
                    <CustomButton text="Pago cuota pendiente" color="primary">
                        <BiDollar className="w-5 h-5" fill="white" />
                    </CustomButton>
                    <CustomButton text="Pago servicios pendiente" color="primary">
                        <BiDollar className="w-5 h-5" fill="white" />
                    </CustomButton>
                    <FaSortAlphaDown className="self-end m-5 sm:m-0 sm:self-start h-10 w-10 sm:h-20 sm:w-20 cursor-pointer text-alt" />
                </div>
            </div>

            <div className="flex flex-row flex-wrap">
                {contracts.map((contract: IContract) => {
                    return (
                        <Contract
                            key={contract.number}
                            actions={contract?.actions}
                            number={contract.number}
                            address={contract.address}
                            tenant={contract.tenant}
                            status={contract.status}
                            canNotify={contract.canNotify}
                            startDate={contract.startDate}
                            expirationDate={contract.expirationDate}
                            phone={contract.phone}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Contracts;
