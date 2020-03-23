import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ActionTypes } from './ActionCreators';

const initState = {
  users: [],
  loggedIn: false,
  news: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:

      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.SET_LOGGED_IN:

      return {
        ...state,
        loggedIn: action.payload,
      };

    case ActionTypes.SET_NEWS:

      return {
        ...state,
        news: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
