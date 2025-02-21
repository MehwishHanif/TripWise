import { addTripActivity, removeTripActivity } from "./trips";

const LOAD_ACTIVITIES = "activities/LOAD_ACTIVITIES";
const ADD_ACTIVITY = "activities/ADD_ACTIVITY";
const UPDATE_ACTIVITY = "activities/UPDATE_ACTIVITY";
const DELETE_ACTIVITY = "activities/DELETE_ACTIVITY";

const loadActivities = (activities) => ({
  type: LOAD_ACTIVITIES,
  activities,
});

const addActivity = (activity) => ({
  type: ADD_ACTIVITY,
  activity,
});

const updateActivity = (activity) => ({
  type: UPDATE_ACTIVITY,
  activity,
});

const deleteActivity = (activityId, tripId) => ({
  type: DELETE_ACTIVITY,
  activityId,
  tripId,
});

export const thunkGetAllActivities = () => async (dispatch) => {
  const response = await fetch(`/api/activities`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadActivities(data.activities));
    return data.activities;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const thunkCreateActivity =
  (tripId, activityData) => async (dispatch) => {
    const response = await fetch(`/api/trips/${tripId}/activities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activityData),
    });

    if (response.ok) {
      const newActivity = await response.json();
      dispatch(addActivity(newActivity));
      dispatch(addTripActivity(newActivity.id, tripId));
      return newActivity;
    } else {
      const errors = await response.json();
      return errors;
    }
  };

export const thunkUpdateActivity =
  (activityId, activityData) => async (dispatch) => {
    const response = await fetch(`/api/activities/${activityId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activityData),
    });

    if (response.ok) {
      const updatedActivity = await response.json();
      dispatch(updateActivity(updatedActivity));
      return updatedActivity;
    } else {
      const errors = await response.json();
      return errors;
    }
  };

export const thunkDeleteActivity = (activityId, tripId) => async (dispatch) => {
  const response = await fetch(`/api/activities/${activityId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteActivity(activityId, tripId));
    dispatch(removeTripActivity(activityId, tripId));
    return true;
  } else {
    const errors = await response.json();
    return errors;
  }
};

const activityReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ACTIVITIES: {
      const newState = {};
      action.activities.forEach((activity) => {
        newState[activity.id] = activity;
      });
      return newState;
    }
    case ADD_ACTIVITY: {
      return { ...state, [action.activity.id]: action.activity };
    }
    case UPDATE_ACTIVITY: {
      return { ...state, [action.activity.id]: action.activity };
    }
    case DELETE_ACTIVITY: {
      const newState = { ...state };
      delete newState[action.activityId];
      return newState;
    }
    default:
      return state;
  }
};

export default activityReducer;
