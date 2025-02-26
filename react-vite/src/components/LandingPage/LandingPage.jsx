import { useSelector } from 'react-redux';
// import { useNavigate  } from 'react-router-dom';
import './LandingPage.css';
import TripsIndex from '../TripsIndex';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function LandingPage(){ 
    const sessionUser = useSelector(state => state.session.user);
    // const navigate = useNavigate();
    // if(!sessionUser) navigate("login")

    return (
        <div className='landing-page'>
            {!sessionUser && (
                <div className='call-to-action'>
                    <h1>Embark on Your Next Adventure with TripWise</h1>
                    <h2>Plan unforgettable journeys and discover your dream destinations. Start your travel story today.</h2>
                    <img
                        src='https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'
                        alt='Travel Inspiration'
                    />
                    <div className='cta-buttons'>
                        <OpenModalButton
                            buttonText='Log In'
                            modalComponent={<LoginFormModal />}
                        />
                        <OpenModalButton
                            buttonText='Sign Up'
                            modalComponent={<SignupFormModal />}
                        />
                    </div>
                </div>
            )}
            {sessionUser && (<div>
                <TripsIndex sessionUser={sessionUser} />
            </div>
            )}            
        </div>
    )
}

export default LandingPage;