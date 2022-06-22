import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Notifications from '../components/notifications/Notifications';
import { useClickedOutside } from '../utils';

export default function Router() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showNotifications, setShowNotifications] = useState<boolean>(false);

    const notificationsRef = useRef(null);

    const toggleNotifications = () => setShowNotifications(!showNotifications);

    useClickedOutside(notificationsRef, toggleNotifications);

    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpenSidebar={setIsOpen} toggleNotifications={toggleNotifications} />
            {showNotifications && (
                <div ref={notificationsRef}>
                    {' '}
                    <Notifications />{' '}
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/onboarding" element={<PrivateRoute component={<Onboarding />} />} />
                <Route path="/profile" element={<PrivateRoute component={<UserProfile />} />} />
                <Route path="/search" element={<Search />} />
                <Route path="/rent/request" element={<RequestForm />} />
                <Route path="/publication/:id" element={<Publication />} />
                <Route path="/claims" element={<Claims />} />
                <Route path="/claim/create" element={<CreateClaim />} />
                <Route path="/claim/:id" element={<ClaimDetails />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/rent/requests" element={<RentRequests />} />
                <Route path="/contracts/:id" element={<ContractDetails />} />
                <Route path="properties" element={<PrivateRoute component={<Properties />} />} />
                <Route path="/properties/create" element={<PrivateRoute component={<CreateProperty />} />} />
            </Routes>
        </BrowserRouter>
    );
}
