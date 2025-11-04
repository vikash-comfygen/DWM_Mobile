// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// // Auth
// import WalletIntroScreen from '../screens/Authenication/WalletIntroScreen';
// import CreatePasswordScreen from '../screens/Authenication/CreatePasswordScreen';
// import ConfirmPasswordScreen from '../screens/Authenication/ConfirmPasswordScreen';
// import WalletScreen from '../screens/HomeScreen/WalletScreen';
// import BankAccountScreen from '../screens/BankAccountScreen';
// import EarnScreen from '../screens/EarnScreen';
// import NFTScreen from '../screens/NFTScreen.tsx';
// import CoinScreen from '../screens/CoinScreen/index.tsx';

// const Stack = createNativeStackNavigator();

// const Routes: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="WalletIntroScreen"
//         screenOptions={{ animation: 'ios_from_right' }}
//       >
//         <Stack.Screen
//           name="WalletIntroScreen"
//           component={WalletIntroScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="CreatePassword"
//           component={CreatePasswordScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="ConfirmPassword"
//           component={ConfirmPasswordScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="WalletScreen"
//           component={WalletScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="BankAccountScreen"
//           component={BankAccountScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="EarnScreen"
//           component={EarnScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="NFTScreen"
//           component={NFTScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="CoinScreen"
//           component={CoinScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Routes;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import WalletIntroScreen from '../screens/Authenication/WalletIntroScreen';
import CreatePasswordScreen from '../screens/Authenication/CreatePasswordScreen';
import ConfirmPasswordScreen from '../screens/Authenication/ConfirmPasswordScreen';

// Main App (Bottom Tabs)
import BottomTab from './BottomTab';
import WalletScreen from '../screens/HomeScreen/WalletScreen';
import BankAccountScreen from '../screens/BankAccountScreen';
import EarnScreen from '../screens/EarnScreen';
import NFTScreen from '../screens/NFTScreen.tsx';
import MoneyInvestShowing from '../screens/MoneyInvestShowing/index.tsx';

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
        <Stack.Screen name="WalletMain" component={WalletScreen} />
        <Stack.Screen name="BankAccountScreen" component={BankAccountScreen} />
        <Stack.Screen name="EarnScreen" component={EarnScreen} />
        <Stack.Screen name="NFTScreen" component={NFTScreen} />
        <Stack.Screen
          name="MoneyInvestShowing"
          component={MoneyInvestShowing}
        />

        {/* Main App (with bottom tabs) */}
        <Stack.Screen name="MainApp" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
