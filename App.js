import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Header from './components/header'
import Body from './components/body'

const App = () => {
  return (
    <View>
      <Header></Header>
      <Body></Body>
    </View>
  );
};

export default App;
