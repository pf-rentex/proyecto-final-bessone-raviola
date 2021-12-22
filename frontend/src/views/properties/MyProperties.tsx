import { BiSearch } from 'react-icons/bi';
import CardProperty from '../../components/properties/CardProperty';

const MyProperties = () => {
    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 px-5 lg:px-20 py-10">
            <div className="flex justify-center lg:justify-end mb-10">
                <h1 className="text-white text-5xl font-semibold lg:text-left text-left mr-10">
                    Mis Inmuebles
                </h1>
                <div className="relative w-full lg:w-9/12 text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center ml-10">
                        <BiSearch className="w-7 h-7" />
                    </span>
                    <input
                        type="search"
                        name="search"
                        className="px-10 py-3 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full ml-8"
                        placeholder="Buscar"
                    />
                </div>
            </div>
            <div className="flex items-stretch">
                <CardProperty></CardProperty>
                <CardProperty></CardProperty>
            </div>
            <div className="flex items-stretch">
                <CardProperty></CardProperty>
                <CardProperty></CardProperty>
            </div>
        </section>
    );
};

export default MyProperties;
