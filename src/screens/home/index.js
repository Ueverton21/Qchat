import React from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { logout } from '../../store/actions/user';
import HeaderHome from '../../components/HeaderHome';
import Conversa from '../../components/Conversa';
import styles from './styles';

const Home = ({
  logout,
  isSigned
}) => {
  
  const navigation = useNavigation();

  function handleLogout(){
    logout();
  }

  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <ScrollView>
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <Conversa />
        <TouchableHighlight onPress={handleLogout}>
          <Text>SAIR</Text>
        </TouchableHighlight>
      </ScrollView>
      
      <TouchableOpacity style={styles.btnNovaConversa}>
        <Icon name={'message-circle'} size={30}/>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  isSigned: state.user.isSigned
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
