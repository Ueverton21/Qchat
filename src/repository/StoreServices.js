import firebase from 'firebase';
import 'firebase/storage';

export default async function uploadImage(uri, name) { 
  const response = await fetch(uri); 
  const blob = await response.blob();

  try{
    const ref = firebase.storage().ref('avatar').child(name);
    await ref.put(blob);

    const imageUrl = await ref.getDownloadURL();
    return imageUrl;
  }catch(err){
    console.log(err);
  }
}
