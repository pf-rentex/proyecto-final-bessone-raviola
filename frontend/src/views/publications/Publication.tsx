import CustomButton from '../../components/commons/Button/CustomButton';
import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import { FaSign, BiCalendar, BiCheck } from 'react-icons/all';
import CustomLabel from '../../components/commons/label/CustomLabel';
// import { useHistory } from 'react-router-dom';

const Publication = () => {
    // const history = useHistory();

    const redirectRentalRequest = () => {
        // history.push('/rent/request');
    };

    return (
        <section className="w-full h-full bg-gradient-to-b from-bg-gradient-5 to-bg-gradient-6 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:space-x-20 py-20 container p-15 mx-auto lg: p-8">
                <div className="flex flex-col lg:w-6/12">
                    <div className="flex flex-col">
                        <h1 className="text-blue-900 text-3xl font-semibold mb-3 text-center lg:text-left">
                            Hermoso Chalet en barrio Los Palmares
                        </h1>
                        <p className="text-white text-justify lg:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br></br>
                        <p className="text-white text-justify lg:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <div className="flex my-10  lg:space-x-20 justify-between lg:justify-start">
                            <div className="flex flex-col items-center space-y-2">
                                <Dimensions className="w-8 h-8" />
                                <p className="text-white">45m2</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Bathrooms className="w-8 h-8" />
                                <p className="text-white">1 Baño</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Bedrooms className="w-8 h-8" />
                                <p className="text-white">2 Dormitorios</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-10">
                            <div>
                                <h5 className="text-white font-semibold">Características:</h5>
                                <p className="text-white">Característica 1</p>
                                <p className="text-white">Característica 2</p>
                                <p className="text-white">Característica 3</p>
                            </div>
                            <div className="flex flex-col text-white text-left space-y-3">
                                <h5 className="font-semibold lg:text-xl">Detalle:</h5>
                                <p className="font-bold lg:mx-5">$23.450 + $3.000 (Expensas)</p>
                            </div>
                            <div className="flex flex-col text-white text-left space-y-3">
                                <h5 className="font-semibold lg:text-xl">Monto Total:</h5>
                                <p className="font-bold text-green-400 lg:mx-5">$26.450</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-10 lg:mt-0 lg:w-6/12">
                    <div className="flex mb-3 lg:text-center xl:justify-end mb-2">
                        <div>
                            <CustomLabel text="Alquiler Permanente" color="alt">
                                <BiCheck className="w-8 h-8" fill="#30FF24" />
                            </CustomLabel>
                        </div>
                    </div>
                    <div className="space-y-5 mb-7">
                        <h5 className="text-white">Ubicación: Av. Rivadavia 1492</h5>
                        <img
                            className="h-56 w-full"
                            alt="map"
                            src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg"
                        />
                    </div>
                    <div className="space-y-5">
                        <h5 className="text-white">Galería de fotos</h5>
                        <img
                            className="h-56 w-full"
                            src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
                            alt="gallery"
                        />
                    </div>
                </div>
            </div>
            <div className="flex xl:flex-row xl:space-x-52 w-full justify-center lg:space-x-36 md:space-x-8 sm:space-x-4">
                <div className="xl:justify-start">
                    <CustomButton text="Visitar Propiedad" color="alt">
                        <BiCalendar className="w-5 h-5" fill="#7ED1FF" />
                    </CustomButton>
                </div>

                <div className="xl:justify-end">
                    <CustomButton text="Solicitar alquiler" color="alt" callback={redirectRentalRequest}>
                        <FaSign className="w-5 h-5" fill="#7ED1FF" />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default Publication;
