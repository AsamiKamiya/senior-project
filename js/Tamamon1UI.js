//NOTE: THIS FILE IS FOR TESTING PURPOSES. FIGURED OUT WHAT THE ISSUE WAS. TIME TO TRY AGAIN WITH 2D UI ELEMENTS.
import React, { Component } from "react";
import {
  AppRegistry,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";

const HelloWorldSceneAR = require("./HelloWorldSceneAR");

export default class arUI extends Component {
  constructor() {
    super();
    this.state = {
      viroAppProps: {
        displayObject: false,
        yOffset: 0,
        _onLoadEnd: this._onLoadEnd,
        _onLoadStart: this._onLoadStart,
        _onTrackingInit: this._onTrackingInit
      },
      trackingInitialized: false,
      isLoading: false
    };
  }

  render() {
    return (
      <View style={localStyles.outer}>
        <ViroARSceneNavigator
          style={localStyles.arView}
          apiKey="YOUR API KEY"
          initialScene={{
            scene: HelloWorldSceneAR,
            passProps: { displayObject: this.state.displayObject }
          }}
          viroAppProps={this.state.viroAppProps}
        />
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  outer: {
    flex: 1
  },

  arView: {
    flex: 1
  },

  buttons: {
    height: 80,
    width: 80,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#00000000",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff00"
  }
});

module.exports = arUI;
