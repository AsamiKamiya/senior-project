/* THIS FILE IS MEANT FOR TESTING PURPOSES */

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

const renderIf = function(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
};

InitialARScene = require("./HelloWorldSceneAR");

var objArray = [
  require("./res/foodIcon.png"),
  require("./res/foodIcon.png"),
  require("./res/foodIcon.png")
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={localStyles.outer}>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 77,
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={localStyles.buttons}
            underlayColor={"#00000000"}
          >
            <Image source={require("./res/foodIcon.png")} />
          </TouchableHighlight>
        </View>
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

module.exports = App;
