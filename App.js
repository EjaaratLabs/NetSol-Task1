import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './App/Reducers/index';
import Home from './Home'
import 'antd/dist/antd.css'

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
