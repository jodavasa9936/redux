import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "../reducers/rootReducers.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));
//applyMiddleware va en el espacio de composeWithDevTools pero como
// esta ocupado buscamos otra forma de colocarlo.
