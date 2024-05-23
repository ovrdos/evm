import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Menu from './Menu';
import Profile from './Profile';

const Header = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Menu style={styles.menu} />
      <Profile style={styles.profile} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    position: "fixed",
    left: 0,
    top: 40,
  },
  profile: {
    position: 'fixed',
    top: 20,
    right: 0
  },
  menu: {
    position: 'fixed',
    top: 20,
    left: 10
  }
});

export default Header;
