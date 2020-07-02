import React from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Conversa = () => {
  return (
    <TouchableOpacity style={styles.conversa}>
      <Image 
        source={{
          uri: 'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Ueverton</Text>
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
