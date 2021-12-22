import CustomButton from '../commons/Button/CustomButton';
import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import { MdLocationOn, FaSign } from 'react-icons/all';

const CardProperty = () => {
    return (
        <section className="bg-green-100 m-5 rounded cursor-pointer">
            <div className="flex flex-col">
                <div className="">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_ceHb4jLPBNjhubi9vguyXxpq0sNV9bhA&usqp=CAU"
                        className="rounded-t xl:rounded-l xl:rounded-t-none h-80 w-full"
                        alt="prop"
                    />
                </div>
                <div className="w-full xl:w-8/12 2xl:w-9/12 p-5">
                    <div className="flex flex-col xl:flex-row xl:space-y-0">
                        <div className="w-full xl:w-4/12">
                            <h1 className="text-2xl font-medium">
                                Hermoso chalet
                            </h1>
                        </div>
                        <div></div>
                    </div>
                    <div className="">
                        <div className="w-full xl:w-4/12 flex space-x-2 font-medium items-center">
                            <p>Mitre 123, San Francisco</p>
                        </div>
                        <div className="w-full xl:flex xl:justify-end xl:w-4/12 xl:items-end">
                            <p className="text-primary font-bold">
                                $651.100.000
                            </p>
                        </div>
                    </div>
                    <div className="w-full xl:w-8/12">
                        <p className="font-thin my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex flex-col pt-3 xl:flex-row xl:space-x-5 w-full justify-center xl:justify-end">
                        <div>
                            <CustomButton
                                text="Organizar visita"
                                outlined={true}
                            />
                        </div>
                        <div>
                            <CustomButton text="Solicitar alquiler" color="alt">
                                <FaSign className="w-5 h-5" fill="#7ED1FF" />
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardProperty;
