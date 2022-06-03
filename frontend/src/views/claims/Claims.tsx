import React, { useEffect } from 'react';
import Claim from '../../components/claims/Claim';
import { BsFillDropletFill, BsFillGearFill, BsLightningFill } from 'react-icons/all';
import { connect } from 'react-redux';
import { getClaims, deleteClaim } from '../../actions/claims';
import { IClaim, ClaimCategory } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';

interface IClaimsProps {
    getClaims: Function;
    deleteClaim: Function;
    claims: Array<IClaim>;
    isLoading: boolean;
}

const Claims = ({ getClaims, deleteClaim, claims, isLoading }: IClaimsProps) => {
    useEffect(() => {
        getClaims();
    }, []);

    const getIcon = (category: string) => {
        switch (category) {
            case ClaimCategory.electricity:
                return <BsLightningFill className="text-white w-64 h-28" />;
            case ClaimCategory.plumbing:
                return <BsFillDropletFill className="text-white w-64 h-28" />;
            case ClaimCategory.infrastructure:
                return <BsFillGearFill className="text-white w-64 h-28" />;
        }
    };

    return (
        <section className="flex flex-col h-full min-h-screen w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <h1 className="text-white text-4xl font-bold mb-10">Reclamos</h1>

            {isLoading ? (
                <div className="h-screen flex items-center justify-center">
                    <Loader size={28} />
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    {claims.map((claim, index) => (
                        <Claim
                            key={index}
                            id={claim._id}
                            icon={getIcon(claim.category)}
                            title={claim.title}
                            category={claim.category}
                            date={claim.createdAt}
                            status={claim.status}
                            deleteClaim={deleteClaim}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    claims: state.claims.claims,
    isLoading: state.claims.isLoading,
});

export default connect(mapStateToProps, { getClaims, deleteClaim })(Claims);
