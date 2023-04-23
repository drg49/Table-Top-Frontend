import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as api from '../../api/authentication'
import { formContainsEmptyValues } from '../../utils/validation';
import { parseError } from '../../utils/helperMethods';
import { notifyError } from '../../utils/toastMethods';
import { TOAST_POSITIONS } from '../../utils/constants';

const { BOTTOM_CENTER } = TOAST_POSITIONS;

const Register = ({ isLoading, setIsLoading }) => {
  const [registerForm, setRegisterForm] = useState({
    'first_name': '',
    'last_name': '',
    'email': '',
    'username': '',
    'password': ''
  })

  const handleSubmit = () => {
    if (!formContainsEmptyValues(registerForm)) {
      setIsLoading(true);
      api.register(registerForm)
          .then(() => window.location.reload())
            .catch((err) => notifyError(parseError(err), BOTTOM_CENTER))
              .finally(() => setIsLoading(false));
    }
  }

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
        isLoading={isLoading}
      />
    </Form>
  )
}

export default Register;