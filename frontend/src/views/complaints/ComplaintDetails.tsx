import React from 'react';
import { ReactComponent as Lightning } from '../../assets/Lightning.svg';
import { BiPencil } from 'react-icons/all';

const ComplaintDetails = () => {
    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl p-10">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-5">
                        <div className="rounded-full bg-alt p-5">
                            <Lightning className="w-14 h-14" />
                        </div>
                        <h1 className="text-white text-3xl font-bold">
                            Falla toma de corriente
                        </h1>
                        <div className="rounded-full bg-alt p-2">
                            <BiPencil className="text-white w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-6/12"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplaintDetails;
