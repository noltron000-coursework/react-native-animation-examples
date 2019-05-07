
// A simple animation. This example fades a view in by animating 
// the opacity

import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Animated_4 extends React.Component {
  state = {
    fade: new Animated.Value(0),
  }
  
  // Use loop to repeat an Animated
  componentDidMount() {
    // ----------------------------------------
    // Loops once then starts over again.

    Animated.loop(
      Animated.timing(
        this.state.fade, {
          toValue: 1,
          duration: 3000,
          delay: 1000
        }
      )
    ).start()

    // ----------------------------------------
    // Use a sequence to run animation in series. 
    // Include an array of Animated
    // Fades in then out

    // Animated.sequence(
    //   [Animated.timing(
    //     this.state.fade, {
    //       toValue: 1, // fades in
    //       duration: 3000,
    //       delay: 1000
    //     }
    //   ), 
    //   Animated.timing(
    //     this.state.fade, {
    //       toValue: 0, // fades out
    //       duration: 3000,
    //       delay: 1000
    //     }
    //   )]
    // ).start()

    // ----------------------------------------

    // Animated.loop(
    //   Animated.sequence(
    //     [Animated.timing(
    //       this.state.fade, {
    //         toValue: 1, // fades in
    //         duration: 3000,
    //       }
    //     ), 
    //     Animated.timing(
    //       this.state.fade, {
    //         toValue: 0, // fades out
    //         duration: 3000
    //       }
    //     )]
    //   )
    // ).start()
  }

  render() {
    // Get the fade value 
    const { fade } = this.state
    return (
      <View style={styles.container}>
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
