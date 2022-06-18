
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react'

const FirstScreen = () => {
  return (
    <View style={styles.maincontainer}>
        <View style={styles.imgcontainer}>
            <Image style={styles.img} source={require('../../../assets/home.jpg')} />

        </View>
        <View style={styles.textcontainer}>
            <Text style={styles.text1}>
      <Text style={styles.title}>
        Hawamaan! </Text> 
        <Text style={styles.cont}> Weather news and updates
        </Text>
        {"\n\n"}
        Weather Forecast App with a way simple UI and get weather news across the world.
        </Text>
        <TouchableOpacity
        style={styles.button} >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    title: {
       color: '#fff',
       fontSize: 30,
       color: '#A8B0F4',
    },
    img: {
        width: 150,
        opacity: 0.9,
    },
    maincontainer: {
        display: 'flex',
        flex:0.9,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    text1: {
        color: '#fff',
        fontSize: 20,
    },
    imgcontainer: {
        flex:2,
       justifyContent:'center',
       width: '90%',
       borderRadius:10,
        alignItems:'center',
    },
    textcontainer: {
        flex:1,
        margin: 2,
        padding:2,
        fontWeight: 'bold',
        
        // borderColor:'red',
        // borderWidth:1,
    },
    cont: {
        fontSize:26,
        color: '#f8a01a',
        
    },
    button: {
        backgroundColor:'#f8a01a',
        marginTop: 50,
        marginLeft:45,
        width:300,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        },
        buttonText: {
            fontSize:20,
            fontWeight: 'bold',
        }

});

export default FirstScreen