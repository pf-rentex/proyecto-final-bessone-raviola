import React from 'react';
import CustomButton from '../commons/Button/CustomButton';
import { RiSendPlane2Fill } from 'react-icons/all';
import FiltersContent from './FiltersContent';

interface IFiltersProps {
    isOpen?: boolean;
    setIsOpen?: Function;
}

export default function FiltersModal({
    isOpen = false,
    setIsOpen = () => null,
}: IFiltersProps) {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto lg:max-w-4xl max-h-screen">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-alt outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5  rounded-t">
                                    <h3 className="text-xl text-white font-semibold">
                                        Filtros de búsqueda
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className=" bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4">
                                    <FiltersContent />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 rounded-b">
                                    <CustomButton
                                        text="Cerrar"
                                        callback={() => {
                                            setIsOpen(false);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
