import React,{useState} from 'react';
import { 
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import b64 from 'base-64';

import HeaderContato from '../../components/HeaderContato';

const NovoContato = ({email}) => {

  const [emailContact, setEmailContact] = useState('');
  const navigation = useNavigation();

  const [erro, setErro] = useState('');

  async function handleSave(){
    const emailB64 = b64.encode(email);
    const emailContactB64 = b64.encode(emailContact);

    if(email===emailContact){
      setErro('Você não pode adicionar seu email como um contato.');
    }
    else{
      setErro('');
      firebase.database().ref(`users/${emailB64}/contatos/${emailContactB64}`).once('value')
      .then(async snapshot=> {
        if(snapshot.val()){
          setErro('Você já tem esse esse contato.');
        }
        else{
          setErro('');
          firebase.database().ref(`users/${emailContactB64}`).once('value')
          .then(async snapshot => {
            if(snapshot.val()){
              setErro('');
              await firebase.database().ref(`users/${emailB64}/contatos/${emailContactB64}`).set(emailContactB64);
              navigation.goBack();
            }
            else{
              setErro('Esse contato não existe.');
            }
          })
        }
      })
    }
  }

  return (
    <>
      <HeaderContato navigation={navigation} title={'Adicionar contato'} />
      <View style={styles.main}>
        <Text style={styles.txtLabel}>Email</Text>
        {erro ? 
          <Text style={styles.txtErro}>*{erro}</Text> 
          : 
          null
        }
        <TextInput 
          onChangeText={value => setEmailContact(value)}
          value={emailContact}
          style={styles.input} 
          placeholder={'Digite o email do contato'}
        />
        <TouchableOpacity 
          style={styles.btn} 
          onPress={() => handleSave()}
        >
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = new StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    backgroundColor: '#DDD',
  },
  txtLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
    color: '#555',
    borderRadius: 4
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#228B22',
    borderRadius: 4,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  txtErro: {
    color: '#E22',
  }
});

const mapStateToProps = state => ({
  email: state.user.email
})

export default connect(mapStateToProps, null)(NovoContato);
