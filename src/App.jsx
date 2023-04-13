import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Toast from "./components/Toast";
import * as toastMethods from './components/Toast/methods';

const spinner = <FontAwesomeIcon icon={faSpinner} size='10x' color='gray' spin />;

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  React.useEffect(() => {
    setIsLoggedIn(false);
    toastMethods.notifySuccess('This is a React template 😊');
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
      <Toast />
    </>
  )
}

export default App;