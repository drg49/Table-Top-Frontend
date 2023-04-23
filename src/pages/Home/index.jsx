import React from 'react';
import { logout } from '../../api/authentication';

const Home = () => {
  return (
    <>
      <p>This is the home page</p>
      <button onClick={() => logout()}>Logout</button>
    </>
  )
}

export default Home;
