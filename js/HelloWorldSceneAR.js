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
      text: "Initializing AR...",
      animate: false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._animateFinished = this._animateFinished.bind(this);
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
          onAnchorFound={this._onAnchorFound}
        >
          <Viro3DObject
            source={require("./res/cat2.obj")}
            //position={[-0.0, -1, -1]}
            resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
            type="OBJ"
            scale={[0.1, 0.1, 0.1]}
            onTouch={this._onTouch}
            onClick={this._animateTamamon}
            animation={{
              name: "tapAnimation",
              run: this.state.animate,
              onFinish: this._animateFinished
            }}
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

  _animateTamamon(state, source) {
    if (state == 1) {
      console.log("User clicked down");
    } else if (state == 2) {
      console.log("User has click-up on the image!");
    } else if (state == 3) {
      console.log("USER FINALLY CLICKED");
    }
  }

  _onTouch(state, touchPos, source) {
    var touchX = touchPos[0];
    var touchY = touchPos[1];
    if (state == 1) {
      // Touch Down
    } else if (state == 2) {
      // Touch Down Move
    } else if (state == 3) {
      // Touch Up
    }
  }

  _animateFinished() {
    this.setState({
      animateTamamon: false
    });
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
