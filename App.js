import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import Animated_1 from './Animated_1'
import Animated_2 from './Animated_2'
import Animated_3 from './Animated_3'
import Animated_4 from './Animated_4'
import Animated_5 from './Animated_5'

export default class App extends React.Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        {/* <Animated_1 /> */}
        {/* <Animated_2 /> */}
        {/* <Animated_3 /> */}
        {/* <Animated_4 /> */}
        <Animated_5 />
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
  }
});
