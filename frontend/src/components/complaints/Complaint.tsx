import React, { useEffect, useState } from 'react';
import CustomButton from '../../components/commons/Button/CustomButton';
import { AiOutlineSearch, HiOutlineTrash } from 'react-icons/all';
import { ComplaintStatus } from '../../views/complaints/Complaints';

interface IComplaintProps {
    icon: React.ReactNode;
    title: string;
    category: string;
    date: string;
    status: string;
}

const Complaint = ({
    icon = <></>,
    title,
    category,
    date,
    status = ComplaintStatus.addressed,
}: IComplaintProps) => {
    const [statusColor, setStatusColor] = useState('green-300');
    useEffect(() => {
        switch (status) {
            case ComplaintStatus.addressed:
                setStatusColor('green-300');
                break;
            case ComplaintStatus.inProgress:
                setStatusColor('yellow-300');
                break;
            case ComplaintStatus.cancelled:
                setStatusColor('red-500');
                break;
        }
    }, [status]);

    return (
        <div className="flex flex-col md:flex-row bg-blue-500 rounded-lg">
            <div className="flex w-full md:w-3/12 bg-alt rounded-lg items-center justify-center p-8">
                {icon}
            </div>
            <div className="flex flex-col w-full md:w-9/12 p-5 text-white space-y-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>Categoría: {category}</p>
                <p>Fecha de carga: {date}</p>
                <p>
                    Estado:
                    <span className={`px-2 font-bold text-${statusColor}`}>
                        {status.toUpperCase()}
                    </span>
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-5">
                    <CustomButton
                        text="Detalles"
                        callback={() => {}}
                        color="alt"
                    >
                        <AiOutlineSearch />
                    </CustomButton>
                    <CustomButton
                        text="Eliminar"
                        callback={() => {}}
                        color="alt"
                    >
                        <HiOutlineTrash />
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Complaint;