import { ReactComponent as NotFoundImg } from '../assets/404.svg';
import Blob from '../components/commons/Blob';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 bg-repeat animate-ltr-linear-infinite">
            <div className="flex text-gray-50 font-semibold text-2xl font-secondary justify-center py-10">
                Esta página no existe
                <Blob size="x-large" color="#444" class="hidden lg:block" opacity="0.1" />
            </div>
            <div className="flex justify-center h-2/3 z-40">
                <NotFoundImg />
            </div>
        </div>
    );
};

export default NotFound;
