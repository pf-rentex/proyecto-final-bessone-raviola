import React from 'react';
import AttachmentRequest from '../../commons/Attachment/AttachmentRequest';

const ThirdStep = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 py-5">
                <div className="flex flex-col lg:w-6/12 space-y-5">
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Campo extra"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Campo extra"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Campo extra"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                </div>
                <div className="flex flex-col mt-5 lg:mt-0 lg:w-6/12 space-y-5">
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Campo extra"
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                    <textarea
                        className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Campo extra"
                        rows={4}
                        style={{ transition: 'all 0.15s ease 0s' }}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-5">
                <h5 className="text-white font-semibold text-xl">Adjunte X</h5>
                <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-3 lg:space-y-0">
                    <AttachmentRequest />
                </div>
                <h5 className="text-white font-semibold text-xl">Adjunte X</h5>
                <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-3 lg:space-y-0">
                    <AttachmentRequest />
                </div>
            </div>
        </div>
    );
};

export default ThirdStep;
