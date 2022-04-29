import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Auth from '../views/auth/Auth';
import Onboarding from '../views/auth/Onboarding';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import UserProfile from '../views/profile/UserProfile';
import Search from '../views/properties/Search';
import RequestForm from '../views/rent/request/RequestForm';
import Publication from '../views/publications/Publication';
import Complaints from '../views/complaints/Complaints';
import ComplaintDetails from '../views/complaints/ComplaintDetails';
import CreateComplaint from '../views/complaints/CreateComplaint';
import Contracts from '../views/rent/Contracts';
import Header from "../components/commons/header/Header";
import Sidebar from "../components/commons/Sidebar/Sidebar";

export default function Router() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header setIsOpenSidebar={setIsOpen} />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Auth /> }/>
                <Route path="/onboarding" element={
                    <PrivateRoute exact path="/onboarding" component={Onboarding} />
                }/>
                <Route path="/profile" element={
                    <PrivateRoute exact path="/profile" component={UserProfile} />
                }/>
                <Route path="/search" element={<Search />}/>
                <Route path="/rent/request" element={<RequestForm />}/>
                <Route path="/publication/:id" element={<Publication />}/>
                <Route path="/complaints" element={<Complaints />}/>
                <Route
                    path="/complaint/create"
                    element={<CreateComplaint />}
                />
                <Route
                    path="/complaint/:id"
                    element={<ComplaintDetails />}
                />
                <Route path="/contracts" element={<Contracts />}/>
            </Routes>
        </BrowserRouter>
    );
}
