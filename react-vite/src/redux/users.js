
const LOAD_USERS = "users/LOAD_USERS";

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users,
});


export const thunkGetAllUsers = () => async (dispatch) => {
    const response = await fetch("/api/users");
  
    if (response.ok) {
      const data = await response.json();
      dispatch(loadUsers(data.users)); // Expecting { users: [{...}, {...}] }
      return data.users;
    } else {
      const errors = await response.json();
      return errors;
    }
};

const usersReducer = (state = {}, action) => {
    switch (action.type) {
      case LOAD_USERS: {
        const newState = {};
        action.users.forEach((user) => {
          newState[user.id] = user;
        });
        return newState;
      }
      default:
        return state;
    }
};
  
export default usersReducer;
  