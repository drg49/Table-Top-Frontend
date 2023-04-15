import React, { useEffect } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { notifyError } from '../../components/Toast/methods';

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Username': '',
    'Password': ''
  })

  const handleSubmit = () => {
    const registerFormKeys = Object.keys(registerForm);
    
    const emptyValue = registerFormKeys.find((key) => registerForm[key] === '');

    if (emptyValue) {
      notifyError(`${emptyValue} cannot be empty.`, 'bottom-center')
    }
  }

  useEffect(() => console.log(registerForm), [registerForm])

  const handleChange = (e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })

  return (
    <Form id='login-form'>
      <Input 
        type="text"
        placeholder='First Name'
        name='First Name'
        change={handleChange}
        animate
      />
      <Input 
        type="text"
        placeholder='Last Name'
        name='Last Name'
        change={handleChange}
        animate
      />
      <Input 
        type="email"
        placeholder='Email'
        name='Email'
        change={handleChange}
        animate
      />
      <Input 
        type="text"
        placeholder='Username'
        name='Username'
        change={handleChange}
        animate
      />
      <Input
        type='password'
        placeholder='Password'
        name='Password'
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