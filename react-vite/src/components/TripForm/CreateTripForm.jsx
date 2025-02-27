import TripForm from "./TripForm";

function CreateTripForm(){
    const trip ={
        name: '', 
        description: '',
        destination: '',
        startDate: '',
        endDate: '',
        imageUrl: "https://images.pexels.com/photos/21014/pexels-photo.jpg"
    }
    
    return (
        <TripForm trip={trip} formType="create" />
    )
}

export default CreateTripForm;