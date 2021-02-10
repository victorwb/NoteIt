import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Friend</Text>

      <Image style={styles.img} source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
});
