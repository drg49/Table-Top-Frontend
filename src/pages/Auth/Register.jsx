import React, { useEffect } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as api from '../../api/authentication'
import { objectContainsEmptyValues } from '../../utils/validation';

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    'first_name': '',
    'last_name': '',
    'email': '',
    'username': '',
    'password': ''
  })

  const handleSubmit = () => {
    if (!objectContainsEmptyValues(registerForm)) {
      api.register(registerForm)
          .then((data) => console.log(data));
    }
  }

  useEffect(() => console.log(registerForm), [registerForm])

  const handleChange = (e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })

  return (
    <Form id='login-form'>
      <Input 
        type="text"
        placeholder='First Name'
        name='first_name'
        change={handleChange}
        animate
      />
      <Input 
        type="text"
        placeholder='Last Name'
        name='last_name'
        change={handleChange}
        animate
      />
      <Input 
        type="email"
        placeholder='Email'
        name='email'
        change={handleChange}
        animate
      />
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
        text='Register'
        id='login-button'
        click={handleSubmit}
        isPrimary
      />
    </Form>
  )
}

export default Register;