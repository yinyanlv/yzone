import axios from 'axios';
import {push} from 'react-router-redux';

import {REGISTER_STARTED, REGISTER_SUCCESS, REGISTER_FAILURE} from './actionTypes';
import config from '../../config';

export const registerStarted = () => ({
  type: REGISTER_STARTED
});

export const registerSuccess = (result) => ({
  type: REGISTER_SUCCESS,
  result
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error
});

export const register = (params) => {
  return (dispatch, getState) => {

    let url = `${config.backendBasePath}/register`;

    dispatch(registerStarted());

    axios.post(url, params)
      .then((res) => {
        dispatch(registerSuccess(res));
        push('/login');
      })
      .catch((err) => {
        dispatch(registerFailure(err));
      });
  };
};