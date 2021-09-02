import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button/Button";
import {AiFillGoogleCircle, FaFacebook} from "react-icons/all";
import { ReactComponent as Bkg } from '../../assets/realtor.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Footer } from '../../assets/waves.svg';


const SignIn = () => {

    return (
        <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2">
            <div className="container mx-auto h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full flex justify-between">

                        <div className="relative hidden xl:flex xl:flex-col w-full">
                            <h1 className="text-6xl text-blue-800 font-medium mb-8 font-sans">Obtén el control total de<br/>
                                <span className="text-white font-bold"> tu contrato</span>
                            </h1>
                            <p className="text-3xl text-blue-700 w-7/12">Accede y gestiona todos los aspectos de tu alquiler de forma <span className="font-bold">segura</span></p>
                            <div className="flex justify-center w-8/12">
                                <Bkg />
                            </div>
                        </div>

                        <div className="relative flex flex-col w-full xl:w-6/12 content-center break-words mb-4 px-4 mx-4 shadow-lg rounded-2xl bg-white border-0 text-center">
                            <div className="flex justify-center py-6">
                                <Logo />
                            </div>
                            <div className="rounded-t mb-0 px-6 py-3">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-md font-bold">Sign in</h6>
                                </div>
                                <div className="btn-wrapper text-center px-6">
                                    <Button color="secondary" text="Sign in with Google">
                                        <AiFillGoogleCircle/>
                                    </Button>
                                    <Button color="secondary" text="Sign in with Facebook">
                                        <FaFacebook/>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                 <span className="flex items-center justify-center space-x-3">
                                     <span className="h-px bg-gray-400 flex-1"></span>
                                     <span className="font-normal text-sm text-gray-600">Or sign in with credentials</span>
                                     <span className="h-px bg-gray-400 flex-1"></span>
                                 </span>
                                <form>
                                    <div className="relative w-full mt-6 mb-3">
                                        <input type="email"
                                               className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                               placeholder="Email" style={{transition: 'all 0.15s ease 0s'}}/>
                                    </div>
                                    <div className="relative w-full mt-6 mb-3">
                                        <input type="password"
                                               className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                                               placeholder="Password" style={{transition: 'all 0.15s ease 0s'}}/>
                                    </div>
                                    <div className="text-center my-10">
                                        <Button text="Sign in"/>
                                        <p className="text-sm text-gray-700">Don't have an account?
                                        <a href="#" className="text-blue-600 px-2 underline">Register Here</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="absolute invisible lg:visible w-screen bottom-0">
                <Footer />
            </footer>
        </section>
    );
};

SignIn.propTypes = {};

export default SignIn;
