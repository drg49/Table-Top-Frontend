import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { objectContainsEmptyValues } from '../../utils/validation';
import * as api from '../../api/authentication';

const Login = () => {
  const [loginForm, setLoginForm] = React.useState({ username: '', password: '' })

  const handleSubmit = () => {
    if(!objectContainsEmptyValues(loginForm)) {
      api.login(loginForm)
        .then((data) => console.log(data));
    }
  }

  const handleChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

  React.useEffect(() => console.log(loginForm), [loginForm])

  return (
    <Form id='login-form'>
      <Input 
        type="text"
        placeholder='Username'
        name='username'
        change={handleChange}
        animate
      />
      <Input
        type='password'
        placeholder='Password'
        name='password'
        change={handleChange}
        animate
      />
      <Button
        text='Login'
        id='login-button'
        click={handleSubmit}
        isPrimary
      />
    </Form>
  )
}

export default Login;