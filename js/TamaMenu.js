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
  Button,
  ScrollView,
  Dimensions
} from "react-native";

import {
  ViroARSceneNavigator,
  ViroVRSceneNavigator,
  ViroScene
} from "react-viro";

import TamaStore from "./TamaStore";

const InitialARScene = require("./Tamamon1st");
const InitialARSceneForTama2nd = require("./Tamamon2nd");
const InitialARSceneForTama3rd = require("./Tamamon3rd");
const InitialARSceneForTama4th = require("./Tamamon4th");
const InitialARSceneForTama5th = require("./Tamamon5th");
const InitialARSceneForAddFromAR = require("./AddFromAR");

const UNSET = "UNSET";
//1. Pocchamon
const AR_NAVIGATOR_TYPE = "AR";
//2. Intelimon
const AR_NAVIGATOR_TYPE_2nd = "2nd";
//3. Potemon
const AR_NAVIGATOR_TYPE_3rd = "3rd";
//4. Higemon
const AR_NAVIGATOR_TYPE_4th = "4th";
//5. Birdmon
const AR_NAVIGATOR_TYPE_5th = "5th";
//6. TamaStore
const STORE_NAVIGATOR_TYPE = "STORE";
//7. Menu Page
const defaultNavigatorType = UNSET;
//8. Add AR page
const ADD_AR_NAVIGATOR_TYPE = "ADD_AR";

// flg name
const WASHED_FLG = 1;
const PLAYED_FLG = 2;
const SPEECH_FLG = 3;
//TODO: 1. Make code DRY. Rather than returning different AR_NAVIGATOR_TYPES we can try to conditionally render based on selection. 2. Implement Home button functionality
const axios = require("axios");

//TODO: 1. Make code DRY. Rather than returning different AR_NAVIGATOR_TYPES we can try to conditionally render based on selection.

// on menu open --> get tam names and fedCount
// we create object --> {
//   name
//   fed count
// }

/*
1. When app loads (or when TamaMenu loads) we need to set the Tamamon states of fedCount(1, 2, 3, 4, 5) and fed (true or false) based on data from the database
2. Whenever we pass a certain amount of time, we need to change fed to false, and fedCount needs to decrease. [LATER]
3. Whenever we feed Tamamon using a function we need to do an axios call to the database to update the values.
OR
3.5. Whenever this.state CHANGES we need to do an axios call to the database to update the values
4. Repeat. 

*/

