import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./reducers/filterReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { searchReducer } from "./reducers/searchReducer";
import { sortingReducer } from "./reducers/sortingReducer";

const reducer = combineReducers({
  moviesReducer,
  filterReducer,
  sortingReducer,
  searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
