import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const TradeButton = () => {
  return (
    <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log('TRADE+')}
      >Trade +</Button>
  );
};

const styles = StyleSheet.create({
  button: {
      position: 'absolute',
      width: 120,
      bottom: 100,
      right: 20,
      zIndex: 10000,
      backgroundColor: 'rgba(19, 128, 5, 0.8)',
      borderWidth: 3,
      borderColor: '#FFF',
      borderRadius: 14,
    },
});

export default TradeButton;
