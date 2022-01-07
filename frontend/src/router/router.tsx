import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

export default function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Auth} />
                <PrivateRoute exact path="/onboarding" component={Onboarding} />
                <PrivateRoute exact path="/profile" component={UserProfile} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/rent/request" component={RequestForm} />
                <Route exact path="/publication/:id" component={Publication} />
                <Route exact path="/complaints" component={Complaints} />
                <Route
                    exact
                    path="/complaint/:id"
                    component={ComplaintDetails}
                />
            </Switch>
        </BrowserRouter>
    );
}
