"use strict";

import React, { Component } from "react";

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Button
} from "react-native";

import {
  ViroARSceneNavigator,
  ViroVRSceneNavigator,
  ViroScene
} from "react-viro";
import TamaMenu from "./TamaMenu";

const InitialARScene = require("./Tamamon1st");
const InitialARSceneForTama2nd = require("./Tamamon2nd");
const InitialARSceneForTama3rd = require("./Tamamon3rd");

const MENU = "MENU";

export default class TamaStore extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: "blah"
    };

    this._returnToStore = this._returnToStore.bind(this);
  }

  render() {
    if (this.state.navigatorType == MENU) {
      return this._returnToStore();
    }

    return (
      // Try setting `flexDirection` to `column`.
      <ScrollView>
        <TouchableOpacity
          onPress={this._getExperienceButtonOnPress(MENU)}
          underlayColor={"#68a0ff"}
        >
          <Image source={require("./res/icons/icon_left.png")}></Image>
        </TouchableOpacity>
        <View
          style={{
            padding: 20,
            marginTop: 20,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          <View style={localStyles.blocks}>
            <Text>Test</Text>
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={{
                margin: 10,
                alignSelf: "center",
                width: 100,
                height: 100
              }}
            ></Image>
          </View>
          <View style={localStyles.blocks}>
            <Text>Test</Text>
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={{
                margin: 10,
                alignSelf: "center",
                width: 100,
                height: 100
              }}
            ></Image>
          </View>
          <View style={localStyles.blocks}>
            <Text>Test</Text>
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={{
                margin: 10,
                alignSelf: "center",
                width: 100,
                height: 100
              }}
            ></Image>
          </View>
          <View style={localStyles.blocks}>
            <Text>Test</Text>
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={{
                margin: 10,
                alignSelf: "center",
                width: 100,
                height: 100
              }}
            ></Image>
          </View>
        </View>
      </ScrollView>
    );
  }
  _returnToStore() {
    return <TamaMenu></TamaMenu>;
  }

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }
}

const localStyles = StyleSheet.create({
  blocks: {
    //flex: 1,
    width: 500,
    height: 200,
    margin: 10,
    backgroundColor: "powderblue"
  }
});
module.exports = TamaStore;
