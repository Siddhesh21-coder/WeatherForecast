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
import * as Location from "expo-location";
const Location1 = ({ftcg}) => {
  const [location, setLocation] = useState(null);
  const [addr, setAddr] = useState(null);
  const [regName, setRegName] = useState([{ city: "Nasik", country: "India" }]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
    <View>
      {/* <Text>Lasalgaon Nashik {regName}</Text> */}
      {/* <Text style={[{fontSize:15, color:'white',paddingLeft:10}]}>{regName[0].city}, {regName[0].country}</Text>  */}

      <Text style={[{ fontSize: 15, color: "white", paddingLeft: 10 }]}>
        {data.temperature}
      </Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: data.weather_icons[0] }}
      />

      <Text style={[{ fontSize: 15, color: "white", paddingLeft: 10 }]}>
        {regName[0].city}, {regName[0].country}
      </Text>
    </View>
  );
};

export default Location1;
