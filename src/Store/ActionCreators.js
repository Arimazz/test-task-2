
export const ActionTypes = {
  SET_USERS: 'SET_USERS',
  SET_LOGGED_IN: 'SET_LOGGED_IN',
  SET_NEWS: 'SET_NEWS',
};

export const setUsers = payload => ({
  type: ActionTypes.SET_USERS,
  payload,
});

export const setLoggedIn = payload => ({
  type: ActionTypes.SET_LOGGED_IN,
  payload,
});

export const setNews = payload => ({
  type: ActionTypes.SET_NEWS,
  payload,
});
