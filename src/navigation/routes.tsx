import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import WalletIntroScreen from '../screens/Authenication/WalletIntroScreen';
import CreatePasswordScreen from '../screens/Authenication/CreatePasswordScreen';
import ConfirmPasswordScreen from '../screens/Authenication/ConfirmPasswordScreen';

// Main App (Bottom Tabs)
import BottomTab from './BottomTab';
import BankAccountScreen from '../screens/BankAccountScreen';
import EarnScreen from '../screens/EarnScreen';
import NFTScreen from '../screens/NFTScreen.tsx';
import MoneyInvestShowing from '../screens/MoneyInvestShowing/index.tsx';
import BackUpScreen from '../screens/BackUpFeatures/BackUpScreen.tsx/index.tsx';
import BackUpScreenTwo from '../screens/BackUpFeatures/BackUpScreenTwo/index.tsx';
import BackupScreenThree from '../screens/BackUpFeatures/BackupScreenThree.tsx/index.tsx';
import CoinScreen from '../screens/CoinScreen/index.tsx';
import TopNavigation from './TopNavigation.tsx';
import ReceiveScreen from '../screens/ReceiveScreen/index.tsx';
import SendScreen from '../screens/SendScreen/index.tsx';
import BuySellScreen from '../screens/BuySellScreen/index.tsx';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WalletIntroScreen"
        screenOptions={{
          animation: 'ios_from_right',
          headerShown: false,
        }}
      >
        {/* Authentication Flow */}
        <Stack.Screen name="WalletIntroScreen" component={WalletIntroScreen} />
        <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        <Stack.Screen
          name="ConfirmPassword"
          component={ConfirmPasswordScreen}
        />

        {/* Individual Screens (if needed for direct navigation) */}
        <Stack.Screen name="BankAccountScreen" component={BankAccountScreen} />
        <Stack.Screen name="EarnScreen" component={EarnScreen} />
        <Stack.Screen name="NFTScreen" component={NFTScreen} />
        <Stack.Screen name="BackUpScreen" component={BackUpScreen} />
        <Stack.Screen name="BackUpScreenTwo" component={BackUpScreenTwo} />
        <Stack.Screen name="BackupScreenThree" component={BackupScreenThree} />
        <Stack.Screen name="WalletBackupFlow" component={BackupScreenThree} />
        <Stack.Screen name="SendScreen" component={SendScreen} />
        <Stack.Screen name="BuySellScreen" component={BuySellScreen} />

        <Stack.Screen name="ReceiveScreen" component={ReceiveScreen} />

        <Stack.Screen
          name="MoneyInvestShowing"
          component={MoneyInvestShowing}
        />

        {/* Main App with Bottom Tabs */}
        <Stack.Screen name="MainApp" component={BottomTab} />
        {/* <Stack.Screen name="WalletMain" component={TopNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
