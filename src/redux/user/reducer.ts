import { Reducer } from "redux";
import {
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  SIGNIN_SUCCESS,
  userAction,
  userState,
} from "./types";

export const initialState: userState = {
  info: {},
};

export const userReducer: Reducer<userState, userAction> = (
  state: userState = initialState,
  action: userAction
): userState => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        info: action.payload,
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
