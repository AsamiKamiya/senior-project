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
  ScrollView
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
const InitialARSceneForAddFromAR = require("./AddFromAR");

const UNSET = "UNSET";
//1. Pocchamon
const AR_NAVIGATOR_TYPE = "AR";
//2. Intellimon
const AR_NAVIGATOR_TYPE_2nd = "2nd";
//3. Potemon
const AR_NAVIGATOR_TYPE_3rd = "3rd";
//4. TamaStore
const STORE_NAVIGATOR_TYPE = "STORE";
//5. Menu Page
const defaultNavigatorType = UNSET;
// 6. Add AR page
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
        }
      ],
      server: {},
      load: {}
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2nd = this._getARNavigator2nd.bind(this);
    this._getARNavigator3rd = this._getARNavigator3rd.bind(this);
    this._getStore = this._getStore.bind(this);
    this._getAddAR = this._getAddAR.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._buyTamamon = this._buyTamamon.bind(this);
    this._addARTamamon = this._addARTamamon.bind(this);
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
          {this.state.server.Potemon.fedCount}
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
      <ScrollView>
        <ImageBackground
          source={require("./res/images/Sprite-0002.gif")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={localStyles.inner}>
            <Image
              source={require("./res/images/logo.png")}
              style={localStyles.title}
            />

            {storeButton}
            {addButton}

            <View style={localStyles.parent}>
              {/* Select Pocchamon */}
              {this.state.server.Pocchamon.owned ? pocchaButton : null}

              {/* Select Intellimon*/}
              {this.state.server.Intellimon.owned ? intelliButton : null}

              {/*Select Potemon*/}
              {this.state.server.Potemon.owned ? poteButton : null}
            </View>
          </View>
        </ImageBackground>
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
          pocchaOwned={this.state.server.Pocchamon.owned}
          intelliOwned={this.state.server.Intellimon.owned}
          poteOwned={this.state.server.Potemon.owned}
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
            fed: this.state.server.Pocchamon.fed,
            fedCount: this.state.server.Pocchamon.fedCount,
            washed: this.state.server.Pocchamon.washed,
            played: this.state.server.Pocchamon.played,
            text: this.state.displayText,
            flgs: this.state.server.Pocchamon.flgs
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
            onPress={() => {
              this._washTamamon("Intellimon");
              this._updateFlg("Intellimon", WASHED_FLG);
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
              this._playTamamon("Intellimon");
              this._updateFlg("Intellimon", PLAYED_FLG);
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
    if (this.state.server[name].flgs[3] === 1) {
      return;
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
        this._updateFlg(name, SPEECH_FLG);
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

  _washTamamon = name => {
    const newWash = clone(this.state.server); //Deep clone state
    newWash[name].washed = true;
    this.setState(
      //Set state with callback fn to call API
      {
        server: newWash,
        wallet: (this.state.wallet += 10)
      },
      () => {
        const time = new Date();
        const newData = this._formatState(name, time); //Format data to send

        const updateWashed = async newData => {
          //API call fn
          await axios({
            url: "https://tamomon.herokuapp.com/v1/graphql",
            method: "post",
            data: updateUserData(newData)
          }).then(result => {
            console.log(result);
          });
        };

        updateWashed(newData); //Execute API call
      }
    );
  };

  _playTamamon = name => {
    const newPlay = clone(this.state.server); //Deep clone state
    newPlay[name].played = true;

    this.setState(
      //Set state with callback fn to call API
      {
        server: newPlay,
        wallet: (this.state.wallet += 10)
      },
      () => {
        const time = new Date();
        const newData = this._formatState(name, time); //Format data to send

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

        updatePlayed(newData); //Execute API call
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

      this.setState({
        wallet: (this.state.wallet -= price),
        server: newOwn
      });
    }
  }
  _addARTamamon(name) {
    const newOwn = clone(this.state.server);
    if (this.state.server[name].owned === true) {
      return;
    }
    this.setState({
      server: newOwn
    });
  }
}

//Styles
var localStyles = StyleSheet.create({
  parent: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "center"
  },
  images: {
    width: 80,
    height: 80
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
    width: "30%"
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
module.exports = TamaMenu;
