"use strict";

import React, { Component } from "react";

import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroARTrackingTarget,
  ViroButton,
  ViroFlexView,
  ViroImage,
  ViroParticleEmitter,
  ViroScene
} from "react-viro";

export default class AddARTamamon extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      forPlay: false
    };
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onFinishAnimation4play = this._onFinishAnimation4play.bind(this);
  }

  render() {
    console.log(
      "HHH",
      this.props.arSceneNavigator.viroAppProps.tamamonList.Potemon.owned
    );
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" />
        <ViroText
          text={this.state.text}
          position={[0, 0, -5]}
          style={styles.announceTextStyle}
          width={2}
          height={2}
          animation={{
            name: "disappearForText",
            run: true,
            delay: 5000
          }}
        />

        <ViroARImageMarker
          target={"potemon"}
          pauseUpdates={this.state.pauseUpdates}
        >
          {this.props.arSceneNavigator.viroAppProps.tamamonList.Potemon
            .owned ? (
            <ViroNode>
              <Viro3DObject
                source={require("./res/speechBubble.obj")}
                resources={[
                  require("./res/speechBubble.mtl"),
                  require("./res/speechBubble.png")
                ]}
                type="OBJ"
                scale={[0.3, 0.3, 0.3]}
                position={[-0.2, -1.8, -2]}
                opacity={1}
                // animation={{
                //   name: "disappearForText",
                //   run: this.props.arSceneNavigator.viroAppProps.flgs[3] === 1,
                //   delay: 2000
                // }}
              />
              <ViroText
                text={"YOU HAVE POTEMON!"}
                position={[0.4, -0.5, -1.9]}
                style={styles.announceTextStyleMini}
                width={2}
                height={2}
              />
              <Viro3DObject
                source={require("./res/potatoFolder/potatoIcon2.obj")}
                position={[-0.3, -3, -2]}
                resources={[
                  require("./res/potatoFolder/potatoIcon2.mtl"),
                  require("./res/potatoFolder/potatoIcon2.png")
                ]}
                type="OBJ"
                scale={[0.3, 0.3, 0.3]}
                animation={{
                  name: "catBound1st",
                  run: this.props.arSceneNavigator.viroAppProps.owned
                }}
              />
            </ViroNode>
          ) : (
            <ViroNode>
              <Viro3DObject
                source={require("./res/speechBubble.obj")}
                resources={[
                  require("./res/speechBubble.mtl"),
                  require("./res/speechBubble.png")
                ]}
                type="OBJ"
                scale={[0.3, 0.3, 0.3]}
                position={[-0.2, -1.8, -2]}
                opacity={1}
                // animation={{
                //   name: "disappearForText",
                //   run: this.props.arSceneNavigator.viroAppProps.flgs[3] === 1,
                //   delay: 2000
                // }}
              />
              <ViroText
                text={"Touch ME !"}
                position={[0.4, -0.5, -1.9]}
                style={styles.announceTextStyle}
                width={2}
                height={2}
              />
              <ViroImage
                source={require("./res/egg.png")}
                position={[-0.3, -1.5, -2]}
                scale={[0.7, 0.7, 0.7]}
                opacity={1}
                transformBehaviors={["billboard"]}
                animation={{
                  name: "catBoundNo1st",
                  run: true,
                  loop: true,
                  delay: 1500
                }}
                onClick={() => {
                  this.props.arSceneNavigator.viroAppProps.addTamamon(
                    "Potemon"
                  );
                }}
              />
            </ViroNode>
          )}
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Please scan the marker."
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState({
        text: "It's not working"
      });
    }
  }
  _onFinishAnimation4play() {
    if (!this.state.forPlay) {
      this.setState({ forPlay: true });
    }
  }
}

var styles = StyleSheet.create({
  announceTextStyleMini: {
    fontFamily: "Arial",
    fontSize: 8,
    color: "black",
    textAlignVertical: "center",
    textAlign: "center"
  },
  announceTextStyle: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "black",
    textAlignVertical: "center",
    textAlign: "center"
  },
  nameText: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "black"
  }
});

var localStyles = StyleSheet.create({
  outer: {
    flex: 1
  },

  arView: {
    flex: 1
  },

  buttons: {
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
ViroARTrackingTargets.createTargets({
  potemon: {
    source: require("./res/PotemonAR.png"),
    orientation: "Up",
    physicalWidth: 0.15
  }
});

module.exports = AddARTamamon;
