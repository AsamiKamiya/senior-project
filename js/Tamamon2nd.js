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
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      animeFlg : true,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.3, 0.3, 0.3]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
<Viro3DObject
          source={require("./res/speechBubble.obj")}
          position={[-0.0, -5.5, -1.15]}
          // materials={["suica"]}
          resources={[require("./res/speechBubble.mtl"), require("./res/speechBubble.png")]}
          type="OBJ"
          scale={[0.1, 0.1, 0.1]}
          position={[0.2, -0.8, -1]}
        />
        
      {this.state.animeFlg ? 
        <Viro3DObject
          source={require("./res/tamamon2nd/cat.obj")}
          position={[-0.0, -5.5, -1.15]}
          // materials={["suica"]}
          resources={[require("./res/tamamon2nd/cat.mtl"), require("./res/tamamon2nd/cat.png")]}
          type="OBJ"
          scale={[0.1, 0.1, 0.1]}
          position={[0, -1, -1]}
        />
      :<Viro3DObject
      source={require("./res/tamamon2nd/cat-a1.obj")}
      position={[-0.0, -5.5, -1.15]}
      // materials={["suica"]}
      resources={[require("./res/tamamon2nd/cat-a1.mtl"), require("./res/tamamon2nd/cat-a1.png")]}
      type="OBJ"
      scale={[0.1, 0.1, 0.1]}
      position={[0, -1, -1]}
    />
      }
   


        <ViroARImageMarker
          target={"targetOne"}
          pauseUpdates={this.state.pauseUpdates}
        >
          <Viro3DObject
            source={require("./res/tamamon2nd/cat.obj")}
            //position={[-0.0, -1, -1]}
            resources={[require("./res/tamamon2nd/cat.mtl"), require("./res/tamamon2nd/cat.png")]}
            type="OBJ"
            scale={[0.3, 0.3, 0.3]}
            animation={{name: "rotate", run: true, loop: true}}
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
    let count = 0;
    setInterval(()=> {
      if(count < 5){
        if(this.state.animeFlg){
          this.setState({animeFlg: false})
        }else {
          this.setState({animeFlg: true})
        }
        count++;
      } 
    }, 1800);

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
    source: require("./res/FinalMark2nd.jpg"),
    orientation: "Up",
    physicalWidth: 0.15
  }
});
ViroAnimations.registerAnimations({
  rotate: {
    properties:{scaleX:1, scaleY:.6, scaleZ:1, opacity: 1},
    easing:"Bounce", duration: 5000},
});

module.exports = HelloWorldSceneAR;
