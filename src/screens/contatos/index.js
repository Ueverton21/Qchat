import React,{useState, useEffect} from 'react';
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import Icon from 'react-native-vector-icons/Feather';
import 'firebase/database';
import b64 from 'base-64';
import {useNavigation} from '@react-navigation/native';

import HeaderContato from '../../components/HeaderContato';
import Contato from '../../components/Contato';

import styles from './styles';

const Contatos = ({
  email
}) => {

  const [contatos, setContatos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const emailb64 = b64.encode(email);
    console.log(emailb64);
    firebase.database().ref(`users/${emailb64}/contatos`).on('value', (snapshot) => {
      if(snapshot.val()!==null){
        setContatos(Object.values(snapshot.val()));
      }  
    })
  },[]);

  return (
    <View>
      <HeaderContato navigation={navigation} title={'CONTATOS'}/>
      <TouchableOpacity style={styles.btnNovo} onPress={()=> navigation.navigate('NovoContato')}>
        <View style={styles.boxIcone}>
          <Icon name={'plus'} size={28}/>
        </View>
        <Text style={styles.txtBtnNovo}>Novo Contato</Text>
      </TouchableOpacity>
      {contatos.length > 0 ?
        contatos.map(contato => <Contato key={contato} user={contato}/>)
        :
        <>
          <Text style={styles.txtSemContato}>Nenhum contato</Text>
        </>
      }
    </View>
  );
}

const mapStateToProps = state => ({
  email: state.user.email
})

export default connect(mapStateToProps, null)(Contatos);
