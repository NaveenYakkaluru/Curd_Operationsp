import {applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import Reducer from "./ReduxReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware=[thunk] 

const Store=createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    

)
export default Store; 