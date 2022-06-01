import CustomButton from '../commons/Button/CustomButton';
import { BiTrash, TiEye, MdEdit, BiSearch } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import CustomLabel from '../commons/label/CustomLabel';

const CardProperty = () => {
    const navigate = useNavigate();
    const src =
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

    const redirectEditProperty = () => {
        navigate('create');
    };

    const pushPublication = () => {
        navigate('/publication/:id');
    };

    return (
        <div className="relative flex flex-col bg-blue-100 rounded-t-lg pb-8">
            <div
                className="w-full h-52 md:h-96 bg-cover bg-no-repeat bg-center select-none rounded-t-lg"
                style={{ backgroundImage: `url(${src})` }}
            >
                <div className="bg-blue-900 rounded-t-lg bg-opacity-50 p-3 md:p-4">
                    <div className="flex justify-between content-center">
                        <h3 className="text-md md:text-lg font-semibold text-center text-white">Jose Hernandez 2004</h3>
                        <div className="text-sm">
                            <CustomLabel text={'Publicado'} color="green" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row hover:bg-opacity-25 px-4 py-1 my-2">
                <div className="flex flex-col">
                    <div className="flex tracking-wide py-1 justify-between items-center">
                        <div className="flex flex-col md:flex-row text-sm md:text-lg">
                            <h2 className="font-bold">Titulo: </h2>
                            <p className="overflow-hidden overflow-ellipsis md:px-2 line-clamp-1">
                                Amplio departamento a estrenar
                            </p>
                        </div>
                        <div className="flex text-lg md:text-2xl justify-self-end">
                            <div className="font-semibold text-blue-500 px-2">$</div>
                            <div className="font-bold text-blue-700">24.500</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row tracking-wide py-1 text-sm md:text-lg">
                        <h2 className="font-bold">Descripción: </h2>
                        <p className="md:w-9/12 overflow-hidden overflow-ellipsis md:px-2 line-clamp-2 md:line-clamp-3 ">
                            77m2 Frente, Super luminoso. Living Comedor. Balcón corrido. Cocina Comedor. Lavadero
                            independiente. Dependencia de servicio ...Balcón corrido. Cocina Comedor. Lavadero
                            independiente. Dependencia de servicio ...
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end py-2 font-semibold text-xs md:text-sm text-blue-800">
                        Fecha de creación: 16/03/2021
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full bg-alt rounded-t-md py-2">
                <div className="flex flex-row justify-evenly md:flex-row text-white text-xs md:text-lg">
                    <div className="flex items-center cursor-pointer" onClick={pushPublication}>
                        <BiSearch color="#7ED1FF" size={14} />
                        <span className="px-1"> Ver mas</span>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={redirectEditProperty}>
                        <MdEdit color="#7ED1FF" size={14} />
                        <span className="px-1"> Editar</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <TiEye color="#7ED1FF" size={14} />
                        <span className="px-1"> Previsualizar</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <BiTrash color="#7ED1FF" size={14} />
                        <span className="px-1"> Eliminar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProperty;
