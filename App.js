/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";

// Device ID module --> to integrate see README

// import DeviceInfo from "react-native-device-info";
import makeNewUser from "./graphql/mutations";
const axios = require("axios");

// console.log("Unique Device ID", DeviceInfo.getUniqueId());

var sharedProps = {
  apiKey: "API_KEY_HERE"
};

// Sets the default scene you want for AR and VR

var TamaMenu = require("./js/TamaMenu");

var UNSET = "UNSET";
var TAMA_MENU_TYPE = "TAMA";

// axios({
//   url: "https://tamomon.herokuapp.com/v1/graphql",
//   method: "post",
//   data: {
//     query: `
//     query {
//       user_data {
//        device_id
//       }
//     }
//       `
//   }
// }).then(result => {
//   const deviceList = result.data.data.user_data;

//   const deviceArray = [];

//   deviceList.forEach(device => {
//     deviceArray.push(device.device_id);
//   });

//   const exists = deviceArray.includes(DeviceInfo.getUniqueId());

//   if (exists) {
//     console.log("I exist!");
//   } else {
//     console.log("Time for a new ID");
//     axios({
//       url: "https://tamomon.herokuapp.com/v1/graphql",
//       method: "post",
//       data: {
//         query: makeNewUser(DeviceInfo.getUniqueId())
//       }
//     }).then(result => {
//       console.log(result);
//     });
//   }
// });

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    };
    this._getTamaNavigator = this._getTamaNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == TAMA_MENU_TYPE) {
      return this._getTamaNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <View style={{ display: "flex" }}>
        <ImageBackground
          source={require("./js/res/images/Sprite-0001.gif")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={localStyles.inner}>
            <Image
              source={require("./js/res/images/logo.png")}
              style={localStyles.images}
            />
            {/*
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this._getExperienceButtonOnPress(TAMA_MENU_TYPE)}
              underlayColor={"#68a0ff"}
            >
              <Text style={localStyles.buttonText}>START</Text>
            </TouchableHighlight>
            */}
            <TouchableOpacity
              style={localStyles.buttonStyle}
              onPress={this._getExperienceButtonOnPress(TAMA_MENU_TYPE)}
            >
              <Text style={localStyles.textStyle}>Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _getTamaNavigator() {
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

var localStyles = StyleSheet.create({
  images: {
    marginTop: 150
  },
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    paddingTop: 100,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 100,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff"
  },

  buttonStyle: {
    height: 70,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#007aff",
    marginTop: 50,
    justifyContent: "center"
  },

  textStyle: {
    textAlign: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
});

module.exports = ViroSample;
