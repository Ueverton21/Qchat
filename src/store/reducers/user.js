import { 
  MODIFY_EMAIL, 
  MODIFY_PASSWORD, 
  ERROR_LOGIN, 
  SUCESS_LOGIN,
  MODIFY_NAME,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  isSigned: false,
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
  else if(action.type === MODIFY_NAME){
    return {...state, name: action.payload}
  }
  else if(action.type === ERROR_LOGIN){
    return {...state, errorLogin: action.payload}
  }
  else if(action.type === SUCESS_LOGIN){
    return {...state, errorLogin: action.payload, isSigned: true}
  }
  else if(action.type === LOGOUT){
    return {...state, isSigned: false}
  }
  return state;
}
