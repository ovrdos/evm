import React, { useState } from 'react';
import { Image, Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {Svg, Circle, Line} from 'react-native-svg';
import { AreaChart, Decorator } from 'react-native-svg-charts';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from 'react-native';

import * as shape from 'd3-shape';
import { styles } from './../styles/Styles';
import Header from '@/components/views/Header';
import { ThemedText } from '@/components/ThemedText';
import BalanceChartScreen from '@/components/views/BalanceChartScreen';


export default function CommsScreen() {
  const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    top: 0,
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
    paddingTop: 0,
    fontWeight: 'bold'
  },
  page: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    alignItems: 'flex-end',
    width: '100%',
    height: 'auto',
    marginTop: 20,
  },
  });

    return <>
    <Header />
    <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.welcomeSection}>
            <SafeAreaView>
            <ThemedText style={styles.title}> Portfolio Value </ThemedText>
                <ThemedText numberOfLines={1} style={styles.value}>
                    $96,646,732.00
                </ThemedText>
            </SafeAreaView>
            <SafeAreaView>
            <ThemedText numberOfLines={1} style={styles.page}>
                                    Commodity Futures Market
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
