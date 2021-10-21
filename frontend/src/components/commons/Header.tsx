import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/all';
import {ReactComponent as LogoHeader} from "../../assets/logo_header.svg";
import {ReactComponent as LogoHeaderMbl} from "../../assets/favicon.svg";
import CustomButton from "./Button/CustomButton";

const Header = (props: {
  //buttonRegistrer: boolean,
}) => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
      <div style={{backgroundColor: "#20323A"}}
           className="flex flex-row sticky top-0 z-40 w-screen items-center h-20">
        <div className="flex flex-shrink items-center">
          {logged && (
              <div className="ml-5">
                <GiHamburgerMenu className="w-8 h-8 lg:w-12 lg:h-12"/>
              </div>
          )}
          <div>
            <LogoHeader className="w-40 mx-4 md:flex hidden"/>
            <LogoHeaderMbl className="visible flex md:hidden w-10 mx-4"/>
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center">

          {!logged && (
              <>
                <div className="mr-4">
                  <a href="#"
                     className="text-xs md:text-base text-white"><u>Sobre nosotros</u></a>
                </div>
                <div className="ml-6 mr-7">
                  <CustomButton text="Registrarse"/>
                </div>
              </>
          )}

          <div className="mr-5">
            {logged && (
                <button>
                  { /* Se reemplazaria por la foto de perfil del usuario*/}
                  <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43191/blue-circle-emoji-clipart-md.png"
                       width="65px"/>
                </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Header;
