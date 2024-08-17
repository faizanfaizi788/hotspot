import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import NavigationRouters from './src/navigation/navigationRouters';
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationRouters />
    </SafeAreaProvider>
  );
};

export default App;
