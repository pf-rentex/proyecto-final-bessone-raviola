import React from 'react';
import { HiDownload, IoClose } from 'react-icons/all';

interface IAttachmentProps {
    name: string;
    size: string;
    attachedDate: string;
}

const Attachment = ({ name, size, attachedDate }: IAttachmentProps) => {
    return (
        <div className="bg-blue-900 py-2 px-10 rounded shadow-xl">
            <div className="flex items-center space-x-5">
                <div className="flex flex-col space-y-3">
                    <p className="text-white">{name}</p>
                    <div className="flex space-x-10">
                        <p className="text-blue-300 font-thin">{size}</p>
                        <p className="text-blue-300 font-thin">
                            {attachedDate}
                        </p>
                    </div>
                </div>
                <div className="rounded-full bg-primary p-2 shadow-xl">
                    <HiDownload className="text-white" />
                </div>
                <div className="rounded-full bg-red-600 p-2 shadow-xl">
                    <IoClose className="text-white" />
                </div>
            </div>
        </div>
    );
};

export default Attachment;
