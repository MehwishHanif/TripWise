import './DeleteActivityModal.css';
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { thunkDeleteActivity } from '../../redux/activities';



function DeleteActivityModal({ tripId, activityId }) {
//   const navigate = useNavigate();
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(thunkDeleteActivity(activityId, tripId));
    // navigate("/");
    closeModal();
  };

  const handleNo = (e) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <div className="delete-trip-modal">
      <h1>Confirm Delete</h1>
      <p>Are you sure you want to delete this activity?</p>
      <button className="delete-trip" onClick={handleDelete}>
        Yes (Delete Activity)
      </button>
      <button className="delete-no" onClick={handleNo}>
        No (Keep Activity)
      </button>
    </div>
  );
}

export default DeleteActivityModal;