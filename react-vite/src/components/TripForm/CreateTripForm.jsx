import TripForm from "./TripForm";

function CreateTripForm(){
    const trip ={
        name: '', 
        description: '',
        destination: '',
        startDate: '',
        endDate: '',
    }
    
    return (
        <TripForm trip={trip} formType="create" />
    )
}

export default CreateTripForm;