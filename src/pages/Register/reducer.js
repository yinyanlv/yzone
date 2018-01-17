import {REGISTER_STARTED, REGISTER_SUCCESS, REGISTER_FAILURE} from './actionTypes';
import * as status from './status';

export default (state = {status: status.SUCCESS}, action) => {

  switch (action.type) {
    case REGISTER_STARTED:
        return {
          status: status.STARTED
        };
      break;
    case REGISTER_SUCCESS:
        return {
          ...state,
          status: status.SUCCESS,
          ...action.result
        };
      break;
    case REGISTER_FAILURE:
        return {
          ...state,
          status: status.FAILURE,
          ...action.error
        };
      break;
    default:
      return state;
  }
};
