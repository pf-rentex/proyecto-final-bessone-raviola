import React from 'react';
import CustomButton from '../Button/CustomButton';
import Loader from '../Loader';

interface IModal {
    title: string;
    action: {
        text: string;
        callback: () => void;
        icon: React.ReactNode;
    };
    onClose: () => void;
    content: React.ReactNode;
    loading?: boolean;
}

const Modal = ({ title, content, action, onClose, loading = false }: IModal) => (
    <>
        {/* Overlay blur */}
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-sm overflow-y-auto h-full w-full"
            id="my-modal"
        ></div>

        {/* Modal */}
        <div className="absolute bg-blue-700">
            <div
                id="default-modal"
                aria-hidden="true"
                className="flex overflow-x-hidden overflow-y-auto fixed h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
            >
                <div className="relative w-auto w-full max-w-5xl p-2 h-full md:h-auto">
                    <div className="bg-white rounded-lg shadow p-4 relative dark:bg-gray-700">
                        {/* Header */}
                        <div className="flex items-start sticky top-0 bg-white justify-between p-3 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">{title}</h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="default-modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {/* Content */}
                        {content}

                        {/*Footer*/}
                        <div className="flex flex-col md:flex-row sticky bottom-0 bg-white border-t space-x-2 justify-end content-center items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <span className="text-red-600 cursor-pointer mx-4" onClick={onClose}>
                                Cancelar
                            </span>
                            <div className="w-full md:w-auto">
                                <CustomButton
                                    text={action.text}
                                    color="alt"
                                    callback={action.callback}
                                    disabled={loading}
                                >
                                    {loading ? <Loader /> : action.icon}
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Modal;
