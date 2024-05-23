import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Spacer() {
  return
    <LinearGradient colors={['rgba(119, 238, 35, 0.1)', 'rgba(119, 238, 35, 0.0)']} style={styles.container}>
    <Text> SPACER </Text>
    </LinearGradient>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    borderRadius: 0,
    width: "100%",
    height: 100,
    position: "fixed",
    top: 0,
    color: 'white',
  },
});

}
