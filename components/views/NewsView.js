import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const NewsView = () => {
  const [news, setNews] = useState([
    {
        title: "Global Shift Towards Renewable Energy",
        summary: "Countries worldwide are accelerating their shift towards renewable energy sources, aiming to reduce carbon emissions and combat climate change effectively."
    },
    {
        title: "Breakthrough in Alzheimer's Research",
        summary: "Researchers have identified a new protein that could lead to groundbreaking treatments for Alzheimer’s disease, promising hope for millions affected globally."
    },
    {
        title: "Tech Giants Commit to Privacy",
        summary: "Leading technology companies have announced new privacy policies that prioritize user data security, addressing long-standing concerns over data misuse."
    },
    {
        title: "Economic Forecast: Global Growth in 2024",
        summary: "Economists predict a robust global economic growth for 2024, driven by technological advancements and emerging markets."
    },
    {
        title: "Revolutionary Plastic Recycling Technique",
        summary: "A new chemical process could revolutionize plastic recycling, making it more efficient and environmentally friendly."
    },
    {
        title: "Rise of Telemedicine",
        summary: "The telemedicine sector sees exponential growth, providing accessible healthcare solutions, especially in remote areas."
    },
    {
        title: "Autonomous Vehicles Hit Milestone",
        summary: "An autonomous vehicle company has reached a milestone of one million driverless miles without a safety incident, marking a significant achievement in the automotive industry."
    },
    {
        title: "New Policies to Tackle Urban Pollution",
        summary: "Cities around the world are implementing innovative policies to tackle urban pollution, focusing on sustainable transport and green spaces."
    },
    {
        title: "Deep Sea Exploration Reveals New Species",
        summary: "Recent deep sea exploration missions have discovered several new species, shedding light on the mysterious ecosystems of the ocean depths."
    },
    {
        title: "Advancements in Quantum Computing",
        summary: "Scientists have made significant advancements in quantum computing, potentially transforming fields from cryptography to drug discovery."
    }
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <ThemedText numberOfLines={1} style={styles.cardTitle} >{item.title}</ThemedText>
      <ThemedText numberOfLines={2} style={styles.cardSummary} >{item.summary}</ThemedText>
    </View>
  );

  return <SafeAreaView style={styles.container}>
    <ThemedText style={styles.title}>Market News</ThemedText>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '45%',
    width: '100%',
    padding: 6,
    alignItems: 'left',
    justifyContent: 'bottom',
    position: 'absolute',
    top: '75%',
  },
  card: {
    alignItems: 'left',
    justifyContent: 'bottom',
    width: 220,
    height: 200,
    padding: 12,
    paddingTop: 10,
    marginLeft: 16,
    borderRadius: 12,
    fontSize: 12,
    position: 'relative',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: 3
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSummary: {
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
    textAlign: 'left',
    position: 'relative',
    left: 0
    },
});

export default NewsView;