import {
  MODIFY_EMAIL, 
  MODIFY_PASSWORD, 
  ERROR_LOGIN, 
  SUCESS_LOGIN, 
  MODIFY_NAME,
  LOGOUT
} from './types';

import firebase from 'firebase/app';
import 'firebase/auth';

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

export function modifyName(name){
  return{
    type: MODIFY_NAME,
    payload: name
  }
}

export function loginError(erro){
  return{
    type: ERROR_LOGIN,
    payload: erro
  }
}

export function loginSucess(){
  return{ 
    type: SUCESS_LOGIN, 
    payload: ''
  }
}

export function logout(){
  
  firebase.auth().signOut();
  return {type: LOGOUT};
  
}
