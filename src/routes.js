import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
const Stack = createStackNavigator();

import Login from './screens/login';
import New from './screens/new';
import Home from './screens/home';
import Contatos from './screens/contatos';
import NovoContato from './screens/novoContato';
import Conversa from './screens/conversa';

const Routes = ({isSigned}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSigned ?
          <>
            <Stack.Screen component={Home} name='Home' options={{header: () => null}}/>
            <Stack.Screen component={Contatos} name='Contatos' options={{header: () => null}}/>
            <Stack.Screen component={NovoContato} name='NovoContato' options={{header: () => null}}/>
            <Stack.Screen component={Conversa} name='Conversa' options={{header: () => null}}/>
          </>
          :
          (
            <>
              <Stack.Screen component={Login} name='Login' options={{header: () => null}}/>
              <Stack.Screen component={New} name='New' options={{header: () => null}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  isSigned: state.user.isSigned
})

export default connect(mapStateToProps,null)(Routes);
