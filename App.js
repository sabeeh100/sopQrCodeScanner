/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class App extends Component {
  state ={
    qr: ""
  }

  onRead = e=>{
    this.setState({qr: e.data})
    // console.log(e).data
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <QRCodeScanner 
        onRead={this.onRead}
        />
        <View style={{width: '100%', flex:0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textBold}>{this.state.qr}Sometext</Text>
        </View>
      </SafeAreaView>  
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textBold: {
    fontWeight: 'bold',
    color: '#FA2',
    
    width: '70%',
    height: '20%',
    fontSize: 25,
    // alignSelf: 'center',
    backgroundColor: 'green'
  }
});


