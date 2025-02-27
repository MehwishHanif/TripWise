import ActivityForm from "./ActivityForm";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


function EditActivityForm(){
    const { activityId } = useParams();
    const activity = useSelector( (state) => state.activities[parseInt(activityId)] || []);

    const activityData ={
        name: activity?.name, 
        category:  activity?.category,
        location:  activity?.location,
        startDate: activity?.startTime?.split('T')[0],
        startTime: activity?.startTime?.split('T')[1],
        endDate: activity?.endTime?.split('T')[0],
        endTime: activity?.endTime?.split('T')[1],
        notes:  activity?.notes,
        tripId:  activity?.tripId,
        id: activity?.id
    }

    return(
        <ActivityForm activity={activityData} formType="edit"/>
    )
}

export default EditActivityForm;