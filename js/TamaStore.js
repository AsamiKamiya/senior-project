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

import TamaMenu from "./TamaMenu";

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
      <ScrollView>
        {/* Hero Image */}
        <View style={{ flex: 2, height: 350, backgroundColor: "powderblue" }}>
          <TouchableOpacity
            onPress={this._getExperienceButtonOnPress(MENU)}
            underlayColor={"#68a0ff"}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
            ></Image>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 80
              }}
            >
              STORE
            </Text>
          </TouchableOpacity>
        </View>

        {/*Store Cards */}
        <View style={localStyles.parent}>
          <TouchableOpacity style={localStyles.blocks}>
            <Image
              source={require("./res/images/icons/cat-1.png")}
              style={localStyles.blockContent}
            ></Image>
            <Text style={localStyles.textBox}>Pocchamon</Text>
            <Text style={localStyles.textBox}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.blocks}>
            <Image
              source={require("./res/images/icons/cat-2.png")}
              style={localStyles.blockContent}
            ></Image>
            <Text style={localStyles.textBox}>Intelimon</Text>
            <Text style={localStyles.textBox}>Test</Text>
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.blocks}>
            <Image
              source={require("./res/icons/menuIcons/potatoIcon.png")}
              style={localStyles.blockContent}
            ></Image>

            <Text style={localStyles.textBox}>Parrot</Text>
            <Text style={localStyles.textBox}>SIGH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.blocks}>
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.blockContent}
            ></Image>

            <Text style={localStyles.textBox}>Test</Text>
            <Text style={localStyles.textBox}>Cost</Text>
          </TouchableOpacity>
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

  _displayCost() {}
}

const localStyles = StyleSheet.create({
  parent: {
    padding: 20,
    marginTop: 20,
    //width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
  },
  blocks: {
    flexGrow: 1,
    width: "75%",
    //alignSelf: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "powderblue"
  },
  blockContent: {
    //margin: 10,
    alignSelf: "center",
    width: 150,
    height: 150,
    padding: 20
  },
  backButton: {
    height: 50,
    width: 50,
    margin: 10
  },
  textBox: {
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 20,
    alignSelf: "center"
  }
});
module.exports = TamaStore;
