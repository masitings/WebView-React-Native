import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

export default class WelcomePage extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{flex:1}} />
        <AdMobBanner
          adSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
          style={{alignItems: 'center', justifyContent: 'center'}}
        />
      </View>
    );
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
