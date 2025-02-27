import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkCreateTrip, thunkUpdateTrip } from "../../redux/trips";
import './TripForm.css';


function TripForm({ trip, formType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(trip?.name);
  const [destination, setDestination] = useState(trip?.destination);
  const [startDate, setStartDate] = useState(trip?.startDate);
  const [endDate, setEndDate] = useState(trip?.endDate);
  const [description, setDescription] = useState(trip?.description);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');
  const [errors, setErrors] = useState({});

  // Image Selection State
  const imageURLs = [    
    "https://images.pexels.com/photos/21014/pexels-photo.jpg",
    "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg",
    "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg ",
    "https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg" ,
    "https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg" ,
    "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg" ,
    "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg" ,
    "https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg",
    'https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg'    
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(trip?.imageUrl); 

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  useEffect(() => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Trip name is required";
    }
    if (name && name.length > 100) {
      newErrors.name = "Trip name must be less than 100 characters";
    }
    if (!destination) {
      newErrors.destination = "Destination is required";
    }
    if (destination && destination.length > 255) {
      newErrors.name = "Destionation must be less than 100 characters";
    }
    if (description && description.length > 500) {
      newErrors.name = "Description must be less than 500 characters";
    }
    if (!startDate) {
      newErrors.start_date = "Start date is required";
    }
    if (!endDate) {
      newErrors.end_date = "End date is required";
    }
    if (startDate && endDate && startDate > endDate) {
      newErrors.end_date = "End date must be after start date";
    }

    setErrors(newErrors);
  }, [startDate, endDate, destination, name, description]);

  const reset = () => {
    setName("");
    setDestination("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setErrors({});
    setHasSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!Object.values(errors).length) {
      let tripData = { 
        name,
        destination,
        start_date: startDate,
        end_date: endDate,
        description,
        is_private: true,
        image_url: selectedImage
     };
     
      let result = await dispatch(
        formType === "create" ? thunkCreateTrip(tripData) : thunkUpdateTrip(trip?.id,tripData)
      );

      if (result && result.id) {
        reset();
        navigate(`/trips/${result.id}`);
      } else {
        setHasSubmitted(true);
        setErrors(result.errors);
      }
    }
  };

  const onCancel = (e) => {
    e.preventDefault();
    if (formType === "create") navigate("/");
    else navigate(`/trips/${trip?.id}`)
  }

  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
    setSelectedImage(imageURLs[(currentImageIndex + 1) % imageURLs.length]);
  };

  return (
    <div className="trip-form">
      <h2>{formType==="create"? "Add a new Trip" : "Update your Trip"}</h2>
      <form onSubmit={handleSubmit} className="add-trip-form">

        <div className="form-group trip-img">
          <img src={selectedImage} alt="Trip Preview" style={{ maxWidth: '200px', maxHeight: '150px' }} />
          <button type="button" className="img-change-btn" onClick={handleImageChange}>
            Change Image
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="tripName">Trip Name:</label>
          <input
            type="text"
            id="tripName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {hasSubmitted && errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          {hasSubmitted && errors.destination && <p className="error">{errors.destination}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            min={minDate} 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          {hasSubmitted && errors.start_date && <p className="error">{errors.start_date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {hasSubmitted && errors.end_date && <p className="error">{errors.end_date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {hasSubmitted && errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">{formType==="create"? "Add Trip" : "Update Trip"}</button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TripForm;
