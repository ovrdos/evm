import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

const ClarityViewMini = () => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      height: '7%',
    },
    title: {
      fontSize: 12,
      color: '#111',
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: 0,
      fontWeight: 'thin',
    },
    value: {
      fontSize: 16,
      fontWeight: 'bold',
      width: '100%',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Portfolio Value </Text>
        <SafeAreaView>
          <Text numberOfLines={2} style={styles.value}>
            $96,646,732.00
          </Text>
        </SafeAreaView>
    </SafeAreaView>
  );
};

export default ClarityViewMini;