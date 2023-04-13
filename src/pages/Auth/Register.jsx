import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })

  const handleChange = (e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })

  return (
    <Form id='login-form'>
      <Input 
        type="text"
        placeholder='First Name'
        name='firstName'
        change={handleChange}
        animate
      />
      <Input 
        type="text"
        placeholder='Last Name'
        name='lastName'
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
        click={() => {}}
        isPrimary
      />
    </Form>
  )
}

export default Register;