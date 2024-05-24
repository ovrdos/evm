import React from 'react';
import {Image, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={require('@/assets/images/icon_menu.png')}
                style={{ width: 25, height: 25, marginLeft: 10, }} resizeMode="cover" />
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

export default Menu;
