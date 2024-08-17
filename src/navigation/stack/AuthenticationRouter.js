
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN } from '../routerName';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const AuthenticationRouter = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AuthenticationRouter;
