import React from 'react';
import { ReactComponent as LogoHeader } from "../../assets/logo_header.svg";
import  CustomButton  from "./Button/CustomButton";
import { ReactComponent as ButtomDashboard } from "../../assets/buttomDashboard.svg";


const Header = (props: { 
    //buttonRegistrer: boolean,
}) => {

    return (
        <div style={{ height: 80, backgroundColor: "#20323A" }} className="grid grid-cols-2 h-screen sticky top-0 z-40 w-full overflow-hidden">
            <div className= "container flex flex-rows items-center mx-auto px-5">
                <div className= "ml-5">
                    <button>
                        <ButtomDashboard />
                    </button>
                </div>
                <div className= "ml-12">
                    <LogoHeader />
                </div>
            </div>
            
            <div className= "container flex flex-rows items-center justify-end mx-auto px-5">
                <div className= "mr-4">
                    <a href="#" className= "text-white"><u>Sobre nosotros</u></a>
                </div>

                <div className="ml-6 mr-7">
                    <CustomButton text="Registrarse"/>
                </div>

                <div className= "mr-5">
                    <button>
                        { /* Se reemplazaria por la foto de perfil del usuario*/}
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43191/blue-circle-emoji-clipart-md.png"  width="65px"/>
                    </button>
                </div>
            </div>   
        </div>

        
    );

};

export default Header;