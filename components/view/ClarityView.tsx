import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { styles } from './../styles/Styles';
import { BalanceChartScreen } from './BalanceChartScreen';

const ClarityView: React.FC = () => {
  const [state, setState] = useState({
    portfolioValue: null,
    dailyChangeDollar: null,
    dailyChangePct: null,
    errorFound: null,
    retryCount: 0
  });

  const { portfolioValue, dailyChangeDollar, dailyChangePct } = state;
  const valueColor = dailyChangeDollar < 0 ? 'red' : 'green';

  return
    <SafeAreaView style={styles.clearContainer}>
      <SafeAreaView style={styles.section}>
        <Text style={styles.greeting}>Welcome Kamal, </Text>
        <Text style={styles.title}>My Portfolio Value </Text>
        <SafeAreaView>
          <Text numberOfLines={1} style={styles.value}>
            $96,646,732.00
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{alignItems: 'flex-end',maxHeight: 10}}>
          <SafeAreaView style={styles.dailyChange}>
            <Text style={{color: valueColor,textAlign: 'right',fontSize: 13}}>
              {dailyChangeDollar ? `$${dailyChangeDollar.toLocaleString()}` : '$14.21'}
            </Text>
            <Text style={{color: valueColor,textAlign: 'right',fontSize: 13, marginLeft: 3}}>
              {dailyChangePct ? `(${(dailyChangePct).toFixed(2)}%)` : '(0.12%)'}
            </Text>
            <Text style={styles.today} >
              Today
            </Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>

      </SafeAreaView>
    </SafeAreaView>;
}

export default ClarityView;