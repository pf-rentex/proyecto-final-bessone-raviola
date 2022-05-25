import React from 'react';
import { HiFilter } from 'react-icons/hi';
import FiltersModal from './FiltersModal';
import FiltersContent from './FiltersContent';

const Filters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);

    return (
        <>
            <section className="flex hidden md:block h-full flex-col bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 mx-5 rounded">
                <div className="bg-alt w-full rounded-t p-3 text-center">
                    <h1 className="text-white font-extrabold">Filtros de búsqueda </h1>
                </div>
                <FiltersContent />
            </section>
            <div className="block md:hidden">
                <button
                    className="bg-alt p-3 rounded my-3 sm:my-0 sm:mx-3"
                    onClick={() => {
                        setIsFiltersOpen(true);
                    }}
                >
                    <HiFilter className="w-5 h-5 text-white" />
                </button>
                <FiltersModal isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen} />
            </div>
        </>
    );
};

export default Filters;
