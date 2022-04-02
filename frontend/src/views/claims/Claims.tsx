import React, { useEffect } from 'react';
import Claim from '../../components/claims/Claim';
import {
    BsFillDropletFill,
    BsFillGearFill,
    BsLightningFill,
} from 'react-icons/all';
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

const Claims = ({
    getClaims,
    deleteClaim,
    claims,
    isLoading,
}: IClaimsProps) => {
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
    //Replace with claims retrieved from backend
    // let claims = [
    //     {
    //         icon: <BsLightningFill className="text-white w-64 h-28" />,
    //         title: 'Falla toma de corriente',
    //         category: 'Electricidad',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.inProgress,
    //     },
    //     {
    //         icon: <BsFillDropletFill className="text-white w-64 h-28" />,
    //         title: 'Gotera canilla baño',
    //         category: 'Plomería',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.addressed,
    //     },
    //     {
    //         icon: <BsFillGearFill className="text-white w-64 h-28" />,
    //         title: 'Pared agrietada',
    //         category: 'Infraestructura',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.cancelled,
    //     },
    //     {
    //         icon: <BsLightningFill className="text-white w-64 h-28" />,
    //         title: 'Falla toma de corriente',
    //         category: 'Electricidad',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.inProgress,
    //     },
    //     {
    //         icon: <BsFillDropletFill className="text-white w-64 h-28" />,
    //         title: 'Gotera canilla baño',
    //         category: 'Plomería',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.addressed,
    //     },
    //     {
    //         icon: <BsFillGearFill className="text-white w-64 h-28" />,
    //         title: 'Pared agrietada',
    //         category: 'Infraestructura',
    //         date: '01/06/2022',
    //         status: ComplaintStatus.cancelled,
    //     },
    // ];

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <h1 className="text-white text-4xl font-bold mb-10">Reclamos</h1>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col xl:flex-row md:px-12 space-y-8 xl:space-y-0 xl:space-x-5">
                    <div className="flex flex-col w-full lg:w-8/12 xl:w-6/12 space-y-8">
                        {claims
                            .slice(0, Math.floor(claims.length / 2))
                            .map((claim, index) => (
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
                    <div className="flex flex-col w-full lg:w-8/12 xl:w-6/12 space-y-8">
                        {claims
                            .slice(Math.floor(claims.length / 2), claims.length)
                            .map((claim, index) => (
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
