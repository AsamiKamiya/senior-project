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
      animate: false,
      animecount: 0
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onTap = this._onTap.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {/* <ViroFlexView
          height={2.5}
          width={2.5}
          position={[-0.5, 0, -5]}
          transformBehaviors={["billboard"]}
        > */}
        {/*}
            <ViroFlexView backgroundColor={"white"} style={{ flex: 0.1 }}>
              <ViroImage
                style={{ flex: 1 }}
                source={require("./res/grid_bg.jpg")}
              />
            </ViroFlexView>
    */}

        {/* <ViroFlexView
            backgroundColor={"white"}
            style={{ flex: 0.8, flexDirection: "row" }}
          >
            <ViroText
              style={{ color: "black", flex: 1 }}
              text={this.state.text}
              fontSize={30}
            />
          </ViroFlexView>
        </ViroFlexView> */}

        <Viro3DObject
          source={require("./res/speechBubble.obj")}
          resources={[
            require("./res/speechBubble.mtl"),
            require("./res/speechBubble.png")
          ]}
          type="OBJ"
          scale={[-0.4, 0.4, 0.4]}
          position={[0.1, -0.95, -3]}
        ></Viro3DObject>
        <ViroText
          text={this.state.text}
          scale={[0.4, 0.4, 0.4]}
          position={[-0.7, 0.8, -2.9]}
          style={styles.helloWorldTextStyle}
          width={2}
          height={2}
        />
        {this.state.animecount === 1 ? (
          <ViroImage
            source={require("./res/heart.png")}
            position={[0.5, 0.8, -3]}
            scale={[0.5, 0.5, 0.5]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{ name: "moveUp", run: this.state.fed }}
          />
        ) : (
          // for empty
          <ViroText
            text=""
            scale={[0.3, 0.3, 0.3]}
            Ï
            position={[0.6, 0.08, -0.9]}
            style={styles.helloWorldTextStyle}
          />
        )}

        {this.state.animecount === 0 || this.state.animecount === 2 ? (
          <Viro3DObject
            source={require("./res/cat2.obj")}
            position={[-0.0, -1, -3]}
            resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{ name: "catBoundNo1st", run: this.state.fed }}
          />
        ) : this.state.animecount === 1 ? (
          <Viro3DObject
            source={require("./res/cat2-a1.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/cat2-a1.mtl"),
              require("./res/cat2-a1.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{ name: "catBound1st", run: this.state.fed }}
          />
        ) : (
          // TODO change angry or sad face
          <Viro3DObject
            source={require("./res/cat2.obj")}
            position={[-0.0, -1, -3]}
            resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{ name: "catBoundAngry", run: this.state.fed }}
          />
        )}

        <ViroButton
          source={require("./res/foodIcon.png")}
          position={[-0, -1, -3]}
          scale={[0.5, 0.5, 0.5]}
          onClick={this._onTap}
        ></ViroButton>

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
        fed: true,
        animecount: fedCount
      });
      console.log(this.state.animecount);
    } else if (fedCount === 2) {
      this.setState({
        text: "I could totally eat more...",
        animecount: fedCount
      });
    } else if (fedCount === 3) {
      this.setState({
        text: "I'm really full!!",
        animecount: fedCount
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
    color: "black",
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
  moveUp: {
    properties: { positionY: "+=0.3", opacity: 1.0 },
    duration: 500,
    easing: "bounce"
  },
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
  boundUp: {
    properties: { positionY: "+=0.1", opacity: 1.0 },
    duration: 100,
    easing: "bounce"
  },
  boundDown: {
    properties: { positionY: "-=0.1", opacity: 1.0 },
    duration: 50,
    easing: "bounce"
  },
  rotate: {
    properties: { rotateY: "+=90", opacity: 1.0 },
    duration: 250
  },
  moveLeft1st: {
    properties: { positionX: "+=0.1" },
    duration: 100,
    easing: "bounce"
  },
  moveRight1st: {
    properties: { positionX: "-=0.1" },
    duration: 100,
    easing: "bounce"
  },
  catBoundDown: {
    properties: { positionY: "-=0.2", positionX: "-=0.1", opacity: 1.0 },
    duration: 100,
    easing: "bounce"
  },
  catBoundUp: {
    properties: { positionY: "+=0.2", positionX: "+=0.1", opacity: 1.0 },
    duration: 200,
    easing: "bounce"
  },
  catBoundDownR: {
    properties: { positionY: "-=0.2", positionX: "+=0.1", opacity: 1.0 },
    duration: 100,
    easing: "bounce"
  },
  catBoundUpR: {
    properties: { positionY: "+=0.2", positionX: "-=0.1", opacity: 1.0 },
    duration: 200,
    easing: "bounce"
  },
  tapAnimation: [["scaleUp", "scaleDown"]],
  catBoundNo1st: [
    ["moveLeft1st", "moveRight1st", "moveLeft1st", "moveRight1st"]
  ],
  catBound1st: [
    [
      "catBoundUp",
      "catBoundDown",
      "catBoundUpR",
      "catBoundDownR",
      "catBoundUp",
      "catBoundDown",
      "catBoundUpR",
      "catBoundDownR"
    ]
  ],
  // catBoundAngry: [["catBound"]],
  heartAnimation: [["moveUp", "rotate"]]
});

module.exports = HelloWorldSceneAR;
