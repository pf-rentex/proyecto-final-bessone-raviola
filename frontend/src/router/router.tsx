import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Header from '../components/commons/header/Header';
import Sidebar from '../components/commons/Sidebar/Sidebar';

import routes from './routes';

export default function Router() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpenSidebar={setIsOpen} />
            <Routes>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.isPrivate ? <PrivateRoute component={route.component} /> : route.component}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}
