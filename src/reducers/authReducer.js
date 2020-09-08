import { SIGN_IN, SIGN_OUT, GET_USER_INFO } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
  userDetails: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        token: action.payload.token,
      };
    case SIGN_OUT:
      return { ...state, ...action.payload };
    case GET_USER_INFO:
      return { ...state, userDetails: { ...action.payload } };
    default:
      return state;
  }
};
