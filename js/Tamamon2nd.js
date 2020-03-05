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

let fedCount = 0;

export default class Tamamon2nd extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      fed: false,
      animate: false,
      animeFlg: 0
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onTap = this._onTap.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text="Please scan the AR Marker!"
          position={[0, 0, -5]}
          style={styles.announceTextStyle}
        />
        <ViroARImageMarker
          target={"targetOne"}
          pauseUpdates={this.state.pauseUpdates}
        >
          <ViroText
            text={this.state.text}
            scale={[0.3, 0.3, 0.3]}
            position={[0.6, 0.08, -0.9]}
            style={styles.helloWorldTextStyle}
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
          />
          {this.state.animeFlg === 1 ? (
            <ViroImage
              source={require("./res/heart.png")}
              position={[0.3, -0.3, -0.8]}
              scale={[0.2, 0.2, 0.2]}
              opacity={0}
              transformBehaviors={["billboard"]}
              animation={{ name: "heartAnimation", run: this.state.fed }}
            />
          ) : (
            <ViroText
              text=""
              scale={[0.3, 0.3, 0.3]}
              Ï
              position={[0.6, 0.08, -0.9]}
              style={styles.helloWorldTextStyle}
            />
          )}

          {this.state.animeFlg === 0 || this.state.animeFlg === 2 ? (
            <Viro3DObject
              source={require("./res/tamamon2nd/cat.obj")}
              position={[-0.0, -5.5, -1.15]}
              // materials={["suica"]}
              resources={[
                require("./res/tamamon2nd/cat.mtl"),
                require("./res/tamamon2nd/cat.png")
              ]}
              type="OBJ"
              scale={[0.2, 0.2, 0.2]}
              position={[0, -1.3, -1]}
              // animation={
              //   this.state.fed
              //     ? { name: "catBoundNo", run: this.state.fed }
              //     : { name: "catNormal", run: !this.state.fed, loop: true }
              // }
              animation={{ name: "catBoundNo", run: this.state.fed }}
            />
          ) : this.state.animeFlg === 1 ? (
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
              animation={{ name: "catBound", run: this.state.fed }}
            />
          ) : (
            <Viro3DObject
              source={require("./res/tamamon2nd/cat-a2.obj")}
              position={[-0.0, -5.5, -1.15]}
              // materials={["suica"]}
              resources={[
                require("./res/tamamon2nd/cat-a2.mtl"),
                require("./res/tamamon2nd/cat-a2.png")
              ]}
              type="OBJ"
              scale={[0.2, 0.2, 0.2]}
              position={[0, -1.3, -1]}
              animation={{ name: "catBoundAngry", run: this.state.fed }}
            />
          )}
          <ViroButton
            source={require("./res/foodIcon.png")}
            position={[-0, -1, -0.8]}
            scale={[0.5, 0.5, 0.5]}
            onClick={this._onTap}
          ></ViroButton>
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
  _onTap() {
    ++fedCount;

    if (fedCount === 1) {
      this.setState({
        text: "Thank you for feeding me!",
        fed: true,
        animeFlg: fedCount
      });
    } else if (fedCount === 2) {
      this.setState({
        text: "I could totally eat more...",
        animeFlg: fedCount
      });
    } else if (fedCount === 3) {
      this.setState({
        text: "I'm really full!!",
        animeFlg: fedCount
      });
    } else if (fedCount >= 5) {
      this.setState({
        text: "I can't eat anymore..!"
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
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 50,
    easing: "easeineaseout"
  },
  scaleDown: {
    properties: { scaleX: 0.1, scaleY: 0.1, scaleZ: 0.1 },
    duration: 50,
    easing: "easeineaseout"
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
  catBound: [["boundUp", "boundDown"]],
  catBoundAngry: [["catBound", "catBound", "catBound"]],
  heartAnimation: [["moveUp", "rotate"]]
});

module.exports = Tamamon2nd;
