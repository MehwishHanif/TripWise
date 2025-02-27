import { useState, useEffect } from 'react';
import { thunkGetAllTrips } from '../../redux/trips';
import { useSelector, useDispatch } from 'react-redux';
import TripIndexItem from '../TripIndexItem';
import { useNavigate  } from 'react-router-dom';
import { thunkGetAllActivities } from '../../redux/activities';
import './TripsIndex.css';
import { selectUserTrips } from '../../redux/trips';


function TripsIndex(){
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const [isUpcomingTripsActive, setIsUpcomingTripsActive] = useState(true);
    const [isPastTripsActive, setIsPastTripsActive] = useState(false);
    const trips = useSelector(selectUserTrips);//useSelector( (state) => Object.values(state.trips) || []);
   
    useEffect(() => {
            dispatch(thunkGetAllTrips())
            dispatch(thunkGetAllActivities())       
    }, [dispatch]);

    const todayUTC = new Date().toISOString().split("T")[0];
    trips.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const pastTrips = trips.filter(trip => trip.endDate.split("T")[0] < todayUTC);
    const upcomingTrips = trips.filter(trip => trip.endDate.split("T")[0] >= todayUTC).sort((a, b) => {
        const dateA = new Date(a.endDate.split("T")[0]);
        const dateB = new Date(b.endDate.split("T")[0]);
        return dateA - dateB; 
    });    

    const handleAddTrip = () =>{
        navigate(`/trips/new`)
    }

    return (
        <div className='trips-feed'>
            <div className="tab-nav">
                <button
                  className={`trips-button ${isUpcomingTripsActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsUpcomingTripsActive(true);
                    setIsPastTripsActive(false);
                  }}
                > 
                Upcomming Trips
                </button>
                <button
                  className={`trips-button ${isPastTripsActive ? 'active' : ''}`}
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