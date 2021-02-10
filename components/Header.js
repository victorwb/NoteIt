import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Header=()=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'darkslateblue',
    height: 60,
    padding: 15,
  },
  text: {
    color: 'white',
    textAlign:'center',
    fontSize: 23,
  },
  
});

export default Header;