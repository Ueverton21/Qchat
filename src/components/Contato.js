import React,{useState,useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const Contato = (props) => {
  const [user, setUser] = useState({avatar: '', name: ''});

  const navigation = useNavigation();

  useEffect(() => {
    function getUser(){
      firebase.database().ref(`users/${props.user}`).once('value').then(snapshot => {
        setUser(snapshot.val());
      });
    }
    getUser();
    
  },[])

  return (
    <TouchableOpacity style={styles.contato} onPress={() => navigation.navigate('Conversa',{contactB64: props.user})}>
      <Image 
        source={{
          uri: user.avatar ?
          user.avatar
          :
          'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user.name}</Text>
    </TouchableOpacity>
  );
}

const styles = new StyleSheet.create({
  contato: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#999',
    borderBottomWidth: .5,
    alignItems: 'center'
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555'
  }
})

export default Contato;
