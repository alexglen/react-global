import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer } from './reducers/filterReducer';
import { modalsReducer } from './reducers/modalsReducer';
import { moviesReducer } from './reducers/moviesReducer';
import { sortingReducer } from './reducers/sortingReducer';

const reducer = combineReducers({
  movies: moviesReducer,
  filters: filterReducer,
  sorting: sortingReducer,
  modals: modalsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
