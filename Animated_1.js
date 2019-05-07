
// A simple animation. This example fades a view in by animating 
// the opacity

// 1. Import Animated from react native 
// 2. Define a property to be animate
// 3. Define and start an Animation
// 4. Use the animated value 

import React from 'react';
// 1. Import Animated
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class Animated_1 extends React.Component {
  // 2. Define a value to animate on state: fade with an initial value of 0
  state = {
    fade: new Animated.Value(0),
  }

  // Start the animation when this view loads
  componentDidMount() {
    // 3. Call Animated.timing() and set the ending value, duration, and delay
    Animated.timing(
      this.state.fade, {
        toValue: 1,
        duration: 3000,
        delay: 1000
      }
    ).start() // Start the Animation
  }

  render() {
    // 4. Get the fade value 
    const { fade } = this.state
    return (
      <View style={styles.container}>
        {/* Apply the fade value to a CSS property */}
        <Animated.View style={{ ...styles.box, opacity: fade }}>
          <Text style={styles.title}>Animation 1</Text>
          <Text>Fades in using Animated</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
