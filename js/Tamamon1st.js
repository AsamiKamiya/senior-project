"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TouchableWithoutFeedback
} from "react-native";

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
  ViroSound
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
    if (this.props.arSceneNavigator.viroAppProps.fedCount === 1) {
      console.log("fedddd");
    } else {
      console.log("0");
    }
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

        {/*Tamamon Name */}
        <ViroText
          text="Pocchamon"
          width={2}
          height={2}
          style={styles.nameText}
          position={[-0.1, 0.35, -3]}
          //position={[1.2, -1.3, -3]}
        ></ViroText>

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

        {/* for sound */}
        {this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
          <ViroSound
            paused={false}
            muted={false}
            source={require("./res/sounds/cat2-s1.mp3")}
            loop={false}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound}
          />
        ) : this.props.arSceneNavigator.viroAppProps.fedCount === 2 ? (
          <ViroSound
            paused={false}
            muted={false}
            source={require("./res/sounds/cat2-s2.mp3")}
            loop={false}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound}
          />
        ) : this.props.arSceneNavigator.viroAppProps.fedCount === 3 ? (
          <ViroSound
            paused={false}
            muted={false}
            source={require("./res/sounds/cat2-s3.mp3")}
            loop={false}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound}
          />
        ) : (
          <ViroText
            text=""
            scale={[0.3, 0.3, 0.3]}
            width={2}
            height={2}
            position={[0.6, 0.08, -0.9]}
            style={styles.helloWorldTextStyle}
          />
        )}
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
  },

  nameText: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "black"
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
