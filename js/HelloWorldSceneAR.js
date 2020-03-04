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
  ViroImage
} from "react-viro";

let fedCount = 0;

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      fed: false,
      animate: false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onTap = this._onTap.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroFlexView
          height={2.5}
          width={2.5}
          position={[-0.5, 0, -5]}
          transformBehaviors={["billboard"]}
        >
          {/*}
            <ViroFlexView backgroundColor={"white"} style={{ flex: 0.1 }}>
              <ViroImage
                style={{ flex: 1 }}
                source={require("./res/grid_bg.jpg")}
              />
            </ViroFlexView>
    */}

          <ViroFlexView
            backgroundColor={"white"}
            style={{ flex: 0.8, flexDirection: "row" }}
          >
            <ViroText
              style={{ color: "black", flex: 1 }}
              text={this.state.text}
              fontSize={30}
            />
          </ViroFlexView>
        </ViroFlexView>

        <Viro3DObject
          source={require("./res/cat2.obj")}
          position={[-0.0, -1, -3]}
          resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
          type="OBJ"
          scale={[0.3, 0.3, 0.3]}
        />

        <ViroButton
          source={require("./res/foodIcon.png")}
          position={[-0, -1, -3]}
          scale={[0.5, 0.5, 0.5]}
          onClick={this._onTap}
        >
          <ViroText text="Feed meeeee"></ViroText>
        </ViroButton>

        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, -1, 0]}
          position={[0, 5, 1]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={7}
          shadowOpacity={0.7}
        />
        <ViroAmbientLight color="#FFFFFF" />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Welcome to Tamamon"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState({
        text: "It's not working"
      });
    }
  }
  _onTap() {
    console.log(fedCount);
    ++fedCount;

    if (fedCount === 1) {
      this.setState({
        text: "Thank you for feeding me!",
        fed: true
      });
    } else if (fedCount === 2) {
      this.setState({
        text: "I coud totally eat more..."
      });
    } else if (fedCount === 3) {
      this.setState({
        text: "I'm really full!!"
      });
    } else if (fedCount >= 5) {
      this.setState({
        text: "I can't eat anymore..!"
      });
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "pink",
    textAlignVertical: "center",
    textAlign: "center"
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

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 50,
    easing: "easeineaseout"
  },
  scaleDown: {
    properties: { scaleX: 0.1, scaleY: 0.1, scaleZ: 0.1 },
    duration: 50,
    easing: "easeineaseout"
  },
  tapAnimation: [["scaleUp", "scaleDown"]]
});

module.exports = HelloWorldSceneAR;
