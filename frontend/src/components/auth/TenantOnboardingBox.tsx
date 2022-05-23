import CustomButton from '../commons/Button/CustomButton';
import { ReactComponent as OnboardingImage } from '../../assets/onboardingTenant.svg';
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';

export interface IOnboardingTenantData {
    name: string;
    dni: string;
    birthDate: string;
    address: string;
    phone: number;
}

const initialFormData: IOnboardingTenantData = {
    name: '',
    dni: '',
    birthDate: '',
    address: '',
    phone: 0,
};

const TenantOnboardingBox = ({ updateUser }: { updateUser: Function }) => {
    const [form, setForm] = useState<IOnboardingTenantData>(initialFormData);

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // clearErrors();
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async () => {
        const resp = await updateUser(form);
    };
    return (
        <div className="flex flex-row p-5 w-full xl:w-6/12 break-words mb-3 mx-4 shadow-2xl rounded-xl bg-white border-0 text-center content-center">
            <div className="w-full xl:w-8/12 flex justify-center">
                <form className="w-full lg:w-4/5">
                    <div className="relative w-full mt-6 mb-3">
                        <input
                            type="text"
                            onChange={onFormChange}
                            name="name"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Nombre"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="relative w-full mt-6 mb-3">
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Apellido"
                            onChange={onFormChange}
                            name="lastname"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="relative w-full mt-3 mb-3">
                        <input
                            type="number"
                            onChange={onFormChange}
                            name="dni"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="DNI"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>

                    <div className="relative w-full mt-3 mb-3">
                        <input
                            type="date"
                            onChange={onFormChange}
                            name="birthDate"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Fecha de nacimiento"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="relative w-full mt-3 mb-3">
                        <input
                            type="text"
                            onChange={onFormChange}
                            name="address"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Domicilio"
                            style={{ transition: 'all 0.15s ease 0s' }}
                        />
                    </div>
                    <div className="relative w-full mt-3 mb-3">
                        <input
                            type="number"
                            onChange={onFormChange}
                            name="phone"
                            className="px-3 py-3 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Telefono"
                            style={{
                                transition: 'all 0.15s ease 0s',
                            }}
                        />
                    </div>
                    <div className="lg:w-6/12 mx-auto my-5">
                        <CustomButton text="Continuar" callback={onSubmit} />
                    </div>
                </form>
            </div>
            <div className="hidden lg:flex lg:w-4/12">
                <div className="w-52 h-52 lg:self-center">
                    <OnboardingImage />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {
    updateUser,
})(TenantOnboardingBox);
