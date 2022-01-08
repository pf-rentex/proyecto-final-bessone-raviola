import React from 'react';
import Complaint from '../../components/complaints/Complaint';
import {
    BsFillDropletFill,
    BsFillGearFill,
    BsLightningFill,
} from 'react-icons/all';

const Complaints = () => {
    //Replace with complaints retrieved from backend
    let complaints = [
        {
            icon: <BsLightningFill className="text-white w-64 h-28" />,
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
        {
            icon: <BsLightningFill className="text-white w-64 h-28" />,
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

            <div className="flex flex-col items-center xl:flex-row md:px-12 space-y-8 xl:space-y-0 xl:space-x-5">
                <div className="flex flex-col w-full lg:w-8/12 xl:w-6/12 space-y-8">
                    {complaints
                        .slice(0, Math.floor(complaints.length / 2))
                        .map((complaint, index) => (
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
                <div className="flex flex-col w-full lg:w-8/12 xl:w-6/12 space-y-8">
                    {complaints
                        .slice(
                            Math.floor(complaints.length / 2),
                            complaints.length,
                        )
                        .map((complaint, index) => (
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
            </div>
        </section>
    );
};

export default Complaints;
