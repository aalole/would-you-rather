import { SET_VERIFIED_USER } from "../actions/authUser";

const authUser = (state = null, action) => {
  switch (action.type) {
    case SET_VERIFIED_USER:
      return action.id;
    default:
      return state;
  }
};

export default authUser;
