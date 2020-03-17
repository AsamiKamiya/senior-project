"use strict";

import React, { Component } from "react";

import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroImage
} from "react-viro";

export default class TamamonThird extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      forPlay: false
    };
    // bind 'this' to functions
    this._onFinishAnimation4play = this._onFinishAnimation4play.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
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
          opacity={this.props.arSceneNavigator.viroAppProps.flgs[3]}
        ></Viro3DObject>
        <ViroText
          text={this.props.arSceneNavigator.viroAppProps.text}
          scale={[0.4, 0.4, 0.4]}
          position={[-0.7, 0.8, -2.9]}
          style={styles.helloWorldTextStyle}
          width={2}
          height={2}
          opacity={this.props.arSceneNavigator.viroAppProps.flgs[3]}
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
            source={require("./res/potatoFolder/potatoIcon2.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/potatoFolder/potatoIcon2.mtl"),
              require("./res/potatoFolder/potatoIcon2.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{
              name: "catBoundNo1st",
              run: this.props.arSceneNavigator.viroAppProps.fed
            }}
          />
        ) : this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
          <Viro3DObject
            source={require("./res/potatoFolder/potatoIcon2.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/potatoFolder/potatoIcon2.mtl"),
              require("./res/potatoFolder/potatoIcon2.png")
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
            source={require("./res/potatoFolder/potatoIcon3.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/potatoFolder/potatoIcon3.mtl"),
              require("./res/potatoFolder/potatoIcon3.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{
              name: "catBoundAngry",
              run: this.props.arSceneNavigator.viroAppProps.fed
            }}
          />
        )}

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
        {/* for wash */}
        <ViroNode>
          <ViroImage
            source={require("./res/bubbles.png")}
            position={[0.2, 0.5, -2.8]}
            scale={[0.5, 0.5, 0.5]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "washAnimation",
              run:
                this.props.arSceneNavigator.viroAppProps.washed &&
                this.props.arSceneNavigator.viroAppProps.flgs[1] === 1
            }}
          />
          <ViroImage
            source={require("./res/bubbles.png")}
            position={[0.7, 0.05, -2.8]}
            scale={[0.5, 0.5, 0.5]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "washAnimation",
              run:
                this.props.arSceneNavigator.viroAppProps.washed &&
                this.props.arSceneNavigator.viroAppProps.flgs[1] === 1
            }}
          />
          <ViroImage
            source={require("./res/star.png")}
            position={[0.7, 0.05, -2.8]}
            scale={[0.2, 0.2, 0.2]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "starAnimation",
              run:
                this.props.arSceneNavigator.viroAppProps.washed &&
                this.props.arSceneNavigator.viroAppProps.flgs[1] === 1,
              delay: 1500
            }}
          />
          <ViroImage
            source={require("./res/star.png")}
            position={[0.8, -0.1, -2.8]}
            scale={[0.1, 0.1, 0.1]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "starAnimation",
              run:
                this.props.arSceneNavigator.viroAppProps.washed &&
                this.props.arSceneNavigator.viroAppProps.flgs[1] === 1,
              delay: 1500
            }}
          />
          <ViroImage
            source={require("./res/star.png")}
            position={[0.1, 0.5, -2.8]}
            scale={[0.2, 0.2, 0.2]}
            opacity={0}
            transformBehaviors={["billboard"]}
            animation={{
              name: "starAnimation",
              run:
                this.props.arSceneNavigator.viroAppProps.washed &&
                this.props.arSceneNavigator.viroAppProps.flgs[1] === 1,
              delay: 1500
            }}
          />
        </ViroNode>
        {/*Tamamon Name */}
        <ViroText
          text="Potemon"
          width={2}
          height={2}
          style={styles.nameText}
          position={[-0.1, 0.35, -3]}
          opacity={this.props.arSceneNavigator.viroAppProps.flgs[3]}
        ></ViroText>
        {/* for play */}
        <ViroImage
          source={require("./res/hand.png")}
          position={[0.3, 0.55, -2.8]}
          scale={[0.3, 0.3, 0.3]}
          opacity={0}
          transformBehaviors={["billboard"]}
          animation={{
            name: "playAnimation",
            run:
              this.props.arSceneNavigator.viroAppProps.played &&
              this.props.arSceneNavigator.viroAppProps.flgs[2] === 1,
            onFinish: this._onFinishAnimation4play
          }}
        />
        <ViroImage
          source={require("./res/heart.png")}
          position={[0.5, 0.8, -3]}
          scale={[0.5, 0.5, 0.5]}
          opacity={0}
          transformBehaviors={["billboard"]}
          animation={{
            name: "heartAnimationForPlay",
            run: this.state.forPlay
          }}
        />
      </ViroARScene>
    );
  }

  _onFinishAnimation4play() {
    if (!this.state.forPlay) {
      this.setState({ forPlay: true });
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
  },
  announceTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "white",
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
  targetOne: {
    source: require("./res/PotemonAR.png"),
    orientation: "Up",
    physicalWidth: 0.15
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
  ]
  // catBoundAngry: [["catBound"]],
  // heartAnimation: [["moveUp", "rotate"]]
});

module.exports = TamamonThird;
