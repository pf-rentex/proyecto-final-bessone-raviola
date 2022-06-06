import React, { useEffect, useState } from 'react';
import Claim from '../../components/claims/Claim';
import { connect } from 'react-redux';
import { getClaims, deleteClaim } from '../../actions/claims';
import { IClaim } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/commons/Toast/Toast';
import CustomButton from '../../components/commons/Button/CustomButton';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

interface IClaimsProps {
    getClaims: Function;
    deleteClaim: Function;
    claims: Array<IClaim>;
    isLoading: boolean;
    toast: any;
}

const Claims = ({ getClaims, deleteClaim, claims, isLoading, toast }: IClaimsProps) => {
    useEffect(() => {
        getClaims();
    }, []);

    const navigate = useNavigate();

    const navigateTo = (route: string, state?: object) => {
        navigate(route, state);
    };

    return (
        <section className="flex flex-col h-full min-h-screen w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <div className="flex w-full justify-between">
                <h1 className="text-white text-4xl font-bold mb-10">Reclamos</h1>
                {toast.msg && (
                    <Toast
                        icon={
                            toast.icon === 'success' ? (
                                <AiFillCheckCircle size={30} color="green" />
                            ) : (
                                <AiFillCloseCircle size={30} color="red" />
                            )
                        }
                        message={toast.msg}
                        duration={3000}
                    />
                )}
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
                            <Claim key={index} claim={claim} deleteClaim={deleteClaim} navigateTo={navigateTo} />
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
    toast: state.toast,
});

export default connect(mapStateToProps, { getClaims, deleteClaim })(Claims);
