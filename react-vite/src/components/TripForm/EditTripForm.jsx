import TripForm from "./TripForm";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function EditTripForm(){
    const { tripId } = useParams();
    const trip = useSelector( (state) => state.trips[parseInt(tripId)] || []);

    return (
        <TripForm trip={trip} formType="edit"/>
    )
}

export default EditTripForm;