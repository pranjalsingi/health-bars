import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Constants } from 'expo';

import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style = {styles.home}>
        <View style={styles.getStartedContainer}>
          {this._maybeRenderDevelopmentModeWarning()}
        </View>
        <View style={styles.metricButtons}>
			<View style={styles.button}>
			  <Button
				title=" I ate "
				onPress={this._handleButtonPress}
				color="#FFFFFF"
			  />
			</View>
			<View style={styles.button}>
			  <Button
				title=" I slept "
				onPress={this._handleButtonPress}
				color="#FFFFFF"
			  />
			</View>
			<View style={styles.button}>
			  <Button
				title=" I drank "
				onPress={this._handleButtonPress}
				color="#FFFFFF"
			  />

      <Button
				title=" GO TO SLEEP "
				onPress={this._handleButtonPress}
				color="#000000"
			  />
			</View>
		</View>
        <View style={styles.metricBars}>
          <Text> Eating Bar  </Text>
          <View style={this._findBarWidth("eat", Date("Sat Oct 29 2017 00:00:00"), Date.now())} />
          <Text> Sleep Bar </Text>
          <View style={this._findBarWidth("sleep", Date("Sat Oct 29 2017 00:00:00"), Date.now())} />
          <Text> Water Bar </Text>
          <View style={this._findBarWidth("drink",Date("Sat Oct 29 2017 00:00:00"), Date.now())} />
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

  //placeholder action
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  //lastDate --> last recorded time user did something
  //newDate --> most recent recorded time user did something
  _findBarWidth = (type, lastDate, newDate) => {
    let backgroundColor = "#FFBA00";
    let height = newDate - lastDate *10;
    let width = Constants.statusBarWidth;
    let marginBottom = Constants.statusBarHeight;

    if(type.toString() == "sleep") {
      return {
        backgroundColor: "#002FA7",
        height: height,
        width: width,
        marginBottom: marginBottom,
      }
    }
    else if (type.toString() == "#c19A6B") {
      return {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        marginBottom: marginBottom,
      }
    }
    else {
      return {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        marginBottom: marginBottom,
      }
    }
  }
}

const styles = StyleSheet.create({
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
 home: {
    justifyContent: 'center',
    paddingLeft:Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight * 3,
  },
  button: {
	marginBottom: Constants.statusBarHeight,
	backgroundColor: "#F4610A",
  },
  metricButtons: {
	marginTop:Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
});
