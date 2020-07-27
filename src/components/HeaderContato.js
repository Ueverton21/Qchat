import React,{useState, useEffect} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import 'firebase/database';
import { useLinkProps } from '@react-navigation/native';

const HeaderContato = (props) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon name={'arrow-left'} size={22} color={'#FFF'}/>
      </TouchableOpacity>
  <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: '#133B23',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16
  },
})

export default HeaderContato;
