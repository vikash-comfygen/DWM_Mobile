// // BottomTabNavigator.tsx
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CustomVectorIcons from '../components/CustomVectorIcons';

// // Screens

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#0f0f0f',
//           borderTopColor: '#1a1a1a',
//           height: 60,
//         },
//         tabBarActiveTintColor: '#8a2be2',
//         tabBarInactiveTintColor: '#666',
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '500',
//           marginTop: 4,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="WalletTab"
//         component={WalletStack}
//         options={{
//           tabBarLabel: 'Wallet',
//           tabBarIcon: ({ color, size }) => (
//             <CustomVectorIcons
//               name="credit-card"
//               size={size}
//               color={color}
//               iconSet="Feather"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Market"
//         component={MarketScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <CustomVectorIcons
//               name="bar-chart-2"
//               size={size}
//               color={color}
//               iconSet="Feather"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={ExploreScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <CustomVectorIcons
//               name="compass"
//               size={size}
//               color={color}
//               iconSet="Feather"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Swap"
//         component={SwapScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <CustomVectorIcons
//               name="repeat"
//               size={size}
//               color={color}
//               iconSet="Feather"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Trade"
//         component={TradeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <CustomVectorIcons
//               name="trending-up"
//               size={size}
//               color={color}
//               iconSet="Feather"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;
