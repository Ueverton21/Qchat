import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Routes from './src/routes';
import firebase from 'firebase/app';

import store from './src/store';

var firebaseConfig = {
  apiKey: "AIzaSyBlj9Pofusr0GMrO_mIGT5xgcpH7d7hpLc",
  authDomain: "uchat-c8a7c.firebaseapp.com",
  databaseURL: "https://uchat-c8a7c.firebaseio.com",
  projectId: "uchat-c8a7c",
  storageBucket: "uchat-c8a7c.appspot.com",
  messagingSenderId: "968644620515",
  appId: "1:968644620515:web:2c37e939b528885341d5d6",
  measurementId: "G-QBFE200E8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
  <Provider store={store}>
    <Routes />
  </Provider>
  );
};
export default App;
