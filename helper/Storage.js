import React from "react";
import { AsyncStorage, Text, View, TextInput, Button } from "react-native";

setUp = () => {
  obj = {
    sleep : 
    {
      timestamps : [],
      setting : {}
    },
    eat : 
    {
      timestamps : [],
      setting : {}
    },
    drink : 
    {
      timestamps : [],
      setting : {}
    }
  }
  AsyncStorage.getItem("@MySuperStore:key", (err, objValue) => {
    if(objValue == null){
      objValue = AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(obj))
    }
    this.setState({
      storedValue:objValue
    })
  });
}

addData = (parent, child, val) => {
  AsyncStorage.getItem("@MySuperStore:key", (err, value) => {
    intermediate = JSON.parse(value);
    intermediate[parent][child].push(val);
    AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(intermediate))
  });
}
retrieveData = (parent, child) => {
  AsyncStorage.getItem("@MySuperStore:key", (err, value) => {
    intermediate = JSON.parse(value);
    return intermediate[parent][child];
  });
}

deleteKey = () => {
  AsyncStorage.removeItem("@MySuperStore:key", (err) => {
    if(err){
      console.log("Issues removing key")
      return
    }
    console.log("Key removed")
  });
}

export default { setUp, addData, retrieveData, deleteKey };

// export default class App extends React.Component {
  
//   // async componentDidMount() {
//   //   let storedValue = await AsyncStorage.getItem("@MySuperStore:key");
//   //   console.log(typeof(storedValue));
//   //   console.log("Fetched data: ", storedValue);
//   //   if (storedValue == null) {
//   //     console.log("Writing data!");
//   //     storedValue = await AsyncStorage.setItem("@MySuperStore:key", "data");
//   //   }
//   //   this.setState({
//   //     storedValue
//   //   });
//   // }

//   saveData(text){
//     storedValue = AsyncStorage.setItem("@MySuperStore:key", text)
//     console.log("data changed: "+text)
//     this.setState({storedValue:text})
//   }

//   addData(key, val){
//     console.log(key, val)
//     AsyncStorage.getItem("@MySuperStore:key", (err, value) => {
//       inter = JSON.parse(value);
//       inter[key]["timestamps"].push(val);
//       console.log(inter)
//       AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(inter))
//       this.setState({storedValue:JSON.stringify(inter)})
//     });
//   }

//   render() {
//     const { storedValue } = this.state;
//     return (
//       <View>
//         <Text>Hello, ReplIt</Text>
//         <TextInput 
//           value={storedValue} 
//           onChangeText = {(text => this.saveData(text))}
//           />
//         <Text>This is Stored Value, '{storedValue}'</Text>
//         <Button
//           onPress={() => this.addData("sleep", "s1")}
//           title="Sleep"
//           color="orange"
//         />
//         <Button
//           onPress={() => this.addData("eat", "e1")}
//           title="Eat"
//           color="blue"
//         />
//         <Button
//           onPress={() => this.addData("drink", "d1")}
//           title="Drink"
//           color="red"
//         />
//       </View>
//     );
//   }
// }