import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { getProperties } from '../../actions/properties';
import { IProperty } from '../../reducers/properties';
import Listing from '../../components/properties/Listing';
import Visit from "../../components/properties/Visit";

interface ISearchProps {
    getProperties: Function;
    properties: Array<IProperty>;
    isLoading: boolean;
}

const Search = ({ getProperties, properties, isLoading }: ISearchProps) => {
    const [showVisitDialog, setShowVisitDialog] = useState(false);
    useEffect(() => {
        getProperties();
    }, []);

    const toggleVisitDialog = () => {
        setShowVisitDialog(!showVisitDialog);
    };

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 px-5 lg:px-20 py-10">
            {showVisitDialog && <Visit onClose={() => toggleVisitDialog()}/>}
            <div className="flex justify-center lg:justify-end">
                <div className="relative w-full lg:w-9/12 text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearch className="w-7 h-7" />
                    </span>
                    <input
                        type="search"
                        name="search"
                        className="px-10 py-3 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
                        placeholder="Buscar"
                    />
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                {isLoading ? (
                    <div>loading...</div>
                ) : (
                    <div className="w-full lg:w-9/12">
                        {properties.map((property, index) => {
                            return <Listing key={index} onOpenVisitDialog={toggleVisitDialog} />;
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

const mapStateToProps = (state: any) => ({
    properties: state.properties.properties,
    isLoading: state.properties.isLoading,
});

export default connect(mapStateToProps, { getProperties })(Search);
