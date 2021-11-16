import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from '../views/auth/Auth';
import Onboarding from '../views/auth/Onboarding';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import UserProfile from '../views/profile/UserProfile';
import Search from '../views/properties/Search';
import RequestForm from '../views/rent/RequestForm';

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
            </Switch>
        </BrowserRouter>
    );
}
