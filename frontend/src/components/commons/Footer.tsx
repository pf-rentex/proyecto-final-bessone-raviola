import React from 'react';
import { ReactComponent as LogoFooter } from '../../assets/logo_footer.svg';
import { ReactComponent as Facebook } from '../../assets/facebookIcon.svg';
import { ReactComponent as Instagram } from '../../assets/instagramIcon.svg';
import { ReactComponent as Twitter } from '../../assets/twitterIcon.svg';

const Footer = () => {
    return (
        <div
            className="flex flex-col-reverse lg:flex-row w-full lg:h-60 overflow-hidden"
            style={{ backgroundColor: '#20323A' }}
        >
            <div className="flex justify-center lg:flex-col items-center py-2 px-8">
                <LogoFooter className="w-24 h-24" />

                <div className="flex mt-3">
                    <Instagram className="m-2" />
                    <Twitter className="m-2" />
                    <Facebook className="m-2" />
                </div>
            </div>

            <div className="flex flex-col justify-center text-center mt-7 pl-4">
                <button className="text-white underline whitespace-nowrap">
                    Sobre nosotros
                </button>
                <button className="text-white pt-0.5 underline">
                    Contáctanos
                </button>
            </div>

            <div className="flex flex-col-reverse lg:flex-row">
                {/* Section info #1 */}
                <div className="mx-10">
                    <h5 className="text-blue-700 text-2xl xl:text-3xl font-thin tracking-widest my-5">
                        <b>Title</b>
                    </h5>
                    <p className="text-white font-thin text-justify text-xs xl:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Hic delectus assumenda cumque ab quasi esse iure
                        corporis eos? Quae similique est corrupti repudiandae
                        iure dolores voluptate quaerat. Iusto, adipisci
                        asperiores!
                    </p>
                </div>

                {/* Section info #2 */}
                <div className="mx-10">
                    <h5 className="text-blue-700 text-2xl xl:text-3xl font-thin tracking-widest my-5">
                        <b>Title One</b>
                    </h5>
                    <p className="text-white font-thin text-justify text-xs xl:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Hic delectus assumenda cumque ab quasi esse iure
                        corporis eos? Quae similique est corrupti repudiandae
                        iure dolores voluptate quaerat. Iusto, adipisci
                        asperiores!
                    </p>
                </div>

                {/* Section info #3 */}
                <div className="mx-10">
                    <h5 className="text-blue-700 text-2xl lg:text-3xl font-thin tracking-widest my-5">
                        <b>Title Two</b>
                    </h5>
                    <p className="text-white font-thin text-justify text-xs xl:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Hic delectus assumenda cumque ab quasi esse iure
                        corporis eos? Quae similique est corrupti repudiandae
                        iure dolores voluptate quaerat. Iusto, adipisci
                        asperiores!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
