import React, { useState } from 'react';
import {
    BiPencil,
    BiCalendarEdit,
    FaCheckCircle,
    RiCloseCircleFill,
    IoArrowBackCircle,
    IoArrowBack,
    IoArrowForward,
    BsFillDropletFill,
    BsFillGearFill,
    BsLightningFill,
} from 'react-icons/all';
import CustomButton from '../../components/commons/Button/CustomButton';
import { connect } from 'react-redux';
import { createClaim } from '../../actions/claims';
import { ClaimStatus, IClaim, ClaimCategory } from '../../reducers/claims';
import Loader from '../../components/commons/Loader';
import Attachment from '../../components/commons/Attachment/Attachment';
import AttachmentRequest from '../../components/commons/Attachment/AttachmentRequest';

interface ICreateClaimProps {
    createClaim: Function;
    isLoading: boolean;
}

const CreateClaim = ({ createClaim, isLoading }: ICreateClaimProps) => {
    const [claimData, setClaimData] = useState<IClaim>({
        title: '',
        description: '',
        technician: 'Técnico', // Change later (the tenant won't choose the technician)
        propertyId: '619947dd6f77679edc5bd7ec', // Change later
        userId: '6158ee0fbee2d07b0bcdb2f4', // Change later
        status: ClaimStatus.pending,
        category: ClaimCategory.electricity,
        dateVisit: '',
        createdAt: new Date().toString(),
        address: 'Belgrano 2624', //Change later (should take the address of the property from which the claim is being submitted)
        claimPictures: [],
    });

    const handleChange = (e: any) => {
        if (e.target.files) {
            if (e.target.files.length !== 0) {
                //fixs error of cancelling when a file has already been attached
                setClaimData({
                    ...claimData,
                    [e.target.name]:
                        // @ts-ignore
                        claimData[e.target.name]
                            ? [
                                  // @ts-ignore
                                  ...claimData[e.target.name],
                                  e.target.files[0],
                              ]
                            : [e.target.files[0]],
                });
            }
        } else {
            setClaimData({ ...claimData, [e.target.name]: e.target.value });
        }
    };

    const handleFileDelete = (fileName: string) => {
        setClaimData({
            ...claimData,
            claimPictures: claimData.claimPictures.filter(
                (file: any) => file.name !== fileName,
            ),
        });
    };

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <IoArrowBackCircle className="w-14 h-14 text-alt my-5 cursor-pointer" />
            <h1 className="text-white text-3xl font-bold p-5">Nuevo Reclamo</h1>
            <div className="bg-gradient-to-b from-bg-gradient-10 rounded-xl px-10 py-14">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Título
                        </h1>
                        <input
                            type="text"
                            className="px-3 pt-3 w-full md:w-8/12 border-b-2 border-primary bg-transparent text-white rounded text-lg font-medium shadow focus:outline-none focus:shadow-outline"
                            style={{
                                transition: 'all 0.15s ease 0s',
                            }}
                            onChange={handleChange}
                            name="title"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Categoría
                        </h1>
                        <div className="flex justify-center md:justify-start space-x-10">
                            <div
                                className="flex flex-col items-center space-y-2 cursor-pointer focus:text-black"
                                onClick={() => {
                                    handleChange({
                                        target: {
                                            name: 'category',
                                            value: ClaimCategory.electricity,
                                        },
                                    });
                                }}
                            >
                                <div
                                    className={`rounded-full p-5 w-14 h-14 sm:w-20 sm:h-20 ${
                                        claimData.category ===
                                        ClaimCategory.electricity
                                            ? 'bg-primary'
                                            : 'bg-alt'
                                    }`}
                                    tabIndex={0}
                                >
                                    <BsLightningFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Electricidad
                                </p>
                            </div>
                            <div
                                className="flex flex-col items-center space-y-2 cursor-pointer"
                                onClick={() => {
                                    handleChange({
                                        target: {
                                            name: 'category',
                                            value: ClaimCategory.plumbing,
                                        },
                                    });
                                }}
                            >
                                <div
                                    className={`rounded-full p-5 w-14 h-14 sm:w-20 sm:h-20 ${
                                        claimData.category ===
                                        ClaimCategory.plumbing
                                            ? 'bg-primary'
                                            : 'bg-alt'
                                    }`}
                                    tabIndex={0}
                                >
                                    <BsFillDropletFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Plomería
                                </p>
                            </div>
                            <div
                                className="flex flex-col items-center space-y-2 cursor-pointer"
                                onClick={() => {
                                    handleChange({
                                        target: {
                                            name: 'category',
                                            value: ClaimCategory.infrastructure,
                                        },
                                    });
                                }}
                            >
                                <div
                                    className={`rounded-full p-5 w-14 h-14 sm:w-20 sm:h-20 ${
                                        claimData.category ===
                                        ClaimCategory.infrastructure
                                            ? 'bg-primary'
                                            : 'bg-alt'
                                    }`}
                                    tabIndex={0}
                                >
                                    <BsFillGearFill className="text-white w-5 h-5 sm:w-10 sm:h-10" />
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    Infraestructura
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Fecha de programación de visita
                        </h1>
                        <input
                            type="date"
                            className="px-3 py-3 w-full md:w-4/12 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                            placeholder="Fecha de nacimiento"
                            name="dateVisit"
                            style={{ transition: 'all 0.15s ease 0s' }}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-white font-bold text-2xl mb-3">
                            Adjunte Fotos
                        </h5>
                        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
                            {claimData.claimPictures ? (
                                claimData.claimPictures.map(
                                    (attachment: any, index: any) => {
                                        return (
                                            <Attachment
                                                key={index}
                                                name={attachment.name}
                                                size={attachment.size}
                                                attachedDate={new Date().toDateString()}
                                                handleDelete={() =>
                                                    handleFileDelete(
                                                        attachment.name,
                                                    )
                                                }
                                            />
                                        );
                                    },
                                )
                            ) : (
                                <></>
                            )}

                            <AttachmentRequest
                                name="claimPictures"
                                handleFile={(e: any) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-2xl font-bold mb-3">
                            Descripción
                        </h1>
                        <textarea
                            className="px-3 py-3 resize-none placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline w-full"
                            rows={4}
                            style={{ transition: 'all 0.15s ease 0s' }}
                            name="description"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="flex flex-col md:flex-row w-full lg:w-4/12 md:space-x-5">
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <CustomButton
                                    text="Confirmar"
                                    callback={() => {
                                        createClaim(claimData);
                                    }}
                                    color="alt"
                                >
                                    <FaCheckCircle className="text-green-500" />
                                </CustomButton>
                            )}
                            <CustomButton
                                text="Cancelar"
                                callback={() => {}}
                                color="alt"
                            >
                                <RiCloseCircleFill className="text-red-500" />
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    claims: state.claims.claims,
    isLoading: state.claims.isLoading,
});

export default connect(mapStateToProps, { createClaim })(CreateClaim);
