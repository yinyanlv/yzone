import {REGISTER} from './actionTypes';

export const register = (params) => {
  return {
    type: REGISTER,
    data: params
  };
};