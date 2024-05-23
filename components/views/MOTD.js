import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const MOTD = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }} >Message of the Day!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#0000FF70',
    borderRadius: 0,
    width: "100%",
    height: "5%",
    backgroundColor: 'rgba(119, 238, 35, 0.0)',
  },
});

export default MOTD;
