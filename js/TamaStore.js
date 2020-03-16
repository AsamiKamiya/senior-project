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
      <View style={localStyles.walletBack}>
        <Text style={localStyles.heroText}>Wallet: {this.props.wallet}G</Text>
      </View>
    );

    return (
      <ScrollView style={localStyles.scrollview}>
        <ImageBackground
          source={require("./res/images/Sprite-0004.gif")}
          style={{ width: "100%", height: 400, flex: 1 }}
          resizeMode="stretch"
          // style={[localStyles.fixed, localStyles.containter, { zIndex: -1 }]}
        >
          {walletDisplay}
          {/* Hero Image */}
          <View style={localStyles.heroBox}>
            <Text style={localStyles.heroTitle}>Tamamon Store!</Text>
          </View>
          {/*Store Cards */}
          <View style={localStyles.parent1st}>
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
          </View>
        </ImageBackground>
        <View style={localStyles.parent}>
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
        {/* </ImageBackground> */}
        <ImageBackground
          source={require("./res/images/Sprite-0003.gif")}
          style={{
            width: "100%",
            height: 210,
            flex: 1
          }}
          resizeMode="stretch"
          // style={[localStyles.fixed, localStyles.containter, { zIndex: -1 }]}
        ></ImageBackground>
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
  parent1st: {
    // paddingBottom: 20,
    // marginTop: 20,
    //width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
  },
  parent: {
    paddingBottom: 20,
    // marginTop: 20,
    //width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
  },
  blocks: {
    // margin: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#839BE4",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
    width: "80%",
    minWidth: "30%"
    // backgroundColor: "#839BE4"
  },
  blockContent: {
    alignSelf: "center",
    width: 80,
    height: 80
    // padding: 20
  },
  textBox: {
    color: "#007aff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    color: "#839BE4"
  },
  heroBox: {
    flex: 2,
    height: 100,
    // backgroundColor: "#839BE4",
    justifyContent: "center",
    alignItems: "center"
  },
  heroTitle: {
    fontSize: 30,
    color: "white"
  },
  heroText: {
    width: "100%",
    fontSize: 20,
    // backgroundColor: "powderblue",
    alignSelf: "flex-start",
    paddingLeft: 30,
    paddingTop: 20,
    color: "yellow"
  },
  scrollview: {
    backgroundColor: "#839BE4"
  },
  walletBack: {
    // backgroundColor: "#839BE4"
  }
});
module.exports = TamaStore;
