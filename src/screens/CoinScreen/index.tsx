// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import CustomVectorIcons from '../../components/CustomVectorIcons';

// const categories = [
//   'Watchlist',
//   'All',
//   'Hot',
//   'New',
//   'Gainers',
//   'Losers',
//   'Infra',
//   'xStocks',
//   'PoW',
// ];

// const CoinScreen = () => {
//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Top Tabs */}
//       <View style={styles.topTabs}>
//         {['Coin', 'NFT', 'News'].map((tab, i) => (
//           <TouchableOpacity key={i}>
//             <Text style={[styles.tabText, tab === 'Coin' && styles.activeTab]}>
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Category Buttons */}
//       <View style={styles.categories}>
//         {categories.map((cat, i) => (
//           <TouchableOpacity
//             key={i}
//             style={[
//               styles.categoryBtn,
//               cat === 'Watchlist' && styles.categoryActive,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.categoryText,
//                 cat === 'Watchlist' && styles.categoryTextActive,
//               ]}
//             >
//               {cat}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Recommendation Card */}
//       <View style={styles.recommendationCard}>
//         <Text style={styles.recommendationTitle}>Recommendation</Text>
//         <View style={styles.coinRow}>
//           {['SFP', 'ETH', 'XRP'].map((coin, i) => (
//             <View key={i} style={styles.coinItem}>
//               <CustomVectorIcons
//                 name={coin.toLowerCase()}
//                 size={30}
//                 color="#fff"
//               />
//               <Text style={styles.coinText}>{coin}</Text>
//             </View>
//           ))}
//           {['BTC', 'SOL', 'BNB'].map((coin, i) => (
//             <View key={i} style={styles.coinItem}>
//               <CustomVectorIcons
//                 name={coin.toLowerCase()}
//                 size={30}
//                 color="#fff"
//               />
//               <Text style={styles.coinText}>{coin}</Text>
//             </View>
//           ))}
//         </View>
//         <TouchableOpacity style={styles.addBtn}>
//           <Text style={styles.addBtnText}>Add To Favorites</Text>
//         </TouchableOpacity>
//       </View>

//       {/* News Cards */}
//       <View style={styles.newsContainer}>
//         <View style={styles.newsCard}>
//           <Text style={styles.newsTitle}>
//             NEO ignites the robotics track, what Robotic projects are worth
//             paying attention to?
//           </Text>
//           <Text style={styles.newsDesc}>
//             The day before yesterday, Norwegian humanoid robot company 1X
//             Technologies officially released the NEO robot...
//           </Text>
//           <View style={styles.coinTags}>
//             <View style={styles.coinTag}>
//               <Text style={styles.coinTagText}>NEO +0.19%</Text>
//             </View>
//             <View style={styles.coinTag}>
//               <Text style={styles.coinTagText}>BTC +0.19%</Text>
//             </View>
//           </View>
//           <Text style={styles.timeText}>1H Ago</Text>
//         </View>

