import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IProfileData } from '../reducers/auth';
import { FaCircleNotch } from 'react-icons/all';

interface IPrivateRouteProps {
    exact?: boolean;
    component: JSX.Element;
    profile: null | IProfileData;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
    const { component, isAuthenticated, isLoading } = props;

    if (isLoading) {
        return (
            <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2 overflow-hidden flex justify-center items-center">
                <FaCircleNotch className="animate-spin opacity-60 text-9xl" />
            </section>
        );
    }

    if (isAuthenticated) {
        return component;
    }
    return <Navigate to="/" />;
};

const mapStateToProps = (state: any) => ({
    profile: state.auth.profile,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {})(PrivateRoute);
