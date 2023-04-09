import React from 'react';

export default function Register(){
  const [registerForm, setRegisterForm] = React.useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })

  const handleChange = (e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })

  return (
    <>
      <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} />
      <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange} />
      <input type="text" placeholder='Username' name='username' onChange={handleChange} />
      <input type='password' placeholder='Password' name='password' onChange={handleChange} />
      <br />
      <button>Register</button>
    </>
  )
}