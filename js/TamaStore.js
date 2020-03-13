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
      navigatorType: "default",
      pocchaPrice: 20,
      inteliPrice: 1000,
      potePrice: 999999
    };
  }

  render() {
    /* Price Renders */
    const pocchaBuy = (
      <Text style={localStyles.textBox}>{this.state.pocchaPrice} dollas</Text>
    );
    const pocchaBought = <Text style={localStyles.textBox}>Already Owned</Text>;

    const inteliBuy = (
      <Text style={localStyles.textBox}>{this.state.inteliPrice} dollas</Text>
    );
    const inteliBought = <Text style={localStyles.textBox}>Already Owned</Text>;

    const poteBuy = (
      <Text style={localStyles.textBox}>{this.state.potePrice} dollas</Text>
    );
    const poteBought = <Text style={localStyles.textBox}>Already Owned</Text>;

    const walletDisplay = (
      <Text style={localStyles.heroText}>Wallet: {this.props.wallet}G</Text>
    );

    return (
      <ScrollView>
        {walletDisplay}
        {/* Hero Image */}
        <View style={localStyles.heroBox}>
          <Text style={localStyles.heroTitle}>
            Welcome to the Tamamon Store!
          </Text>
        </View>

        {/*Store Cards */}
        <View style={localStyles.parent}>
          {/*Pocchamon*/}
          <TouchableOpacity
            style={localStyles.blocks}
            onPress={() => {
              this._displayCostPoccha();
            }}
          >
            <Image
              source={require("./res/images/icons/cat-1.png")}
              style={localStyles.blockContent}
            ></Image>
            <Text style={localStyles.textBox}>Pocchamon</Text>
            {this.props.pocchaOwned ? pocchaBought : pocchaBuy}
          </TouchableOpacity>

          {/*Intelimon*/}
          <TouchableOpacity
            style={localStyles.blocks}
            onPress={() => {
              this.props.buyTamamon("Intelimon", this.state.inteliPrice);
            }}
          >
            <Image
              source={require("./res/images/icons/cat-2.png")}
              style={localStyles.blockContent}
            ></Image>
            <Text style={localStyles.textBox}>Intelimon</Text>
            {this.props.inteliOwned ? inteliBought : inteliBuy}
          </TouchableOpacity>

          {/*potemon*/}
          <TouchableOpacity
            style={localStyles.blocks}
            onPress={() => {
              this.props.buyTamamon("Potemon", this.state.potePrice);
            }}
          >
            <Image
              source={require("./res/icons/menuIcons/potatoIcon.png")}
              style={localStyles.blockContent}
            ></Image>

            <Text style={localStyles.textBox}>Potemon</Text>
            {this.props.poteOwned ? poteBought : poteBuy}
          </TouchableOpacity>
          {/*placeholder for new tamamon*/}
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

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }
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
    margin: 10,
    padding: 10,
    backgroundColor: "powderblue"
  },
  blockContent: {
    alignSelf: "center",
    width: 150,
    height: 150,
    padding: 20
  },
  textBox: {
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 20,
    alignSelf: "center"
  },
  heroBox: {
    flex: 2,
    height: 350,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center"
  },
  heroTitle: {
    fontSize: 40,
    color: "white"
  },
  heroText: {
    width: "100%",
    fontSize: 20,
    backgroundColor: "powderblue",
    alignSelf: "flex-start",
    paddingLeft: 30,
    paddingTop: 20,
    color: "yellow"
  }
});
module.exports = TamaStore;
