import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // 0.17.0

export default class BarsScreen extends React.Component {
  static navigationOptions = {
    title: 'Bars',
  };

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style = {styles.home}>
        <Card style={styles.metricButtons}>
          <Button
            title="I ate"
            onPress={this._handleButtonPress}
            color="#FFBA00"
          />

          <Button
            title="I slept"
            onPress={this._handleButtonPress}
            color="#002FA7"
          />

          <Button
            title="I drank"
            onPress={this._handleButtonPress}
            color="#C19A6B"
          />
        </Card>
        <View style={styles.metricBars}>
          <Text> Eating Bar  </Text>
          <View style={styles.eatStatusBar} />
          <Text> Sleep Bar </Text>
          <View style={styles.sleepStatusBar} />
          <Text> Water Bar </Text>
          <View style={styles.drinkStatusBar} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    paddingLeft:Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight * 3,
  },
  metricButtons: {
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  eatStatusBar: {
    //eat status color should be : selective yellow
    backgroundColor: "#FFBA00",
    height: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
    marginBottom: Constants.statusBarHeight,
  },
   sleepStatusBar: {
    //sleep status color should be International Klein Blue
    backgroundColor: "#002FA7",
    height: Constants.statusBarHeight,
    marginBottom: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
  },
   drinkStatusBar: {
    //drink status color is desert
    backgroundColor: "#C19A6B",
    height: Constants.statusBarHeight,
    marginBottom: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
  },
});
