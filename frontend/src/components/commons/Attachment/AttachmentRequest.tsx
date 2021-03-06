import React from 'react';
import { AiOutlineFileText } from 'react-icons/all';

interface IAttachmentRequestProps {
    handleFile: Function;
    name: string;
}

const AttachmentRequest = ({ handleFile, name }: IAttachmentRequestProps) => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {
        let fileInput: any = hiddenFileInput.current;
        fileInput.click();
    };
    const handleChange = (e: any) => {
        handleFile(e);
    };
    return (
        <div className="bg-blue-700 h-20 py-2 px-10 border-dashed border-2 border-blue-900 rounded shadow-xl flex items-center cursor-pointer">
            <input
                type="file"
                name={name}
                className="hidden"
                ref={hiddenFileInput}
                onChange={handleChange}
            />
            <div
                className="flex items-center w-full justify-between lg:space-x-5"
                onClick={handleClick}
            >
                <p className="text-white">Haz click para adjuntar archivo</p>
                <AiOutlineFileText className="text-blue-300 w-8 h-8" />
            </div>
        </div>
    );
};

export default AttachmentRequest;
