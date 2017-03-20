import { combineReducers } from 'redux';

// Import Reducers
// import auth from './modules/auth/authReducers';
// import modal from './containers/modal/modalReducers';
// import { apollo } from './modules/gql/gqlClient';
const initialState = {};

const defaultState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({ defaultState });

export default reducers;

