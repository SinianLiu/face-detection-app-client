import { LOGIN } from './constants';

const initialState = {
  input: ''
};

export const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, input: action.payload };
    default:
      return state;
  }
}