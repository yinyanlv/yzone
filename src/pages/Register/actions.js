import axios from 'axios';

import {REGISTER_STARTED, REGISTER_SUCCESS, REGISTER_FAILURE} from './actionTypes';
import config from '../../config';
import history from '../../utils/history';

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

        if (res.data.success) {

          dispatch(registerSuccess(res.data));
          history.push('/login');
        } else {
          dispatch(registerFailure(res.data));
        }
      })
      .catch((err) => {
        dispatch(registerFailure(err));
      });
  };
};