import './ActivitySection.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { selectTripActivities } from '../../redux/activities';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteActivityModal from '../DeleteActivityModal';
import { BsThreeDots } from "react-icons/bs";
// import { MdLocationPin } from 'react-icons/md';
// import { RiStickyNoteLine } from "react-icons/ri";
// import { GiBigGear } from 'react-icons/gi';
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  // MdNotes,
  MdLocationPin,
  MdRestaurant,
  MdHiking,
  MdNightlightRound,
  MdSpa,   
  MdShoppingBag,
  MdNaturePeople,
  MdSportsSoccer,
  MdLocalHospital,
  MdDirectionsBus,
  MdWork,
  MdCameraAlt,
  MdPeople,
  MdQuestionMark,
  MdTheaterComedy, // For Culture
  MdLocalActivity, // For Entertainment
} from 'react-icons/md';

function ActivitySection({ tripId, indexType }){   
   
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const [menuId, setMenuId] = useState("");
  const ulRef = useRef();
  const activities = useSelector((state) => selectTripActivities(state, parseInt(tripId)));
  
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

    const activityIcons = {
      Dining: <MdRestaurant />,
      Adventure: <MdHiking />,
      Nightlife: <MdNightlightRound />,
      Relaxation: <MdSpa />,
      Shopping: <MdShoppingBag />,
      Outdoor: <MdNaturePeople />,
      Sports: <MdSportsSoccer />,
      Wellness: <MdLocalHospital />,
      Transportation: <MdDirectionsBus />,
      "Work & Study": <MdWork />,
      Photography: <MdCameraAlt />,
      Social: <MdPeople />,
      Other: <MdQuestionMark/>,
      Sightseeing: <MdCameraAlt/>, // or another icon
      Culture: <MdTheaterComedy />,
      Entertainment: <MdLocalActivity />,
    };

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
         
          const date = formatDate(activity.startTime);
          if (!grouped[date]) {
            grouped[date] = [];
          }
          grouped[date].push(activity);
        });

        for (const date in grouped) {
          grouped[date].sort((a, b) => {
            return new Date(a.startTime) - new Date(b.startTime);
          });
        }       

        return grouped;
    };

    const handleAddTripActivity = () =>{
        navigate(`/trips/${tripId}/activities/new`)
    }
 
    const groupedActivities = groupActivitiesByDate(activities);

    return (
    <div className='activity-section'>
        <div className='add-activity-btn'>
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
                    {activityIcons[activity?.category] && (
                        <span 
                          className="activity-icon"
                          title={activity?.category} 
                          style={{ position: 'relative' }}
                        >
                            {activityIcons[activity?.category]}
                        </span>
                    )}
                  </div>
                  <div className="activity-details">
                    <div className="activity-name">{activity?.name}</div>
                    <div className="activity-location"><span className='location-icon'><MdLocationPin /></span>{activity?.location}</div>
                    {/* <div className="activity-category">Category: {activity?.category}</div> */}
                    {activity?.notes && <div className="activity-notes"><span><IoDocumentTextOutline /></span> {activity?.notes}</div>}
                  </div>
                  <div className="activity-actions">
                    <div
                        className="toggle-menu"
                        onClick={(e) => {
                            e.stopPropagation();
                        setShowMenu(!showMenu);
                        setMenuId(activity?.id);
                        }}>
                       <BsThreeDots />
                    </div>
                    {showMenu && menuId === activity?.id && (
                        <ul className={"activity-actions-dropdown"} ref={ulRef}>
                            <OpenModalMenuItem 
                                itemText="Delete Activity" 
                                onItemClick={closeMenu}
                                modalComponent={<DeleteActivityModal  tripId={tripId} activityId={activity?.id} />}
                            />                      
                            {indexType === "upcoming" && (<li
                                onClick={ () => {
                                        navigate(`/activities/${activity?.id}/edit`)
                                        closeMenu();
                                    }}
                                >
                                Update Activity
                            </li> )}
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