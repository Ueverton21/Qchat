import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/login';
import New from './screens/new';
import Home from './screens/home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name='Login' options={{header: () => null}}/>
        <Stack.Screen component={New} name='New' options={{header: () => null}}/>
        <Stack.Screen component={Home} name='Home' options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
