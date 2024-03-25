import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from "react-toastify";
import { validateUser } from "./api/authentication";
import "react-toastify/dist/ReactToastify.css";
import SideNav from "./components/SideNav";
import Details from "./components/Details";

const spinner = <FontAwesomeIcon icon={faSpinner} size='10x' color='gray' spin />;

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    validateUser()
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false))
  }, []);

  return (
    <>
      {isLoggedIn &&
        <div className="container">
          <SideNav />
          <Details />
          <div className="main">
            <Suspense fallback={spinner}>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </div>}
      {isLoggedIn === false && <Auth />}
      {isLoggedIn === null && <div id='main-spinner'>{spinner}</div>}
      <ToastContainer limit={3} />
    </>
  )
}

export default App;