import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import LandingPage from '../components/LandingPage';

export const router = createBrowserRouter([
  
  // {
  //   path: "/",
  //   element: <LoginFormPage />,    
  // },
  // {    
  //   path: "/signup",
  //   element: <SignupFormPage />,
  // },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "sign-up",
        element: <SignupFormPage />,
      },
    ],
  },
]);