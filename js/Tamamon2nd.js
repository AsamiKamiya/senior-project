"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroButton,
  ViroImage
} from "react-viro";

export default class Tamamon2nd extends Component {
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
          position={[0, 0, -5]}
          style={styles.announceTextStyle}
          width={2}
          height={2}
        />
        <ViroARImageMarker
          target={"targetOne"}
          pauseUpdates={this.state.pauseUpdates}
        >
          <ViroText
            text={this.props.arSceneNavigator.viroAppProps.text}
            scale={[0.3, 0.3, 0.3]}
            position={[0.6, 0.08, -0.9]}
            style={styles.helloWorldTextStyle}
          />
          <Viro3DObject
            source={require("./res/tamamon2nd/angrymark.obj")}
            resources={[
              require("./res/tamamon2nd/angrymark.mtl"),
              require("./res/tamamon2nd/angrymark.png")
            ]}
            type="OBJ"
            position={[0.2, -0.6, -0.8]}
            scale={[0.1, 0.1, 0.1]}
            opacity={0}
            animation={{
              name: "angryAnimation",
              run: this.props.arSceneNavigator.viroAppProps.fedCount >= 5,
              loop: true
            }}
          />
          <Viro3DObject
            source={require("./res/speechBubble.obj")}
            resources={[
              require("./res/speechBubble.mtl"),
              require("./res/speechBubble.png")
            ]}
            type="OBJ"
            scale={[0.2, 0.2, 0.2]}
            position={[0.2, -0.8, -1]}
          ></Viro3DObject>
          {this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
            <ViroImage
              source={require("./res/heart.png")}
              position={[0.3, -0.3, -0.8]}
              scale={[0.2, 0.2, 0.2]}
              opacity={0}
              transformBehaviors={["billboard"]}
              animation={{
                name: "heartAnimation",
                run: this.props.arSceneNavigator.viroAppProps.fedCount === 1
              }}
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

          {this.props.arSceneNavigator.viroAppProps.fedCount === 0 ||
          this.props.arSceneNavigator.viroAppProps.fedCount === 2 ? (
            <Viro3DObject
              source={require("./res/tamamon2nd/cat.obj")}
              position={[-0.0, -5.5, -1.15]}
              resources={[
                require("./res/tamamon2nd/cat.mtl"),
                require("./res/tamamon2nd/cat.png")
              ]}
              type="OBJ"
              scale={[0.2, 0.2, 0.2]}
              position={[0, -1.3, -1]}
              animation={{
                name: "catBoundNo",
                run: this.props.arSceneNavigator.viroAppProps.fed
              }}
            />
          ) : this.props.arSceneNavigator.viroAppProps.fedCount === 1 ? (
            <Viro3DObject
              source={require("./res/tamamon2nd/cat-a1.obj")}
              position={[-0.0, -5.5, -1.15]}
              resources={[
                require("./res/tamamon2nd/cat-a1.mtl"),
                require("./res/tamamon2nd/cat-a1.png")
              ]}
              type="OBJ"
              scale={[0.2, 0.2, 0.2]}
              position={[0, -1.3, -1]}
              animation={{
                name: "catBound",
                run: this.props.arSceneNavigator.viroAppProps.fed
              }}
            />
          ) : (
            <Viro3DObject
              source={require("./res/tamamon2nd/cat-a2.obj")}
              position={[-0.0, -5.5, -1.15]}
              resources={[
                require("./res/tamamon2nd/cat-a2.mtl"),
                require("./res/tamamon2nd/cat-a2.png")
              ]}
              type="OBJ"
              scale={[0.2, 0.2, 0.2]}
              position={[0, -1.3, -1]}
              animation={{
                name: "catBoundAngry",
                run: this.props.arSceneNavigator.viroAppProps.fed
              }}
            />
          )}
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
        text: "Please scan the marker."
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState({
        text: "It's not working"
      });
    }
  }
}

var styles = StyleSheet.create({
  announceTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center"
  },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "black",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./res/FinalMark2nd.jpg"),
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
  scaleUp: {
    properties: {
      scaleX: "+=0.01",
      scaleY: "+=0.01",
      scaleZ: "+=0.01",
      opacity: 1.0
    },
    duration: 200,
    easing: "bounce"
  },
  scaleDown: {
    properties: {
      scaleX: "-=0.01",
      scaleY: "-=0.01",
      scaleZ: "-=0.01",
      opacity: 1.0
    },
    duration: 200,
    easing: "bounce"
  },
  rotate: {
    properties: { rotateY: "+=90", opacity: 1.0 },
    duration: 250
  },
  moveLeft: {
    properties: { positionX: "+=0.05" },
    duration: 100,
    easing: "bounce"
  },
  moveRight: {
    properties: { positionX: "-=0.05" },
    duration: 100,
    easing: "bounce"
  },
  tapAnimation: [["scaleUp", "scaleDown"]],
  catNormal: [
    [
      "moveLeft",
      "moveLeft",
      "moveLeft",
      "moveLeft",
      "moveRight",
      "moveRight",
      "moveRight",
      "moveRight"
    ]
  ],
  catBoundNo: [["moveLeft", "moveRight", "moveLeft", "moveRight"]],
  catBound: [
    ["boundUp", "boundDown", "boundUp", "boundDown", "boundUp", "boundDown"]
  ],
  catBoundAngry: [["catBound"]],
  heartAnimation: [["moveUp"]],
  angryAnimation: [["scaleUp", "scaleDown"]]
});

module.exports = Tamamon2nd;
