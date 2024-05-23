import React from 'react';
import {Image, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    backgroundColor: '#55A234'
  },
});

export default Profile;
