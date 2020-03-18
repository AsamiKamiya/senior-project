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
      intelliPrice: 150,
      higePrice: 250,
      birdPrice: 300,
      keroPrice: 320,
      potePrice: 9999999
    };
  }

  render() {
    /* Price Renders */
    //Universal
    const bought = <Text style={localStyles.textBox}>Already Owned</Text>;
    //Pocchamon
    const pocchaBuy = (
      <Text style={localStyles.textBox}>{this.state.pocchaPrice} G</Text>
    );

    //Intellimon
    const intelliBuy = (
      <Text style={localStyles.textBox}>{this.state.intelliPrice} G</Text>
    );

    //Potemon
    const poteBuy = (
      <Text style={localStyles.textBox}>{this.state.potePrice} G</Text>
    );

    //Higemon
    const higeBuy = (
      <Text style={localStyles.textBox}>{this.state.higePrice} G</Text>
    );

    //Birdmon
    const birdBuy = (
      <Text style={localStyles.textBox}>{this.state.birdPrice} G</Text>
    );

    //Keromon
    const keroBuy = (
      <Text style={localStyles.textBox}>{this.state.keroPrice} G</Text>
    );

    const walletDisplay = (
      <View style={localStyles.walletBack}>
        <Text style={localStyles.heroText}>Wallet: {this.props.wallet}G</Text>
      </View>
    );

    return (
      <ScrollView style={localStyles.scrollview}>
        {walletDisplay}
        <ImageBackground
          source={require("./res/images/roof.gif")}
          style={{ width: "100%", height: 250 }}
          resizeMode="stretch"
        ></ImageBackground>

        {/*Store Cards */}
        <ImageBackground
          source={require("./res/images/wall.gif")}
          style={{ width: "100%", height: 1500 }}
          resizeMode="stretch"
        >
          <View style={localStyles.inner}>
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
                {this.props.pocchaOwned ? bought : pocchaBuy}
              </TouchableOpacity>
              {/*Intellimon*/}
              <TouchableOpacity
                style={localStyles.blocks}
                onPress={() => {
                  this.props.buyTamamon("Intellimon", this.state.intelliPrice);
                }}
              >
                <Image
                  source={require("./res/images/icons/cat-2.png")}
                  style={localStyles.blockContent}
                ></Image>
                <Text style={localStyles.textBox}>Intellimon</Text>
                {this.props.intelliOwned ? bought : intelliBuy}
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
                {this.props.poteOwned ? bought : poteBuy}
              </TouchableOpacity>
              {/*higemon*/}
              <TouchableOpacity
                style={localStyles.blocks}
                onPress={() => {
                  this.props.buyTamamon("Higemon", this.state.higePrice);
                }}
              >
                <Image
                  source={require("./res/icons/menuIcons/hige_sprite2.png")}
                  style={localStyles.blockContent}
                ></Image>

                <Text style={localStyles.textBox}>Higemon</Text>
                {this.props.higeOwned ? bought : higeBuy}
              </TouchableOpacity>
              {/*birdmon*/}
              <TouchableOpacity
                style={localStyles.blocks}
                onPress={() => {
                  this.props.buyTamamon("Birdmon", this.state.birdPrice);
                }}
              >
                <Image
                  source={require("./res/icons/menuIcons/birdmon2d.png")}
                  style={localStyles.blockContent}
                ></Image>

                <Text style={localStyles.textBox}>Birdmon</Text>
                {this.props.birdOwned ? bought : birdBuy}
              </TouchableOpacity>
              {/*keromon*/}
              <TouchableOpacity
                style={localStyles.blocks}
                onPress={() => {
                  this.props.buyTamamon("Keromon", this.state.keroPrice);
                }}
              >
                <Image
                  source={require("./res/icons/menuIcons/kero.png")}
                  style={localStyles.blockContent}
                ></Image>

                <Text style={localStyles.textBox}>Keromon</Text>
                {this.props.keroOwned ? bought : keroBuy}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {/* </ImageBackground> */}
        <ImageBackground
          source={require("./res/images/ground.gif")}
          style={{
            width: "100%",
            height: 210,
            flex: 1
          }}
          resizeMode="stretch"
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
  parent: {
    paddingBottom: 20,
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
  },
  blocks: {
    margin: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFAB3F",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
    width: "80%",
    minWidth: "30%"
  },
  blockContent: {
    alignSelf: "center",
    width: 80,
    height: 80
    // padding: 20
  },
  textBox: {
    // color: "#007aff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    color: "brown"
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
  },
  inner: {
    // flex: 1,
    // flexDirection: "column",
    alignItems: "center"
  }
});
module.exports = TamaStore;
