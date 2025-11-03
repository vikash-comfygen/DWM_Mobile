import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const { width } = Dimensions.get('window');

const BankAccountScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));
  const [checkAnim] = useState(new Animated.Value(0));

  const features = [
    {
      id: 1,
      text: 'Open a Swiss bank account for free with no management fee',
      checked: false,
    },
    {
      id: 2,
      text: 'Get a free virtual MasterCard supporting Google Pay, Apple Pay, and Samsung Pay',
      checked: true,
    },
    {
      id: 3,
      text: 'Use cryptocurrency for daily expenses',
      checked: true,
    },
    {
      id: 4,
      text: 'Buy USDC with 0 Fee',
      checked: true,
    },
    {
      id: 5,
      text: 'Make seamless transfers with your other bank accounts',
      checked: true,
    },
  ];

  useEffect(() => {
    // Main content animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();

    // Checkmark animations with delay
    features.forEach((_, index) => {
      setTimeout(() => {
        Animated.timing(checkAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }, 1000 + index * 200);
    });
  }, []);

  const renderCheckbox = (checked, index) => {
    return (
      <Animated.View
        style={[
          styles.checkbox,
          checked ? styles.checkboxChecked : styles.checkboxUnchecked,
          {
            opacity: checkAnim,
            transform: [
              {
                scale: checkAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}
      >
        {checked && (
          <CustomVectorIcons
            name="check"
            size={16}
            color="#fff"
            iconSet="Feather"
          />
        )}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <CustomVectorIcons
            name="arrow-left"
            size={24}
            color="#fff"
            iconSet="Feather"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet01-652</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Card Number Section */}
        <Animated.View
          style={[
            styles.cardNumberSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.cardNumberLabel}>1234 5678 9011 1213</Text>
        </Animated.View>

        {/* Main Content */}
        <Animated.View
          style={[
            styles.contentSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.title}>Own Your Crypto</Text>
          <Text style={styles.subtitle}>Bank Account</Text>

          {/* Features List */}
          <View style={styles.featuresList}>
            {features.map((feature, index) => (
              <Animated.View
                key={feature.id}
                style={[
                  styles.featureItem,
                  {
                    opacity: checkAnim,
                    transform: [
                      {
                        translateX: checkAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-20, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                {renderCheckbox(feature.checked, index)}
                <Text style={styles.featureText}>{feature.text}</Text>
              </Animated.View>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Learn More Button */}
          <Animated.View
            style={[
              styles.learnMoreSection,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
              <CustomVectorIcons
                name="chevron-right"
                size={20}
                color="#8a2be2"
                iconSet="Feather"
              />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </ScrollView>

      {/* Get Started Button */}
      <Animated.View
        style={[
          styles.footer,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  cardNumberSection: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a1a',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardNumberLabel: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'center',
  },
  contentSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#8a2be2',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  featuresList: {
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  checkboxUnchecked: {
    borderColor: '#666',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    borderColor: '#8a2be2',
    backgroundColor: '#8a2be2',
  },
  featureText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 30,
  },
  learnMoreSection: {
    alignItems: 'center',
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  learnMoreText: {
    color: '#8a2be2',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0f0f0f',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  getStartedButton: {
    backgroundColor: '#8a2be2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BankAccountScreen;

// BankAccountScreen.tsx

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomVectorIcons from '../components/CustomVectorIcons';

// const BankAccountScreen = ({ navigation }) => {
//   const [activeTopTab, setActiveTopTab] = useState('Bank');

//   const bankAccounts = [
//     {
//       name: 'Chase Bank',
//       number: '**** 4589',
//       balance: '$12,450.00',
//     },
//     {
//       name: 'Bank of America',
//       number: '**** 7821',
//       balance: '$8,720.50',
//     },
//   ];

//   const topTabs = ['Coin', 'Bank', 'Earn', 'NFT'];

//   const handleTopTabPress = (tab: string) => {
//     setActiveTopTab(tab);

//     switch (tab) {
//       case 'Coin':
//         navigation.navigate('WalletMain');
//         break;
//       case 'Earn':
//         navigation.navigate('EarnScreen');
//         break;
//       case 'NFT':
//         navigation.navigate('NFTScreen');
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="settings"
//               size={22}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="bell"
//               size={22}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.headerCenter}>
//           <TouchableOpacity style={styles.walletSelector}>
//             <Text style={styles.walletName}>Wallet01-652</Text>
//             <CustomVectorIcons
//               name="chevron-down"
//               size={16}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="copy"
//               size={20}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="maximize"
//               size={20}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Top Navigation Tabs */}
//       <View style={styles.topTabsContainer}>
//         {topTabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.topTab}
//             onPress={() => handleTopTabPress(tab)}
//           >
//             <Text
//               style={[
//                 styles.topTabText,
//                 activeTopTab === tab && styles.topTabTextActive,
//               ]}
//             >
//               {tab}
//             </Text>
//             {activeTopTab === tab && <View style={styles.activeIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       <ScrollView style={styles.scrollView}>
//         <View style={styles.content}>
//           <Text style={styles.sectionTitle}>Linked Bank Accounts</Text>

//           {bankAccounts.map((account, index) => (
//             <TouchableOpacity key={index} style={styles.bankItem}>
//               <View style={styles.bankLeft}>
//                 <View style={styles.bankIcon}>
//                   <CustomVectorIcons
//                     name="bank"
//                     size={24}
//                     color="#fff"
//                     iconSet="FontAwesome5"
//                   />
//                 </View>
//                 <View style={styles.bankInfo}>
//                   <Text style={styles.bankName}>{account.name}</Text>
//                   <Text style={styles.bankDetails}>{account.number}</Text>
//                 </View>
//               </View>
//               <View style={styles.bankRight}>
//                 <Text style={styles.bankBalance}>{account.balance}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}

//           <TouchableOpacity style={styles.addBankButton}>
//             <CustomVectorIcons
//               name="plus"
//               size={20}
//               color="#8a2be2"
//               iconSet="Feather"
//             />
//             <Text style={styles.addBankText}>Add Bank Account</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   headerCenter: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   headerIcon: {
//     padding: 8,
//     marginHorizontal: 4,
//   },
//   walletSelector: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1a1a1a',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   walletName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   topTabsContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//   },
//   topTab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   topTabText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   topTabTextActive: {
//     color: '#8a2be2',
//   },
//   activeIndicator: {
//     width: '100%',
//     height: 2,
//     backgroundColor: '#8a2be2',
//     borderRadius: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   content: {
//     padding: 16,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//   },
//   bankItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   bankLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   bankIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   bankInfo: {
//     flex: 1,
//   },
//   bankName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   bankDetails: {
//     color: '#888',
//     fontSize: 14,
//   },
//   bankRight: {
//     alignItems: 'flex-end',
//   },
//   bankBalance: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   addBankButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginTop: 8,
//   },
//   addBankText: {
//     color: '#8a2be2',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
// });

// export default BankAccountScreen;
