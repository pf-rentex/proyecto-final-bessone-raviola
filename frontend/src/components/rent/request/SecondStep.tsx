import React, { useState } from 'react';
import { BsInfoCircleFill, AiOutlineFileText } from 'react-icons/all';
import Attachment from '../../commons/Attachment/Attachment';
import AttachmentRequest from '../../commons/Attachment/AttachmentRequest';

interface ISecondStepProps {
    data: any;
    onChange: Function;
    handleFileDelete: Function;
}

const SecondStep = ({ data, onChange, handleFileDelete }: ISecondStepProps) => {
    const { name, lastName, email, dni, birthDate, phone, startDate, endDate } =
        data;
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 py-5">
                <div className="flex flex-col lg:w-6/12 space-y-5">
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Nombre"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        name="name"
                        value={name || ''}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Apellido"
                        name="lastName"
                        value={lastName || ''}
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        name="email"
                        value={email || ''}
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 lg:w-6/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                        placeholder="DNI"
                        name="dni"
                        value={dni || ''}
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="flex flex-col lg:w-6/12 space-y-5 mt-5 lg:mt-0">
                    <input
                        type="date"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Fecha de nacimiento"
                        name="birthDate"
                        value={birthDate || ''}
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="number"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Telefono"
                        name="phone"
                        value={phone || ''}
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => onChange(e)}
                    />
                    <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row items-center">
                        <p className="text-white font-thin text-center w-full xl:text-left">
                            Fecha de inicio estimada:
                        </p>
                        <div className="flex w-full items-center">
                            <div className="flex w-full flex-col xl:flex-row space-y-3 xl:space-y-0 xl:justify-center">
                                <input
                                    type="date"
                                    className="px-3 py-3 xl:w-6/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                    placeholder="Inicio"
                                    name="startDate"
                                    value={startDate || ''}
                                    style={{ transition: 'all 0.15s ease 0s' }}
                                    onChange={(e) => onChange(e)}
                                />
                                <input
                                    type="date"
                                    className="px-3 py-3 xl:w-6/12 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                    placeholder="Fin"
                                    name="endDate"
                                    value={endDate || ''}
                                    style={{ transition: 'all 0.15s ease 0s' }}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <BsInfoCircleFill className="h-6 w-6 text-alt mx-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-5">
                <h5 className="text-white font-semibold text-xl">
                    Adjunte 3 garantes
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    {data.guarantorFiles ? (
                        data.guarantorFiles.map(
                            (attachment: any, index: any) => {
                                return (
                                    <Attachment
                                        key={index}
                                        name={attachment.name}
                                        size={attachment.size}
                                        attachedDate={new Date().toDateString()}
                                        handleDelete={() =>
                                            handleFileDelete(
                                                'guarantorFiles',
                                                attachment.name,
                                            )
                                        }
                                    />
                                );
                            },
                        )
                    ) : (
                        <></>
                    )}

                    <AttachmentRequest
                        name="guarantorFiles"
                        handleFile={(e: any) => onChange(e)}
                    />
                </div>
                <h5 className="text-white font-semibold text-xl">
                    Adjunte foto de su DNI
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    {data.dniFiles ? (
                        data.dniFiles.map((attachment: any, index: any) => {
                            return (
                                <Attachment
                                    key={index}
                                    name={attachment.name}
                                    size={attachment.size}
                                    attachedDate={new Date().toDateString()}
                                    handleDelete={() =>
                                        handleFileDelete(
                                            'dniFiles',
                                            attachment.name,
                                        )
                                    }
                                />
                            );
                        })
                    ) : (
                        <></>
                    )}
                    <AttachmentRequest
                        name="dniFiles"
                        handleFile={(e: any) => onChange(e)}
                    />
                </div>
                <h5 className="text-white font-semibold text-xl">
                    Adjunte Recibos de sueldo
                </h5>
                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                    {data.receiptFiles ? (
                        data.receiptFiles.map((attachment: any, index: any) => {
                            return (
                                <Attachment
                                    key={index}
                                    name={attachment.name}
                                    size={attachment.size}
                                    attachedDate={new Date().toDateString()}
                                    handleDelete={() =>
                                        handleFileDelete(
                                            'receiptFiles',
                                            attachment.name,
                                        )
                                    }
                                />
                            );
                        })
                    ) : (
                        <></>
                    )}
                    <AttachmentRequest
                        name="receiptFiles"
                        handleFile={(e: any) => onChange(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SecondStep;
