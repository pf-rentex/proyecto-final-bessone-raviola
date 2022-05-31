import React from 'react';
import Request from "../../../components/rent/request/Request";

type RentType = 'house' | 'apartment';

export interface IRentalRequest {
    type: RentType;
    address: string;
    tenant: {
        name: string;
        profileUrl: string;
    };
    seeDetailsUrl: string;
}

const RentRequests = () => {

    const requests: IRentalRequest[] = [
        {
            type: 'house',
            address: 'Capitan Giachino 1472',
            tenant: {
                name: 'Juan Perez',
                profileUrl: '/juan-perez184712',
            },
            seeDetailsUrl: '/request/1',
        },
        {
            type: 'apartment',
            address: 'General Paz 1215',
            tenant: {
                name: 'Bruno Lopez',
                profileUrl: '/bruno-lopez184712',
            },
            seeDetailsUrl: '/request/1',
        },
        {
            type: 'apartment',
            address: 'Lavalle 1525',
            tenant: {
                name: 'Ricardo Escobar',
                profileUrl: '/ricardo-escobar184712',
            },
            seeDetailsUrl: '/request/1',
        },
        {
            type: 'apartment',
            address: 'Capitan Giachino 1472',
            tenant: {
                name: 'Juan Perez',
                profileUrl: '/juan-perez184712',
            },
            seeDetailsUrl: '/request/1',
        },
        {
            type: 'house',
            address: 'General Paz 1215',
            tenant: {
                name: 'Bruno Lopez',
                profileUrl: '/bruno-lopez184712',
            },
            seeDetailsUrl: '/request/1',
        },
        {
            type: 'house',
            address: 'Lavalle 1525',
            tenant: {
                name: 'Ricardo Escobar',
                profileUrl: '/ricardo-escobar184712',
            },
            seeDetailsUrl: '/request/1',
        },
    ]

    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 pt-5 px-2">
            <div className="pl-1 lg:pl-52">
                <h1 className="text-white text-4xl py-10 lg:py-4 text-center lg:text-left font-bold w-full lg:w-3/12">
                    Mis Solicitudes
                </h1>
                <div className="flex flex-wrap justify-evenly">
                    {requests.map((request: IRentalRequest, index: number) => (
                        <Request
                            key={index}
                            type={request.type}
                            address={request.address}
                            tenant={request.tenant}
                            seeDetailsUrl={request.seeDetailsUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default RentRequests;