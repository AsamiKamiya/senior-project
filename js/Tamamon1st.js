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
      forPlay: false
    };
    this._onFinishAnimation4play = this._onFinishAnimation4play.bind(this);
    this._onFinishAnimation4neglected = this._onFinishAnimation4neglected.bind(
      this
    );
  }
  render() {
    return (
      <ViroARScene>
        {/* this is for neglected aimation */}
        {this.props.arSceneNavigator.viroAppProps.neglected ? (
          <ViroNode>
            <Viro3DObject
              source={require("./res/speechBubble.obj")}
              resources={[
                require("./res/speechBubble.mtl"),
                require("./res/speechBubble.png")
              ]}
              type="OBJ"
              scale={[-0.4, 0.4, 0.4]}
              position={[0.1, -0.95, -3]}
              opacity={1}
              animation={{
                name: "disappearForText",
                run: this.props.arSceneNavigator.viroAppProps.neglected,
                delay: 3000
              }}
            ></Viro3DObject>
            <ViroText
              text={"long time no see..."}
              scale={[0.4, 0.4, 0.4]}
              position={[-0.7, 0.8, -2.9]}
              style={styles.helloWorldTextStyle}
              width={2}
              height={2}
              opacity={1}
              animation={{
                name: "disappearForText",
                run: this.props.arSceneNavigator.viroAppProps.neglected,
                delay: 3000
              }}
            />
          </ViroNode>
        ) : (
          /* This is the speech bubble and text */
          <ViroNode>
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
              // animation={{
              //   name: "disappearForText",
              //   run: this.props.arSceneNavigator.viroAppProps.flgs[3] === 1,
              //   delay: 2000
              // }}
            ></Viro3DObject>
            <ViroText
              text={this.props.arSceneNavigator.viroAppProps.text}
              scale={[0.4, 0.4, 0.4]}
              position={[-0.7, 0.8, -2.9]}
              style={styles.helloWorldTextStyle}
              width={2}
              height={2}
              opacity={this.props.arSceneNavigator.viroAppProps.flgs[3]}
              // animation={{
              //   name: "disappearForText",
              //   run: this.props.arSceneNavigator.viroAppProps.flgs[3] === 1,
              //   delay: 2000
              // }}
            />
          </ViroNode>
        )}
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
        {/* this is for neglected aimation */}
        {this.props.arSceneNavigator.viroAppProps.neglected ? (
          <Viro3DObject
            source={require("./res/pocchamon/cat2-a3.obj")}
            resources={[
              require("./res/pocchamon/cat2-a3.mtl"),
              require("./res/pocchamon/cat2-a3.png")
            ]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            position={[-0.0, -1, -3]}
            opacity={1}
            animation={{
              name: "catNeglected",
              run: this.props.arSceneNavigator.viroAppProps.neglected,
              onFinish: this._onFinishAnimation4neglected,
              delay: 3000
            }}
          ></Viro3DObject>
        ) : /* This is the Pocchamon animation */
        this.props.arSceneNavigator.viroAppProps.fedCount === 0 ||
          this.props.arSceneNavigator.viroAppProps.fedCount === 2 ? (
          <Viro3DObject
            source={require("./res/pocchamon/cat2.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/pocchamon/cat2.mtl"),
              require("./res/pocchamon/cat2.png")
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
            source={require("./res/pocchamon/cat2-a1.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/pocchamon/cat2-a1.mtl"),
              require("./res/pocchamon/cat2-a1.png")
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
            source={require("./res/pocchamon/cat2-a2.obj")}
            position={[-0.0, -1, -3]}
            resources={[
              require("./res/pocchamon/cat2-a2.mtl"),
              require("./res/pocchamon/cat2-a2.png")
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
          opacity={this.props.arSceneNavigator.viroAppProps.flgs[3]}
          // animation={{
          //   name: "disappearForText",
          //   run: this.props.arSceneNavigator.viroAppProps.flgs[3] === 1,
          //   delay: 2000
          // }}
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
  _onFinishAnimation4neglected() {
    this.props.arSceneNavigator.viroAppProps.updateNeglected("Pocchamon");
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
  catNeglected: [["catBoundNo1st", "catBoundNo1st"]]
  // catBoundAngry: [["catBound"]],
  // heartAnimation: [["moveUp", "rotate"]]
});

module.exports = HelloWorldSceneAR;
