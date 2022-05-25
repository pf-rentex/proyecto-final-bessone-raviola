import CustomButton from '../commons/Button/CustomButton';
import { ReactComponent as Dimensions } from '../../assets/amenities_dimensions.svg';
import { ReactComponent as Bedrooms } from '../../assets/amenities_bedrooms.svg';
import { ReactComponent as Bathrooms } from '../../assets/amenities_bathrooms.svg';
import { MdLocationOn, FaSign } from 'react-icons/all';

const Listing = ({ onOpenVisitDialog }: { onOpenVisitDialog: () => void }) => {
    return (
        <section className="bg-white m-5 rounded cursor-pointer">
            <div className="flex flex-col xl:flex-row">
                <div className="w-full xl:w-4/12 2xl:w-3/12">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_ceHb4jLPBNjhubi9vguyXxpq0sNV9bhA&usqp=CAU"
                        className="rounded-t xl:rounded-l xl:rounded-t-none h-full w-full"
                        alt="prop"
                    />
                </div>
                <div className="w-full xl:w-8/12 2xl:w-9/12 p-5">
                    <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:items-center">
                        <div className="w-full xl:w-4/12">
                            <h1 className="text-2xl font-medium">Hermoso chalet</h1>
                        </div>
                        <div className="w-full xl:w-4/12 flex space-x-2 font-medium items-center">
                            <MdLocationOn color="#FF5050" />
                            <p>San Francisco, Córdoba</p>
                        </div>
                        <div className="w-full xl:flex xl:justify-end xl:w-4/12">
                            <p className="text-primary font-bold">$651.100.000</p>
                        </div>
                    </div>
                    <div className="w-full xl:w-8/12">
                        <p className="font-thin my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex space-x-5 border-t-2 pt-3 w-full justify-center xl:justify-start xl:w-10/12 2xl:w-6/12">
                        <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                            <Dimensions />
                            <p>45m</p>
                        </div>
                        <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                            <Bedrooms />
                            <p>2 Dormitorios</p>
                        </div>
                        <div className="flex flex-col xl:flex-row items-center space-x-2 p-2">
                            <Bathrooms />
                            <p>1 Baño</p>
                        </div>
                    </div>

                    <div className="flex flex-col pt-3 xl:flex-row xl:space-x-5 w-full justify-center xl:justify-end">
                        <div>
                            <CustomButton text="Organizar visita" outlined={true} callback={onOpenVisitDialog} />
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

export default Listing;
