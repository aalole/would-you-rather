import authUser from "./authUser";
import questions from "./questions";
import users from "./users";
import { combineReducers } from "redux";

export default combineReducers({ authUser, questions, users });
