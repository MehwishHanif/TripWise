import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate  } from 'react-router-dom';
import { thunkGetUserTrips } from '../../redux/trips';
import { useEffect } from 'react';
import './LandingPage.css';
import TripsIndex from '../TripsIndex';

function LandingPage(){
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)

    const trips = useSelector( (state) => Object.values(state.trips) || []);
    console.log(trips)

    // if(!sessionUser) navigate("login")

    useEffect(() => {    
        if( sessionUser)  dispatch(thunkGetUserTrips(sessionUser?.id))        
    }, [dispatch, sessionUser]);

    return (
        <div className='landing-page'>
            {!sessionUser && (<div className='call-to-action'>
                <h1>TripWise</h1>
                <h2>Discover Your Next Destination. Join TripWise and Plan Your Perfect Getaway</h2>
                <img src='https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'/>
            </div>)}
            {sessionUser && (<div>
                <TripsIndex />
            </div>
            )}            
        </div>
    )
}

export default LandingPage;