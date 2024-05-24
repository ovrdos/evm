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
  const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    top: 70,
  },
  welcomeSection: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 14,
    width: '100%',
    paddingTop: 30,
    fontWeight: 'bold'
  },
  });

    return <>
    <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.welcomeSection}>
            <SafeAreaView>
            <ThemedText style={styles.title}> Portfolio Value </ThemedText>
                <ThemedText numberOfLines={1} style={styles.value}>
                    $96,646,732.00
                </ThemedText>
            </SafeAreaView>
            <BalanceChartScreen />
            </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView>
                <FOREX />
            </SafeAreaView>
            </>;
  }
