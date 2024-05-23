import React, { useState } from 'react';
import { Image, Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {Svg, Circle, Line, Stop} from 'react-native-svg';
import { AreaChart, Decorator } from 'react-native-svg-charts';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Spacer from '@/components/views/Spacer';
import BalanceChartScreen from '@/components/views/BalanceChartScreen';

import NewsView from '@/components/views/NewsView';
import FOREX from '@/components/views/FOREX';

import * as shape from 'd3-shape';
import { styles } from './../styles/Styles';

export default function ForexScreen() {

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
justifyContent: 'flex-start',
alignItems: 'flex-start',
justifyContent: 'top',
alignItems: 'left',
width: '100%',
height: '60%',
overflow: "scroll",
backgroundColor: 'rgba(19, 128, 5, 0.0)',
alignItems: 'center',
scrollbarWidth: 'none',
},
rates: {
height: '60%',
alignSelf: 'center',
overflow: "scroll",
color: 'black',
position: 'relative',
left: 0,
top: 0,
padding: 12,
width: '100%',
scrollbarWidth: 'none',
flexDirection: 'flex-end',
},
title: {
alignSelf: 'left',
justifyContent: 'center',
fontSize: 17,
fontWeight: 'bold',
marginBottom: 3,
marginLeft: 2,
width: '100%',
},
ratesSummary: {
alignSelf: 'center',
justifyContent: 'center',
color:'black',
padding: 20,
fontSize: 18,
borderRadius: 2,
borderColor: 'rgba(19, 128, 5, 0.8)',
backgroundColor: 'rgba(19, 128, 5, 0.1)',
borderWidth: 2, margin: 11,
minWidth: '10%',
flexDirection: 'row',
},
chart: {
height: 80,
width: "100%",
top: -100,
left: 0,
alignSelf: 'top',
justifyContent: 'top',
},
  });

    return <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.welcomeSection}>
                <ThemedText style={styles.title}> Portfolio Value </ThemedText>
                <SafeAreaView>
                    <ThemedText numberOfLines={1} style={styles.value}>
                        $96,646,732.00
                    </ThemedText>
                </SafeAreaView>
            </SafeAreaView>
            <BalanceChartScreen style={styles.chat} />
            <FOREX style={{position: 'relative', top: 0}} />
            </SafeAreaView>;
  }
