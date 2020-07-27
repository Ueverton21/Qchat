import React,{useState,useEffect, createRef} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
import 'firebase/database';
import b64 from 'base-64';

import styles from './styles.js';
import HeaderConversa from '../../components/HeaderConversa';

const Conversa = ({route,email}) => {

  const {contactB64} = route.params;
  const email64 = b64.encode(email);

  const refFlat = createRef();

  const [mensagem,setMensagem] = useState('');
  const [mensagens,setMensagens] = useState([]);
  useEffect(()=>{
    firebase.database().ref(`mensagens/${email64}/${contactB64}`).on('value', snapshot => {
      if(snapshot.val()){
        setMensagens(Object.values(snapshot.val()));
      }
    })
  },[])

  async function send(){
    
    await firebase.database().ref(`mensagens/${email64}/${contactB64}`).push({
      tipo: 'E',
      mensagem: mensagem
    });
    await firebase.database().ref(`mensagens/${contactB64}/${email64}/`).push({
      tipo: 'R',
      mensagem: mensagem
    }).then(()=> setMensagem(''));
    

    const contactEmail = b64.decode(contactB64);

    firebase.database().ref(`users/${contactB64}`).once('value').then(async snapshot=> {
      await firebase.database().ref(`conversas/${email64}/${contactB64}`).set({
        name: snapshot.val().name,
        avatar: snapshot.val().avatar,
        email: contactEmail
      });
    });

    firebase.database().ref(`users/${email64}`).once('value').then(async snapshot=> {
      await firebase.database().ref(`conversas/${contactB64}/${email64}`).set({
        name: snapshot.val().name,
        avatar: snapshot.val().avatar,
        email: email
      });
    });

    
  }

  function renderMessage({item}){
    return(
      <View style={item.tipo==='E' ? styles.boxMessageEnviada : styles.boxMessageRecebida}>
        <Text style={item.tipo==='E'? styles.enviada : styles.recebida}>{item.mensagem}</Text>
      </View>
    )
  }

  return (
    <>
      <HeaderConversa contactB64={contactB64}/>
      <View style={styles.main}>
        
        <FlatList 
          ref={refFlat}
          contentContainerStyle={{justifyContent: "flex-end", flexGrow: 1}}
          data={mensagens}
          renderItem={renderMessage}
          keyExtractor={(value, index) => index.toString()}
          onContentSizeChange={() => refFlat.current.scrollToEnd()}
        />
        <View style={styles.boxSubmit}>
          <TextInput 
            placeholder='Digite a mensagem'
            style={styles.input}
            multiline
            value={mensagem}
            onChangeText={value => setMensagem(value)}
          />
          <TouchableOpacity style={styles.btnSubmit} onPress={send}>
            <Icon name='send' size={30} color={'#2A2'}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  email: state.user.email
})

export default connect(mapStateToProps, null)(Conversa);
