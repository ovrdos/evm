import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TradeButton from './TradeButton';

const COMMSScreen = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [currencies, setCurrencies] = useState(null);

  var date = "2001-02-16";
  useEffect(() => {
    var date = "2024-05-17";
    var app_id = "3a004052e2a54923a35fc23ff3110374";
    fetch('https://openexchangerates.org/api/historical/'+ date + '.json?app_id=' + app_id)
      .then(response => response.json())
      .then(data => setExchangeRates(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <TradeButton style={styles.button} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'top',
    alignItems: 'left',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    overflow: "hidden",
  },
  rates: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    backgroundColor: '#777',
    color: 'white',
    position: 'relative',
    left: 0,
    top: 0,
    padding: 20,
  }
});

export default COMMSScreen;