import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { modalsReducer } from "./reducers/modalsReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { searchReducer } from "./reducers/searchReducer";
import { sortingReducer } from "./reducers/sortingReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  movies: moviesReducer,
  filters: filterReducer,
  sorting: sortingReducer,
  search: searchReducer,
  modals: modalsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
