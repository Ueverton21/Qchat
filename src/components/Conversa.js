import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import b64 from 'base-64';

const Conversa = ({name, avatar, email}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.conversa} onPress={() => navigation.navigate('Conversa', {contactB64: b64.encode(email)})}>
      <Image 
        source={{
          uri: avatar ? 
          avatar 
          : 
          'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = new StyleSheet.create({
  conversa: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#999',
    borderBottomWidth: .5,
    alignItems: 'center'
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555'
  }
})

export default Conversa;
