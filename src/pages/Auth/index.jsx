import React from 'react';
import Panel from '../../components/Panel';
import Login from './Login';
import { authState } from '../../utils/constants';
import Register from './Register';

import './index.scss'
import Logo from '../../components/Logo';

const { login, register } = authState;

export default function Auth(){
  const [formState, setFormState] = React.useState(login);

  const handleFormState = () => formState === login ? setFormState(register) : setFormState(login);

  return (
    <>
      <Panel
        id='auth-form'
        size='lg'
        closable={false}
      >
        <Logo />
        {formState === login ? <Login /> : <Register />}
        <br />
        <button onClick={handleFormState}>{formState === login ? 'Register' : 'Login'}</button>
      </Panel>
    </>
  )
}