import { MODIFY_EMAIL, MODIFY_PASSWORD } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function user(state = INITIAL_STATE, action){
  if(action.type === MODIFY_EMAIL){
    return {...state, email: action.payload};
  }
  else if(action.type === MODIFY_PASSWORD){
    return {...state, password: action.payload}
  }

  return state;
}
