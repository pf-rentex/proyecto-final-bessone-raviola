import React, {useEffect, useState} from 'react';
import {ReactComponent as AppLogo} from "../../assets/logo.svg";
import {connect} from "react-redux";
import CustomButton from "../commons/Button/CustomButton";
import { ReactComponent as Spinner } from "../../assets/loader.svg";
import {AiFillGoogleCircle, FaFacebook} from "react-icons/all";
import CustomRadioInput from "../commons/CustomRadioInput";
import {signup, setSignupError} from "../../actions/auth";
import { useHistory } from 'react-router-dom';

enum UserType {
  realEstate= 'realEstate',
  tenant = 'tenant',
  owner = 'owner',
}
interface ISignupBoxProps {
  onToggleMode: Function;
  errors: string;
  register: Function;
  setSignupError: Function;
}

export interface IRegisterFormData {
  email: string;
  password: string;
  repeatPassword: string;
  userType: UserType;
}

const initialFormData: IRegisterFormData = {
  email: '',
  password: '',
  repeatPassword: '',
  userType: UserType.realEstate
}

const SignupBox = ({onToggleMode, errors, register, setSignupError}: ISignupBoxProps) => {
  const [form, setForm] = useState<IRegisterFormData>(initialFormData);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [triggered, setTriggered] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const history = useHistory();

  const selectUserType = (type: UserType) => {
    setForm({...form, userType: type});
  }

  useEffect(() => {
      setPasswordsMatch(form.password === form.repeatPassword)
  }, [form.password, form.repeatPassword])

  useEffect(() => {
    setSubmitting(false);
  }, [errors]);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupError()
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  const onSubmit = () => {
    setTriggered(true);
    if (isValid()) {
      setSubmitting(true);
      register(form, history);
    } else {
      setSignupError('Rellena todos los campos')
    }
  }

  const isValid = (): boolean => {
    return form.email.length > 0 && form.password.length > 0 && passwordsMatch;
  }

  return (
      <div className="relative flex flex-col w-full pb-5 xl:w-6/12 content-center break-words mb-3 px-4 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center z-10">
        <div className="flex justify-center py-2 mt-3">
          <AppLogo/>
        </div>
        <div className="rounded-t mb-0 px-6 py-2">
          <div className="text-center mb-3">
            <h6 className="text-gray-600 text-md font-bold">Sign up</h6>
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
                     onChange={onFormChange}
                     name="email"
                     className="px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                     placeholder="Email"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>
            <div className="relative w-full mt-5 mb-3">
              <input type="password"
                     onChange={onFormChange}
                     name="password"
                     className={
                       `${(!passwordsMatch && triggered) ? 'outline-error' : '' } px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full`
                     }
                     placeholder="Password"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>
            <div className="relative w-full mt-5 mb-3">
              <input type="password"
                     onChange={onFormChange}
                     name="repeatPassword"
                     className={
                       `${(!passwordsMatch && triggered) ? 'outline-error' : '' } px-3 py-2 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full`
                     }
                     placeholder="Repeat password"
                     style={{transition: 'all 0.15s ease 0s'}}/>
            </div>

            {(!passwordsMatch && triggered) && (
                <div className="w-full text-left">
                  <span className="text-red-700 font-semibold text-xs text-left">Las contraseñas no coinciden</span>
                </div>
            )}
            {errors && (
                <div className="w-full text-left">
                  <span className="text-red-700 font-semibold text-xs text-left">{errors}</span>
                </div>
            )}

            <span className="flex items-center justify-center space-x-3 mt-5 mb-2">
                <span className="h-px bg-gray-400 flex-1"></span>
                <span className="font-normal text-xs text-gray-600">Seleccione el tipo de usuario que corresponda</span>
                <span className="h-px bg-gray-400 flex-1"></span>
            </span>

            <div className="flex place-content-between">
              <CustomRadioInput name='user_type'
                                id={UserType.realEstate}
                                text='Inmobiliaria'
                                onSelect={() => selectUserType(UserType.realEstate)}
                                isChecked={form.userType === UserType.realEstate} />
              <CustomRadioInput name='user_type'
                                id={UserType.tenant}
                                text='Inquilino'
                                onSelect={() => selectUserType(UserType.tenant)}
                                isChecked={form.userType === UserType.tenant} />
            </div>
            <div className="flex place-content-between">
              <CustomRadioInput name='user_type'
                                id={UserType.owner}
                                text='Dueño'
                                onSelect={() => selectUserType(UserType.owner)}
                                isChecked={form.userType === UserType.owner} />
            </div>

            <div className="text-center mt-4">
              <CustomButton text="Sign up"
                            callback={onSubmit}
                            disabled={submitting && !errors}>
                {submitting && !errors && (
                    <Spinner />
                )}
              </CustomButton>

              <p className="text-sm text-gray-700">Already registered?
                <a href="/login"
                   onClick={ (e) => {e.preventDefault(); setSignupError(); onToggleMode()} }
                   className="text-blue-600 px-2 underline">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

const mapStateToProps = (state: any) => ({
  errors: state.auth.register.errors,
});

export default connect(mapStateToProps, {
  register: signup,
  setSignupError
})(SignupBox);