export default class TamaMenu extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      displayText: "Welcome to Tamamon!",
      wallet: 2000,
      tamamon: [
        {
          name: "Pocchamon",
          owned: true,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          neglected: false,
          text: [
            "Thank you for feeding me!",
            "I could totally eat more...",
            "I'm really full!!",
            "I can't eat anymore..!"
          ],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },
        {
          name: "Intelimon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: [
            "Thank you for feeding me!",
            "I could totally eat more...",
            "I'm really full!!",
            "I can't eat anymore..!"
          ],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },
        {
          name: "Potemon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: ["Food", "More food", "There's more food?", "...food"],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },

        {
          name: "Higemon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: [
            "I usually expect higher quality food...",
            "But what about third breakfast?",
            "Breakfast was fine, I guess. It's not like I'm happy or anything.",
            "Okay maybe five breakfasts was too much."
          ],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },

        {
          name: "Birdmon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: ["Message 1", "Message 2", "Message 3?", "Message 4"],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },

        {
          name: "Keromon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: ["Message 1", "Message 2", "Message 3?", "Message 4"],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        }
      ]
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2nd = this._getARNavigator2nd.bind(this);
    this._getARNavigator3rd = this._getARNavigator3rd.bind(this);
    this._getARNavigator4th = this._getARNavigator4th.bind(this);
    this._getARNavigator5th = this._getARNavigator5th.bind(this);
    this._getStore = this._getStore.bind(this);
    this._getAddAR = this._getAddAR.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._buyTamamon = this._buyTamamon.bind(this);
    this._addARTamamon = this._addARTamamon.bind(this);
    this._updateNeglected = this._updateNeglected.bind(this);
  }

  //Switch AR scenes based on Navigator Type
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_2nd) {
      return this._getARNavigator2nd();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_3rd) {
      return this._getARNavigator3rd();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_4th) {
      return this._getARNavigator4th();
    } else if (this.state.navigatorType === AR_NAVIGATOR_TYPE_5th) {
      return this._getARNavigator5th();
    } else if (this.state.navigatorType == STORE_NAVIGATOR_TYPE) {
      return this._getStore();
    } else if (this.state.navigatorType == ADD_AR_NAVIGATOR_TYPE) {
      return this._getAddAR();
    }
  }

  _getExperienceSelector() {
    //Tamamon buttons
    const pocchaButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/images/icons/cat-1.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[0].name}</Text>
        <Text style={localStyles.buttonText}>
          You've fed Pocchamon {this.state.tamamon[0].fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const inteliButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_2nd)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/images/icons/cat-2.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[1].name}</Text>
        <Text style={localStyles.buttonText}>
          You've fed Intelimon {this.state.tamamon[1].fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const poteButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_3rd)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/icons/menuIcons/potatoIcon.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[2].name}</Text>
        <Text style={localStyles.buttonText}>
          {this.state.tamamon[2].fedCount}
        </Text>
      </TouchableOpacity>
    );

    const higeButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_4th)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/icons/menuIcons/hige_sprite2.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[3].name}</Text>
        <Text style={localStyles.buttonText}>
          You've fed Higemon {this.state.tamamon[3].fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const birdButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_5th)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/icons/menuIcons/tinybird2d.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[4].name}</Text>
        <Text style={localStyles.buttonText}>
          You've fed Birdmon {this.state.tamamon[4].fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const keroButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_5th)} //needs update
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/icons/menuIcons/greenfrog.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>{this.state.tamamon[5].name}</Text>
        <Text style={localStyles.buttonText}>
          You've fed Birdmon {this.state.tamamon[5].fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const storeButton = (
      <TouchableHighlight
        onPress={this._getExperienceButtonOnPress(STORE_NAVIGATOR_TYPE)}
        style={localStyles.buttonStyle}
        underlayColor={"#68a0ff"}
      >
        <Text style={localStyles.textStyle}>STORE</Text>
      </TouchableHighlight>
    );
    // TODO change
    const addButton = (
      <TouchableHighlight
        onPress={this._getExperienceButtonOnPress(ADD_AR_NAVIGATOR_TYPE)}
        style={localStyles.buttonStyle}
        underlayColor={"#68a0ff"}
      >
        <Text style={localStyles.textStyle}>AR</Text>
      </TouchableHighlight>
    );

    return (
      <ScrollView style={localStyles.scrollview}>
        <ImageBackground
          source={require("./res/images/Sprite-0004.gif")}
          style={{
            width: "100%",
            height: 300
          }}
          resizeMode="stretch"
          // style={[localStyles.fixed, localStyles.containter, { zIndex: -1 }]}
        >
          <View style={localStyles.inner}>
            <Image
              source={require("./res/images/logo.png")}
              style={localStyles.title}
            />

            <View style={{ flexDirection: "row" }}>
              {storeButton}
              {addButton}
            </View>
          </View>
        </ImageBackground>
        <View style={localStyles.inner}>
          <View style={localStyles.parent}>
            {/* Select Pocchamon */}
            {this.state.tamamon[0].owned ? pocchaButton : null}

            {/* Select Intelimon*/}
            {this.state.tamamon[1].owned ? inteliButton : null}

            {/*Select Potemon*/}
            {this.state.tamamon[2].owned ? poteButton : null}

            {/*Select Higemon*/}
            {this.state.tamamon[3].owned ? higeButton : null}

            {/*Select Birdmon */}
            {this.state.tamamon[4].owned ? birdButton : null}
          </View>
        </View>
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

  _getStore() {
    return (
      <View>
        <TouchableOpacity
          style={localStyles.tabItem}
          onPress={this._getExperienceButtonOnPress(UNSET)}
        >
          <Image
            source={require("./res/icons/icon_left.png")}
            style={localStyles.backButtonStore}
          ></Image>
        </TouchableOpacity>
        <TamaStore
          pocchaOwned={this.state.tamamon[0].owned}
          inteliOwned={this.state.tamamon[1].owned}
          poteOwned={this.state.tamamon[2].owned}
          higeOwned={this.state.tamamon[3].owned}
          birdOwned={this.state.tamamon[4].owned}
          keroOwned={this.state.tamamon[5].owned}
          wallet={this.state.wallet}
          buyTamamon={this._buyTamamon}
        ></TamaStore>
      </View>
    );
  }

  //Pocchamon AR Scene
  _getARNavigator() {
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
        {/* This is our AR Scene for pocchamon.*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.tamamon[0].fed,
            fedCount: this.state.tamamon[0].fedCount,
            washed: this.state.tamamon[0].washed,
            played: this.state.tamamon[0].played,
            text: this.state.displayText,
            flgs: this.state.tamamon[0].flgs,
            neglected: this.state.tamamon[0].neglected,
            updateNeglected: this._updateNeglected
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
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Pocchamon");
            }}
          >
            <Image
              source={require("./res/icons/hamburgerIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Feed</Text>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Pocchamon");
              this._updateFlg("Pocchamon", WASHED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/washIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Clean</Text>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Pocchamon");
              this._updateFlg("Pocchamon", PLAYED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Hug</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Intelimon AR Scene
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
            washed: this.state.tamamon[1].washed,
            played: this.state.tamamon[1].played,
            text: this.state.displayText,
            flgs: this.state.tamamon[1].flgs
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
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
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
              source={require("./res/icons/hamburgerIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Feed</Text>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Intelimon");
              this._updateFlg("Intelimon", WASHED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/washIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Clean</Text>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Intelimon");
              this._updateFlg("Intelimon", PLAYED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Hug</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Potemon AR Scene
  _getARNavigator3rd() {
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
            fed: this.state.tamamon[2].fed,
            fedCount: this.state.tamamon[2].fedCount,
            washed: this.state.tamamon[2].washed,
            played: this.state.tamamon[2].played,
            text: this.state.displayText,
            flgs: this.state.tamamon[2].flgs
          }}
          initialScene={{ scene: InitialARSceneForTama3rd }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Potemon");
            }}
          >
            <Image
              source={require("./res/icons/hamburgerIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Feed</Text>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Potemon");
              this._updateFlg("Potemon", WASHED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/washIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Clean</Text>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Potemon");
              this._updateFlg("Potemon", PLAYED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Hug</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _getARNavigator4th() {
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
        {/* This is our AR Scene for higemon*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.tamamon[3].fed,
            fedCount: this.state.tamamon[3].fedCount,
            washed: this.state.tamamon[3].washed,
            played: this.state.tamamon[3].played,
            text: this.state.displayText,
            flgs: this.state.tamamon[3].flgs
          }}
          initialScene={{ scene: InitialARSceneForTama4th }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Higemon");
            }}
          >
            <Image
              source={require("./res/icons/hamburgerIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Feed</Text>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Higemon");
              this._updateFlg("Higemon", WASHED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/washIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Clean</Text>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Higemon");
              this._updateFlg("Higemon", PLAYED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Hug</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Birdmon AR Scene

  _getARNavigator5th() {
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
        {/* This is our AR Scene for birdmon*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.tamamon[4].fed,
            fedCount: this.state.tamamon[4].fedCount,
            washed: this.state.tamamon[4].washed,
            played: this.state.tamamon[4].played,
            text: this.state.displayText,
            flgs: this.state.tamamon[4].flgs
          }}
          initialScene={{ scene: InitialARSceneForTama5th }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
            ></Image>
          </TouchableOpacity>

          {/*Feed button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._feedButtonHandler("Birdmon");
            }}
          >
            <Image
              source={require("./res/icons/hamburgerIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Feed</Text>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Birdmon");
              this._updateFlg("Birdmon", WASHED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/washIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Clean</Text>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Birdmon");
              this._updateFlg("Birdmon", PLAYED_FLG);
            }}
          >
            <Image
              source={require("./res/icons/heartIconTEST.png")}
              style={localStyles.icons}
            ></Image>
            <Text style={localStyles.tabTitle}>Hug</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Add new Tamamon
  _getAddAR() {
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
        {/* This is our AR Scene for Add tamamon from AR.*/}
        <ViroARSceneNavigator
          viroAppProps={{
            addTamamon: this._addARTamamon,
            tamamonList: this.state.tamamon
          }}
          initialScene={{ scene: InitialARSceneForAddFromAR }}
        />

        {/*This is our bottom navbar*/}
        <View style={localStyles.bottomNav}>
          {/*Home button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButton}
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
      if (navigatorType === AR_NAVIGATOR_TYPE) {
        this._updateFlg("Pocchamon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_2nd) {
        console.log("inteli");
        this._updateFlg("Intelimon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_3rd) {
        this._updateFlg("Potemon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_4th) {
        this._updateFlg("Higemon", SPEECH_FLG);
      }
    };
  }

  _feedTamamon = name => {
    let fedTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });
    // Prohibition of repeated hits
    if (fedTamamon[0].flgs[3] === 1) {
      return;
    }

    this.setState(
      prevState => ({
        tamamon: prevState.tamamon.map(obj =>
          obj.name === name
            ? Object.assign(obj, { fed: true, fedCount: ++obj.fedCount })
            : obj
        )
      }),
      () => {
        const fedCountAxios = fedTamamon[0].fedCount;
        const updateFed = async () => {
          await axios({
            url: "https://tamomon.herokuapp.com/v1/graphql",
            method: "post",
            data: {
              query: `
        mutation update_single_tamomon {
          update_Tamomon(
            where: {name: {_eq: "${name}"}},
            _set: {
              fed: true,
              fedCount: ${fedCountAxios},
            }
          ) {
            affected_rows
            returning {
              id
              name
              fedCount
            }
          }
        }
        `
            }
          }).then(result => {
            console.log(result.data);
          });
        };

        updateFed();

        if (fedTamamon[0].fedCount === 1) {
          this._updateText(fedTamamon[0].text[0]);
          this._updateFlg(name, SPEECH_FLG);
        }
        if (fedTamamon[0].fedCount === 2) {
          this._updateText(fedTamamon[0].text[1]);
          this._updateFlg(name, SPEECH_FLG);
        }
        if (fedTamamon[0].fedCount === 3 || fedTamamon[0].fedCount === 4) {
          this._updateText(fedTamamon[0].text[2]);
          this._updateFlg(name, SPEECH_FLG);
        }
        if (fedTamamon[0].fedCount >= 5) {
          this._updateText(fedTamamon[0].text[3]);
          this._updateFlg(name, SPEECH_FLG);
        }
      }
    );
  };

  _feedButtonHandler = name => {
    this._feedTamamon(name);
  };

  _updateText = text => {
    this.setState({
      displayText: text
    });
  };

  _updateFlg = async (name, index) => {
    await this.setState(prevState => ({
      tamamon: prevState.tamamon.map(obj => {
        if (obj.name === name) {
          console.log("flgs", obj.flgs);
          obj.flgs[index] = 1;
          console.log("flgs--", obj.flgs);
          return Object.assign(obj, { flgs: obj.flgs });
        } else {
          return obj;
        }
      })
    }));
    await setTimeout(() => {
      console.log("call SetTimeOut");
      this.setState(prevState => ({
        tamamon: prevState.tamamon.map(obj => {
          if (obj.name === name) {
            console.log("flgsback", obj.flgs);
            obj.flgs[index] = 0;
            console.log("flgsback--", obj.flgs);
            return Object.assign(obj, { flgs: obj.flgs });
          } else {
            return obj;
          }
        })
      }));
    }, 4000);
  };

  _updateNeglected = async name => {
    this.setState(prevState => ({
      tamamon: prevState.tamamon.map(obj =>
        obj.name === name ? Object.assign(obj, { neglected: false }) : obj
      )
    }));
  };

  _washTamamon = name => {
    let washedTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });

    this.setState(
      prevState => ({
        tamamon: prevState.tamamon.map(obj =>
          obj.name === name ? Object.assign(obj, { washed: true }) : obj
        )
      }),
      () => {
        console.log(washedTamamon[0].washed);
      }
    );
  };

  _playTamamon = name => {
    let playedTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });

    this.setState(
      prevState => ({
        tamamon: prevState.tamamon.map(obj =>
          obj.name === name ? Object.assign(obj, { played: true }) : obj
        )
      }),
      () => {
        console.log(playedTamamon[0].played);
      }
    );
  };

  _buyTamamon(name, price) {
    let boughtTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });

    if (boughtTamamon[0].owned === true) {
      console.log("you own this");
      console.log(this.state.wallet);
      return;
    }

    if (this.state.wallet >= price && boughtTamamon[0].owned === false) {
      this.setState(
        prevState => ({
          wallet: (this.state.wallet -= price),
          tamamon: prevState.tamamon.map(obj =>
            obj.name === name ? Object.assign(obj, { owned: true }) : obj
          )
        }),
        () => {
          console.log(boughtTamamon);
        }
      );
    }
  }
  _addARTamamon(name) {
    let addTamamon = this.state.tamamon.filter(obj => {
      return obj.name === name;
    });

    if (addTamamon[0].owned === true) {
      return;
    }
    this.setState(prevState => ({
      tamamon: prevState.tamamon.map(obj =>
        obj.name === name ? Object.assign(obj, { owned: true }) : obj
      )
    }));
  }
}

//Styles
var localStyles = StyleSheet.create({
  parent: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: "row"
  },
  images: {
    width: 80,
    height: 80
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
    // height: 380
  },
  title: {
    marginTop: 100,
    marginBottom: 20
  },
  buttonText: {
    color: "#007aff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10
  },
  buttons: {
    margin: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#007aff",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
    width: "80%",
    minWidth: "30%"
    // flex: 1
  },
  bottomNav: {
    height: 75,
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
    fontSize: 15,
    //color: "#3c3c3c",
    color: "black",
    marginBottom: 55
  },
  icons: {
    height: 80,
    width: 80,
    marginBottom: 10,
    backgroundColor: "transparent"
  },
  backButton: {
    height: 40,
    width: 40,
    marginBottom: 10
  },
  backButtonStore: {
    height: 40,
    width: 40,
    margin: 10,
    alignSelf: "flex-start"
  },
  buttonStyle: {
    height: 70,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#007aff",
    marginTop: 50,
    margin: 10,
    justifyContent: "center"
  },

  textStyle: {
    textAlign: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  scrollview: {
    backgroundColor: "#839BE4"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover" // or 'stretch'
  }
});
module.exports = TamaMenu;
