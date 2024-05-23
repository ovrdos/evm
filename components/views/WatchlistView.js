import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';

const WatchlistView = () => {
  const [news, setNews] = useState(
  [
      {
          "name": "Apple Inc.",
          "symbol": "AAPL",
          "value": 157.25,
          "type": "stock"
      },
      {
          "name": "Bitcoin",
          "symbol": "BTC",
          "value": 29837.42,
          "type": "crypto"
      },
      {
          "name": "Euro to US Dollar",
          "symbol": "EUR/USD",
          "value": 1.0823,
          "type": "forex"
      },
      {
          "name": "Tesla Inc.",
          "symbol": "TSLA",
          "value": 273.18,
          "type": "stock"
      },
      {
          "name": "Ethereum",
          "symbol": "ETH",
          "value": 1943.70,
          "type": "crypto"
      },
      {
          "name": "British Pound to Japanese Yen",
          "symbol": "GBP/JPY",
          "value": 160.52,
          "type": "forex"
      },
      {
          "name": "Amazon.com Inc.",
          "symbol": "AMZN",
          "value": 121.44,
          "type": "stock"
      },
      {
          "name": "Ripple",
          "symbol": "XRP",
          "value": 0.479,
          "type": "crypto"
      },
      {
          "name": "US Dollar to Canadian Dollar",
          "symbol": "USD/CAD",
          "value": 1.2917,
          "type": "forex"
      },
      {
          "name": "Alphabet Inc.",
          "symbol": "GOOGL",
          "value": 122.99,
          "type": "stock"
      }
  ]
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text numberOfLines={1} style={styles.cardTitle} >{item.name}</Text>
      <Text numberOfLines={1} style={styles.cardSummary} >{item.symbol} - {item.value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Watchlist</Text>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '15%',
    width: '100%',
    padding: 6,
    alignItems: 'left',
    justifyContent: 'bottom',
    paddingTop: 8,
    marginTop: 0,
  },
  card: {
    alignItems: 'left',
    backgroundColor: 'rgba(123, 112, 111, 0.2)',
    justifyContent: 'top',
    height: 56,
    width: 110,
    padding: 8,
    marginLeft: 10,
    borderRadius: 8,
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 5,
  },
  cardSummary: {
    fontSize: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,
    textAlign: 'left',
    position: 'relative',
    left: 0
    },
});

export default WatchlistView;