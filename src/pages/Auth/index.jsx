import React, { useState } from 'react';
import Panel from '../../components/Panel';
import Login from './Login';
import { AUTH_STATE } from '../../utils/constants';
import Register from './Register';
import Logo from '../../components/Logo';
import './index.scss'

const { LOGIN, REGISTER } = AUTH_STATE;

const Auth = () => {
  const [formState, setFormState] = useState(LOGIN);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormState = () => formState === LOGIN ? setFormState(REGISTER) : setFormState(LOGIN);

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
        {formState === LOGIN ? <Login {...props} /> : <Register {...props} />}
        {!isLoading && (formState === LOGIN ? link('Sign up now') : link('Login'))}
      </Panel>
    </>
  )
}

export default Auth;