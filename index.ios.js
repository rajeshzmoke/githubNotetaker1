

import React, { Component } from 'react';
import Main from './App/Component/Main.js';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          component: Main,
          title:'Github Notetaker',
        }}
      />
    );
  }
};


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
