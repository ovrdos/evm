import React from 'react';
import {Image, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('@/assets/images/icon_profile.png')}
                style={{ width: 25, height: 25 }} resizeMode="cover" />
    </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  },
});

export default Profile;
