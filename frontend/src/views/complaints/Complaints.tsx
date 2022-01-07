import React from 'react';
import Complaint from '../../components/complaints/Complaint';
import { ReactComponent as Lightning } from '../../assets/Lightning.svg';
import { BsFillDropletFill, BsFillGearFill } from 'react-icons/all';
import { ReactComponent as Drop } from '../../assets/Drop.svg';
import { ReactComponent as Engine } from '../../assets/Engine.svg';

const Complaints = () => {
    //Replace with complaints retrieved from backend
    let complaints = [
        {
            icon: <Lightning className="h-28" />,
            title: 'Falla toma de corriente',
            category: 'Electricidad',
            date: '01/06/2022',
            status: 'En curso',
        },
        {
            icon: <BsFillDropletFill className="text-white w-64 h-28" />,
            title: 'Gotera canilla baño',
            category: 'Plomería',
            date: '01/06/2022',
            status: 'Atendido',
        },
        {
            icon: <BsFillGearFill className="text-white w-64 h-28" />,
            title: 'Pared agrietada',
            category: 'Infraestructura',
            date: '01/06/2022',
            status: 'Cancelado',
        },
    ];

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <h1 className="text-white text-4xl font-bold mb-10">Reclamos</h1>

            <div className="flex px-12">
                <div className="flex flex-col w-6/12 space-y-8">
                    {complaints.map((complaint, index) => (
                        <Complaint
                            key={index}
                            icon={complaint.icon}
                            title={complaint.title}
                            category={complaint.category}
                            date={complaint.date}
                            status={complaint.status}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-6/12"></div>
            </div>
        </section>
    );
};

export default Complaints;
