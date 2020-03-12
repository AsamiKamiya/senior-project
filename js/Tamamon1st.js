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
  ViroParticleEmitter
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      animate: false,
      animecount: 0
    };
  }

  render() {
    return (
      <ViroARScene>
        {/* This is the speech bubble and text */}
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
          text={this.props.arSceneNavigator.viroAppProps.text}
          scale={[0.4, 0.4, 0.4]}
          position={[-0.7, 0.8, -2.9]}
          style={styles.helloWorldTextStyle}
          width={2}
          height={2}
        />
        {/* This is the heart that appears */}
        {this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
          <ViroImage
            source={require("./res/heart.png")}
            position={[0.5, 0.8, -3]}
            scale={[0.5, 0.5, 0.5]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "moveUp",
              run: this.props.arSceneNavigator.viroAppProps.fedCount === 1
            }}
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

        {/* This is the Pocchamon animation */}
        {this.props.arSceneNavigator.viroAppProps.fedCount === 0 ||
        this.props.arSceneNavigator.viroAppProps.fedCount === 2 ? (
          <Viro3DObject
            source={require("./res/cat2.obj")}
            position={[-0.0, -1, -3]}
            resources={[require("./res/cat2.mtl"), require("./res/cat2.png")]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{
              name: "catBoundNo1st",
              run: this.props.arSceneNavigator.viroAppProps.fed
            }}
          />
        ) : this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
          <Viro3DObject
            source={require("./res/cat2-a1.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/cat2-a1.mtl"),
              require("./res/cat2-a1.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{
              name: "catBound1st",
              run: this.props.arSceneNavigator.viroAppProps.fed
            }}
          />
        ) : (
          <Viro3DObject
            source={require("./res/cat2-a2.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/cat2-a2.mtl"),
              require("./res/cat2-a2.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{
              name: "catBoundAngry",
              run: this.props.arSceneNavigator.viroAppProps.fed
            }}
          />
        )}

        <ViroText>Pocchamon</ViroText>

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
