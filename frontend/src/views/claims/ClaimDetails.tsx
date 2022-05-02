import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
    BiPencil,
    BiCalendarEdit,
    FaCheckCircle,
    RiCloseCircleFill,
    IoArrowBackCircle,
    IoArrowBack,
    IoArrowForward,
    BsLightningFill,
    BsFillDropletFill,
    BsFillGearFill,
} from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';
import { getClaim, updateClaim } from '../../actions/claims';
import { IClaim, ClaimCategory, ClaimStatus } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';

interface IClaimDetailsProps {
    getClaim: Function;
    updateClaim: Function;
    claim: IClaim;
    isLoading: boolean;
    isUpdating: boolean;
}
interface IRouteParams {
    id: string;
}

const ClaimDetails = ({
    getClaim,
    updateClaim,
    claim,
    isLoading,
    isUpdating,
}: IClaimDetailsProps) => {
    const params = useParams<IRouteParams>();
    useEffect(() => {
        getClaim(params.id);
    }, []);

    useEffect(() => {
        if (!isLoading) setClaimData(claim);
    }, [isLoading]);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return [year, month, day].join('-');
    };

    const getIcon = (category: string) => {
        switch (category) {
            case ClaimCategory.electricity:
                return (
                    <BsLightningFill className="text-white w-5 h-5 md:w-14 md:h-14" />
                );
            case ClaimCategory.plumbing:
                return (
                    <BsFillDropletFill className="text-white w-5 h-5 md:w-14 md:h-14" />
                );
            case ClaimCategory.infrastructure:
                return (
                    <BsFillGearFill className="text-white w-5 h-5 md:w-14 md:h-14" />
                );
        }
    };

    const handleChange = (e: any) => {
        setClaimData({ ...claimData, [e.target.name]: e.target.value });
        console.log(claimData);
    };

    const [editing, setEditing] = useState<boolean>(false);
    const [claimData, setClaimData] = useState<IClaim>(claim);

    let [inputBG, setInputBG] = useState<string>('bg-transparent');

    useEffect(() => {
        setInputBG(editing ? 'bg-white bg-opacity-25 pl-3' : 'bg-transparent');
    }, [editing]);

    return (
        <section className="flex flex-col h-full min-h-screen w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <Link to="/claims">
                <IoArrowBackCircle className="w-14 h-14 text-alt my-5 cursor-pointer" />
            </Link>
            {isLoading ? (
                <div className="h-screen flex items-center justify-center">
                    <Loader size={28} />
                </div>
            ) : (
                <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl px-10 py-14">
                    <div className="flex flex-col mb-10">
                        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
                            <div className="rounded-full bg-alt p-5">
                                {editing
                                    ? getIcon(claimData.category)
                                    : getIcon(claim.category)}
                            </div>
                            <div className="flex items-center text-center space-x-5">
                                <input
                                    className={`text-white text-3xl font-bold rounded ${inputBG}`}
                                    disabled={!editing}
                                    value={
                                        !editing ? claim.title : claimData.title
                                    }
                                    name="title"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <div className="rounded-full bg-alt p-2 cursor-pointer">
                                    {!isUpdating ? (
                                        editing ? (
                                            <div className="flex space-x-3">
                                                <FaCheckCircle
                                                    className="text-green-500 w-5 h-5"
                                                    onClick={() => {
                                                        updateClaim(claimData);
                                                        setEditing(false);
                                                    }}
                                                />

                                                <RiCloseCircleFill
                                                    className="text-red-500 w-5 h-5"
                                                    onClick={() => {
                                                        setEditing(false);
                                                        setClaimData(claim);
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <BiPencil
                                                className="text-white w-5 h-5"
                                                onClick={() => {
                                                    setEditing(true);
                                                }}
                                            />
                                        )
                                    ) : (
                                        <Loader />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-10 md:mt-0 md:flex-row md:px-28">
                            <div className="flex flex-col space-y-3 w-full xl:w-4/12 text-white">
                                <p>
                                    Categoría:{' '}
                                    <select
                                        disabled={!editing}
                                        className={`form-select appearance-none rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none ${inputBG}`}
                                        aria-label="Default select example"
                                        value={
                                            !editing
                                                ? claim.category
                                                : claimData.category
                                        }
                                        name="category"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option
                                            value={ClaimCategory.electricity}
                                        >
                                            Electricidad
                                        </option>
                                        <option value={ClaimCategory.plumbing}>
                                            Plomería
                                        </option>
                                        <option
                                            value={ClaimCategory.infrastructure}
                                        >
                                            Infraestructura
                                        </option>
                                    </select>
                                </p>
                                <p>
                                    Estado:{' '}
                                    <span className="text-yellow-300 font-bold">
                                        <select
                                            disabled={!editing}
                                            className={`form-select appearance-none rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none pr-3 ${inputBG}`}
                                            aria-label="Default select example"
                                            value={
                                                !editing
                                                    ? claim.status
                                                    : claimData.status
                                            }
                                            name="status"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        >
                                            <option
                                                value={ClaimStatus.inProgress}
                                            >
                                                En progreso
                                            </option>
                                            <option value={ClaimStatus.pending}>
                                                Pendiente
                                            </option>
                                            <option
                                                value={ClaimStatus.cancelled}
                                            >
                                                Cancelado
                                            </option>
                                            <option
                                                value={ClaimStatus.addressed}
                                            >
                                                Atendido
                                            </option>
                                        </select>
                                    </span>
                                </p>
                                <p>
                                    Fecha de carga:{' '}
                                    <input
                                        type="date"
                                        className={`text-white rounded ${inputBG}`}
                                        value={formatDate(
                                            new Date(
                                                !editing
                                                    ? claim.createdAt
                                                    : claimData.createdAt,
                                            ),
                                        )}
                                        disabled={!editing}
                                        name="createdAt"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />
                                </p>
                                <p>
                                    Fecha de visita programada:{' '}
                                    <input
                                        type="date"
                                        className={`text-white rounded ${inputBG}`}
                                        value={formatDate(
                                            new Date(
                                                !editing
                                                    ? claim.dateVisit
                                                    : claimData.dateVisit,
                                            ),
                                        )}
                                        disabled={!editing}
                                        name="dateVisit"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />
                                </p>
                                <div className="w-full lg:w-8/12">
                                    <CustomButton
                                        text="Reprogramar visita"
                                        callback={() => {}}
                                        color="alt"
                                    >
                                        <BiCalendarEdit />
                                    </CustomButton>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3 w-full xl:w-3/12 text-white">
                                <p>
                                    Domicilio propiedad:{' '}
                                    <input
                                        className={`text-white rounded ${inputBG}`}
                                        value={
                                            !editing
                                                ? claim.address
                                                : claimData.address
                                        }
                                        disabled={!editing}
                                        name="address"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />
                                </p>
                                <p>
                                    Técnico responsable:{' '}
                                    <input
                                        className={`text-white rounded ${inputBG}`}
                                        value={
                                            !editing
                                                ? claim.technician
                                                : claimData.technician
                                        }
                                        disabled={!editing}
                                        name="technician"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:px-28 mb-10">
                        <h1 className="text-white text-3xl font-bold mb-3">
                            Descripción
                        </h1>

                        <div className="w-full md:w-8/12">
                            <textarea
                                cols={50}
                                rows={5}
                                className={`text-white rounded resize-none ${inputBG}`}
                                value={
                                    !editing
                                        ? claim.description
                                        : claimData.description
                                }
                                disabled={!editing}
                                name="description"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full md:w-6/12 sm:space-x-5 sm:px-20 md:px-28">
                        <CustomButton
                            text="Resolver"
                            callback={() => {}}
                            color="alt"
                        >
                            <FaCheckCircle className="text-green-500" />
                        </CustomButton>
                        <CustomButton
                            text="Cancelar"
                            callback={() => {}}
                            color="alt"
                        >
                            <RiCloseCircleFill className="text-red-500" />
                        </CustomButton>
                    </div>
                </div>
            )}

            <div className="flex w-full justify-end my-5">
                <div className="flex flex-col lg:flex-row w-full lg:w-4/12 lg:space-x-3">
                    <CustomButton
                        text="Reclamo anterior"
                        callback={() => {}}
                        color="alt"
                    >
                        <IoArrowBack className="text-white" />
                    </CustomButton>
                    <CustomButton
                        text="Siguiente reclamo"
                        callback={() => {}}
                        color="alt"
                    >
                        <IoArrowForward className="text-white" />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    claim: state.claims.claim,
    isLoading: state.claims.isLoading,
    isUpdating: state.claims.isUpdating,
});

export default connect(mapStateToProps, { getClaim, updateClaim })(
    ClaimDetails,
);
