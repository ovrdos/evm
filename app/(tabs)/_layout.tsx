import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const homeIcon = require('@/assets/images/icon_overview.png');
const forexIcon = require('@/assets/images/icon_forex.png');
const soinIcon = require('@/assets/images/icon_soin.png');
const commsIcon = require('@/assets/images/icon_comms.png');
const cryptoIcon = require('@/assets/images/icon_crypto.png');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const TabBarIcon = ({ icon, ...props }) => (
    <Image source={(icon)} style={{ width: 24, height: 24 }} {...props} />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={focused ? homeIcon : homeIcon} color={color} />
          ),

        }}
      />
      <Tabs.Screen
        name="forex"
        options={{
          title: 'FOREX',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={focused ? forexIcon : forexIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
              name="soin"
              options={{
                title: 'SOIN',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon icon={focused ? soinIcon : soinIcon} color={color} />
                ),
              }}
            />
    <Tabs.Screen
                  name="comms"
                  options={{
                    title: 'COMMS',
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon icon={focused ? commsIcon : commsIcon} color={color} />
                    ),
                  }}
                />
    <Tabs.Screen
                  name="crypto"
                  options={{
                    title: 'CRYPTO',
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon icon={focused ? cryptoIcon : cryptoIcon} color={color} />
                    ),
                  }}
                />
    </Tabs>
  );
}
