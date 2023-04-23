import React, { useState } from 'react';
import Panel from '../../components/Panel';
import Login from './Login';
import { authState } from '../../utils/constants';
import Register from './Register';
import Logo from '../../components/Logo';
import './index.scss'

const { login, register } = authState;

const Auth = () => {
  const [formState, setFormState] = useState(login);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormState = () => formState === login ? setFormState(register) : setFormState(login);

  const link = (text) => <span id='link' className='no-select' onClick={handleFormState}>{text}</span>

  const props = { isLoading: isLoading, setIsLoading: setIsLoading };

  return (
    <>
      <Panel
        id='auth-form'
        size='lg'
        closable={false}
      >
        <Logo />
        {formState === login ? <Login {...props} /> : <Register {...props} />}
        {!isLoading && (formState === login ? link('Sign up now') : link('Login'))}
      </Panel>
    </>
  )
}

export default Auth;