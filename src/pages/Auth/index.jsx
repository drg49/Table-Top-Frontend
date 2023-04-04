import React from 'react';
import Panel from '../../components/Panel';
import Login from './Login';
import { authState } from '../../utils/constants';
import Register from './Register';

const { login, register } = authState;

export default function Auth(){
  const [formState, setFormState] = React.useState(login);

  const handleFormState = () => formState === login ? setFormState(register) : setFormState(login);
  
  return (
    <>
      <Panel size='md' title='Table Top' closable={false}>
        {formState === login ? <Login /> : <Register />}
        <br />
        <button onClick={handleFormState}>{formState === login ? 'Register' : 'Login'}</button>
      </Panel>
    </>
  )
}