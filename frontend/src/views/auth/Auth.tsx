import React, {useEffect, useState} from 'react';
import {ReactComponent as LoginLogo} from '../../assets/realtor.svg';
import {ReactComponent as SignupLogo} from '../../assets/SignupBkg.svg';
import {ReactComponent as Footer} from '../../assets/waves.svg';
import Blob from "../../components/commons/Blob";
import LoginBox from "../../components/auth/LoginBox";
import SignupBox from "../../components/auth/SignupBox";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const Auth = ({ profile }: { profile: string; }) => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      console.log({profile});
      navigate('onboarding')
    }
  }, [profile])

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="absolute w-full h-full bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full flex justify-between lg:px-20">
            <div className="hidden xl:flex xl:flex-col w-full">
              <h1 className="text-5xl text-blue-800 font-regular mb-8 font-secondary">
                Obtén el control total de
                <br />
                <span className="text-white font-bold text-5xl">
                  {" "}
                  tu contrato
                </span>
              </h1>
              <p className="text-2xl text-blue-700 w-10/12">
                Accede y gestiona
                <span className="font-bold"> todos</span> los aspectos de tu
                alquiler de forma
                <span className="font-bold"> segura</span>
              </p>
              {isSignup && <SignupLogo className="self-center pr-10 z-10" />}
              {!isSignup && <LoginLogo className="self-center pr-10 z-10" />}
              <Blob
                size="large"
                color="#333"
                class="mt-28 ml-16"
                opacity="0.10"
              />
            </div>
            {isSignup && <SignupBox onToggleMode={toggleMode} />}
            {!isSignup && <LoginBox onToggleMode={toggleMode} />}
          </div>
        </div>
      </div>

      <footer className="absolute invisible lg:visible w-screen bottom-0">
        <Footer />
      </footer>
    </section>
  );
};

const mapStateToProps = (state: any) => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps, {})(Auth);
