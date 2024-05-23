import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from './Header';
import NewsView from './NewsView';
import Navigator from './Navigator';
import Portfolio from './PortfolioView';
import ClarityView from './ClarityView';
import ClarityViewMini from './ClarityViewMini';
import ValueControl from './ValueControl';
import CurrentValues from './CurrentValues';
import WatchlistView from './WatchlistView';
import FOREX from './FOREX';
import SOIN from './SOIN';
import TradeButton from './TradeButton';
import MOTD from './MOTD';
import Spacer from './Spacer';
import SpacerGray from './SpacerGray';
import BalanceChartScreen from './BalanceChartScreen';


const BlankRandom = () => {

  const route = useRoute();
  navigateTo = route.params?.navigateTo;
  navigateTo = navigateTo || 'Overview';

  return (
    <SafeAreaView style={styles.container}>
        {navigateTo==='Overview'&& <>
            <MOTD style={styles.header} />
        </>}

        {navigateTo==='Overview'&& <>
            <ClarityView style={styles.clarityView} />
            <BalanceChartScreen style={styles.balanceChartScreen} />
            <NewsView style={styles.newsView} />
            <WatchlistView style={styles.watchlistView} />
            <Portfolio style={styles.newsView} />
        </>}

        {navigateTo==='FOREX'&& <>
            <ClarityViewMini style={styles.clarityViewMini} />
            <SpacerGray title={'FOREX Market'} subtitle={'Foreign Exchange Network'} style={styles.spacerGray} />
            <BalanceChartScreen showSpacer={'false'} style={styles.balanceChartScreen} />
            <FOREX style={styles.FOREX} />
            <TradeButton style={styles.tradeButton} />
        </>}

        {navigateTo==='SOIN'&& <>
            <ClarityViewMini style={styles.clarityViewMini} />
            <SpacerGray title={'SOIN Market'} subtitle={'Self-Owned Investment Network'} style={styles.spacerGray} />
            <BalanceChartScreen style={styles.balanceChartScreen} />
            <SOIN style={styles.SOIN} />
            <TradeButton style={styles.tradeButton} />
        </>}

        {navigateTo==='COMMS'&& <>
            <ClarityViewMini style={styles.clarityViewMini} />
             <SpacerGray title={'COMMS Market'} subtitle={'Commodities & Futures Network'} style={styles.spacerGray} />
             <BalanceChartScreen style={styles.balanceChartScreen} />
             <SOIN style={styles.COMMS} />
             <TradeButton style={styles.tradeButton} />
        </>}

        {navigateTo==='CRYPTO'&& <>
            <ClarityViewMini style={styles.clarityViewMini} />
            <SpacerGray title={'CRYPTO Market'} subtitle={'Cryptocurrency Investment Network'} style={styles.spacerGray} />
            <BalanceChartScreen style={styles.balanceChartScreen} />
            <SOIN style={styles.CRYPTO} />
            <TradeButton style={styles.tradeButton} />
        </>}

        <ValueControl style={styles.valueControl} />
        <Navigator style={styles.navigator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'top',
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: '#fff',
  },
  FOREX: {
    width: "100%",
    height: "60%",
    overflow: "scroll",
    backgroundColor: '#fff',
  },
});

export default BlankRandom;
