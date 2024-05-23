import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ValueControl = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    height: "10%",
    backgroundColor: 'rgba(119, 238, 35, 0.0)',
  },
});

export default ValueControl;
