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
import { updateUserData } from "../graphql/mutations";
import clone from "../utils/clone";

const InitialARScene = require("./Tamamon1st");
const InitialARSceneForTama2nd = require("./Tamamon2nd");
const InitialARSceneForTama3rd = require("./Tamamon3rd");
const InitialARSceneForTama4th = require("./Tamamon4th");
const InitialARSceneForTama5th = require("./Tamamon5th");
const InitialARSceneForTama6th = require("./Tamamon6th");
const InitialARSceneForAddFromAR = require("./AddFromAR");

const UNSET = "UNSET";
//1. Pocchamon
const AR_NAVIGATOR_TYPE = "AR";
//2. Intellimon
const AR_NAVIGATOR_TYPE_2nd = "2nd";
//3. Potemon
const AR_NAVIGATOR_TYPE_3rd = "3rd";
//4. Higemon
const AR_NAVIGATOR_TYPE_4th = "4th";
//5. Birdmon
const AR_NAVIGATOR_TYPE_5th = "5th";
//6. Keromon
const AR_NAVIGATOR_TYPE_6th = "6th";
//7. TamaStore
const STORE_NAVIGATOR_TYPE = "STORE";
//8. Menu Page
const defaultNavigatorType = UNSET;
//9. Add AR page
const ADD_AR_NAVIGATOR_TYPE = "ADD_AR";

// flg name
const WASHED_FLG = 1;
const PLAYED_FLG = 2;
const SPEECH_FLG = 3;

