import { View, StyleSheet, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Update from "./LiveWeather";

const Weather = () => {
  return (
    <View style={styles.scrnlayout}>
      <View style={styles.Header}>
        <Ionicons name="options-outline" size={20} color="white" />
        <Text
          style={[
            {
              color: "white",
              fontSize: 20,
              paddingLeft: 99,
              fontWeight: "bold",
            },
          ]}
        >
          {" "}
          Hawamaan{" "}
        </Text>
      </View>
      <View style={styles.updater}>
        <View style={styles.function1}>
          <Update />
        </View>
        <View style={styles.function2}></View>
        <View style={styles.function3}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrnlayout: {
    flex: 1,
    width: "100%",
    // borderWidth: 2,
    // borderColor: "yellow",
    marginTop: 25,
    marginHorizontal: 15,

    paddingTop: 25,
    paddingHorizontal: 23,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  updater: {
    flex: 1,
    marginVertical: 30,
    // borderWidth: 2,
    // borderColor: "red",
    // borderRadius: 10,
    height: 50,
    width: "100%",
    margin:5,
  },
  function1: {
    flex:1.25,
    // borderColor:'green',
    // borderWidth: 2,
    borderRadius: 45,
    margin:5,
    // backgroundColor:'#636A86',
    backgroundColor: 'rgba(99,106,134,0.15)'
    // opacity:0.15
   
    
  },
  function2: {
    flex:1,
    borderColor:'brown',
    borderWidth: 2,
    borderRadius: 10,
    margin:5,
  },
  function3: {
    flex:1,
    borderColor:'green',
    borderWidth: 2,
    borderRadius: 10,
    margin:5,
  }
});
export default Weather;
