import CustomButton from '../commons/Button/CustomButton';
import { MdAttachMoney } from 'react-icons/md';
import { useState } from 'react';

enum RentTypes {
    Temporary = 'Temporal',
    Permanent = 'Permanente',
}

const Filters = () => {
    const [rentType, setRentType] = useState(RentTypes.Temporary);

    return (
        <section className="flex w-5/12 xl:w-3/12 flex-col bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 mx-5 rounded">
            <div className="bg-alt w-full rounded-t p-3 text-center">
                <h1 className="text-white font-extrabold">
                    Filtros de búsqueda{' '}
                </h1>
            </div>
            <div className="p-5 px-10 flex flex-col">
                <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Cantidad de habitaciones"
                >
                    <option selected>Cantidad de habitaciones</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="flex flex-col space-y-3 my-5">
                    <h5 className="text-white font-semibold">
                        Rango de precios (ARS)
                    </h5>
                    <div className="flex w-full flex-col xl:flex-row space-y-3 xl:space-y-0 xl:justify-center">
                        <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdAttachMoney className="w-7 h-7" />
                            </span>
                            <input
                                className="px-3 w-full py-3 pl-10 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                placeholder="10.000"
                                name="startPrice"
                                style={{ transition: 'all 0.15s ease 0s' }}
                                // onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdAttachMoney className="w-7 h-7" />
                            </span>
                            <input
                                className="px-3 w-full py-3 pl-10 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                placeholder="20.000"
                                name="endPrice"
                                style={{ transition: 'all 0.15s ease 0s' }}
                                // onChange={(e) => onChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-white font-semibold">
                        Tipo de alquiler
                    </h5>
                    <div className="flex flex-col xl:flex-row xl:space-x-3">
                        <CustomButton
                            text="Temporal"
                            callback={() => {
                                setRentType(RentTypes.Temporary);
                            }}
                            outlined={rentType !== RentTypes.Temporary}
                        />
                        <CustomButton
                            text="Permanente"
                            callback={() => {
                                setRentType(RentTypes.Permanent);
                            }}
                            outlined={rentType !== RentTypes.Permanent}
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-5 mt-5">
                    <h5 className="text-white text-center font-bold">
                        {`Alquiler ${rentType}`}
                    </h5>
                    <div className="flex flex-col space-y-3">
                        <h5 className="text-white font-semibold">Fechas</h5>
                        <div className="flex w-full flex-col xl:flex-row space-y-3 xl:space-y-0 xl:justify-center">
                            <input
                                type="date"
                                className="px-3 w-full py-3 pl-10 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-l text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                placeholder="10.000"
                                name="startDate"
                                style={{ transition: 'all 0.15s ease 0s' }}
                                // onChange={(e) => onChange(e)}
                            />
                            <input
                                type="date"
                                className="px-3 w-full py-3 pl-10 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded xl:rounded-none xl:rounded-r text-md font-medium shadow focus:outline-none focus:shadow-outline"
                                placeholder="20.000"
                                name="endDate"
                                style={{ transition: 'all 0.15s ease 0s' }}
                                // onChange={(e) => onChange(e)}
                            />
                        </div>
                    </div>
                    <input
                        className="px-3 py-3 h-10 placeholder-gray-500 bg-gray-200 text-gray-700 bg-white rounded text-md font-medium shadow focus:outline-none focus:shadow-outline"
                        placeholder="Cantidad de personas"
                        name="people"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        // onChange={(e) => onChange(e)}
                    />
                    <CustomButton text="Cancelación gratuita" />
                    <CustomButton text="Permite mascotas" outlined={true} />
                </div>
            </div>
        </section>
    );
};

export default Filters;