const axios = require("axios");

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
          name: "Intellimon",
          owned: false,
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
          name: "Potemon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          neglected: false,
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
          neglected: true,
          text: [
            "I usually expect higher quality food...",
            "But what about third breakfast?",
            "Breakfast was fine, I guess...",
            "Maybe five breakfasts was too much."
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
          neglected: false,
          text: [
            "Yum!",
            "Feed me more!",
            "I still have room",
            "I hope I can still fly..."
          ],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        },

        {
          name: "Keromon",
          owned: false,
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          neglected: false,
          text: [
            "Free food?!",
            "I don't have to pay for this, right?",
            "So good...",
            "...... I need a nap."
          ],
          flgs: [0, 0, 0, 0] // feed, wash, play, speech
        }
      ],
      server: {},
      load: {}
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2nd = this._getARNavigator2nd.bind(this);
    this._getARNavigator3rd = this._getARNavigator3rd.bind(this);
    this._getARNavigator4th = this._getARNavigator4th.bind(this);
    this._getARNavigator5th = this._getARNavigator5th.bind(this);
    this._getARNavigator6th = this._getARNavigator6th.bind(this);
    this._getStore = this._getStore.bind(this);
    this._getAddAR = this._getAddAR.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._buyTamamon = this._buyTamamon.bind(this);
    this._addARTamamon = this._addARTamamon.bind(this);
    this._updateNeglected = this._updateNeglected.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    //Component lifecycle fn to update state with props before render() **Always runs when state changes
    if (props.data !== state.load) {
      //Condition to execute state update with new props
      console.log("getting derived", props);
      const data = props.data;
      const temp = [];
      const serverData = {};
      Object.keys(data).map(tamamon => {
        let obj = {};
        state.tamamon.forEach(item => {
          if (item.name === tamamon) {
            obj = { ...item };
            serverData[tamamon] = { ...item };
          }
        });
        for (const key in data[tamamon]) {
          if (obj[key] !== undefined) {
            obj[key] = data[tamamon][key];
          }
        }
        temp.push(obj);
        serverData[tamamon] = { ...obj };
      });
      return {
        load: props.data,
        tamamon: temp,
        wallet: props.wallet,
        deviceID: props.deviceID,
        server: serverData
      };
    }
    return null; //Condition when props equals component of current state
  }

  //Switch AR scenes based on Navigator Type
  render() {
    console.log("render state", this.state);
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
    } else if (this.state.navigatorType === AR_NAVIGATOR_TYPE_6th) {
      return this._getARNavigator6th();
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
        <Text style={localStyles.buttonText}>
          {this.state.server.Pocchamon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Pocchamon {this.state.server.Pocchamon.fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const intelliButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_2nd)}
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/images/icons/cat-2.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>
          {this.state.server.Intellimon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Intellimon {this.state.server.Intellimon.fedCount} times.
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
        <Text style={localStyles.buttonText}>
          {this.state.server.Potemon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Potemon {this.state.server.Potemon.fedCount} times.
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
        <Text style={localStyles.buttonText}>
          {this.state.server.Higemon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Higemon {this.state.server.Higemon.fedCount} times.
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
          source={require("./res/icons/menuIcons/birdmon2d.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>
          {this.state.server.Birdmon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Birdmon {this.state.server.Birdmon.fedCount} times.
        </Text>
      </TouchableOpacity>
    );

    const keroButton = (
      <TouchableOpacity
        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_6th)} //needs update
        style={localStyles.buttons}
        underlayColor={"#68a0ff"}
      >
        <Image
          source={require("./res/icons/menuIcons/kero.png")}
          style={localStyles.images}
        />
        <Text style={localStyles.buttonText}>
          {this.state.server.Keromon.name}
        </Text>
        <Text style={localStyles.buttonText}>
          You've fed Keromon {this.state.server.Keromon.fedCount} times.
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
        <Text style={localStyles.textStyle}>UNLOCK</Text>
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

            <View style={{ flexDirection: "row" }}>{storeButton}</View>
          </View>
        </ImageBackground>
        <View style={localStyles.inner}>
          <View style={localStyles.parent}>
            {/* Select Pocchamon */}
            {this.state.server.Pocchamon.owned ? pocchaButton : null}
            {/* Select Intellimon*/}
            {this.state.server.Intellimon.owned ? intelliButton : null}
            {/*Select Potemon*/}
            {this.state.server.Potemon.owned ? poteButton : null}
            {/*Select Higemon*/}
            {this.state.server.Higemon.owned ? higeButton : null}
            {/*Select Birdmon */}
            {this.state.server.Birdmon.owned ? birdButton : null}
            {/*Select Keromon */}
            {this.state.server.Keromon.owned ? keroButton : null}
            {this.state.server.Potemon.owned ? null : (
              <View style={{ alignItems: "center", marginTop: 30 }}>
                <Text
                  style={{ color: "white", fontSize: 20, textAlign: "center" }}
                >
                  Use the Potemon AR marker to unlock a bonus Tamamon.
                </Text>
                {addButton}
              </View>
            )}
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
        <View style={localStyles.bottomNav}>
          <TouchableOpacity
            style={localStyles.tabItemforStoreL}
            onPress={this._getExperienceButtonOnPress(UNSET)}
          >
            <Image
              source={require("./res/icons/icon_left.png")}
              style={localStyles.backButtonStore}
            ></Image>
          </TouchableOpacity>
          <View style={localStyles.tabItemforStoreR}>
            <View style={localStyles.bottomNav}>
              <Image
                source={require("./res/icons/coinSpriteUpdated.png")}
                style={localStyles.walletmark}
              ></Image>
              <Text style={{ fontSize: 20 }}>{this.state.wallet}G</Text>
            </View>
          </View>
        </View>
        <View>
          <TamaStore
            pocchaOwned={this.state.server.Pocchamon.owned}
            intelliOwned={this.state.server.Intellimon.owned}
            poteOwned={this.state.server.Potemon.owned}
            higeOwned={this.state.server.Higemon.owned}
            birdOwned={this.state.server.Birdmon.owned}
            keroOwned={this.state.server.Keromon.owned}
            wallet={this.state.wallet}
            buyTamamon={this._buyTamamon}
          ></TamaStore>
        </View>
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
            fed: this.state.server.Pocchamon.fed,
            fedCount: this.state.server.Pocchamon.fedCount,
            washed: this.state.server.Pocchamon.washed,
            played: this.state.server.Pocchamon.played,
            text: this.state.displayText,
            flgs: this.state.server.Pocchamon.flgs,
            neglected: this.state.server.Pocchamon.neglected,
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Pocchamon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Pocchamon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Pocchamon");
              await this._updateFlg("Pocchamon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Pocchamon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Pocchamon.played) {
                coinChk = true;
              }
              await this._playTamamon("Pocchamon");
              await this._updateFlg("Pocchamon", PLAYED_FLG, coinChk);
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

  //Intellimon AR Scene
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
            fed: this.state.server.Intellimon.fed,
            fedCount: this.state.server.Intellimon.fedCount,
            washed: this.state.server.Intellimon.washed,
            played: this.state.server.Intellimon.played,
            text: this.state.displayText,
            flgs: this.state.server.Intellimon.flgs
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
              this._feedButtonHandler("Intellimon");
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Intellimon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Intellimon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Intellimon");
              await this._updateFlg("Intellimon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Intellimon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Intellimon.played) {
                coinChk = true;
              }
              await this._playTamamon("Intellimon");
              await this._updateFlg("Intellimon", PLAYED_FLG, coinChk);
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
            fed: this.state.server.Potemon.fed,
            fedCount: this.state.server.Potemon.fedCount,
            washed: this.state.server.Potemon.washed,
            played: this.state.server.Potemon.played,
            text: this.state.displayText,
            flgs: this.state.server.Potemon.flgs
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Potemon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Potemon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Potemon");
              await this._updateFlg("Potemon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Potemon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Potemon.played) {
                coinChk = true;
              }
              await this._playTamamon("Potemon");
              await this._updateFlg("Potemon", PLAYED_FLG, coinChk);
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
            fed: this.state.server.Higemon.fed,
            fedCount: this.state.server.Higemon.fedCount,
            washed: this.state.server.Higemon.washed,
            played: this.state.server.Higemon.played,
            text: this.state.displayText,
            flgs: this.state.server.Higemon.flgs,
            neglected: this.state.server.Higemon.neglected,
            updateNeglected: this._updateNeglected
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Higemon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Higemon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Higemon");
              await this._updateFlg("Higemon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Higemon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Higemon.played) {
                coinChk = true;
              }
              await this._playTamamon("Higemon");
              await this._updateFlg("Higemon", PLAYED_FLG, coinChk);
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
            fed: this.state.server.Birdmon.fed,
            fedCount: this.state.server.Birdmon.fedCount,
            washed: this.state.server.Birdmon.washed,
            played: this.state.server.Birdmon.played,
            text: this.state.displayText,
            flgs: this.state.server.Birdmon.flgs,
            neglected: this.state.server.Birdmon.neglected,
            updateNeglected: this._updateNeglected
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Birdmon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Birdmon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Birdmon");
              await this._updateFlg("Birdmon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Birdmon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Birdmon.played) {
                coinChk = true;
              }
              await this._playTamamon("Birdmon");
              await this._updateFlg("Birdmon", PLAYED_FLG, coinChk);
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

  //Keromon AR Scene

  _getARNavigator6th() {
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
        {/* This is our AR Scene for keromon*/}
        <ViroARSceneNavigator
          viroAppProps={{
            fed: this.state.server.Keromon.fed,
            fedCount: this.state.server.Keromon.fedCount,
            washed: this.state.server.Keromon.washed,
            played: this.state.server.Keromon.played,
            text: this.state.displayText,
            flgs: this.state.server.Keromon.flgs,
            neglected: this.state.server.Keromon.neglected,
            updateNeglected: this._updateNeglected
          }}
          initialScene={{ scene: InitialARSceneForTama6th }}
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
              this._feedButtonHandler("Keromon");
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Keromon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Keromon.washed) {
                coinChk = true;
              }
              await this._washTamamon("Keromon");
              await this._updateFlg("Keromon", WASHED_FLG, coinChk);
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
            onPress={async () => {
              // Prohibition of repeated hits
              if (this.state.server.Keromon.flgs.includes(1)) {
                return;
              }
              let coinChk = false;
              if (!this.state.server.Keromon.played) {
                coinChk = true;
              }
              await this._playTamamon("Keromon");
              await this._updateFlg("Keromon", PLAYED_FLG, coinChk);
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
            tamamonList: this.state.server
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
        this._updateFlg("Intellimon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_3rd) {
        this._updateFlg("Potemon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_4th) {
        this._updateFlg("Higemon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_5th) {
        this._updateFlg("Birdmon", SPEECH_FLG);
      }
      if (navigatorType === AR_NAVIGATOR_TYPE_6th) {
        this._updateFlg("Keromon", SPEECH_FLG);
      }
    };
  }

  _formatState(name, time) {
    const newState = {};
    newState.id = this.state.deviceID;
    newState.wallet = this.state.wallet;
    const tamamonState = { ...this.props.data };

    for (const key in tamamonState[name]) {
      if (key === "modified") {
        tamamonState[name][key] = time.toString();
      } else {
        tamamonState[name][key] = this.state.server[name][key];
      }
    }
    newState.tamamons = { ...tamamonState };
    return newState;
  }

  _feedTamamon = name => {
    // Prohibition of repeated hits
    if (this.state.server[name].flgs.includes(1)) {
      return;
    }
    let coinChk = false;
    if (!this.state.server[name].fed) {
      coinChk = true;
    }
    const newFeed = clone(this.state.server); //Deep clone state
    newFeed[name].fed = true;
    if (newFeed[name].fedCount === 0) {
      this.setState({ wallet: (this.state.wallet += 10) }); //Update state of wallet if Tamamon is initally fed
    }
    newFeed[name].fedCount > 5
      ? newFeed[name].fedCount
      : ++newFeed[name].fedCount;
    this.setState({ server: newFeed }, () => {
      //Update state of tamamon plus callback fn to execute API call
      const time = new Date();
      const newData = this._formatState(name, time); //Format affected data

      const updateFed = async newData => {
        //Fn to make API call
        await axios({
          url: "https://tamomon.herokuapp.com/v1/graphql",
          method: "post",
          data: updateUserData(newData)
        }).then(result => {
          console.log(result);
        });
      };

      updateFed(newData); // Execute API call

      if (this.state.server[name].fedCount === 1) {
        this._updateText(this.state.server[name].text[0]);
        this._updateFlg(name, SPEECH_FLG, coinChk);
      }
      if (this.state.server[name].fedCount === 2) {
        this._updateText(this.state.server[name].text[1]);
        this._updateFlg(name, SPEECH_FLG);
      }
      if (
        this.state.server[name].fedCount === 3 ||
        this.state.server[name].fedCount === 4
      ) {
        this._updateText(this.state.server[name].text[2]);
        this._updateFlg(name, SPEECH_FLG);
      }
      if (this.state.server[name].fedCount >= 5) {
        this._updateText(this.state.server[name].text[3]);
        this._updateFlg(name, SPEECH_FLG);
      }
    });
  };

  _feedButtonHandler = name => {
    this._feedTamamon(name);
  };

  _updateText = text => {
    this.setState({
      displayText: text
    });
  };

  _updateFlg = async (name, index, coin) => {
    const newFlag = clone(this.state.server);
    newFlag[name].flgs[index] = 1;
    if (coin) {
      newFlag[name].flgs[0] = 1;
    }
    this.setState({ server: newFlag }, () => {
      console.log(newFlag[name].flgs);
    });
    setTimeout(() => {
      newFlag[name].flgs[index] = 0;
      newFlag[name].flgs[0] = 0;
      this.setState({ server: newFlag }, () => {
        console.log(newFlag[name].flgs);
      });
    }, 3500);
  };

  _updateNeglected = async name => {
    const newNeglect = clone(this.state.server);
    newNeglect[name].neglected = false;
    this.setState({
      server: newNeglect
    });
  };

  _washTamamon = async name => {
    if (this.state.server[name].washed === false) {
      this.setState({ wallet: (this.state.wallet += 10) });
    }
    const newWash = await clone(this.state.server); //Deep clone state

    newWash[name].washed = true;
    await this.setState(
      //Set state with callback fn to call API
      {
        server: newWash
      },
      async () => {
        await console.log("w:", this.state.server[name]);
        const time = await new Date();
        const newData = await this._formatState(name, time); //Format data to send

        const updateWashed = async newData => {
          //API call fn
          await axios({
            url: "https://tamomon.herokuapp.com/v1/graphql",
            method: "post",
            data: updateUserData(newData)
          }).then(result => {
            console.log("ww:", this.state.server[name]);
          });
        };

        await updateWashed(newData); //Execute API call
      }
    );
  };

  _playTamamon = async name => {
    if (this.state.server[name].played === false) {
      this.setState({ wallet: (this.state.wallet += 10) });
    }
    const newPlay = await clone(this.state.server); //Deep clone state
    newPlay[name].played = true;

    await this.setState(
      //Set state with callback fn to call API
      {
        server: newPlay
      },
      async () => {
        const time = await new Date();
        const newData = await this._formatState(name, time); //Format data to send

        const updatePlayed = async newData => {
          //API call fn
          await axios({
            url: "https://tamomon.herokuapp.com/v1/graphql",
            method: "post",
            data: updateUserData(newData)
          }).then(result => {
            console.log(result);
          });
        };

        await updatePlayed(newData); //Execute API call
      }
    );
  };

  _buyTamamon(name, price) {
    if (this.state.server[name].owned === true) {
      console.log("you own this");
      console.log(this.state.wallet);
      return;
    }

    if (this.state.wallet >= price && this.state.server[name].owned === false) {
      const newOwn = clone(this.state.server);
      newOwn[name].owned = true;

      this.setState(
        {
          wallet: (this.state.wallet -= price),
          server: newOwn
        },
        () => {
          const time = new Date();
          const newData = this._formatState(name, time); //Format data to send

          const updateOwned = async newData => {
            //API call fn
            await axios({
              url: "https://tamomon.herokuapp.com/v1/graphql",
              method: "post",
              data: updateUserData(newData)
            }).then(result => {
              console.log(result);
            });
          };

          updateOwned(newData); //Execute API call
        }
      );
    }
  }

  _addARTamamon(name) {
    if (this.state.server[name].owned === true) {
      return;
    }
    const newOwn = clone(this.state.server);
    newOwn[name].owned = true;

    this.setState(
      {
        server: newOwn
      },
      () => {
        const time = new Date();
        const newData = this._formatState(name, time); //Format data to send

        const updateOwned = async newData => {
          //API call fn
          await axios({
            url: "https://tamomon.herokuapp.com/v1/graphql",
            method: "post",
            data: updateUserData(newData)
          }).then(result => {
            console.log(result);
          });
        };

        updateOwned(newData); //Execute API call
      }
    );
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
  tabItemforStoreL: {
    // alignItems: "center",
    justifyContent: "center",
    marginRight: 100
  },
  tabItemforStoreR: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginTop: 50
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
  walletmark: {
    height: 30,
    width: 30,
    marginRight: 10
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
