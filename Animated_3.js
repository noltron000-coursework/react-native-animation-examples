
// Layout Animations
// https://facebook.github.io/react-native/docs/layoutanimation#docsNav

// Layout Animations animate all of the views when layout changes. 

// The example below 

import React from 'react';
// Import LayoutAnimation
import { StyleSheet, Text, View, LayoutAnimation, TouchableHighlight } from 'react-native';

export default class Animated_3 extends React.Component {
  constructor(props) {
    super(props)
    // Use state to track when a layout animation should happen
    this.state = {
      selected: 0
    }
  } 

  nextBox() {
    // This method handles a state change
    const selected = (this.state.selected + 1) % 3
    this.setState({ selected })
    // Now that state has changed trigger an animation with: 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    // Each of the 'boxes' below set their height to 100 when selected matches or 0 
    // when it doesn't. The change in size triggers the LayoutAnimation.
    return (
      <View style={styles.container}>
        <View style={{...styles.magenta, ...styles.box, height: this.state.selected === 0 ? 100 : 0}}>
          <Text style={styles.title}>Animated 3</Text>
          <Text>Box A</Text>
        </View>
        <View style={{...styles.yellow, ...styles.box, height: this.state.selected === 1 ? 100 : 0}}>
          <Text style={styles.title}>Animated 3</Text>
          <Text>Box B</Text>
        </View>
        <View style={{...styles.cyan, ...styles.box, height: this.state.selected === 2 ? 100 : 0}}>
          <Text style={styles.title}>Animated 3</Text>
          <Text>Box C</Text>
        </View>
        <TouchableHighlight 
          style={styles.button}
          onPress={() => this.nextBox()}
        >
          <Text style={styles.buttonTitle}>Next {this.state.selected +1}</Text>
        </TouchableHighlight>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  box: {
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#000',
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  hideMe: {
    height: 0
  },
  magenta: { backgroundColor: '#f0f'},
  yellow: { backgroundColor: '#ff0'},
  cyan: { backgroundColor: '#0ff'},
});
