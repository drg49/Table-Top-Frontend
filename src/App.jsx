import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateUser } from "./api/authentication";

const spinner = <FontAwesomeIcon icon={faSpinner} size='10x' color='gray' spin />;

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    validateUser().then((data) => console.log(data))
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      {isLoggedIn &&
        <div>
          <Suspense fallback={spinner}>
            <Routes>
              <Route path='/' element={<Home />} />

            </Routes>
          </Suspense>
        </div>}
      {isLoggedIn === false && <Auth />}
      {isLoggedIn === null && <div id='main-spinner'>{spinner}</div>}
      <ToastContainer />
    </>
  )
}

export default App;