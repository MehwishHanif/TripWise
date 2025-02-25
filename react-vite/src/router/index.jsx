import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import LandingPage from '../components/LandingPage';
import TripShow from '../components/TripShow';
import CreateTripForm from '../components/TripForm/CreateTripForm';
import EditTripForm from '../components/TripForm/EditTripForm';

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
      {
        path: "trips/:tripId",
        element: <TripShow />,
      },
      {
        path: "trips/:tripId/edit",
        element: <EditTripForm />,
      },
      {
        path: "trips/new",
        element: <CreateTripForm />,
      },
    ],
  },
]);