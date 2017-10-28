import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class BarsScreen extends React.Component {
  static navigationOptions = {
    title: 'Bars',
  };

  render() {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.getStartedText}>Individual health bars go on this page</Text>
        <Text> Main Health Bar </Text>
          <View style={styles.statusBar} />
          <Text> Eating Bar  </Text>
          <View style={styles.statusBar} />
          <Text> Sleep Bar </Text>
          <View style={styles.statusBar} />
          <Text> Water Bar </Text>
         <View style={styles.statusBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
  },

  // rest of the styles
});
