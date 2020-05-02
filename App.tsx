import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';

export default class WelcomePage extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
