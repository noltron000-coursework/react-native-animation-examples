
// Move a view by animating the X and Y. 
// Moving things requires a little more work. 
// Besides setting the x and y you also need to consider the position 
// determined by layout systems with flex. 
// Here we'll use ValueXY this handles an object with x and y properties. 
// The getLayout() method converts x and y to left and top for positioning. 

// Think of the toValue as an offset relative to where the element would 
// be placed by flex layout. 
// That means that the current position + {x:100, y:50} would place the 
// object 100 pixels to the right and 50 pixels down from where flex 
// would have positioned it. 

// The example here uses a starting position of { x:0, y: 400 } that's
// 400 pixels down, and animates it to { x: 0, y: 0 } which should be
// it's position without an offset. 

import React from 'react';
// Import Animated
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class Animated_2 extends React.Component {
  // Define State that holds the values for the animation. 
  // In this case animating the position of the object with x and y. 
  // The numbers here is starting position. Imagine this as the 
  // offset from where the object would appear without these numebrs. 
  state = {
    move: new Animated.ValueXY({ x:0, y: 400 })
  }

  componentDidMount() {
    // Use spring animation
    Animated.spring(
      this.state.move, {
        toValue: { x: 0, y: 0 } // toValue consists of x and y
      }
    ).start() // Start the animation
  }

  render() {
    const { move } = this.state
    return (
      <View style={styles.container}>
        {/* Combine the styles with move. Call getLayout() to convert x and y to screen coords */}
        <Animated.View style={[styles.box, move.getLayout()]}>
          <Text style={styles.title}>Animated 2</Text>
          <Text>Animation moves up using spring.</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Position the object in the center (with no offset). 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
