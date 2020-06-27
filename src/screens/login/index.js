import React,{useState} from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles';
import logo from '../../assets/bg.jpg';
import * as UserCreators from '../../store/actions/user';
import getError from '../../utils/firebaseErroAuth';

const Login = ({
  email, 
  password, 
  modifyEmail,
  modifyPassword,
  errorLogin,
  loginError,
  loginSucess
}) => {
  
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handleSubmit(){
    setLoading(true);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user=> {
        alert('Sucesso');
        loginSucess();
      })
      .catch(err => loginError(getError(err.code)))
      .finally(()=> setLoading(false));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground style={styles.main} source={logo}>
        <Text style={styles.title}>QChat</Text>
        <Text style={styles.labelForm}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor={'#CCC'}
          value={email}
          onChangeText={value => modifyEmail(value)}
        />
        <Text style={styles.labelForm}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={'#CCC'}
          value={password}
          onChangeText={value => modifyPassword(value)}
          secureTextEntry
        />
        {
          errorLogin ? 
            <Text style={styles.loginError}>* {errorLogin}</Text>
          :
            null
        }
        <View style={styles.boxNew}>
          <Text style={styles.txtNew}>Não tem cadastro?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('New')}>
            <Text style={styles.txtNewButton}>Clique aqui!</Text>
          </TouchableOpacity>
        </View>
        {
          !loading ? 
            (
              <TouchableOpacity onPress={() => handleSubmit()} style={styles.button} activeOpacity={.7}>
                <Text style={styles.txtButton}>Entrar</Text>
              </TouchableOpacity>
            )
            :
            (
              <ActivityIndicator color={'#228B22'} size={30}/>
            )
        }
        
      </ImageBackground>
    </>
  );
};
const mapStateToProps = state => ({
  email: state.user.email,
  password: state.user.password,
  errorLogin: state.user.errorLogin
})
const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Login);
