import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {StyleSheet, View, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
    	<View style={styles.welcomeContainer}>
        <Text style={styles.getStartedText}>Settings page goes here</Text>
      </View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
