import {
  View,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Location from "expo-location";

const Update = () => {

    const [location, setLocation] = useState(null);
    const [addr, setAddr] = useState(null);
    const [regName, setRegName] = useState([{ city: "Nasik", country: "India" }]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({weather_icons:['https://www.thoughtco.com/thmb/I5gEeUio30t7GJQkKheBR5MSLxQ=/1000x1000/smart/filters:no_upscale()/0-N-0-W-58d4164b5f9b58468375555d.jpg']});
    const [currentDate, setCurrentDate] = useState("");
    const [currentTemperature, setCurrentTempearature] = useState(26);

    const getWeatherUpdate = async () => {
      try {
        const response = await fetch(
          "http://api.weatherstack.com/current?access_key=2522de2371afeaa244bce806a9c64e0b&query=" +
            regName[0].city
        );
        // console.log("http://api.weatherstack.com/current?access_key=2522de2371afeaa244bce806a9c64e0b&query="+regName[0].city);
        const json = await response.json();
        setData(json.current);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // console.log("http://api.weatherstack.com/current?access_key=2522de2371afeaa244bce806a9c64e0b&query=" +regName[0].city);
    useEffect(() => {
      var day1 = "";
      var month1 = "";
      var day = new Date().getDay();
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      if (day === 1) {
        day1 = "Mon";
      } else if (day === 2) {
        day1 = "Tue";
      } else if (day === 3) {
        day1 = "Wed";
      } else if (day === 4) {
        day1 = "Thu";
      } else if (day == 5) {
        day1 = "Fri";
      } else if (day === 6) {
        day1 = "Sat";
      } else {
        day1 = "Sun";
      }
      if (month === 1) {
        month1 = "Jan";
      } else if (month === 2) {
        month1 = "Feb";
      } else if (month === 3) {
        month1 = "Mar";
      } else if (month === 4) {
        month1 = "Apr";
      } else if (month === 5) {
        month1 = "May";
      } else if (month === 6) {
        month1 = "Jun";
      } else if (month === 7) {
        month1 = "Jul";
      } else if (month === 8) {
        month1 = "Aug";
      } else if (month === 9) {
        month1 = "Sep";
      } else if (month === 10) {
        month1 = "Oct";
      } else if (month === 11) {
        month1 = "Nov";
      } else if (month === 12) {
        month1 = "Dec";
      }
      setCurrentDate(day1 + ", " + date + " " + month1);
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let apikey = "AIzaSyCawxqQ41XGJFeTnto7V0K9LzCKSisy4T8";
        Location.setGoogleApiKey(apikey);
  
        let location = await Location.getCurrentPositionAsync();
        setLocation(location);
        let lat = location.coords.latitude;
        let long = location.coords.longitude;
        let regionName = await Location.reverseGeocodeAsync({
          longitude: long,
          latitude: lat,
        });
        setLocation(regionName);
        setRegName(regionName);
        // // let regName = regionName[0].city;
        // alert(typeof regName);
        console.log(regName, lat);
        //  txt1 = regionName[0].city;
      })();
      getWeatherUpdate();
 
   
  }, []);

  
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      // const {latitude,longitude} =location;
      // text = JSON.stringify(regName[0].city);
      // console.log(text);
      // let latitude=location.coords.latitude;
      // let longitude=location.coords.longitude;
      // // let  position = Location.reverseGeocodeAsync(latitude,longitude);
      // // let { address } = Location.reverseGeoCodeAsync({latitude, longitude});
      // console.log(text.)
      // let address = `${position.name}, ${position.street}, ${position.postalCode}, ${position.city}`;
      // setAddr(address);
      // console.log(address);
    } 


  return (
    <View style={styles.displayBox}>
      <View style={styles.InlineHeader}>
        <Text style={styles.day}>Today </Text>
        <Text style={[{ color: "white", paddingLeft: 120 }]}>
          {currentDate}
        </Text>
      </View>
      <View>
      <View style={styles.newInfomarter}>
        <Text style={styles.tempSetting}>{data.temperature}</Text>
        <Text style={[{color:'#F8Ff1A',paddingLeft:5,paddingRight:90,paddingTop:13,  fontSize:30, fontFamily:'Roboto' }]}>&#x2103;</Text>
        <Image
        style={{ width: 70, height: 70, borderRadius:15 }}
        source={{ uri: data.weather_icons[0] }}
      />
      </View>
      
      <View style={[{flexDirection:'row',alignItems:'center',paddingTop:10}]}>
      <Ionicons name="location-outline" color={'red'}style={styles.iconsSty1}  />
      <Text style={[{ fontSize: 15, color: "white", paddingLeft: 10 }]}>
        {regName[0].city}, {regName[0].country}
      </Text>
      
      
      </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    color: "white",
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "bold",
    // fontWeight:'bold',
  },
  iconsSty1: {
    fontSize:18,
  },
  tempSetting: {
    color: "white",
    fontSize: 56,
    fontWeight: "bold",
    flexDirection:'column',

  },
  InlineHeader: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  displayBox: {
    paddingTop:25,
    paddingVertical: 5,
    paddingLeft: 50,
  },
  newInfomarter: {
    // borderColor:'red',
    // borderWidth: 2,
    marginTop:20,
    // justifyContent:"center",
    // alignItems:'baseline',
    // // alignContent:'flex-start',
    paddingVertical:20,
    flexDirection:'row',

  },
  iconsSty: {
    // paddingTop:0,
    fontSize:70,
  }
});

export default Update;
