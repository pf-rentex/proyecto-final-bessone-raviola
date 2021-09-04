import React, {useEffect, useState} from 'react';
import {ReactComponent as AppLogo} from "../../assets/logo.svg";
import CustomButton from "../commons/Button/CustomButton";
import {AiFillGoogleCircle, FaFacebook} from "react-icons/all";
import CustomRadioInput from "../commons/CustomRadioInput";

enum UserType {
  realEstate= 'real_estate',
  tenant = 'tenant',
  owner = 'owner',
}
interface ISignupBoxProps {
  onToggleMode: Function;
}

const SignupBox = ({onToggleMode}: ISignupBoxProps) => {

  const [userType, setUserType] = useState<UserType | null>(null);

  useEffect(() => {
    setUserType(UserType.realEstate);
  }, []);

  const selectUserType = (type: UserType) => {
    console.log(`Selected userType was: ${userType} now changing to ${type}`)
    setUserType(type);
  }

  return (
      <div className="relative flex flex-col w-full pb-5 xl:w-6/12 content-center break-words mb-3 px-4 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center z-10">
        <div className="flex justify-center mt-2">
          <AppLogo/>
        </div>
        <div className="rounded-t mb-0 px-6 py-1">
          <div className="text-center mb-3">
            <h6 className="text-gray-600 text-lg font-bold">Sign up</h6>
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
                        <span className="font-normal text-sm text-gray-600">Or sign up with credentials</span>
                        <span className="h-px bg-gray-400 flex-1"></span>
                  </span>
          <form>
            <div className="relative w-full mt-5 mb-3">
              <input type="email"
                     className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                     placeholder="Email"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>
            <div className="relative w-full mt-5 mb-3">
              <input type="password"
                     className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                     placeholder="Password"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>
            <div className="relative w-full mt-5 mb-3">
              <input type="password"
                     className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                     placeholder="Repeat password"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>

            <span className="flex items-center justify-center space-x-3 mt-4 mb-2">
                        <span className="h-px bg-gray-400 flex-1"></span>
                        <span className="font-normal text-sm text-gray-600">Seleccione la opción que corresponda</span>
                        <span className="h-px bg-gray-400 flex-1"></span>
                  </span>

            <div className="flex place-content-between">
              <CustomRadioInput name='user_type'
                                id={UserType.realEstate}
                                text='Soy una inmobiliaria'
                                onSelect={() => selectUserType(UserType.realEstate)}
                                isChecked={userType === UserType.realEstate} />
              <CustomRadioInput name='user_type'
                                id={UserType.tenant}
                                text='Soy inquilino'
                                onSelect={() => selectUserType(UserType.tenant)}
                                isChecked={userType === UserType.tenant} />
            </div>
            <div className="flex place-content-between">
              <CustomRadioInput name='user_type'
                                id={UserType.owner}
                                text='Soy dueño de un inmueble'
                                onSelect={() => selectUserType(UserType.owner)}
                                isChecked={userType === UserType.owner} />
            </div>

            <div className="text-center mt-4">
              <CustomButton text="Sign up"/>

              <p className="text-sm text-gray-700">Already registered?
                <a href="/login"
                   onClick={ (e) => {e.preventDefault(); onToggleMode()} }
                   className="text-blue-600 px-2 underline">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default SignupBox;
