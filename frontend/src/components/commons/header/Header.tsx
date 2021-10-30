import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {ReactComponent as LogoHeader} from "../../../assets/logo_header.svg";
import {ReactComponent as LogoHeaderMbl} from "../../../assets/favicon.svg";
import CustomButton from "../Button/CustomButton";

interface IHeaderProps {
  setIsOpenSidebar: Function;
}

const Header = ({
                  //buttonRegistrer: boolean,
                  setIsOpenSidebar,
                }: IHeaderProps) => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
      <div
          style={{backgroundColor: "#20323A"}}
          className="flex flex-row sticky top-0 z-20 w-full items-center h-20 overflow-hidden"
      >
        <div className="flex flex-shrink items-center">
          {/* {logged && ( */}
          <div className="ml-5">
            <GiHamburgerMenu
                data-testid="sidebar-toggle"
                className="text-white text-3xl cursor-pointer"
                onClick={() => setIsOpenSidebar(true)}
            />
          </div>
          {/* )} */}
          <div className="ml-6">
            <LogoHeader className="w-40 mx-4 md:flex hidden"
                        data-testid="logo"/>
            <LogoHeaderMbl className="visible flex md:hidden w-10 mx-4"/>
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center">
          {!logged && (
              <>
                <div className="mr-4">
                  <a href="#"
                     className="text-xs md:text-base text-white">
                    <u>Sobre nosotros</u>
                  </a>
                </div>
                <div className="ml-6 mr-7">
                  <CustomButton text="Registrarse"/>
                </div>
              </>
          )}

          <div className="mr-5">
            {logged && (
                <button>
                  {/* Se reemplazaria por la foto de perfil del usuario*/}
                  <img
                      src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43191/blue-circle-emoji-clipart-md.png"
                      width="65px"
                  />
                </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Header;
