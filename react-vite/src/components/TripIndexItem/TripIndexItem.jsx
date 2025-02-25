import './TripIndexItem.css';
import { useNavigate  } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteTripModal from '../DeleteTripModal';

function TripIndexItem({ trip, indexType, pageType }){
    const navigate = useNavigate();
    const start = new Date(trip?.startDate);
    const end = new Date(trip?.endDate);        
    const tripDuration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
       
    const options = { month: "short", day: "numeric", timeZone: "UTC", };
    const startFormatted = start.toLocaleDateString("en-US", options);
    const endFormatted = end.toLocaleDateString("en-US", options);
    const startYear = start.getUTCFullYear();
    const endYear = end.getUTCFullYear();
    
    let tripDates;
    if (startYear === endYear) {
      tripDates = `${startFormatted} - ${endFormatted}, ${endYear}`;
    } else {
      tripDates =`${startFormatted}, ${startYear} - ${endFormatted}, ${endYear}`;
    }
       
    const handleTripShow = () =>{
        navigate(`/trips/${trip?.id}`)
    }
    
    const handleUpdate = (e) => {
        e.preventDefault();
        navigate(`/trips/${trip?.id}/edit`);
    }

    return (
        <div className="trip-index-item">
            <div className="trip-info">
                <h2 onClick={handleTripShow}>{trip?.name}</h2>
                <span>{trip?.destination}</span>
                <span>{`${tripDates} (${tripDuration} days)`}</span>
            {pageType === "tripShow" && (<div>
                <OpenModalButton 
                    buttonText="Delete Trip" 
                    modalComponent={<DeleteTripModal  tripId={trip?.id} />}
                  />
                {indexType ==="upcoming" &&( <button onClick={handleUpdate}> Edit ( TO DO )</button>)}
            </div>)}
            </div>
            <div className="trip-image">
                <img src='https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg'/>
            </div>
        </div>
    )
}

export default TripIndexItem;