import CustomButton from '../commons/Button/CustomButton';
import { BiTrash, TiEye, MdEdit, BiSearch } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

const CardProperty = () => {
    const navigate = useNavigate();

    const redirectEditProperty = () => {
        navigate('/template/properties');
    };

    const pushPublication = () => {
        navigate('/publication/:id');
    };

    return (
        <section className="bg-green-100 m-5 rounded cursor-pointer">
            <div className="flex flex-col container">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_ceHb4jLPBNjhubi9vguyXxpq0sNV9bhA&usqp=CAU"
                        className="rounded-t xl:rounded-l xl:rounded-t-none h-80 w-full"
                        alt="prop"
                    />
                </div>

                <div className="flex flex-col p-5">
                    <div className="flex flex-col w-full space-y-4">
                        <div className="w-full flex flex-row">
                            <h1 className="text-2xl font-medium ">
                                <b>Titulo:</b> Hermoso chalet
                            </h1>
                        </div>
                        <div className="w-full font-medium text-2xl mt-6 flex flex-row">
                            <h1 className="justify-start w-full">
                                <b>Dirección:</b> Mitre 123, San Francisco
                            </h1>
                            <h1 className="w-full font-medium text-4xl text-green-500 grid justify-end w-20">
                                $ 26.500
                            </h1>
                        </div>
                        <div>
                            <h1 className="w-full font-medium text-2xl">
                                <b>Descripción</b>
                            </h1>
                            <p className="font-thin my-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="w-full flex flex-row  justify-end">
                            <h1 className="text-2xl font-medium ">
                                <b>Fecha de creación:</b> 16/12/2021
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pb-0 space-x-8 ml-8 mr-8">
                    <CustomButton
                        text="Ver más"
                        color="alt"
                        callback={pushPublication}
                    >
                        <BiSearch className="w-8 h-8" fill="#7ED1FF" />
                    </CustomButton>
                    <CustomButton
                        text="Editar"
                        color="alt"
                        callback={redirectEditProperty}
                    >
                        <MdEdit className="w-8 h-8" fill="#7ED1FF" />
                    </CustomButton>
                    <CustomButton text="Previsualizar" color="alt">
                        <TiEye className="w-8 h-8" fill="#7ED1FF" />
                    </CustomButton>
                    <CustomButton text="Eliminar" color="alt">
                        <BiTrash className="w-8 h-8" fill="red" />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default CardProperty;
