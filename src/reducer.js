import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from './actions';

const initialState = {
  name: 'borrascador',
  repos: null,
  sending: false
};

export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch(action.type) {
    case USER_FETCH_REQUESTED:
      return Object.assign({}, state, {
        sending: true
      })
    case USER_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        name: action.name,
        repos: action.repos,
        sending: false
      });
    case USER_FETCH_FAILED:
      return Object.assign({}, state, {
        name: null,
        repos: null,
        sending: false
      });
    default:
      return state;
  }
}
