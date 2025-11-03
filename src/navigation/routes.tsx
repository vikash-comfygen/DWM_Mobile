import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Auth
import WalletIntroScreen from '../screens/Authenication/WalletIntroScreen';
import CreatePasswordScreen from '../screens/Authenication/CreatePasswordScreen';
import ConfirmPasswordScreen from '../screens/Authenication/ConfirmPasswordScreen';
import WalletScreen from '../screens/HomeScreen/WalletScreen';
import BankAccountScreen from '../screens/BankAccountScreen';
import EarnScreen from '../screens/EarnScreen';
import NFTScreen from '../screens/NFTScreen.tsx';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WalletIntroScreen"
        screenOptions={{ animation: 'ios_from_right' }}
      >
        <Stack.Screen
          name="WalletIntroScreen"
          component={WalletIntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ConfirmPassword"
          component={ConfirmPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BankAccountScreen"
          component={BankAccountScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EarnScreen"
          component={EarnScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NFTScreen"
          component={NFTScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Auth
// import WalletIntroScreen from '../screens/Authenication/WalletIntroScreen';
// import CreatePasswordScreen from '../screens/Authenication/CreatePasswordScreen';
// import ConfirmPasswordScreen from '../screens/Authenication/ConfirmPasswordScreen';
// // import BottomTabNavigator from './BottomTab';

// // Main App with Bottom Navigation

// const Stack = createNativeStackNavigator();

// const Routes: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="WalletIntroScreen"
//         screenOptions={{ animation: 'ios_from_right', headerShown: false }}
//       >
//         <Stack.Screen name="WalletIntroScreen" component={WalletIntroScreen} />
//         <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
//         <Stack.Screen
//           name="ConfirmPassword"
//           component={ConfirmPasswordScreen}
//         />
//         {/* <Stack.Screen name="MainApp" component={BottomTabNavigator} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Routes;
