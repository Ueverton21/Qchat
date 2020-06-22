import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/login';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name='Login' options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
