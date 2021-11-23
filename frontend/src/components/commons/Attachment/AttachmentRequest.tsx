import React from 'react';
import { AiOutlineFileText } from 'react-icons/all';

const AttachmentRequest = () => {
    return (
        <div className="bg-blue-700 h-20 py-2 px-10 border-dashed border-2 border-blue-900 rounded shadow-xl flex items-center">
            <div className="flex items-center space-x-5">
                <p className="text-white">Haz click para adjuntar archivo</p>
                <AiOutlineFileText className="text-blue-300 w-8 h-8" />
            </div>
        </div>
    );
};

export default AttachmentRequest;
