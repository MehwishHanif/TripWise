import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';
import "./Navigation.css";
import { MdTravelExplore } from 'react-icons/md';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className='nav-wrapper'>
      <li className='nav-title'>
        <NavLink  className="logo" to="/"> <MdTravelExplore size={32} />TripWise</NavLink>
      </li>
      {isLoaded && (
        <ul className='nav-actions'>          
          <li className='nav-profile-btn'>
            <ProfileButton user={sessionUser} />
          </li>
        </ul>
      )}
    </ul>
  );
}

export default Navigation;
