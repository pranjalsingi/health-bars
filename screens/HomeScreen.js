import React from 'react';
import {
  Alert,
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // 0.17.0

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      eatWidth:100,
      sleepWidth:100,
      drinkWidth:100,
    }
  }

  static navigationOptions = {
    header: null,
  };

  // variableBar = StyleSheet.flatten([
  //   {
  //     backgroundColor: "#C19A6B",
  //     height: Constants.statusBarHeight * 2,
  //     marginBottom: Constants.statusBarHeight,
  //   },
  //   {
  //     //drink status color is desert
  //     width: this.state.drinkWidth
  //   }
  // ]);

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
				onPress={() => this._handleButtonPress("eat")}
				color="#000000"
			  />
			</View>
			<View style={styles.button}>
			  <Button
				title=" I slept "
				onPress={() => this._handleButtonPress("sleep")}
				color="#000000"
			  />
			</View>
			<View style={styles.button}>
			  <Button
				title=" I drank "
				onPress={() => this._handleButtonPress("drink")}
				color="#000000"
			  />
			</View>
		</View>
        <View style={styles.metricBars}>
          <Text> Eating Bar  </Text>
          <View style={{backgroundColor: "#FFBA00",
                        height: Constants.statusBarHeight * 2,
                        marginBottom: Constants.statusBarHeight,
                        width: this.state.eatWidth}} />
          <Text> Sleep Bar </Text>
          <View style= {{backgroundColor: "#002FA7",
                        height: Constants.statusBarHeight * 2,
                        marginBottom: Constants.statusBarHeight,
                        width: this.state.sleepWidth}}/>
          <Text> Water Bar </Text>
          <View style={{backgroundColor: "#C19A6B",
                        height: Constants.statusBarHeight * 2,
                        marginBottom: Constants.statusBarHeight,
                        width: this.state.drinkWidth}} />
          </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      // const { eatWidth } = this.state.eatWidth;
      // const { sleepWidth } = this.state.sleepWidth;
      // const { drinkWidth } = this.state.drinkWidth;

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
  _handleButtonPress = (val) => {
    console.log(val);
    if(val === "eat"){
      if(this.state.eatWidth <= 250) {
        this.setState({eatWidth: this.state.eatWidth + 50});
      }
    }
    else if(val === "sleep") {
      if(this.state.sleepWidth <= 250) {
      this.setState({sleepWidth: this.state.sleepWidth + 50});
      }
    }
    else{
      if(this.state.drinkWidth <= 250) {
      this.setState({drinkWidth: this.state.drinkWidth + 50});
      }
    }
  };
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
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
  eatStatusBar: {
    //eat status color should be : selective yellow
    backgroundColor: "#FFBA00",
    height: Constants.statusBarHeight * 2,
    width: Constants.statusBarWidth,
    marginBottom: Constants.statusBarHeight,
  },
   sleepStatusBar: {
    //sleep status color should be International Klein Blue
    backgroundColor: "#002FA7",
    height: Constants.statusBarHeight * 2,
    marginBottom: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
  },
   drinkStatusBar: {
    //drink status color is desert
    backgroundColor: "#C19A6B",
    height: Constants.statusBarHeight * 2,
    marginBottom: Constants.statusBarHeight,
    width: Constants.statusBarWidth,
  },
});
