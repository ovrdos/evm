import React from 'react';
import {Button, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthenticationScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate('BlankRandom')
  return (
    <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Image source={require('./../app/assets/icon_overview.png')}
                              style={{ width: 50, height: 50 }} resizeMode="cover" />
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    backgroundColor: '#55A234',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: {
      backgroundColor: '#90EE90', // Light green background
      borderColor: '#006400', // Dark green border
      borderWidth: 2,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: 'white', // White text color
      fontSize: 16,
      fontWeight: 'bold',
    }
});

export default AuthenticationScreen;
