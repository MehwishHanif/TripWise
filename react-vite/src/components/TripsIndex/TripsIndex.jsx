import { useState, useEffect } from 'react';
import { thunkGetAllTrips } from '../../redux/trips';
import { useSelector, useDispatch } from 'react-redux';
import TripIndexItem from '../TripIndexItem';
import { useNavigate  } from 'react-router-dom';
import { thunkGetAllActivities } from '../../redux/activities';
import './TripsIndex.css';
import { selectUserTrips } from '../../redux/trips';
import { thunkGetAllUsers } from '../../redux/users';

function TripsIndex(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isUpcomingTripsActive, setIsUpcomingTripsActive] = useState(true);
  const [isPastTripsActive, setIsPastTripsActive] = useState(false);
  const [isExploreTripsActive, setIsExploreTripsActive] = useState(false);
  const trips = useSelector(selectUserTrips);
  const sessionUser = useSelector((state) => state.session.user);
  const allTrips = useSelector((state) => Object.values(state.trips) || []);
 

  useEffect(() => {
    dispatch(thunkGetAllTrips());
    dispatch(thunkGetAllActivities());
    dispatch(thunkGetAllUsers())
  }, [dispatch]);

  const todayUTC = new Date().toISOString().split("T")[0];
  trips.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); //sort user trips, soonest first
  const pastTrips = trips.filter(
    (trip) => trip.endDate.split("T")[0] < todayUTC
  ); //get user past trips
  const upcomingTrips = trips
    .filter((trip) => trip.endDate.split("T")[0] >= todayUTC)
    .sort((a, b) => {
      //get user upcoming trips
      const dateA = new Date(a.endDate.split("T")[0]);
      const dateB = new Date(b.endDate.split("T")[0]);
      return dateA - dateB;
    });

  const otherUsersPastTrips = allTrips
    .filter(
      (trip) =>
        trip.endDate.split("T")[0] < todayUTC && trip.userId !== sessionUser.id
    )
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); //get past trips of other users

  const handleAddTrip = () => {
    navigate(`/trips/new`);
  };

  return (
    <div className="trips-feed">
      <div className="tab-nav">
        <button
          className={`trips-button ${isUpcomingTripsActive ? "active" : ""}`}
          onClick={() => {
            setIsUpcomingTripsActive(true);
            setIsPastTripsActive(false);
            setIsExploreTripsActive(false);
          }}
        >
          Upcomming Trips
        </button>
        <button
          className={`trips-button ${isPastTripsActive ? "active" : ""}`}
          onClick={() => {
            setIsPastTripsActive(true);
            setIsUpcomingTripsActive(false);
            setIsExploreTripsActive(false);
          }}
        >
          Past Trips
        </button>
        <button
          className={`trips-button ${isExploreTripsActive ? "active" : ""}`}
          onClick={() => {
            setIsExploreTripsActive(true);
            setIsPastTripsActive(false);
            setIsUpcomingTripsActive(false);
          }}
        >
          Explore Trips
        </button>
      </div>
      {isUpcomingTripsActive && (
        <div className="trips-index">
          <div className="add-trip-btn">
            <button onClick={handleAddTrip}>Add a Trip</button>
          </div>
          {upcomingTrips?.map((trip) => (
            <TripIndexItem key={trip.id} trip={trip} indexType="upcoming" />
          ))}
        </div>
      )}
      {isPastTripsActive && (
        <div className="trips-index">
          {pastTrips?.map((trip) => (
            <TripIndexItem key={trip.id} trip={trip} indexType="past" />
          ))}
        </div>
      )}
      {isExploreTripsActive && (
        <div className="trips-index">
          {otherUsersPastTrips?.map((trip) => (
            <TripIndexItem key={trip.id} trip={trip} indexType="past" pageType="explore"/>
          ))}
        </div>
      )}
    </div>
  );
}

export default TripsIndex;