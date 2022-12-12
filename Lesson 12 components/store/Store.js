import {createStore} from "redux";
import counterActionReducer from "../reducers/counterActionReducer";


const store=createStore(counterActionReducer);

export default store;