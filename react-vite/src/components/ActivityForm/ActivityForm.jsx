import './ActivityForm.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateActivity, thunkUpdateActivity } from '../../redux/activities';

const categoryOptions = {
    "Sightseeing":"SIGHTSEEING",
    "Dining": "DINING",
    "Adventure": "ADVENTURE",
    "Nightlife": "NIGHTLIFE",
    "Relaxation": "RELAXATION",
    "Culture": "CULTURE",
    "Shopping": "SHOPPING",
    "Outdoor": "OUTDOOR",
    "Entertainment": "ENTERTAINMENT",
    "Sports": "SPORTS",
    "Wellness": "WELLNESS",
    "Transportation": "TRANSPORTATION",
    "Work & Study": "WORK_STUDY",
    "Photography": "PHOTOGRAPHY",
    "Social": "SOCIAL",
    "Other": "OTHER",
};


function ActivityForm({ activity, formType }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector( (state) => state.trips[parseInt(activity?.tripId)] || []);
  const [name, setName] = useState(activity?.name);
  const [location, setLocation] = useState(activity?.location);
  const [category, setCategory] = useState(categoryOptions[activity?.category]);
  const [startDate, setStartDate] = useState(activity?.startDate);
  const [startTime, setStartTime] = useState(activity?.startTime);
  const [endDate, setEndDate] = useState(activity?.endDate);
  const [endTime, setEndTime] = useState(activity?.endTime);
  const [notes, setNotes] = useState(activity?.notes);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  console.log(trip)
  
  useEffect(() => {    
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }
    if (name && name.length > 100 ) {
        newErrors.name = "Name must be less than 100 characters";
    }
    if ( location && location.length > 255) {
      newErrors.location = "Location must be less than 255 characters";
    }
    if (notes && notes.length > 500 ) {
        newErrors.notes = "Notes must be less than 500 characters";
    }
    if (!startDate || !startTime) {
      newErrors.start_time = "Start date and time are required";
    }
    if (!endDate || !endTime) {
      newErrors.end_time = "End date and time are required";
    }
    if (startDate && startTime && endDate && endTime) {
      const activityStart = new Date(`${startDate}T${startTime}`);
      const activityEnd = new Date(`${endDate}T${endTime}`);
      const tripStart = new Date(trip?.startDate);
      const tripEnd = new Date(trip?.endDate);

      if (activityStart >= activityEnd) {
        newErrors.end_time = "End date and time must be after start date and time";
      }
      if (activityStart < tripStart || activityStart > tripEnd) {
        newErrors.start_time = "Activity start date must be within the Trip's start and end dates.";
      }
      if (activityEnd < tripStart || activityEnd > tripEnd) {
        newErrors.end_time = "Activity end date must be within the Trip's start and end dates.";
      }

    }
    setErrors(newErrors);
    }, [startDate, endDate, location, name, startTime, endTime, notes, trip]);

    const reset = () => {
        setName("");
        setLocation("");
        setCategory("SIGHTSEEING");
        setStartDate("");
        setStartTime("");
        setEndDate("");
        setEndTime("");
        setNotes("");
        setErrors({});
        setHasSubmitted(false);
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!Object.values(errors).length) {
      const newActivity = {
        name,
        location,
        category,
        start_time:  startTime.split(':').length === 2 ? `${startDate}T${startTime}:00` : `${startDate}T${startTime}`,
        end_time: endTime.split(':').length === 2 ? `${endDate}T${endTime}:00` : `${endDate}T${endTime}`,
        notes,
      };
      
      console.log(`${startDate}T${startTime}`)
      let result = await dispatch(
            formType === "create" ? thunkCreateActivity(activity?.tripId, newActivity) : thunkUpdateActivity(activity?.id, newActivity)
        );
      
        if (result && result.id) {
            reset();
            navigate(`/trips/${activity.tripId}`);
        } else {
            setHasSubmitted(true);
            console.log(result.errors)
            setErrors(result.errors);
        }
      
    }
  }  

  const onCancel = (e) => {
    e.preventDefault();
    navigate(`/trips/${activity.tripId}`);
  }

  return (
    <div className="activity-form-container">
      <h2>{formType==="create"? "Add new Activity" : "Update Activity"}</h2>
      <form onSubmit={handleSubmit} className="activity-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {hasSubmitted && errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {hasSubmitted && errors.location && <p className="error">{errors.location}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Object.keys(categoryOptions).map((optionKey) => (
                <option key={optionKey} value={categoryOptions[optionKey]}>
                    {optionKey}
                </option>
            ))}
          </select>
        </div>

        <div className="form-group date-time-group">
          <label>Start Date and Time:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          {hasSubmitted && errors.start_time && <p className="error">{errors.start_time}</p>}
        </div>

        <div className="form-group date-time-group">
          <label>End Date and Time:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          {hasSubmitted && errors.end_time && <p className="error">{errors.end_time}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
          {formType==="create"? "Create Activity" : "Update Activity"}
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityForm;