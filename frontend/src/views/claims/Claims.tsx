import React, { useEffect, useState } from 'react';
import Claim from '../../components/claims/Claim';
import { connect } from 'react-redux';
import { getClaims, deleteClaim } from '../../actions/claims';
import { IClaim } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';
import { useNavigate, useLocation } from 'react-router-dom';
import Toast from '../../components/commons/Toast/Toast';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';

interface IClaimsProps {
    getClaims: Function;
    deleteClaim: Function;
    claims: Array<IClaim>;
    isLoading: boolean;
    error: any;
}

const Claims = ({ getClaims, deleteClaim, claims, isLoading, error }: IClaimsProps) => {
    const { state }: any = useLocation();
    useEffect(() => {
        if (error) {
            setToastMessage('Ocurrió un error, intenta nuevamente');
            setToastIcon(<AiFillCloseCircle color="red" size={30} />);
            setShowToast(true);
        } else {
            if (state) {
                setToastMessage(state.toastMessage);
                setToastIcon(<AiFillCheckCircle color="green" size={30} />);
                setShowToast(true);
            }
        }
        window.history.replaceState(null, '');
        getClaims();
    }, []);

    const navigate = useNavigate();

    const navigateTo = (route: string, state?: object) => {
        navigate(route, state);
    };
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [toastIcon, setToastIcon] = useState<React.ReactNode>(<></>);

    useEffect(() => {
        showToast &&
            setTimeout(() => {
                setShowToast(false);
            }, 2500);
    }, [showToast]);

    return (
        <section className="flex flex-col h-full min-h-screen w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <div className="flex w-full justify-between">
                <h1 className="text-white text-4xl font-bold mb-10">Reclamos</h1>
                <div className="w-full md:w-3/12">
                    {showToast && <Toast icon={toastIcon} message={toastMessage} duration={2000} />}
                </div>
            </div>

            {isLoading ? (
                <div className="h-screen flex items-center justify-center">
                    <Loader size={28} />
                </div>
            ) : (
                <div className="flex flex-col w-full space-y-3">
                    <div className="w-2/12">
                        <CustomButton
                            text="Nuevo reclamo"
                            callback={async () => {
                                navigate('./create');
                            }}
                            color="alt"
                        ></CustomButton>
                    </div>
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        {claims.map((claim, index) => (
                            <Claim
                                key={index}
                                claim={claim}
                                deleteClaim={deleteClaim}
                                navigateTo={navigateTo}
                                setShowToast={setShowToast}
                                setToastMessage={setToastMessage}
                                setToastIcon={setToastIcon}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    claims: state.claims.claims,
    isLoading: state.claims.isLoading,
    error: state.error.status,
});

export default connect(mapStateToProps, { getClaims, deleteClaim })(Claims);
