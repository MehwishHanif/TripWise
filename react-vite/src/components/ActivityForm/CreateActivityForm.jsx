import ActivityForm from "./ActivityForm";
import { useParams } from "react-router-dom";


function CreateActivityForm(){
    const { tripId } = useParams();
    const activity ={
        name: '', 
        category: 'Sightseeing',
        location: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        notes: '',
        tripId: parseInt(tripId)
    }

    return(
        <ActivityForm activity={activity} formType="create"/>
    )
}

export default CreateActivityForm;