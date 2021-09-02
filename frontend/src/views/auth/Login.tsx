import React from 'react';
import CustomButton from "../../components/commons/Button/CustomButton";
import {AiFillGoogleCircle, FaFacebook} from "react-icons/all";
import {ReactComponent as Bkg} from '../../assets/realtor.svg';
import {ReactComponent as AppLogo} from '../../assets/logo.svg';
import {ReactComponent as Footer} from '../../assets/waves.svg';

const Login = () => {
  return (
      <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2">
        <div className="container mx-auto h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full flex justify-between lg:px-20">

              <div className="relative hidden xl:flex xl:flex-col w-full">
                <h1 className="text-5xl text-blue-800 font-regular mb-8 font-secondary">Obtén el control total de<br/>
                  <span className="text-white font-bold text-5xl"> tu contrato</span>
                </h1>
                <p className="text-2xl text-blue-700 w-10/12">Accede y gestiona
                  <span className="font-bold"> todos</span> los aspectos de tu alquiler de forma
                  <span className="font-bold"> segura</span>
                </p>

                <Bkg className="self-center pr-10"/>
              </div>

              <div className="relative flex flex-col w-full pb-5 xl:w-6/12 content-center break-words mb-3 px-4 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center">
                <div className="flex justify-center my-3">
                  <AppLogo/>
                </div>
                <div className="rounded-t mb-0 px-6 py-3">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-lg font-bold">Sign in</h6>
                  </div>
                  <div className="btn-wrapper text-center px-6">
                    <CustomButton color="secondary"
                                  text="Sign in with Google">
                      <AiFillGoogleCircle/>
                    </CustomButton>
                    <CustomButton color="secondary"
                                  text="Sign in with Facebook">
                      <FaFacebook/>
                    </CustomButton>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 pt-0">
                  <span className="flex items-center justify-center space-x-3">
                        <span className="h-px bg-gray-400 flex-1"></span>
                        <span className="font-normal text-sm text-gray-600">Or sign in with credentials</span>
                        <span className="h-px bg-gray-400 flex-1"></span>
                  </span>
                  <form>
                    <div className="relative w-full mt-6 mb-3">
                      <input type="email"
                             className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                             placeholder="Email"
                             style={{transition: 'all 0.15s ease 0s'}}/>
                    </div>
                    <div className="relative w-full mt-6 mb-3">
                      <input type="password"
                             className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                             placeholder="Password"
                             style={{transition: 'all 0.15s ease 0s'}}/>
                    </div>
                    <div className="text-center mt-10">
                      <CustomButton text="Sign in"/>
                      <p className="text-sm text-gray-700">Don't have an account?
                        <a href="/register"
                           className="text-blue-600 px-2 underline">Register Here</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        <footer className="absolute invisible lg:visible w-screen bottom-0">
          <Footer/>
        </footer>
      </section>
  );
};

export default Login;
