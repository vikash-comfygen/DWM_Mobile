import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletScreen from '../screens/HomeScreen/WalletScreen';
import BankAccountScreen from '../screens/BankAccountScreen';
import EarnScreen from '../screens/EarnScreen';
import NFTScreen from '../screens/NFTScreen.tsx';
import ReceiveScreen from '../screens/ReceiveScreen/index.tsx';

const Stack = createNativeStackNavigator();

const TopNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="WalletMain" component={WalletScreen} />
      <Stack.Screen name="BankAccountScreen" component={BankAccountScreen} />
      <Stack.Screen name="EarnScreen" component={EarnScreen} />
      <Stack.Screen name="NFTScreen" component={NFTScreen} />
      <Stack.Screen name="ReceiveScreen" component={ReceiveScreen} />
    </Stack.Navigator>
  );
};

export default TopNavigation;
