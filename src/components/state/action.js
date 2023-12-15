import { LOGIN } from './constants';

export const login = (text) => ({
  type: LOGIN,
  payload: text
})