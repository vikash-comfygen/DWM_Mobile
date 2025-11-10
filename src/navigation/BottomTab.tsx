import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale } from 'react-native-size-matters';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import CustomVectorIcons from '../components/CustomVectorIcons';

// Import your animated screens
import CoinScreen from '../screens/CoinScreen';
import WalletScreen from '../screens/HomeScreen/WalletScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SwapScreen from '../screens/SwapScreen';
import TradeScreen from '../screens/TradeScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, label, iconName }) => {
  return (
    <View style={styles.bottomTab}>
      <CustomVectorIcons
        name={iconName}
        size={24}
        color={focused ? '#8a2be2' : '#666'}
        iconSet="Feather"
      />
      <Text
        style={[styles.bottomTabText, { color: focused ? '#8a2be2' : '#666' }]}
      >
        {label}
      </Text>
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomNav,
        // Add this to ensure screens are properly mounted
        unmountOnBlur: false,
        lazy: false, // This ensures all screens are loaded initially
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="Wallet"
              iconName="credit-card"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={CoinScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="Market"
              iconName="bar-chart-2"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Explore" iconName="compass" />
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Swap" iconName="repeat" />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="Trade"
              iconName="trending-up"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: '#0f0f0f',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    height: Platform.OS === 'android' ? 60 : 70,
    paddingBottom: Platform.OS === 'android' ? 10 : getBottomSpace() + 10,
    paddingTop: 8,
    elevation: 10,
  },
  bottomTab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    minHeight: 50,
  },
  bottomTabText: {
    fontSize: scale(8),
    fontWeight: '500',
    marginTop: 3,
    textAlign: 'center',
  },
});

export default BottomTab;
