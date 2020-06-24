import { MODIFY_EMAIL, MODIFY_PASSWORD, ERROR_LOGIN, SUCESS_LOGIN } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorLogin: ''
}

export default function user(state = INITIAL_STATE, action){
  if(action.type === MODIFY_EMAIL){
    return {...state, email: action.payload};
  }
  else if(action.type === MODIFY_PASSWORD){
    return {...state, password: action.payload}
  }
  else if(action.type === ERROR_LOGIN || action.type === SUCESS_LOGIN){
    return {...state, errorLogin: action.payload}
  }
  return state;
}
