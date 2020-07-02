import React from 'react';
import { 
  View, 
  Text,
  TouchableHighlight 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { logout } from '../../store/actions/user';
import { connect } from 'react-redux';

import HeaderHome from '../../components/HeaderHome';

const Home = ({
  logout,
  isSigned
}) => {
  
  const navigation = useNavigation();

  function handleLogout(){
    logout();
  }

  return (
    <View>
      <HeaderHome />
      <Text>HOME</Text>
      <TouchableHighlight onPress={handleLogout}>
        <Text>SAIR</Text>
      </TouchableHighlight>
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
