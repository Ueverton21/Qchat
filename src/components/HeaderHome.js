import React,{useState, useEffect} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import base64 from 'base-64';

import firebase from 'firebase/app';
import 'firebase/database';

const HeaderHome = ({
  email
}) => {

  const [avatar,setAvatar] = useState('');

  useEffect(() => {
    async function getAvatar(){
      const emailb64 = base64.encode(email);
      firebase.database().ref(`users/${emailb64}`).once('value').then(snapshot => {
        setAvatar(snapshot.val().avatar);
      })
    }
    getAvatar();
  },[]) 

  return (
    <View style={styles.main}>
      <Text style={styles.title}>CONVERSAS</Text>
      <TouchableOpacity style={styles.btnPerfil}>
        <Image 
          style={styles.imgPerfil}
          source={{uri: avatar ? 
            avatar
            :
            'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: '#133B23',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentRight: {
    flexDirection: 'row'
  },
  btnPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  imgPerfil: {
    height: 32,
    width: 32,
    borderRadius: 16
  },
})

const mapStateToProps = state => ({
  email: state.user.email
})

export default connect(mapStateToProps, null)(HeaderHome);
