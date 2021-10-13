import React, {useEffect} from "react";
import {connect} from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { IProfileData } from "../reducers/auth";

interface IPrivateRouteProps {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
  profile: null | IProfileData;
  isAuthenticated: boolean;
}

const PrivateRoute = ( props: IPrivateRouteProps ) => {
  const { component, profile, isAuthenticated, ...rest } = props;

  console.log({isAuthenticated});

  if (isAuthenticated) {
    return <Route { ...rest } component={component} />
  }
  return <Redirect to='/'/>
}

const mapStateToProps = (state: any) => ({
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PrivateRoute);
