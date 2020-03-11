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

const InitialARScene = require("./Tamamon1st");
const InitialARSceneForTama2nd = require("./Tamamon2nd");
const InitialARSceneForTama3rd = require("./Tamamon3rd");

const UNSET = "UNSET";
//1. Pocchamon
const AR_NAVIGATOR_TYPE = "AR";
//2. Intelimon
const AR_NAVIGATOR_TYPE_2nd = "2nd";
//3. Potemon
const AR_NAVIGATOR_TYPE_3rd = "3rd";
const defaultNavigatorType = UNSET;
//TODO: 1. Make code DRY. Rather than returning different AR_NAVIGATOR_TYPES we can try to conditionally render based on selection. 2. Implement Home button functionality
const axios = require("axios");

const getFed = axios({
  url: "https://tamomon.herokuapp.com/v1/graphql",
  method: "post",
  data: {
    query: `
    query {
      Tamomon {
        id
        name
        fedCount
      }
    }
      `
  }
}).then(result => {
  console.log(result.data);
});

// const updateFed = axios({
//   url: "https://tamomon.herokuapp.com/v1/graphql",
//   method: "post",
//   data: {
//     query: `
// mutation update_single_tamomon {
//   update_Tamomon(
//     where: {name: {_eq: "Pocchamon"}},
//     _set: {
//       fed: true,
//       fedCount: 2,
//     }
//   ) {
//     affected_rows
//     returning {
//       id
//       name
//       fedCount
//     }
//   }
// }
// `
//   }
// }).then(result => {
//   console.log(result.data);
// });

// axios({
//   url: "https://tamomon.herokuapp.com/v1/graphql",
//   method: "post",
//   data: {
//     query: `
//     mutation insert_single_tamomon {
//     insert_Tamomon(
//       objects: {
//         id: 2,
//         name: "Pot",
//         fed: 67,
//         washed: 56,
//         played: 45,
//         modified: 87
//       }
//     ) {
//      returning {
//   id
//       name
//       washed
//       fed
//       played
//       modified
//     }
//     }
//   }
//       `
//   }
// }).then(result => {
//   console.log(result.data);
// });

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
      tamamon: [
        {
          name: "Pocchamon",
          washed: false,
          played: false,
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
          washed: false,
          played: false,
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
          name: "Potemon",
          washed: false,
          played: false,
          fed: false,
          fedCount: 0,
          text: ["Food", "More food", "There's more food?", "...food"]
        }
      ]
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2nd = this._getARNavigator2nd.bind(this);
    this._getARNavigator3rd = this._getARNavigator3rd.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
  }

  //Switch scenes based on Navigator Type
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_2nd) {
      return this._getARNavigator2nd();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE_3rd) {
      return this._getARNavigator3rd();
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

            {/* Select Pocchamon*/}
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

            {/* Select Intelimon*/}

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
            {/*Select Potemon*/}
            <TouchableHighlight
              onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE_3rd)}
              style={localStyles.buttons}
              underlayColor={"#68a0ff"}
            >
              <Image
                source={require("./res/icons/menuIcons/potatoIcon.png")}
                style={localStyles.images}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
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
            onPress={() => {
              this._washTamamon("Pocchamon");
            }}
          >
            <Image
              source={require("./res/icons/washIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Pocchamon");
            }} //this is a placeholder for the play function
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
            onPress={() => {
              this._washTamamon("Intelimon");
            }}
          >
            <Image
              source={require("./res/icons/washIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Intelimon");
            }}
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
            text: this.state.displayText
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
              source={require("./res/icons/houseIcon2.png")}
              style={localStyles.icons}
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
              source={require("./res/icons/hamburgerIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Clean button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._washTamamon("Potemon");
            }}
          >
            <Image
              source={require("./res/icons/washIcon.png")}
              style={localStyles.icons}
            ></Image>
          </TouchableOpacity>

          {/*Play button*/}
          <TouchableOpacity
            style={localStyles.tabItem}
            onPress={() => {
              this._playTamamon("Potemon");
            }}
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

  _feedButtonHandler = name => {
    this._feedTamamon(name);
  };

  _updateText = text => {
    this.setState({
      displayText: text
    });
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
}

//Styles
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
