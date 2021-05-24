import React from 'react';

import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

import { SectionComponent } from './styles'
import FormSingUp from '../../../components/FormSingUp';

const SignUp: React.FC = () => {
  return (
    <>
      <NavBar />
      <SectionComponent>
        <h1>Crie sua conta</h1>
        <FormSingUp />
      </SectionComponent>
      <Footer />
    </>
  );
}

export default SignUp;