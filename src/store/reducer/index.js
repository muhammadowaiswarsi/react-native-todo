import { combineReducers } from 'redux'
import Todolist from './todolist';
import signOut from './signOut'
import Auth from "./auth";
export const reducer = combineReducers({
    Todolist,
    Auth,
    signOut
});
