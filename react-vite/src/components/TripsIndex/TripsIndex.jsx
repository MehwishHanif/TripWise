import { useState, useEffect } from 'react';
import { thunkGetUserTrips } from '../../redux/trips';
import { useSelector, useDispatch } from 'react-redux';
import TripIndexItem from '../TripIndexItem';
import { useNavigate  } from 'react-router-dom';
import './TripsIndex.css';


function TripsIndex({ sessionUser }){
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const [isUpcomingTripsActive, setIsUpcomingTripsActive] = useState(true);
    const [isPastTripsActive, setIsPastTripsActive] = useState(false);
    const trips = useSelector( (state) => Object.values(state.trips) || []);
    console.log(trips);

    useEffect(() => {    
        if( sessionUser)  dispatch(thunkGetUserTrips(sessionUser?.id))        
    }, [dispatch, sessionUser]);

    const todayUTC = new Date().toISOString().split("T")[0];
    trips.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const pastTrips = trips.filter(trip => trip.endDate.split("T")[0] < todayUTC);
    const upcomingTrips = trips.filter(trip => trip.endDate.split("T")[0] >= todayUTC);    

    const handleAddTrip = () =>{
        navigate(`/trips/new`)
    }

    return (
        <div className='trips-feed'>
            <div>
                <button
                  className="trips-button"
                  onClick={() => {
                    setIsUpcomingTripsActive(true);
                    setIsPastTripsActive(false);
                  }}
                > 
                Upcomming Trips
                </button>
                <button
                  className="trips-button"
                  onClick={() => {
                    setIsPastTripsActive(true);
                    setIsUpcomingTripsActive(false);
                  }}
                >
                Past Trips
                </button>
            </div>
           {isUpcomingTripsActive && (
                <div className="trips-index">
                    <button onClick={handleAddTrip}>Add a Trip</button>
                    {upcomingTrips?.map( trip => (
                        <TripIndexItem key={trip.id} trip={trip} indexType="upcoming" />
                    ))}
                </div>
            )}
           {isPastTripsActive && (
                <div className="trips-index">
                    {pastTrips?.map( trip => (
                        <TripIndexItem key={trip.id} trip={trip} indexType="past"/>
                    ))}
                </div>
            )}
        </div>
        
    )
}

export default TripsIndex;