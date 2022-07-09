import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from '../views/auth/Auth';
import Onboarding from '../views/auth/Onboarding';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import UserProfile from '../views/profile/UserProfile';
import Search from '../views/properties/Search';
import RequestForm from '../views/rent/request/RequestForm';
import Properties from '../views/properties/Properties';
import CreateProperty from '../views/properties/CreateProperty';
import Publication from '../views/publications/Publication';
import Claims from '../views/claims/Claims';
import ClaimDetails from '../views/claims/ClaimDetails';
import CreateClaim from '../views/claims/CreateClaim';
import Contracts from '../views/contracts/Contracts';
import RentRequests from '../views/rent/request/Requests';
import ContractDetails from '../views/contracts/ContractDetails';
import Header from '../components/commons/header/Header';
import Sidebar from '../components/commons/Sidebar/Sidebar';
import NotFound from '../views/NotFound';

export default function Router() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpenSidebar={setIsOpen} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/onboarding" element={<PrivateRoute redirect="onboarding" component={<Onboarding />} />} />
                <Route path="/profile" element={<PrivateRoute redirect="profile" component={<UserProfile />} />} />
                <Route path="/search" element={<Search />} />
                <Route
                    path="/rent/request"
                    element={<PrivateRoute redirect="rent/request" component={<RequestForm />} />}
                />
                <Route path="/publication/:id" element={<Publication />} />
                <Route path="/claims" element={<PrivateRoute redirect="claims" component={<Claims />} />} />
                <Route
                    path="/claims/create"
                    element={<PrivateRoute redirect="claims/create" component={<CreateClaim />} />}
                />
                <Route path="/claims/:id" element={<PrivateRoute redirect="claims" component={<ClaimDetails />} />} />
                <Route path="/contracts" element={<PrivateRoute redirect="contracts" component={<Contracts />} />} />
                <Route
                    path="/rent/requests"
                    element={<PrivateRoute redirect="rent/requests" component={<RentRequests />} />}
                />
                <Route
                    path="/contracts/:id"
                    element={<PrivateRoute redirect="contracts" component={<ContractDetails />} />}
                />
                <Route path="/properties" element={<PrivateRoute redirect="properties" component={<Properties />} />} />
                <Route
                    path="/properties/create"
                    element={<PrivateRoute redirect="properties/create" component={<CreateProperty />} />}
                />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
}
