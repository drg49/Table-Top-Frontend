import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';

export default function Login(){
  const [loginForm, setLoginForm] = React.useState({ username: '', password: '' })

  const handleChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

  React.useEffect(() => console.log(loginForm), [loginForm])

  return (
    <>
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
      </Form>
      <br />
      <button>Login</button>
    </>
  )
}