import React, { useState } from 'react';
import { Image, Platform, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {Svg, Circle, Line, Stop} from 'react-native-svg';
import { AreaChart, Decorator } from 'react-native-svg-charts';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Header from '@/components/views/Header';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Spacer from '@/components/views/Spacer';
import BalanceChartScreen from '@/components/views/BalanceChartScreen';

import NewsView from '@/components/views/NewsView';

import * as shape from 'd3-shape';
import { styles } from './../styles/Styles';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyT7XfMrDcJhdvonl53tC18K9ZFdxmypY",
  authDomain: "evmt-534b7.firebaseapp.com",
  projectId: "evmt-534b7",
  storageBucket: "evmt-534b7.appspot.com",
  messagingSenderId: "111584159066",
  appId: "1:111584159066:web:d13e6128bb024e9411ff63",
  measurementId: "G-32W0HF4FS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function HomeScreen() {

  function getDateFromIndex(index) {
      let date = new Date();
      date.setDate(date.getDate()-30);
      date.setDate(date.getDate() + index);
      let day = String(date.getDate()).padStart(2, '0');
      let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      let year = date.getFullYear();
      return month + '/' + day + '/' + year;
  };
  function generateHistoricalData() {
      let historicalData = [{"x": "2023-12-31T12:02:43.566Z", "y": 50020}, {"x": "2024-01-01T12:02:43.566Z", "y": 50024}, {"x": "2024-01-02T12:02:43.566Z", "y": 50011}, {"x": "2024-01-03T12:02:43.566Z", "y": 50021}, {"x": "2024-01-04T12:02:43.566Z", "y": 50023}, {"x": "2024-01-05T12:02:43.566Z", "y": 50035}, {"x": "2024-01-06T12:02:43.566Z", "y": 50033}, {"x": "2024-01-07T12:02:43.566Z", "y": 50030}, {"x": "2024-01-08T12:02:43.566Z", "y": 50020}, {"x": "2024-01-09T12:02:43.566Z", "y": 50011}, {"x": "2024-01-10T12:02:43.566Z", "y": 50025}, {"x": "2024-01-11T12:02:43.566Z", "y": 50018}, {"x": "2024-01-12T12:02:43.566Z", "y": 50016}, {"x": "2024-01-13T12:02:43.566Z", "y": 50010}, {"x": "2024-01-14T12:02:43.566Z", "y": 50030}, {"x": "2024-01-15T12:02:43.566Z", "y": 50012}, {"x": "2024-01-16T12:02:43.566Z", "y": 50015}, {"x": "2024-01-17T12:02:43.566Z", "y": 50032}, {"x": "2024-01-18T12:02:43.566Z", "y": 50044}, {"x": "2024-01-19T12:02:43.566Z", "y": 50039}, {"x": "2024-01-20T12:02:43.566Z", "y": 50053}, {"x": "2024-01-21T12:02:43.566Z", "y": 50046}, {"x": "2024-01-22T12:02:43.566Z", "y": 50048}, {"x": "2024-01-23T12:02:43.566Z", "y": 50067}, {"x": "2024-01-24T12:02:43.566Z", "y": 50079}, {"x": "2024-01-25T12:02:43.566Z", "y": 50081}, {"x": "2024-01-26T12:02:43.566Z", "y": 50094}, {"x": "2024-01-27T12:02:43.566Z", "y": 50106}, {"x": "2024-01-28T12:02:43.566Z", "y": 50100}, {"x": "2024-01-29T12:02:43.566Z", "y": 50111}, {"x": "2024-01-30T12:02:43.566Z", "y": 50093}];
      return historicalData;
  };
  const valueAverage = 54543;
  const sampleData = generateHistoricalData();
  const [dotPosition, setDotPosition] = useState({ x: null, y: null });
  const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
      <React.Fragment key={index}>
        <Circle key={index}
           cx={x(index)}
           cy={y(value)}
           opacity={(Math.round(x.invert(dotPosition.x))===index) ? 1 : 0}
           r={2.5}
           stroke="rgba(119, 238, 35, 1)" fill="rgba(119, 238, 35, 1)"
         />
         <Line key={index+1} x1={x(index)} y1={0} x2={x(index)} y2={80}
         opacity={(Math.round(x.invert(dotPosition.x))===index) ? 1 : 0} stroke="rgba(119, 238, 35, 1)" />
         {(Math.round(x.invert(dotPosition.x)) === index && dotPosition.x!=null) && (
         <ThemedText style={{flexDirection:'flex-start`'}}>
         <ThemedText style={styles.daily} numberOfLines={1} textAnchor="left">
          Date: {getDateFromIndex(index)} Value: ${value}.00
         </ThemedText>
         </ThemedText>
         )}

         </React.Fragment>
      ));
    };
  const handlePress = (event) => {

      setDotPosition({
        x: event.nativeEvent.locationX,
        y: event.nativeEvent.locationY,
      });

  };
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: "100%",
    height: "40%",
    alignSelf: 'bottom',
    alignItems: 'bottom',
    justifyContent: 'bottom',
    position: 'absolute',
    top: '10%',
    left: 0,
    },
    spacer: {
    flex: 1,
    width: "100%",
    height: 40,
    alignSelf: 'bottom',
    alignItems: 'bottom',
    justifyContent: 'bottom',
    position: 'absolute',
    top: 189,
    },
    welcomeSection: {
    padding: 0,
    position: 'absolute',
    top: 0,
    right: 10,
    flexDirection: 'flex-end',
    },
    chart: {
    height: 80,
    width: "100%",
    left: 0,
    bottom: 0,
    alignItems: 'bottom',
    alignSelf: 'bottom',
    justifyContent: 'bottom',
    },
    touchable: {
    height: 80,
    width: "100%",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'bottom',
    position: 'absolute',
    top: '36%',
    left: 0,
    },
    circle: {
    position: 'fixed',
    zIndex: 1,
    },
    values: {
    position: 'absolute',
    top: 40,
    left: 4,
    zIndex: 1,
    color: 'rgba(56, 4, 4, 1)',
    fontSize: 12,
    },
    daily: {
    paddingLeft: 10,
    width: 100,
    alignItems: 'left',
    fontSize: 10,
    fontWeight: 'thin'
    },
    greeting: {
    fontSize: 12,
    fontWeight: 'thin',
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 5,
    fontWeight: 'bold',
    position: 'relative',
    left: 0,
    },
    title: {
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'right',
    marginBottom: 0
    },
    value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    alignItems: 'flex-end',
    width: '100%',
    height: 'auto',
    },
    news: {
    position: 'absolute',
    top: 300,
    left: 0,
    },

  });

    return <><Header /><SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.welcomeSection}>
                <ThemedText style={styles.greeting}  >Welcome Kamal, </ThemedText>
                <ThemedText style={styles.title}> Portfolio Value </ThemedText>
                <SafeAreaView>
                    <ThemedText numberOfLines={1} style={styles.value}>
                        $96,646,732.00
                    </ThemedText>
                </SafeAreaView>
            </SafeAreaView>
            <View>
                <BalanceChartScreen style={styles.spacer} />
            </View>
            <NewsView style={{position: 'absolute', top: 200}} />
            </SafeAreaView></>;
  }
