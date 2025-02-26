import './TripShow.css';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import TripIndexItem from '../TripIndexItem';
import ActivitySection from '../ActivitySection';

function TripShow(){
    const { tripId } = useParams();
    const trip = useSelector( (state) => state.trips[parseInt(tripId)] || []);
    console.log(trip)

    const todayUTC = new Date().toISOString().split("T")[0];
    let indexType;
    if (trip?.endDate?.split("T")[0] < todayUTC) indexType="past"
    else indexType="upcoming"

    return (
        <div className='trip-show'>
            <div className='trip-details'>
                <TripIndexItem trip={trip} indexType={indexType} pageType="tripShow"/>
            </div>
            <div>
                <ActivitySection tripId={tripId} indexType={indexType}/>
            </div>            
        </div>
    )
}

export default TripShow;