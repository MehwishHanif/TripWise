import './TripIndexItem.css';
import { useNavigate  } from 'react-router-dom';
// import OpenModalButton from '../OpenModalButton';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteTripModal from '../DeleteTripModal';
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { MdLocationPin, MdDateRange } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {FaClock} from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";


function TripIndexItem({ trip, indexType, pageType }){
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    // const [menuId, setMenuId] = useState("");
    const ulRef = useRef();
    const sessionUser = useSelector(state => state.session.user);

    const tripOwner = useSelector((state) => state.users[trip?.userId]);

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
    const start = new Date(trip?.startDate);
    const end = new Date(trip?.endDate);        
    const tripDuration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
       
    const options = { month: "short", day: "numeric", timeZone: "UTC" };
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
        closeMenu();
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu);
    };

    return (
    <div className='trip-items-container'>
        { pageType==="explore" && (
            <div className='trip-user-info'>
                <span className='trip-user-icon'><FaUserCircle /></span>
                <span className='trip-user-name'>{`${tripOwner.firstName} ${tripOwner.lastName}`}</span>
            </div>
        )}
        <div className="trip-index-item">
            <div className="trip-info">
                <h2 onClick={handleTripShow}>{trip?.name}</h2>
                <span><MdLocationPin />{`${trip?.destination}`}</span>
                <span><MdDateRange />{`${tripDates}`}</span>
                <span><FaClock />{`${tripDuration} days`}</span>
                { pageType === "tripShow" && trip?.description && (<span><IoDocumentTextOutline />{`${trip?.description}`}</span>)}
            {pageType === "tripShow" && trip?.userId === sessionUser.id && (
            <div className='tripshow-action'>
                <div  className="toggle-menu" onClick={toggleMenu}>
                        <BsThreeDots />
                </div>
                {showMenu  && (
                    <ul className={"tripshow-action-dropdown"} ref={ulRef}>
                        <OpenModalMenuItem 
                            itemText="Delete Trip"
                            onItemClick={closeMenu} 
                            modalComponent={<DeleteTripModal  tripId={trip?.id} />}
                        />
                        {indexType ==="upcoming" &&( <li onClick={handleUpdate}> Update Trip</li>)}
                    </ul>
                )}
            </div>)}
            </div>
            <div className="trip-image">
                <img src={trip?.imageUrl} />
            </div>
        </div>
    </div>
    )
}

export default TripIndexItem;