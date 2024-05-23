import React, { useState, useEffect } from 'react';
import TradeButton from './TradeButton';
import { Picker } from '@react-native-picker/picker';
const cdata = require('@/assets/cache/currency_cache.json');
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ThemedText } from '@/components/ThemedText';

export default FOREX = () => {
  const [currencyOrigin, setCurrencyOrigin] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState(null);
  const [viewCurrencyPicker, setViewCurrencyPicker] = useState(false);
  const topCurrencies = [
    "AED", // United Arab Emirates Dirham
    "USD", // United States Dollar
    "EUR", // Euro
    "JPY", // Japanese Yen
    "GBP", // British Pound
    "AUD", // Australian Dollar
    "CAD", // Canadian Dollar
    "CHF", // Swiss Franc
    "CNY", // Chinese Yuan Renminbi
    "SEK", // Swedish Krona
    "NZD",  // New Zealand Dollar
    "BTC", // Bitcoin
  ];

  const currencies = Object.keys(cdata)
    .filter(key => topCurrencies.includes(key))
    .reduce((obj, key) => {
      obj[key] = cdata[key];
      return obj;
    }, {});

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    var date = getCurrentDate();
    var app_id = "3a004052e2a54923a35fc23ff3110374";
    fetch('https://openexchangerates.org/api/latest.json?app_id=' + app_id + '&base=' + currencyOrigin + '&symbols='+ topCurrencies.join(','))
      .then(response => response.json())
      .then(data => {
        setExchangeRates(data);
      })
      .catch(error => console.error(error));
  }, [currencyOrigin]);

  return <ThemedText> FOREX! </ThemedText>;
};
function generateUniqueRandomInteger() {
  min=1212;
  max=999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'top',
    alignItems: 'left',
    width: '100%',
    height: '100%',
    overflow: "scroll",
    backgroundColor: 'rgba(19, 128, 5, 0.0)',
    alignItems: 'center',
    scrollbarWidth: 'none',
  },
  rates: {
    height: '60%'
    ,
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
});