//         <View style={styles.newsCard}>
//           <Text style={styles.newsTitle}>
//             Ethereum shows new momentum as DeFi projects surge
//           </Text>
//           <Text style={styles.newsDesc}>
//             Several DeFi protocols are experiencing higher liquidity inflows,
//             signaling renewed investor confidence.
//           </Text>
//           <View style={styles.coinTags}>
//             <View style={styles.coinTag}>
//               <Text style={styles.coinTagText}>ETH -0.45%</Text>
//             </View>
//             <View style={styles.coinTag}>
//               <Text style={styles.coinTagText}>USDT +0.02%</Text>
//             </View>
//           </View>
//           <Text style={styles.timeText}>2H Ago</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default CoinScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0F0F12',
//     padding: 16,
//   },
//   topTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//     borderBottomColor: '#222',
//     borderBottomWidth: 1,
//     paddingBottom: 8,
//   },
//   tabText: {
//     color: '#777',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   activeTab: {
//     color: '#9C6DFF',
//     borderBottomColor: '#9C6DFF',
//     borderBottomWidth: 2,
//     paddingBottom: 4,
//   },
//   categories: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 20,
//   },
//   categoryBtn: {
//     backgroundColor: '#1C1C20',
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     borderRadius: 8,
//     margin: 4,
//   },
//   categoryActive: {
//     backgroundColor: '#9C6DFF20',
//     borderColor: '#9C6DFF',
//     borderWidth: 1,
//   },
//   categoryText: {
//     color: '#999',
//     fontSize: 13,
//   },
//   categoryTextActive: {
//     color: '#9C6DFF',
//   },
//   recommendationCard: {
//     backgroundColor: '#1A1A1E',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 20,
//   },
//   recommendationTitle: {
//     color: '#fff',
//     fontSize: 16,
//     marginBottom: 12,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   coinRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   coinItem: {
//     alignItems: 'center',
//     margin: 10,
//   },
//   coinText: {
//     color: '#fff',
//     marginTop: 4,
//     fontSize: 14,
//   },
//   addBtn: {
//     backgroundColor: '#9C6DFF',
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addBtnText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   newsContainer: {
//     gap: 12,
//   },
//   newsCard: {
//     backgroundColor: '#1A1A1E',
//     borderRadius: 12,
//     padding: 14,
//   },
//   newsTitle: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 6,
//   },
//   newsDesc: {
//     color: '#aaa',
//     fontSize: 12,
//     marginBottom: 8,
//   },
//   coinTags: {
//     flexDirection: 'row',
//     gap: 8,
//     marginBottom: 6,
//   },
//   coinTag: {
//     backgroundColor: '#222',
//     borderRadius: 6,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//   },
//   coinTagText: {
//     color: '#9CFF9C',
//     fontSize: 11,
//   },
//   timeText: {
//     color: '#777',
//     fontSize: 11,
//   },
// });

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const categories = [
  'Watchlist',
  'All',
  'Hot',
  'New',
  'PoW',
  'Gainers',
  'Losers',
  'Infra',
  'xStocks',
];

const CoinScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      console.log('Screen focused — starting animations...');

      // Reset all animated values to 0
      fadeAnim.setValue(0);
      topTabsAnim.setValue(0);
      categoryAnims.forEach(anim => anim.setValue(0));
      recommendationAnim.setValue(0);
      coinItemAnims.forEach(anim => anim.setValue(0));
      addBtnAnim.setValue(0);
      newsCardAnims.forEach(anim => anim.setValue(0));

      // Main animation sequence
      Animated.sequence([
        // Fade in entire screen
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),

        // Top tabs animation
        Animated.timing(topTabsAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),

        // Categories staggered animation
        Animated.stagger(
          60,
          categoryAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ),
        ),

        // Recommendation card
        Animated.parallel([
          Animated.timing(recommendationAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.stagger(
            80,
            coinItemAnims.map(anim =>
              Animated.timing(anim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
              }),
            ),
          ),
        ]),

        // Add button animation
        Animated.timing(addBtnAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),

        // News cards staggered
        Animated.stagger(
          150,
          newsCardAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ),
        ),
      ]).start(({ finished }) => {
        console.log('Animation sequence finished:', finished);
      });

      // Cleanup (optional if you want to stop ongoing animations)
      return () => {
        console.log('Screen unfocused — stopping animations');
        fadeAnim.stopAnimation();
      };
    }, []),
  );

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  // Top tabs animation
  const topTabsAnim = useRef(new Animated.Value(0)).current;

  // Categories animations
  const categoryAnims = useRef(
    categories.map(() => new Animated.Value(0)),
  ).current;

  // Recommendation card animations
  const recommendationAnim = useRef(new Animated.Value(0)).current;
  const coinItemAnims = useRef(
    [1, 2, 3, 4, 5, 6].map(() => new Animated.Value(0)),
  ).current;
  const addBtnAnim = useRef(new Animated.Value(0)).current;

  // News cards animations
  const newsCardAnims = useRef([1, 2].map(() => new Animated.Value(0))).current;

  useEffect(() => {
    console.log('Animation starting...');

    Animated.sequence([
      // Your animation code
    ]).start(({ finished }) => {
      console.log('Animation finished:', finished);
    });
  }, []);

  useEffect(() => {
    // Main animation sequence
    Animated.sequence([
      // Fade in entire screen
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // Top tabs animation
      Animated.timing(topTabsAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // Categories staggered animation
      Animated.stagger(
        60,
        categoryAnims.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ),
      ),

      // Recommendation card
      Animated.parallel([
        Animated.timing(recommendationAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.stagger(
          80,
          coinItemAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ),
        ),
      ]),

      // Add button animation
      Animated.timing(addBtnAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // News cards staggered
      Animated.stagger(
        150,
        newsCardAnims.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ),
      ),
    ]).start();
  }, []);

  // Fixed coin icons with proper icon sets
  const coinIcons = [
    { name: 'SFP', icon: 'star', iconSet: 'Feather' },
    { name: 'ETH', icon: 'ethereum', iconSet: 'FontAwesome5' },
    { name: 'XRP', icon: 'circle', iconSet: 'FontAwesome5' },
    { name: 'BTC', icon: 'bitcoin', iconSet: 'FontAwesome5' },
    { name: 'SOL', icon: 'sun', iconSet: 'Feather' },
    { name: 'BNB', icon: 'dollar-sign', iconSet: 'Feather' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.ScrollView
        style={[styles.container, { opacity: fadeAnim }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Tabs */}
        <Animated.View
          style={[
            styles.topTabs,
            {
              opacity: topTabsAnim,
              transform: [
                {
                  translateY: topTabsAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {['Coin', 'NFT', 'News'].map((tab, i) => (
            <TouchableOpacity key={i}>
              <Text
                style={[styles.tabText, tab === 'Coin' && styles.activeTab]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* Category Buttons */}
        <View style={styles.categories}>
          {categories.map((cat, i) => (
            <Animated.View
              key={i}
              style={{
                opacity: categoryAnims[i],
                transform: [
                  {
                    scale: categoryAnims[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  },
                  {
                    translateY: categoryAnims[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [30, 0],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                style={[
                  styles.categoryBtn,
                  cat === 'Watchlist' && styles.categoryActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    cat === 'Watchlist' && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Recommendation Card */}
        <Animated.View
          style={[
            styles.recommendationCard,
            {
              opacity: recommendationAnim,
              transform: [
                {
                  translateY: recommendationAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                  }),
                },
                {
                  scale: recommendationAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.recommendationTitle}>Recommendation</Text>
          <View style={styles.coinRow}>
            {coinIcons.map((coin, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.coinItem,
                  {
                    opacity: coinItemAnims[i],
                    transform: [
                      {
                        scale: coinItemAnims[i].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        }),
                      },
                      {
                        rotate: coinItemAnims[i].interpolate({
                          inputRange: [0, 1],
                          outputRange: ['-180deg', '0deg'],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <CustomVectorIcons
                  name={coin.icon}
                  size={30}
                  color="#fff"
                  iconSet={coin.iconSet}
                />
                <Text style={styles.coinText}>{coin.name}</Text>
              </Animated.View>
            ))}
          </View>
          <Animated.View
            style={{
              opacity: addBtnAnim,
              transform: [
                {
                  scale: addBtnAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              style={styles.addBtn}
              // onPress={() => navigation.navigate('TestAnimation')}
            >
              <Text style={styles.addBtnText}>Add To Favorites</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

        {/* News Cards */}
        <View style={styles.newsContainer}>
          {newsCardAnims.map((anim, index) => (
            <Animated.View
              key={index}
              style={[
                styles.newsCard,
                {
                  opacity: anim,
                  transform: [
                    {
                      translateX: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 0],
                      }),
                    },
                    {
                      scale: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.95, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
              {index === 0 ? (
                <>
                  <Text style={styles.newsTitle}>
                    NEO ignites the robotics track, what Robotic projects are
                    worth paying attention to?
                  </Text>
                  <Text style={styles.newsDesc}>
                    The day before yesterday, Norwegian humanoid robot company
                    1X Technologies officially released the NEO robot...
                  </Text>
                  <View style={styles.coinTags}>
                    <View style={styles.coinTag}>
                      <Text style={styles.coinTagText}>NEO +0.19%</Text>
                    </View>
                    <View style={styles.coinTag}>
                      <Text style={styles.coinTagText}>BTC +0.19%</Text>
                    </View>
                  </View>
                  <Text style={styles.timeText}>1H Ago</Text>
                </>
              ) : (
                <>
                  <Text style={styles.newsTitle}>
                    Ethereum shows new momentum as DeFi projects surge
                  </Text>
                  <Text style={styles.newsDesc}>
                    Several DeFi protocols are experiencing higher liquidity
                    inflows, signaling renewed investor confidence.
                  </Text>
                  <View style={styles.coinTags}>
                    <View style={styles.coinTag}>
                      <Text style={styles.coinTagText}>ETH -0.45%</Text>
                    </View>
                    <View style={styles.coinTag}>
                      <Text style={styles.coinTagText}>USDT +0.02%</Text>
                    </View>
                  </View>
                  <Text style={styles.timeText}>2H Ago</Text>
                </>
              )}
            </Animated.View>
          ))}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default CoinScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0F12',
  },
  container: {
    flex: 1,
    backgroundColor: '#0F0F12',
    padding: 16,
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  tabText: {
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
  },
  activeTab: {
    color: '#9C6DFF',
    borderBottomColor: '#9C6DFF',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryBtn: {
    backgroundColor: '#1C1C20',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    margin: 4,
  },
  categoryActive: {
    backgroundColor: '#9C6DFF20',
    borderColor: '#9C6DFF',
    borderWidth: 1,
  },
  categoryText: {
    color: '#999',
    fontSize: 13,
  },
  categoryTextActive: {
    color: '#9C6DFF',
  },
  recommendationCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  recommendationTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  coinRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  coinItem: {
    alignItems: 'center',
    margin: 10,
  },
  coinText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 10,
  },
  addBtn: {
    backgroundColor: '#9C6DFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  newsContainer: {
    gap: 12,
  },
  newsCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 14,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  newsDesc: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 8,
  },
  coinTags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  coinTag: {
    backgroundColor: '#222',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  coinTagText: {
    color: '#9CFF9C',
    fontSize: 11,
  },
  timeText: {
    color: '#777',
    fontSize: 11,
  },
});
