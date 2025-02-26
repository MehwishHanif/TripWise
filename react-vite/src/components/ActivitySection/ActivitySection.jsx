import './ActivitySection.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { selectTripActivities } from '../../redux/activities';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteActivityModal from '../DeleteActivityModal';

function ActivitySection({ tripId }){   
    // const trip = useSelector( (state) => state.trips[parseInt(tripId)] || []);
    // const tripActivityIds = useSelector( (state) => state.trips[parseInt(tripId)]?.activityIds || []);
   // const activities = useSelector( (state) => Object.values(state.trips) || []);
  //  console.log(activities)
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [menuId, setMenuId] = useState("");
  const ulRef = useRef();
  const activities = useSelector((state) => selectTripActivities(state, parseInt(tripId)));
    console.log("Activities: ",activities)
    useEffect(() => {
        const closeMenu = (e) => {
          if (ulRef.current && !ulRef.current.contains(e.target)) {
            setShowMenu(false);
          }
        };
    
        document.addEventListener("click", closeMenu);
    
        return () => document.removeEventListener("click", closeMenu);
    }, []);

    const closeMenu = () => setShowMenu(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: "UTC" };
        return date.toLocaleDateString('en-US', options);
    };
    
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };
    
    const groupActivitiesByDate = (activities) => {
        const grouped = {};
        activities.forEach((activity) => {
            // console.log(formatDate(activity.startTime))
          const date = formatDate(activity.startTime);
          if (!grouped[date]) {
            grouped[date] = [];
          }
          grouped[date].push(activity);
        });
        return grouped;
    };

    const handleAddTripActivity = () =>{
        navigate(`/trips/${tripId}/activities/new`)
    }
 
    const groupedActivities = groupActivitiesByDate(activities);

    return (
    <div className='activity-section'>
        <div>
            <button onClick={handleAddTripActivity}> Add an Activity</button>
        </div>
        <div className="trip-activities">
          {Object.entries(groupedActivities).map(([date, dailyActivities]) => (
            <div key={date} className="daily-activities">
              <h3 className="activity-day">{date}</h3>
              {dailyActivities.map((activity) => (
                <div key={activity?.id} className="activity-item">
                  <div className="activity-time">
                    {formatTime(activity?.startTime)} - {formatTime(activity?.endTime)}
                  </div>
                  <div className="activity-details">
                    <div className="activity-name">{activity?.name}</div>
                    <div className="activity-location">{activity?.location}</div>
                    <div className="activity-category">Category: {activity?.category}</div>
                    {activity?.notes && <div className="activity-notes">Notes: {activity?.notes}</div>}
                  </div>
                  <div className="activity-actions">
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        console.log("clicked")
                        setShowMenu(!showMenu);
                        setMenuId(activity?.id);
                        }}>
                        . . .
                    </div>
                    {showMenu && menuId === activity?.id && (
                        <ul className={"activity-actions-dropdown"} ref={ulRef}>
                            <OpenModalMenuItem 
                                itemText="Delete Activity" 
                                modalComponent={<DeleteActivityModal  tripId={tripId} activityId={activity?.id} />}
                            />                      
                            <li
                                onClick={ () => {
                                        navigate(`/activities/${activity?.id}/edit`)
                                        closeMenu();
                                    }}
                                >
                                Update Activity
                            </li> 
                        </ul>
                    )}
                    
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
    </div>
    );
}

export default ActivitySection;