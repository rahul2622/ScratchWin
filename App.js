import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base" ;

var ItemArray = new Array(9).fill("empty");

export default class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    isCross: false,
    winMessage:""
  }
}
 drawItem = itemNumber => {
 if (ItemArray[itemNumber] === "empty"){
  ItemArray[itemNumber] = this.state.isCross
  this.setState({ isCross: !ItemArray[itemNumber]  }, () => {})
 }
 this.winGame()
 }

 chooseItemIcon = itemNumber => {
 if (ItemArray[itemNumber]  !== "empty"){
   return ItemArray[itemNumber] ? "cross" : "circle"
 }  
 return "pencil"
 }  

 chooseItemColor = itemNumber => {
  if (ItemArray[itemNumber]  !== "empty"){
    return ItemArray[itemNumber] ? "red" : "green"
  }  
  return "black"
 }

 resetGame = () => {
   ItemArray.fill("empty");
   this.setState({ winMessage:''})
   //force update to component
   this.forceUpdate
 }

 winGame = () => {
  if ((ItemArray[0] !== "empty") && (ItemArray[0] == ItemArray[1]) && (ItemArray[1] ==
  ItemArray[2] ) ){
    this.setState({ winMessage: (ItemArray[0]? 'Cross': 'Circle').concat('win')})
  } else  if ((ItemArray[3] !== "empty") && (ItemArray[3] == ItemArray[4]) && (ItemArray[4] ==
    ItemArray[5] ) ){
      this.setState({ winMessage: (ItemArray[3]? 'Cross': 'Circle').concat('win')})
  } else  if ((ItemArray[6] !== "empty") && (ItemArray[6] == ItemArray[7]) && (ItemArray[7] ==
      ItemArray[8] ) ){
        this.setState({ winMessage: (ItemArray[6]? 'Cross': 'Circle').concat('win')})
  }else  if ((ItemArray[0] !== "empty") && (ItemArray[0] == ItemArray[3]) && (ItemArray[3] ==
    ItemArray[6] ) ){
      this.setState({ winMessage: (ItemArray[0]? 'Cross': 'Circle').concat('win')})
    }else  if ((ItemArray[1] !== "empty") && (ItemArray[1] == ItemArray[4]) && (ItemArray[4] ==
      ItemArray[7] ) ){
        this.setState({ winMessage: (ItemArray[1]? 'Cross': 'Circle').concat('win')})
     }else  if ((ItemArray[2] !== "empty") && (ItemArray[2] == ItemArray[5]) && (ItemArray[5] ==
        ItemArray[8] ) ){
          this.setState({ winMessage: (ItemArray[2]? 'Cross': 'Circle').concat('win')})
     }else  if ((ItemArray[0] !== "empty") && (ItemArray[0] == ItemArray[4]) && (ItemArray[4] ==
      ItemArray[8] ) ){
        this.setState({ winMessage: (ItemArray[0]? 'Cross': 'Circle').concat('win')})
    }else  if ((ItemArray[2] !== "empty") && (ItemArray[2] == ItemArray[4]) && (ItemArray[4] ==
      ItemArray[6] ) ){
        this.setState({ winMessage: (ItemArray[2]? 'Cross': 'Circle').concat('win')})
      }
}
  render() {
    
  return (
   <View style={styles.container}>
    <View style={styles.grid}> 
    <View style={styles.row}>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(0)}
    >
    <Entypo 
    name={this.chooseItemIcon(0)}
    size={50}
    color={this.chooseItemColor(0)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(1)}
    >
    <Entypo 
    name={this.chooseItemIcon(1)}
    size={50}
    color={this.chooseItemColor(1)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(2)}
    >
    <Entypo 
    name={this.chooseItemIcon(2)}
    size={50}
    color={this.chooseItemColor(2)}
    />
    </TouchableOpacity>
    
    </View>
    </View>
    <View style={styles.row}>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(3)}
    >
    <Entypo 
    name={this.chooseItemIcon(3)}
    size={50}
    color={this.chooseItemColor(3)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(4)}
    >
    <Entypo 
    name={this.chooseItemIcon(4)}
    size={50}
    color={this.chooseItemColor(4)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(5)}
    >
    <Entypo 
    name={this.chooseItemIcon(5)}
    size={50}
    color={this.chooseItemColor(5)}
    />
    </TouchableOpacity>
    
    </View>
    </View>
   
    <View style={styles.row}>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(6)}
    >
    <Entypo 
    name={this.chooseItemIcon(6)}
    size={50}
    color={this.chooseItemColor(6)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(7)}
    >
    <Entypo 
    name={this.chooseItemIcon(7)}
    size={50}
    color={this.chooseItemColor(7)}
    />
    </TouchableOpacity>
    
    </View>
    <View style={styles.item}>
    <TouchableOpacity
    onPress={() => this.drawItem(8)}
    >
    <Entypo 
    name={this.chooseItemIcon(8)}
    size={50}
    color={this.chooseItemColor(8)}
    />
    </TouchableOpacity>
    
    </View>
    </View>
   
   
    </View>
   <Text style={styles.winMessage}> {this.state.winMessage}</Text>
   <Button full rounded primary style={styles.button} > 
   <TouchableOpacity onPress={() => this.resetGame("empty")}>
   <Text style={styles.btntext}>Reset Game </Text>
   </TouchableOpacity> 
   </Button>
   </View>
  );
}}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center"
  },
  grid:{

  },
  row:{
   flexDirection:"row",
  },
  item:{
   borderWidth:2,
   borderColor: "#000",
   padding:30,
  },
  winMessage:{
    padding:20,
    fontSize:25,
    fontWeight:"bold"
  },
  button:{
    margin:20,
    padding:10
  },
  btntext:{
    color:"#FFF",
    fontWeight:"bold"
  }
})