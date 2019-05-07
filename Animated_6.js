// https://facebook.github.io/react-native/docs/animatedvaluexy

import React from 'react'
import { View, Animated, panResponder } from 'react-native'

export default class Animated_6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(), // inits to zero
    };
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x, // x,y are Animated.Value
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(
          this.state.pan, // Auto-multiplexed
          {toValue: {x: 0, y: 0}}, // Back to zero
        ).start();
      },
    });
  }
  render() {
    return (
      <Animated.View
        {...this.state.panResponder.panHandlers}
        style={this.state.pan.getLayout()}>
        {this.props.children}
      </Animated.View>
    );
  }
}