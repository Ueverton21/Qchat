import React from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import styles from './styles';

import logo from '../../assets/bg.jpg';

const Login = () => {

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
        />
        <Text style={styles.labelForm}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={'#CCC'}
        />
        <View style={styles.boxNew}>
          <Text style={styles.txtNew}>Não tem cadastro?</Text>
          <TouchableOpacity>
            <Text style={styles.txtNewButton}>Clique aqui!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={.7}>
          <Text style={styles.txtButton}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default Login;
