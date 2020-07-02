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
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import b64 from 'base-64';

import styles from '../styles';
import localStyle from './localStyle';
import logo from '../../assets/bg.jpg';

import uploadImage from '../../repository/StoreServices';

import {
  modifyEmail, 
  modifyPassword, 
  modifyName,
  loginSucess} from '../../store/actions/user';

import getError from '../../utils/firebaseErroAuth';

const New = ({
  name,
  email,
  password,
  modifyName,
  modifyEmail,
  modifyPassword,
  loginSucess
}) => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState();
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const imagePickerOptions = {
    title: 'Selecione uma imagem',
    takePhotoButtonTitle: 'Tire uma foto',
    chooseFromLibraryButtonTitle: 'Galeria'
  };

  function uploadImageCalback(data){
    console.log(data);
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }
    if (data.customButton) {
      return;
    }
    if (!data.uri) {
      return;
    }
    setAvatar(data);
  }

  async function handleSubmit(){
    
    if(!email || !password || !name){
      alert("Preencha todos os campos");
    }
    else{
      setLoading(true);
      
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
          const email64 = b64.encode(email);
          firebase.database().ref(`users/${email64}`).set({
            name: name,
            descricao: ''
          }).then(()=>{});
          if(avatar){
            uploadImage(avatar.uri, email64);
          }
          loginSucess();
        })
        .catch(err =>setError(getError(err.code)))
        .finally(() => setLoading(false));
    }
  }

  return(
    <ImageBackground style={[styles.main, {justifyContent: 'flex-start'}]} source={logo}>
      <TouchableOpacity style={localStyle.buttonImage} onPress={() => ImagePicker.showImagePicker(imagePickerOptions,uploadImageCalback)}>
        <Image 
          style={localStyle.imageAvatar} 
          source={{uri: avatar ? 
            avatar.uri 
            : 
            'https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg'}} 
        />
      </TouchableOpacity>
      <Text style={{fontSize: 14,color: '#FFF', fontWeight: 'bold', alignSelf: 'center', marginTop: 5}}>Selecione uma imagem</Text>
      <Text style={styles.labelForm}>Nome</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu name"
        placeholderTextColor={'#CCC'}
        value={name}
        onChangeText={value => modifyName(value)}
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
        error ?
          <Text style={styles.errorForm}>* {error}</Text>
        :
        null
      }
      {
        !loading ? 
          (
            <>
              <TouchableOpacity onPress={handleSubmit} style={[styles.button, {marginTop: 10}]} activeOpacity={.7}>
                <Text style={styles.txtButton}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>navigation.goBack()} style={[styles.button, {marginTop: 10, backgroundColor: '#333'}]} activeOpacity={.7}>
                <Text style={styles.txtButton}>Cancelar</Text>
              </TouchableOpacity>
            </>
          )
          :
          (
            <ActivityIndicator style={{marginTop: 10}} color={'#228B22'} size={30}/>
          )
      }     
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
  password: state.user.password
});

const mapDispatchToProps = dispatch => ({
  modifyName: (name) => dispatch(modifyName(name)),
  modifyEmail: (email) => dispatch(modifyEmail(email)),
  modifyPassword: (password) => dispatch(modifyPassword(password)),
  loginSucess: () => dispatch(loginSucess())
})

export default connect(mapStateToProps, mapDispatchToProps)(New);
