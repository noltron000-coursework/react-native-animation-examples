
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class Animated_2 extends React.Component {
  state = {
    move: new Animated.ValueXY({ x:0, y: 400 })
  }

  componentDidMount() {
    // Set spring options
    // https://facebook.github.io/react-native/docs/animated#spring
    Animated.spring(
      this.state.move, {
        toValue: { x: 0, y: 0 },
        stiffness: 1000,  // Use these numbers to change
        damping: 10,      // the character of the motion
      }
    ).start() 
  }

  render() {
    const { move } = this.state
    return (
      <View style={styles.container}>
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
