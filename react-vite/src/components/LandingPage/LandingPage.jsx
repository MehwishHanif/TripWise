import { useSelector } from 'react-redux';
// import { useNavigate  } from 'react-router-dom';
import './LandingPage.css';
import TripsIndex from '../TripsIndex';

function LandingPage(){ 
    const sessionUser = useSelector(state => state.session.user);
    // const navigate = useNavigate();
    // if(!sessionUser) navigate("login")

    return (
        <div className='landing-page'>
            {!sessionUser && (<div className='call-to-action'>
                <h1>TripWise</h1>
                <h2>Discover Your Next Destination. Join TripWise and Plan Your Perfect Getaway</h2>
                <img src='https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'/>
            </div>)}
            {sessionUser && (<div>
                <TripsIndex sessionUser={sessionUser} />
            </div>
            )}            
        </div>
    )
}

export default LandingPage;