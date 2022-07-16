import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Badge } from '../Badge/Badge';
import { useClickedOutside } from '../../../utils';
import SidebarItem from './SidebarItem';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface ISidebarProps {
    isOpen: boolean;
    setIsOpen: Function;
}

export interface ISidebarItem {
    title: string;
    icon?: React.ReactNode;
    callback?: () => void;
    children?: { title: string; callback?: () => void; icon: React.ReactNode }[];
}

const Sidebar = ({ isOpen, setIsOpen }: ISidebarProps) => {
    const wrapperRef = useRef(null);
    useClickedOutside(wrapperRef, () => isOpen && setIsOpen(false));
    const navigate = useNavigate();

    const items: ISidebarItem[] = [
        {
            title: 'Solicitudes',
            callback: () => {
                navigate('/rent/requests');
                setIsOpen(false);
            },
            icon: <Badge>4</Badge>,
        },
        {
            title: 'Publicaciones',
            callback: () => {
                navigate('/properties/search');
                setIsOpen(false);
            },
            icon: <BsPlusCircleFill />,
        },
        {
            title: 'Reclamos',
            callback: () => {
                navigate('/claims');
                setIsOpen(false);
            },
            icon: <Badge>4</Badge>,
        },
        {
            title: 'Contratos',
            children: [
                {
                    title: 'Crear',
                    callback: () => {
                        navigate('/contracts/create');
                        setIsOpen(false);
                    },
                    icon: <AiOutlinePlus className="w-5 h-5" />,
                },
                {
                    title: 'Ver todos',
                    callback: () => {
                        navigate('/contracts');
                        setIsOpen(false);
                    },
                    icon: <BiSearch className=" w-5 h-5" />,
                },
            ],
        },
        {
            title: 'Propiedades',
            callback: () => {
                navigate('/properties');
                setIsOpen(false);
            },
            icon: <BsPlusCircleFill />,
        },
    ];

    return (
        <div
            data-testid={'sidebar'}
            ref={wrapperRef}
            className={`flex flex-col w-8/12 lg:w-5/12 xl:w-3/12 h-full fixed z-30 bg-gradient-to-b from-bg-gradient-11 to-bg-gradient-12 text-white transition duration-300 transform ${
                isOpen ? 'translate-x-0 ' : '-translate-x-full'
            }`}
        >
            <div className={`bg-alt w-full p-3  ${!isOpen ? 'translate-x-0 ' : '-translate-x-full'}`}>
                <h1 className="text-center text-3xl font-semibold">Dashboard</h1>
            </div>
            <div className={`p-4 ${!isOpen ? 'translate-x-0 ' : '-translate-x-full'}`}>
                <ul className="divide-y text-xl">
                    {items.map((item: ISidebarItem, index) => (
                        <SidebarItem key={index} item={item}></SidebarItem>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
