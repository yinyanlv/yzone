import {REGISTER} from './actionTypes';
import * as status from './status';

export default (state = {status: status.SUCCESS}, action) => {

  switch (action.type) {

    case REGISTER:
        return {
          status: status.LOADING
        };
      break;

    default:
      return state;
  }
};
