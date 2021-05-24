import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

import { toast } from 'react-toastify';

import api from '../../service/api';
import animationData from '../../assets/animation/68-loader.json';

import { FormContent } from './styles';

interface IUserLogin {
  usuario: string;
  senha: string;
}

const FormSignIn: React.FC = () => {

  const history = useHistory()

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoad(true)

      api.post('login', formDataContent).then(
        response => {
          localStorage.setItem('@tokenAfyaApp', response.data.token)
          toast.success('Cadastro realizado com sucesso! Você está sendo redirecionado', {
            onClose: () => history.push('/dash')
          })
        }
      )
        .catch(e => toast.error('Algo deu errado'))
        .finally(() => setIsLoad(false))

    }, [formDataContent, history]
  );

  const animationContent = {
    loop: true,
    autoplay: true,
    animationData: animationData
  }

  return (
    <FormContent>

      { isLoad ? (
        <Lottie
          options={animationContent}
          width={200}
          height={200}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <hr />
          <label>Usuário</label>
          <input
            type="text"
            name="name"
            onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
          />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
          />
          <label>
            <input type="checkbox" name="senha" id="senha" />
            <span>Lembrar de mim</span>
          </label>
          <input
            className="inputSubmit"
            type="submit"
            value="ENTRAR"
          />
        </form>
      )}
    </FormContent>
  );
}

export default FormSignIn;