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
  Button
} from "react-native";

import {
  ViroARSceneNavigator,
  ViroVRSceneNavigator,
  ViroScene
} from "react-viro";

const InitialARScene = require("./HelloWorldSceneAR");
const InitialARSceneForTama2nd = require("./Tamamon2nd");

const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";
const AR_NAVIGATOR_TYPE_2nd = "2nd";
const defaultNavigatorType = UNSET;
//TODO: 1. Make code DRY. Rather than returning different AR_NAVIGATOR_TYPES we can try to conditionally render based on selection. 2. Implement Home button functionality

export default class TamaMenu extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      displayText: "Welcome to Tamamon!",
      tamamon: [
        {
          name: "Pocchamon",
          fed: false,
          fedCount: 0,
          text: [
            "Thank you for feeding me!",
            "I could totally eat more...",
            "I'm really full!!",
            "I can't eat anymore..!"
          ]
        },
        {
          name: "Intelimon",
          fed: false,
          fedCount: 0,
          text: [
            "Thank you for feeding me!",
            "I could totally eat more...",
            "I'm really full!!",
            "I can't eat anymore..!"
          ]
        }
      ]
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2nd = this._getARNavigator2nd.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_2nd) {
      return this._getARNavigator2nd();
    }
  }

  _getExperienceSelector() {
    return (
      <View>
        <ImageBackground
          source={require("./res/images/Sprite-0002.gif")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={localStyles.inner}>
            <Image
              source={require("./res/images/logo.png")}
              style={localStyles.title}
            />

            <TouchableHighlight
              onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
              style={localStyles.buttons}
              underlayColor={"#68a0ff"}
            >
              <Image
                source={require("./res/images/icons/cat-1.png")}
                style={localStyles.images}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_2nd)}
              style={localStyles.buttons}
              underlayColor={"#68a0ff"}
            >
              <Image
                source={require("./res/images/icons/cat-2.png")}
                style={localStyles.images}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _getARNavigator() {
    return (
      //if we want to create a 2D UI stuck to the screen, we must define it here
      //TODO: Add ViroAppProps.
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%"
        }}
      >
        {/* This is our AR Scene for fat cat.*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.tamamon[0].fed,
            fedCount: this.state.tamamon[0].fedCount,
            text: this.state.displayText
          }}
          initialScene={{ scene: InitialARScene }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/houseIcon2.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Pocchamon");
            }} //this is a placeholder for the actual feed function
          >
            <Image
              source={require("./res/icons/hamburgerIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => console.log("BOO2")} //this is a placeholder for the clean function
          >
            <Image
              source={require("./res/icons/washIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => console.log("BOO3")} //this is a placeholder for the play function
          >
            <Image
              source={require("./res/icons/heartIcon3.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _getARNavigator2nd() {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%"
        }}
      >
        {/* This is our AR Scene for smart cat.*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.tamamon[1].fed,
            fedCount: this.state.tamamon[1].fedCount,
            text: this.state.displayText
          }}
          initialScene={{ scene: InitialARSceneForTama2nd }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/houseIcon2.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Intelimon");
            }}
          >
            <Image
              source={require("./res/icons/hamburgerIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => console.log("BOO2")} //this is a placeholder for the clean function
          >
            <Image
              source={require("./res/icons/washIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => console.log("BOO3")} //this is a placeholder for the play function
          >
            <Image
              source={require("./res/icons/heartIcon3.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
        displayText: "Welcome to Tamamon!"
      });
    };
  }

  _feedTamamon = name => {
    let fedTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });
    this.setState(
      prevState => ({
        tamamon: prevState.tamamon.map(obj =>
          obj.name === name
            ? Object.assign(obj, { fed: true, fedCount: ++obj.fedCount })
            : obj
        )
      }),
      () => {
        if (fedTamamon[0].fedCount === 1) {
          this._updateText(fedTamamon[0].text[0]);
        }
        if (fedTamamon[0].fedCount === 2) {
          this._updateText(fedTamamon[0].text[1]);
        }
        if (fedTamamon[0].fedCount === 3 || fedTamamon[0].fedCount === 4) {
          this._updateText(fedTamamon[0].text[2]);
        }
        if (fedTamamon[0].fedCount >= 5) {
          this._updateText(fedTamamon[0].text[3]);
        }
      }
    );
  };

  _updateText = text => {
    this.setState({
      displayText: text
    });
  };
  _feedButtonHandler = name => {
    this._feedTamamon(name);
  };
}
var localStyles = StyleSheet.create({
  images: {
    width: 80,
    height: 80
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
  title: {
    marginTop: 100,
    marginBottom: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 90,
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center"
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
  },
  bottomNav: {
    height: 60,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    paddingTop: 4
  },
  icons: {
    height: 160, //looks good on iPad but might not on smaller screens. Will test.
    width: 160, //looks good on iPad but might not on smaller screens. Will test.
    marginBottom: 100,
    backgroundColor: "transparent"
  },
  backButton: {
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
module.exports = TamaMenu;
