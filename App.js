/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import logo from './src/assets/bg.jpg';

const App = () => {

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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#EEE8AA',
    padding: 10,
    borderRadius: 5
  },
  labelForm: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
    color: '#555',
    borderRadius: 4
  },
  button: {
    backgroundColor: '#228B22',
    borderRadius: 4,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  boxNew: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  txtNewButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#119',
    marginLeft: 5
  }
});

export default App;
