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
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Image
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "API_KEY_HERE"
};

// Sets the default scene you want for AR and VR

var TamaMenu = require("./js/TamaMenu");

var UNSET = "UNSET";
var TAMA_MENU_TYPE = "TAMA";

const axios = require("axios");
axios({
  url: "https://tamomon.herokuapp.com/v1/graphql",
  method: "post",
  data: {
    query: `
    query {
      Tamomon {
        id
        name
        fed
      }
    }
      `
  }
}).then(result => {
  console.log(result.data);
});

// axios({
//   url: "https://tamomon.herokuapp.com/v1/graphql",
//   method: "post",
//   data: {
//     query: `
//     query {
//       Tamomon {
//         id
//         name
//         fed
//       }
//     }
//       `
//   }
// }).then(result => {
//   console.log(result.data);
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
      <View>
        <ImageBackground
          source={require("./js/res/images/Sprite-0001.gif")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={localStyles.inner}>
            <Image
              source={require("./js/res/images/logo.png")}
              style={localStyles.images}
            />
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this._getExperienceButtonOnPress(TAMA_MENU_TYPE)}
              underlayColor={"#68a0ff"}
            >
              <Text style={localStyles.buttonText}>START</Text>
            </TouchableHighlight>
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
    alignItems: "center"
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
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

module.exports = ViroSample;
