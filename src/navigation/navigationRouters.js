import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationRouter from './stack/AuthenticationRouter';

const NavigationRouters = () => {
  return (
    <NavigationContainer>
      <AuthenticationRouter />
    </NavigationContainer>
  );
};

export default NavigationRouters;
