import React from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import FormSignIn from "../../../components/FormSignIn";

import LogoAfya from '../../../assets/img/AFY-logo-02.png'
import { SectionComponent, SectionLeft, SectionRight } from "./styles";

const Login: React.FC = () => {
  return (
    <>
      <NavBar />
      <SectionComponent>

        <SectionLeft>
          <div className="titulo">
            <h2>BEM-VINDO</h2>
            <h2>AO <span>FUTURO</span></h2>
            <h2><span>DA SAÚDE.</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur pharetra adipiscing e elit. Lorem ipsum dolor sit amet, consectetur pharetra adipiscing e elit.
              Cras ac ligula sapien nam euismod, ante eget dignissim nam cursus, Cras ac ligula sapien nam euismod, ante eget dignissim nam cursus,
              magna ante et aliquet erat, eu placerat ante ante sit amet urna elit magna ante et aliquet erat, eu placerat ante ante sit amet urna elit
            cras. Congue mollis lorem ace justo varius. Fusce justo ac imolestie, cras. Congue mollis lorem ace justo varius.</p>
          </div>
        </SectionLeft>

        <SectionRight>
          <img src={LogoAfya} alt="Identidade visual Afya" />
          <FormSignIn />
        </SectionRight>

      </SectionComponent>

      <Footer />
    </>
  );
};

export default Login;
