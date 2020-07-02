import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderHome = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>CONVERSAS</Text>
      <TouchableOpacity style={styles.btnPerfil}>
        <Image 
          style={styles.imgPerfil}
          source={{uri: 'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnNovaConversa}>
        <Icon name="comment-dots" size={20}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: 46,
    backgroundColor: '#131B23',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#951'
  },
  imgPerfil: {
    height: 24,
    width: 24,
    borderRadius: 12
  },
  btnNovaConversa: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HeaderHome;
