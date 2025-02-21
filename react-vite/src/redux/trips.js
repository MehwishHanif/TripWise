import { addUserTrip, removeUserTrip } from "./session";

const LOAD_TRIPS = "trips/LOAD_TRIPS";
const ADD_TRIP = "trips/ADD_TRIP";
const UPDATE_TRIP = "trips/UPDATE_TRIP";
const DELETE_TRIP = "trips/DELETE_TRIP";
const ADD_TRIP_ACTIVITY = "trips/addTripActivity ";
const REMOVE_TRIP_ACTIVITY = "trips/removeTripActivity ";

const loadTrips = (trips) => ({
  type: LOAD_TRIPS,
  trips,
});

const addTrip = (trip) => ({
  type: ADD_TRIP,
  trip,
});

const updateTrip = (trip) => ({
  type: UPDATE_TRIP,
  trip,
});

const deleteTrip = (tripId) => ({
  type: DELETE_TRIP,
  tripId,
});

export const addTripActivity = (activityId, tripId) => ({
  type: ADD_TRIP_ACTIVITY,
  tripId,
  activityId,
});

export const removeTripActivity = (activityId, tripId) => ({
  type: REMOVE_TRIP_ACTIVITY,
  tripId,
  activityId,
});

export const thunkGetUserTrips = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/trips`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadTrips(data.trips));
    return data.trips;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const thunkCreateTrip = (tripData) => async (dispatch) => {
  const response = await fetch("/api/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripData),
  });

  if (response.ok) {
    const newTrip = await response.json();
    dispatch(addTrip(newTrip));
    dispatch(addUserTrip(newTrip.id));
    return newTrip;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const thunkUpdateTrip = (tripId, tripData) => async (dispatch) => {
  const response = await fetch(`/api/trips/${tripId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripData),
  });

  if (response.ok) {
    const updatedTrip = await response.json();
    dispatch(updateTrip(updatedTrip));
    return updatedTrip;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const thunkDeleteTrip = (tripId) => async (dispatch) => {
  const response = await fetch(`/api/trips/${tripId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTrip(tripId));
    dispatch(removeUserTrip(tripId));
    return true;
  } else {
    const errors = await response.json();
    return errors;
  }
};

const tripReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRIPS: {
      const newState = {};
      action.trips.forEach((trip) => {
        newState[trip.id] = trip;
      });
      return newState;
    }
    case ADD_TRIP: {
      return { ...state, [action.trip.id]: action.trip };
    }
    case UPDATE_TRIP: {
      return { ...state, [action.trip.id]: action.trip };
    }
    case DELETE_TRIP: {
      const newState = { ...state };
      delete newState[action.tripId];
      return newState;
    }
    case ADD_TRIP_ACTIVITY: {
      const { tripId, activityId } = action;
      return {
        ...state,
        [tripId]: {
          ...state[tripId],
          activityIds: [...state[tripId].activityIds, activityId], 
        },
      };
    }
    case REMOVE_TRIP_ACTIVITY: {
      const { tripId, activityId } = action;
      return {
        ...state,
        [tripId]: {
          ...state[tripId],
          activityIds: state[tripId].activityIds.filter((id) => id !== activityId),
        },
      };
    }
    default:
      return state;
  }
};

export default tripReducer;
