import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import DataProvider from './src/components/DataProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>

      <DataProvider >
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Scream name="Home" component={Home}/>
          <Stack.Scream name="Login" component={Login}/>
          
          </Stack.Navigator>
        </NavigationContainer>

      </DataProvider>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
