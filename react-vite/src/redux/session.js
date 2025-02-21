const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const ADD_USER_TRIP = "session/addUserTrip ";
const REMOVE_USER_TRIP = "session/removeUserTrip ";

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

export const addUserTrip = (tripId) => ({
  type: ADD_USER_TRIP,
  payload: tripId
});

export const removeUserTrip = (tripId) => ({
  type: REMOVE_USER_TRIP,
  payload: tripId
});

export const thunkAuthenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/");
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const thunkLogin = (credentials) => async dispatch => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    return { server: "Something went wrong. Please try again" }
  }
};

export const thunkSignup = (user) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    return { server: "Something went wrong. Please try again" }
  }
};

export const thunkLogout = () => async (dispatch) => {
  await fetch("/api/auth/logout");
  dispatch(removeUser());
};

const initialState = { user: null };

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case ADD_USER_TRIP:
      return {
          ...state,
          user: {
              ...state.user,
              tripIds: [...new Set([...state.user.tripIds, action.payload])]
          }
      };
    case REMOVE_USER_TRIP:
      return {
          ...state,
          user: {
              ...state.user,
              tripIds: state.user.tripIds.filter(id => id !== action.payload)
          }
      };
    default:
      return state;
  }
}

export default sessionReducer;
