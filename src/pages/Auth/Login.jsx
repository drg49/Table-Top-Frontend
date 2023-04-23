import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { formContainsEmptyValues } from '../../utils/validation';
import * as api from '../../api/authentication';

const Login = ({ isLoading, setIsLoading }) => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })

  const handleSubmit = () => {
    if(!formContainsEmptyValues(loginForm)) {
      api.login(loginForm)
        .then((data) => console.log(data));
    }
  }

  const handleChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  return (
    <Form id='login-form'>
      <Input 
        type="text"
        placeholder='Username'
        name='username'
        change={handleChange}
        animate
        preventSpaces
      />
      <Input
        type='password'
        placeholder='Password'
        name='password'
        change={handleChange}
        animate
        preventSpaces
      />
      <Button
        text='Login'
        id='login-button'
        click={handleSubmit}
        isPrimary
        isLoading={isLoading}
      />
    </Form>
  )
}

export default Login;