import React from 'react';
import { View, StyleSheet } from 'react-native';
//import Login from '../src/pages/Login';
import Home from '../src/pages/Home';

const App = () => {
  return (
    <View style={styles.container}>
      
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
