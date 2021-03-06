import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ReactComponent as LogoHeader } from '../../../assets/logo_header.svg';
import { ReactComponent as LogoHeaderMbl } from '../../../assets/favicon.svg';
import CustomButton from '../Button/CustomButton';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, logout } from '../../../actions/auth';
import { FaBell } from 'react-icons/fa';
import { useClickedOutside } from '../../../utils';
import Notifications from '../../notifications/Notifications';

interface IHeaderProps {
    loadUser: () => void;
    isAuthenticated: boolean;
    setIsOpenSidebar: Function;
    logout: () => void;
}

const Header = ({ loadUser, isAuthenticated, setIsOpenSidebar, logout }: IHeaderProps, history: History) => {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const notificationsRef = useRef(null);
    const toggleNotifications = () => setShowNotifications(!showNotifications);

    useClickedOutside(notificationsRef, toggleNotifications);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <div
            style={{ backgroundColor: '#20323A' }}
            className="fixed sticky top-0 z-20 w-full items-center h-20 overflow-hidden"
        >
            <div className="flex h-full items-center">
                <div className="flex items-center">
                    {isAuthenticated && (
                        <div className="ml-5">
                            <GiHamburgerMenu
                                data-testid="sidebar-toggle"
                                className="text-white text-3xl cursor-pointer"
                                onClick={() => setIsOpenSidebar(true)}
                            />
                        </div>
                    )}
                    <div className="ml-6 cursor-pointer" onClick={() => navigate('/')}>
                        <LogoHeader className="w-40 mx-4 md:flex hidden" data-testid="logo" />
                        <LogoHeaderMbl className="visible flex md:hidden w-10 mx-4" />
                    </div>
                </div>

                <div className="flex flex-1 justify-end items-center">
                    {!isAuthenticated && (
                        <>
                            <div className="mr-4">
                                <button className="text-xs md:text-base text-white">
                                    <u>Sobre nosotros</u>
                                </button>
                            </div>
                            <div className="ml-6 mr-7">
                                <CustomButton text="Registrarse" callback={() => navigate('login')} />
                            </div>
                        </>
                    )}
                    {isAuthenticated && (
                        <div className="flex flex-1 justify-end">
                            <button className="mx-3" onClick={() => toggleNotifications()}>
                                <FaBell color="white" size={25} />
                            </button>
                            {showNotifications && (
                                <div ref={notificationsRef}>
                                    <Notifications />
                                </div>
                            )}
                            <button className="mx-3" onClick={() => navigate('/profile')}>
                                {/* Se reemplazaria por la foto de perfil del usuario*/}
                                <img
                                    src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43191/blue-circle-emoji-clipart-md.png"
                                    width="50px"
                                    alt="Profile"
                                />
                            </button>
                            {/*    TODO: Dropdown ? */}
                            <button className="text-white mx-3" onClick={logout}>
                                Cerrar sesi??n
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
    loadUser,
    logout,
})(Header);
