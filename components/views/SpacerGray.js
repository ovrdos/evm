import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';

const SpacerGray = ({title, subtitle}) => {
  return (
  <React.Fragment >
    <Text style={styles.title} >{title} <Image source={require('./../app/assets/icon_overview.png')}
          style={{width: 15, height: 15, paddingLeft: 6, marginBottom: 4}} /></Text>
    <View style={styles.br} />
    <Text style={styles.subtitle}>{subtitle}</Text>
  </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'top',
    alignItems: 'center',
    borderRadius: 0,
    width: "100%",
    height: "7%",
    position: "relative",
    top: 0,
  },
    br: {
        borderBottomColor: 'rgba(56, 114, 4, 1)',
        borderBottomWidth: 1,
        width: "100%",
        marginBottom: 5,
        marginLeft: 16,
    },
  title: {
    alignSelf: 'left',
    justifyContent: 'top',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'thin',
    marginLeft: 18,
    color: 'rgba(56, 114, 4, 1)',}
});

export default SpacerGray;
