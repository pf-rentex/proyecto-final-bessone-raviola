import React, { useEffect, useState } from 'react';
import CustomButton from '../commons/Button/CustomButton';
import {
    AiOutlineSearch,
    HiOutlineTrash,
    BsFillDropletFill,
    BsFillGearFill,
    BsLightningFill,
    BsFillTrashFill,
} from 'react-icons/all';
import { ClaimStatus, IClaim, ClaimCategory } from '../../reducers/claims';
import Modal from '../../components/commons/Modal/Modal';

interface IClaimProps {
    claim: IClaim;
    deleteClaim: Function;
    navigateTo: Function;
}

const Claim = ({ claim, deleteClaim, navigateTo }: IClaimProps) => {
    const { _id, title, category, createdAt, status } = claim;
    const [statusColor, setStatusColor] = useState('green-300');
    useEffect(() => {
        switch (status) {
            case ClaimStatus.addressed:
                setStatusColor('green-300');
                break;
            case ClaimStatus.inProgress:
                setStatusColor('yellow-300');
                break;
            case ClaimStatus.cancelled:
                setStatusColor('red-500');
                break;
        }
    }, [status]);

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

    const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
    const toggleDeleteDialog = () => {
        setShowDeleteDialog(!showDeleteDialog);
    };

    return (
        <div className="flex flex-col md:flex-row bg-blue-500 rounded-lg cursor-pointer hover:scale-125">
            <div className="flex w-full md:w-3/12 bg-alt rounded-lg items-center justify-center p-8">
                {getIcon(category)}
            </div>
            <div className="flex flex-col w-full md:w-9/12 p-5 text-white space-y-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>Categoría: {category}</p>
                <p>Fecha de carga: {createdAt}</p>
                <p>
                    Estado:
                    <span className={`px-2 font-bold text-${statusColor}`}>{status?.toUpperCase()}</span>
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-5">
                    <CustomButton
                        text="Detalles"
                        color="alt"
                        callback={() => {
                            navigateTo(`./${_id}`);
                        }}
                    >
                        <AiOutlineSearch />
                    </CustomButton>

                    <CustomButton
                        text="Eliminar"
                        callback={() => {
                            setShowDeleteDialog(true);
                        }}
                        color="alt"
                    >
                        <HiOutlineTrash />
                    </CustomButton>
                </div>
            </div>

            {showDeleteDialog && (
                <Modal
                    title="Eliminar Reclamo"
                    action={{
                        text: 'Eliminar',
                        callback: () => {
                            deleteClaim(_id);
                        },
                        icon: <BsFillTrashFill className="text-alt" color={'#7bf3ff'} />,
                    }}
                    onClose={toggleDeleteDialog}
                    content={
                        <>
                            <div className="flex justify-center p-10">
                                <h1 className="font-bold text-2xl">¿Está seguro que desea eliminar este reclamo?</h1>
                            </div>
                        </>
                    }
                />
            )}
        </div>
    );
};

export default Claim;
