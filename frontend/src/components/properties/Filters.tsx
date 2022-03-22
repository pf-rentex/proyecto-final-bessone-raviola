import React, { useEffect } from 'react';
import CustomButton from '../commons/Button/CustomButton';
import { MdAttachMoney } from 'react-icons/md';
import { HiFilter } from 'react-icons/hi';
import { useState } from 'react';
import FiltersModal from './FiltersModal';
import FiltersContent from './FiltersContent';

const Filters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);

    return (
        <>
            <section className="flex hidden md:block h-full flex-col bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 mx-5 rounded">
                <div className="bg-alt w-full rounded-t p-3 text-center">
                    <h1 className="text-white font-extrabold">
                        Filtros de búsqueda{' '}
                    </h1>
                </div>
                <FiltersContent />
            </section>
            <div className="block md:hidden mx-5">
                <CustomButton
                    text="Filters"
                    color="alt"
                    callback={() => {
                        setIsFiltersOpen(true);
                    }}
                >
                    <HiFilter className="w-5 h-5 text-white" />
                </CustomButton>
                <FiltersModal
                    isOpen={isFiltersOpen}
                    setIsOpen={setIsFiltersOpen}
                />
            </div>
        </>
    );
};

export default Filters;
