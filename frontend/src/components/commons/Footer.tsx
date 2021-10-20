import React from 'react';
import { ReactComponent as LogoFooter } from "../../assets/logo_footer.svg";
import { ReactComponent as Facebook } from "../../assets/facebookIcon.svg";
import { ReactComponent as Instagram } from "../../assets/instagramIcon.svg";
import { ReactComponent as Twitter } from "../../assets/twitterIcon.svg";


const Footer = () => {

    return (

        <div className= "flex h-screen w-full" style={{ height: 220, backgroundColor: "#20323A" }}>
            <div className = "ml-8">
                <LogoFooter className= "pl-8 -mt-2"/>
                <div className= "ml-6 -mt-5">
                    <p><i>2021 - 2050</i></p> 
                </div>
                
                <div className= "flex ml-6 mt-3">
                    <Instagram className= "flex mr-1"/>
                    <Twitter className= "flex mr-1"/>
                    <Facebook className= "flex mr-1"/> 
                </div>
                
            </div>

            <div className= "flex flex-col mt-7 pl-4">
                <a href="#" className= "text-white"><u>Sobre nosotros</u></a>
                <a href="#" className= "text-white pt-0.5"><u>Contáctanos</u></a>
                <a href="#" className= "text-white pt-0.5"><u>Otra cosa</u></a>
            </div>

            {/* Section info #1 */}
            <div className= "mt-1.5 ml-9 w-3/12">
                <h5 className="text-blue-800 text-4xl xl: font-thin tracking-widest my-5">
                  <b>Title</b>
                </h5>
                <p className="text-white font-thin text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic delectus assumenda cumque ab quasi esse iure corporis eos? Quae similique est corrupti repudiandae iure dolores voluptate quaerat. Iusto, adipisci asperiores!
                </p>

            </div>

            {/* Section info #2 */}
            <div className= "mt-1.5 ml-9 w-3/12">
                <h5 className="text-blue-800 text-4xl xl: font-thin tracking-widest my-5">
                  <b>Another title</b>
                </h5>
                <p className="text-white font-thin text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic delectus assumenda cumque ab quasi esse iure corporis eos? Quae similique est corrupti repudiandae iure dolores voluptate quaerat. Iusto, adipisci asperiores!
                </p>

            </div>

            {/* Section info #3 */}
            <div className= "mt-1.5 ml-9 w-3/12">
                <h5 className="text-blue-800 text-4xl xl: font-thin tracking-widest my-5">
                  <b>And another one</b>
                </h5>
                <p className="text-white font-thin text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic delectus assumenda cumque ab quasi esse iure corporis eos? Quae similique est corrupti repudiandae iure dolores voluptate quaerat. Iusto, adipisci asperiores!
                </p>

            </div>
        </div>

      
    );

};

export default Footer;