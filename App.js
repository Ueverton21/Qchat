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
  Text,
  StatusBar,
} from 'react-native';

import logo from './src/assets/bg.jpg';

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground style={styles.main} source={logo}>
        <Text>Olá jovem</Text>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#181',
    justifyContent: 'center'
  }
});

export default App;
