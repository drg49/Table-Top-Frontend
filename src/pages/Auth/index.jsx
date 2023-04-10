import React from 'react';
import Panel from '../../components/Panel';
import Login from './Login';
import { authState } from '../../utils/constants';
import Register from './Register';
import Logo from '../../components/Logo';
import './index.scss'

const { login, register } = authState;

export default function Auth(){
  const [formState, setFormState] = React.useState(login);

  const handleFormState = () => formState === login ? setFormState(register) : setFormState(login);

  const link = (text) => <span onClick={handleFormState}>{text}</span>

  return (
    <>
      <Panel
        id='auth-form'
        size='lg'
        closable={false}
      >
        <Logo />
        {formState === login ? <Login /> : <Register />}
        {formState === login ? link('Sign up now') : link('Login')}
      </Panel>
    </>
  )
}