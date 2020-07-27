import React,{useEffect, useState} from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
import 'firebase/database';
import b64 from 'base-64';

import { logout } from '../../store/actions/user';
import HeaderHome from '../../components/HeaderHome';
import Conversa from '../../components/Conversa';
import styles from './styles';

const Home = ({
  logout,
  isSigned,
  email
}) => {
  const [conversas, setConversas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const emailB64 = b64.encode(email);
    firebase.database().ref(`conversas/${emailB64}`).on('value', snapshot => {
      if(snapshot.val()){
        setConversas(Object.values(snapshot.val()));
      }
    })
  },[])

  function handleLogout(){
    logout();
  }

  function renderItem({item}){
    return(<Conversa name={item.name} email={item.email} avatar={item.avatar}/>);
  }

  return (
    <View style={{flex: 1}}>
      <HeaderHome />

      <FlatList 
        data={conversas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <TouchableHighlight onPress={handleLogout}>
        <Text>SAIR</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.btnNovaConversa} onPress={() => navigation.navigate('Contatos')}>
        <Icon name={'message-circle'} size={30}/>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  isSigned: state.user.isSigned,
  email: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
