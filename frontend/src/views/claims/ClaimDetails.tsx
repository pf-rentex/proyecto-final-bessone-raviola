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
} from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';
import { getClaim } from '../../actions/claims';
import { IClaim, ClaimCategory, ClaimStatus } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';

interface IClaimDetailsProps {
    getClaim: Function;
    claim: IClaim;
    isLoading: boolean;
}
interface IRouteParams {
    id: string;
}

const ClaimDetails = ({ getClaim, claim, isLoading }: IClaimDetailsProps) => {
    const params = useParams<IRouteParams>();
    useEffect(() => {
        getClaim(params.id);
    }, []);

    const [editing, setEditing] = useState<boolean>(false);

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <Link to="/claims">
                <IoArrowBackCircle className="w-14 h-14 text-alt my-5 cursor-pointer" />
            </Link>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl px-10 py-14">
                    <div className="flex flex-col mb-10">
                        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
                            <div className="rounded-full bg-alt p-5">
                                <BsLightningFill className="text-white w-5 h-5 md:w-14 md:h-14" />
                            </div>
                            <div className="flex items-center text-center space-x-5">
                                <input
                                    className={`text-white text-3xl font-bold rounded ${
                                        editing
                                            ? 'bg-white bg-opacity-25 pl-3'
                                            : 'bg-transparent'
                                    }`}
                                    disabled={!editing}
                                    placeholder={claim.title}
                                    value={claim.title}
                                    name="title"
                                />
                                <div className="rounded-full bg-alt p-2 cursor-pointer">
                                    {editing ? (
                                        <div className="flex space-x-3">
                                            <FaCheckCircle className="text-green-500 w-5 h-5" />
                                            <RiCloseCircleFill
                                                className="text-red-500 w-5 h-5"
                                                onClick={() => {
                                                    setEditing(false);
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
                                        className={`form-select appearance-none rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none ${
                                            editing
                                                ? 'bg-white bg-opacity-25 pl-3'
                                                : 'bg-transparent'
                                        }`}
                                        aria-label="Default select example"
                                        value={claim.category}
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
                                            className={`form-select appearance-none rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none pr-3 ${
                                                editing
                                                    ? 'bg-white bg-opacity-25 pl-3'
                                                    : 'bg-transparent'
                                            }`}
                                            aria-label="Default select example"
                                            value={claim.status}
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
                                        className={`text-white rounded ${
                                            editing
                                                ? 'bg-white bg-opacity-25 pl-3'
                                                : 'bg-transparent'
                                        }`}
                                        value={claim.createdAt}
                                        placeholder={claim.createdAt}
                                        disabled={!editing}
                                        name="createdAt"
                                    />
                                </p>
                                <p>
                                    Fecha de visita programada:{' '}
                                    <input
                                        type="date"
                                        className={`text-white rounded ${
                                            editing
                                                ? 'bg-white bg-opacity-25 pl-3'
                                                : 'bg-transparent'
                                        }`}
                                        value={claim.dateVisit}
                                        placeholder={claim.dateVisit}
                                        disabled={!editing}
                                        name="dateVisit"
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
                                        className={`text-white rounded ${
                                            editing
                                                ? 'bg-white bg-opacity-25 pl-3'
                                                : 'bg-transparent'
                                        }`}
                                        value={claim.address}
                                        placeholder={claim.address}
                                        disabled={!editing}
                                        name="address"
                                    />
                                </p>
                                <p>
                                    Técnico responsable:{' '}
                                    <input
                                        className={`text-white rounded ${
                                            editing
                                                ? 'bg-white bg-opacity-25 pl-3'
                                                : 'bg-transparent'
                                        }`}
                                        value={claim.technician}
                                        placeholder={claim.technician}
                                        disabled={!editing}
                                        name="technician"
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
                                className={`text-white rounded resize-none ${
                                    editing
                                        ? 'bg-white bg-opacity-25 pl-3'
                                        : 'bg-transparent'
                                }`}
                                value={claim.description}
                                placeholder={claim.description}
                                disabled={!editing}
                                name="description"
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
});

export default connect(mapStateToProps, { getClaim })(ClaimDetails);
