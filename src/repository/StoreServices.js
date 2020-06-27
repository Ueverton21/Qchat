import firebase from 'firebase';
import 'firebase/storage';

export default async function uploadImage(uri, name) { 
  const response = await fetch(uri); 
  const blob = await response.blob();
  const ref = firebase.storage().ref('avatar').child(name);
  ref.put(blob)
    .then(snapshot => {
      console.log('Sucesso'); 
      return;
    })
    .catch(err => console.log(err));
}
