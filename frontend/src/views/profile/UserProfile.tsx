import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdEdit } from 'react-icons/md';
import CustomButton from '../../components/commons/Button/CustomButton';
import { loadUser } from '../../actions/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface IUserProfile {
    name: string;
    lastname: string;
    userType: string;
    email: string;
    address: string;
    phone: string;
}

const UserProfile = ({ loadUser }: { loadUser: () => void }) => {
    const [user, setUser] = useState<IUserProfile>();
    const navigate = useNavigate();

    const init = () => {
        const loadedProfile = localStorage.getItem('profile');
        if (loadedProfile) {
            const profile = JSON.parse(loadedProfile);
            if (!profile.user || !profile.user.name) {
                navigate('/onboarding');
            } else {
                setUser(profile.user);
            }
        }
    };

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    return (
        <section className="flex flex-col border-6 h-full lg:h-screen w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 p-4 md:px-20 md:py-10">
            <h3 className="text-4xl mb-4 text-blue-900 font-secondary uppercase font-semibold tracking-wide text-center md:text-left ">
                Mi Perfil
            </h3>
            <div className="py-4 flex flex-col md:flex-row items-center">
                <div className="flex justify-center md:justify-start mb-3 items-center">
                    <CgProfile className="w-16 h-16" color="#004972" />
                    <p className="text-2xl md:text-4xl ml-6 text-white font-secondary">
                        {user?.name} {user?.lastname}
                    </p>
                </div>

                <div className="flex md:flex-1 justify-center md:justify-end">
                    <div className="bg-blue-900 rounded-lg px-4 py-1 shadow-2xl">
                        <span className="text-md font-semibold font-secondary uppercase text-gray-100">
                            {user?.userType}
                        </span>
                    </div>
                </div>
            </div>

            <span className="flex items-center justify-center space-x-3 my-5">
                <span className="h-px bg-gray-200 flex-1"></span>
                <div className="bg-alt rounded px-4">
                    <span className="font-normal text-xl text-gray-100 font-secondary">Datos Personales</span>
                </div>
                <span className="h-px bg-gray-200 flex-1"></span>
            </span>

            <div className="flex shadow-lg bg-bg-gradient-1 border-blue-400 rounded-xl mt-3 p-2 md:p-6 text-white leading-loose">
                <div className="flex flex-col flex-1 font-secondary">
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">Nombre completo:</span>
                        <span className="text-blue-900 md:px-3 text-xl font-semibold">
                            {`${user?.name} ${user?.lastname}`}
                        </span>
                    </div>
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">DNI:</span>
                        <span className="text-blue-900 px-3 text-xl font-semibold">25918512</span>
                    </div>
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">Email:</span>
                        <span className="text-blue-900 px-3 text-xl font-semibold">{user?.email}</span>
                    </div>
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">Fecha de nacimiento:</span>
                        <span className="text-blue-900 px-3 text-xl font-semibold">10-05-1990</span>
                    </div>
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">Domicilio:</span>
                        <span className="text-blue-900 px-3 text-xl font-semibold">{user?.address}</span>
                    </div>
                    <div className="py-2 flex flex-col md:flex-row text-center  md:text-left">
                        <span className="text-xl text-blue-900">Telefono:</span>
                        <span className="text-blue-900 px-3 text-xl font-semibold">{user?.phone}</span>
                    </div>
                </div>
                <div className="justify-end hidden md:flex h-16">
                    <CustomButton text="Editar" color="alt">
                        <MdEdit className="text-xl text-blue-300 cursor-pointer" />
                    </CustomButton>
                </div>
            </div>
            <div className="flex md:hidden">
                <CustomButton text="Editar" color="alt">
                    <MdEdit className="text-xl text-blue-300 cursor-pointer" />
                </CustomButton>
            </div>
        </section>
    );
};

export default connect(null, { loadUser })(UserProfile);
