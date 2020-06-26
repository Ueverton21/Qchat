import firebase from 'firebase';
import { Alert } from 'react-native';

export default async function uploadImage(uri, name) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase.storage().ref('avatar').child(name);
  const task = ref.put(blob);
}
