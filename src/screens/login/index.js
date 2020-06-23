import React from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';

import styles from './styles';
import logo from '../../assets/bg.jpg';
import {modifyEmail, modifyPassword} from '../../store/actions/user';

const Login = ({
  email, 
  password, 
  modifyEmail,
  modifyPassword
}) => {

  function handleSubmit(){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user)=> {
        alert("LOGADO");
      })
      .catch((err) => alert(err.code))
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
        <View style={styles.boxNew}>
          <Text style={styles.txtNew}>Não tem cadastro?</Text>
          <TouchableOpacity>
            <Text style={styles.txtNewButton}>Clique aqui!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleSubmit()} style={styles.button} activeOpacity={.7}>
          <Text style={styles.txtButton}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
const mapStateToProps = state => ({
  email: state.user.email,
  password: state.user.password
})
const mapDispatchToProps = dispatch => {
  return {
    modifyEmail: (email) => dispatch(modifyEmail(email)),
    modifyPassword: (password) => dispatch(modifyPassword(password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
