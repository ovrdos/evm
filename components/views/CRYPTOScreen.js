import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header';
import NewsView from './NewsView';
import Navigator from './Navigator';
import TickerView from './TickerView';
import ClarityView from './ClarityView';
import ValueControl from './ValueControl';
import CurrentValues from './CurrentValues';
import WatchlistView from './WatchlistView';
import BalanceChartScreen from './BalanceChartScreen';

const BlankRandom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <ClarityView style={styles.clarityView} />
      <BalanceChartScreen />
      <CurrentValues style={styles.currentValues} />
      <NewsView style={styles.newsView} />
      <ValueControl style={styles.valueControl} />
      <WatchlistView style={styles.watchlistView} />
      <Navigator style={styles.navigator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "1%",
    overflow: "hidden"
  },
});

export default BlankRandom;
