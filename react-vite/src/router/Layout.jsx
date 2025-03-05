import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import Navigation from "../components/Navigation/Navigation";
import { thunkGetAllActivities } from "../redux/activities";
import { thunkGetAllTrips } from "../redux/trips";
import Footer from "../components/Footer";

export default function Layout() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
      dispatch(thunkGetAllTrips()) 
      dispatch(thunkGetAllActivities())
  }, [dispatch]);

  return (
    <>
      <ModalProvider>
        <Navigation isLoaded={isLoaded} />
        <main>{isLoaded && <Outlet />}</main>
        <Footer />
        <Modal />
      </ModalProvider>
    </>
  );
}
