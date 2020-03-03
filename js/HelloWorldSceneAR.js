"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

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
  ViroARTrackingTarget
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />

        {/*

        <Viro3DObject
          source={require("./res/cat.obj")}
          position={[-0.0, -5.5, -1.15]}
          // materials={["suica"]}
          resources={[require("./res/cat.mtl"), require("./res/cat.png")]}
          type="OBJ"
          scale={[0.1, 0.1, 0.1]}
          position={[0, -1, -1]}
        />
    */}

        <ViroARImageMarker
          target={"targetOne"}
          pauseUpdates={this.state.pauseUpdates}
        >
          <Viro3DObject
            source={require("./res/cat2.obj")}
            //position={[-0.0, -1, -1]}
            resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
            type="OBJ"
            scale={[0.1, 0.1, 0.1]}
          />
        </ViroARImageMarker>

        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
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

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./res/FinalMark.jpg"),
    orientation: "Up",
    physicalWidth: 0.15
  }
});

module.exports = HelloWorldSceneAR;
