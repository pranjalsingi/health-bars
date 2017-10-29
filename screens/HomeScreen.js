import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  DatePickerIOS
} from 'react-native';

import { Constants } from 'expo';

import { WebBrowser } from 'expo';



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
  constructor(props) {
  	super(props);
  	this.state = {
  		date: new Date(),
  		showDatePicker : false
  	}
  }

  render() {
   	var showDatePicker = this.state.showDatePicker ?
		(Platform.OS === 'android') ? 
			<Text> placeholder </Text>
		: (Platform.OS === 'ios') ?
				<DatePickerIOS
				style = {{ height : 150 }}
				date = {this.state.date}
				onChange = {(date) => this.setState({date})}
				onDateChange = {this._handleButtonPress} 
				mode = 'time' />
			: <View />
	: <View />
 
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
		{showDatePicker}
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
