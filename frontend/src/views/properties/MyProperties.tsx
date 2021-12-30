import { BiSearch, BiPlus } from 'react-icons/bi';
import CustomButton from '../../components/commons/Button/CustomButton';
import CardProperty from '../../components/properties/CardProperty';
import { useHistory } from 'react-router-dom';

const MyProperties = () => {
    const history = useHistory();

    const redirectCreateProperty = () => {
        history.push('/templateProperty');
    };

    return (
        <section className="flex flex-col h-full w-full bg-gradient-to-b from-bg-gradient-8 to-bg-gradient-9 px-5 lg:px-20 py-10">
            <div className="container">
                <div className="flex justify-center lg:justify-end mb-8 space-x-16">
                    <h1 className="text-white text-5xl font-semibold lg:text-left text-left mr-10">
                        Mis Inmuebles
                    </h1>
                    <div className="relative lg:w-9/12 text-gray-600 focus-within:text-gray-400 pr-4">
                        <span className="absolute inset-y-0 left-0 flex items-center ml-4">
                            <BiSearch className="w-7 h-7" />
                        </span>
                        <input
                            type="search"
                            name="search"
                            className="px-14 py-4 placeholder-gray-400 bg-alt text-gray-100 rounded text-md font-medium shadow focus:outline-none focus:shadow w-full"
                            placeholder="Buscar"
                        />
                    </div>
                </div>
                <div className="mb-4 grid justify-end mr-4">
                    <CustomButton
                        text="Agregar"
                        color="secondary"
                        callback={redirectCreateProperty}
                    >
                        <BiPlus className="w-7 h-7"></BiPlus>
                    </CustomButton>
                </div>
                <div className="grid grid-colums-2 lg:flex lg:flex-row">
                    <CardProperty></CardProperty>
                    <CardProperty></CardProperty>
                </div>
            </div>
        </section>
    );
};

export default MyProperties;
