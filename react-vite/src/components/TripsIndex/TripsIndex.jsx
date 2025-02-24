import { useState } from 'react';
import './TripsIndex.css';

function TripsIndex(){
    const [isUpcomingTripsActive, setIsUpcomingTripsActive] = useState(false);
    const [isPastTripsActive, setIsPastTripsActive] = useState(false);

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
           {isUpcomingTripsActive && (<div className="trips-index"> Upcoming Trips</div> )}
           {isPastTripsActive && (<div className="trips-index"> Past Trips</div> )}
        </div>
        
    )
}

export default TripsIndex;