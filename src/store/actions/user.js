import {MODIFY_EMAIL, MODIFY_PASSWORD} from './types';

export function modifyEmail(email){
  return{
    type: MODIFY_EMAIL,
    payload: email
  }
}

export function modifyPassword(password){
  return{
    type: MODIFY_PASSWORD,
    payload: password
  }
}
