import React,{useState} from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import localStyle from './localStyle';
import logo from '../../assets/bg.jpg';
import {modifyEmail, modifyPassword} from '../../store/actions/user';

const New = ({
  email,
  password,
  modifyEmail,
  modifyPassword
}) => {
  const [loading, setLoading] = useState(false);
  return(
    <ImageBackground style={styles.main} source={logo}>
      <TouchableOpacity style={localStyle.buttonImage} onPress={() => null}>
        <Image style={localStyle.imageAvatar} source={'https://mltmpgeox6sf.i.optimole.com/M9I38xY-EO2wV8tf/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png'}/>
      </TouchableOpacity>
      <Text style={styles.labelForm}>Nome</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={'#CCC'}
        value={email}
        onChangeText={value => modifyEmail(value)}
      />
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
        !loading ? 
          (
            <>
              <TouchableOpacity onPress={() =>null} style={[styles.button, {marginTop: 20}]} activeOpacity={.7}>
                <Text style={styles.txtButton}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>null} style={[styles.button, {marginTop: 10, backgroundColor: '#333'}]} activeOpacity={.7}>
                <Text style={styles.txtButton}>Cancelar</Text>
              </TouchableOpacity>
            </>
          )
          :
          (
            <ActivityIndicator color={'#228B22'} size={30}/>
          )
      }
      
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  email: state.user.email,
  password: state.user.password
});

const mapDispatchToProps = dispatch => ({
  modifyEmail: (email) => dispatch(modifyEmail(email)),
  modifyPassword: (password) => dispatch(modifyPassword(password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(New);
