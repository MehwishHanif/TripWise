import './DeleteTripModal.css';
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { thunkDeleteTrip } from '../../redux/trips';
import { useNavigate } from 'react-router-dom';

function DeleteTripModal({tripId}){
    const navigate= useNavigate();
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(thunkDeleteTrip( tripId));
        navigate("/");
        closeModal();
    }

    const handleNo = (e) => {
        e.preventDefault();
        closeModal();
    }
    return(
        <div className="delete-trip-modal" >
            <h1>Confirm Delete</h1>
            <p> Deleting this trip will remove all its activities and data. Are you sure you want to delete this trip?</p>
            <button className="delete-trip" 
                onClick={handleDelete}
             >Yes</button>
            <button className="delete-no" 
                onClick={handleNo}
             >No</button>
        </div>
    )
}

export default DeleteTripModal;