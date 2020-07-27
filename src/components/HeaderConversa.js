import React,{useState, useEffect} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import firebase from 'firebase';
import 'firebase/database';

import { useNavigation } from '@react-navigation/native';

const HeaderConversa = (props) => {

  const navigation = useNavigation();

  const[user, setUser] = useState({name: '', avatar: ''});

  useEffect(()=>{
    firebase.database().ref(`users/${props.contactB64}`).once('value').then(snapshot => {
      setUser(snapshot.val());
    })
  });

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'arrow-left'} size={22} color={'#FFF'}/>
      </TouchableOpacity>
      <Text style={styles.title}>{user.name}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: '#133B23',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16
  },
})

export default HeaderConversa;
