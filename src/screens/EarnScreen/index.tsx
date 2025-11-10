// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import CustomVectorIcons from '../../components/CustomVectorIcons';
// import IMAGES from '../../assets/images';

// export default function EarnScreen() {
//   const [balanceVisible, setBalanceVisible] = useState(true);

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
//       {/* Equity Value Section */}
//       <View style={styles.card}>
//         {/* Title with eye icon centered */}
//         <View style={styles.rowCenter}>
//           <Text style={styles.cardTitle}>Equity Value</Text>
//           <TouchableOpacity
//             onPress={() => setBalanceVisible(!balanceVisible)}
//             style={{ marginLeft: 6 }}
//           >
//             <CustomVectorIcons
//               name={balanceVisible ? 'eye' : 'eye-off'}
//               color="#aaa"
//               size={18}
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Values */}
//         <Text style={styles.valueText}>{balanceVisible ? '$0' : '******'}</Text>
//         <Text style={styles.subValueText}>
//           {balanceVisible ? '= 0 BTC' : '******'}
//         </Text>
//       </View>

//       {/* Recommend Section */}
//       <View style={styles.card}>
//         <View style={styles.rowBetween}>
//           <View style={styles.rowCenter}>
//             <CustomVectorIcons
//               name="crown"
//               iconSet="FontAwesome5"
//               color="#ffcc00"
//               size={16}
//               style={{ marginRight: 6 }}
//             />
//             <Text style={styles.sectionTitle}>Recommend</Text>
//           </View>
//         </View>

//         <View style={styles.rowBetween}>
//           <View style={styles.recommendBox}>
//             <Image
//               source={IMAGES.thetre}
//               style={styles.image}
//               resizeMode="contain"
//             />
//             <Text style={styles.aprText}>6.43% APR</Text>
//           </View>
//           <View style={styles.recommendBox}>
//             <CustomVectorIcons
//               name="bitcoin"
//               iconSet="FontAwesome6"
//               color="#f7931a"
//               size={20}
//             />
//             <Text style={styles.aprText}>4.12% APR</Text>
//           </View>
//           <View style={styles.recommendBox}>
//             <Image
//               source={IMAGES.solana}
//               style={styles.image}
//               resizeMode="contain"
//             />
//             <Text style={styles.aprText}>5.27% APR</Text>
//           </View>
//         </View>
//       </View>

//       {/* Stack Section */}
//       <View style={styles.card}>
//         <View style={styles.rowCenter}>
//           <CustomVectorIcons
//             name="layers"
//             iconSet="Feather"
//             color="#ff9500"
//             size={18}
//             style={{ marginRight: 6 }}
//           />
//           <Text style={styles.sectionTitle}>Stack</Text>
//         </View>

//         <View style={[styles.rowBetween, { marginTop: 10 }]}>
//           <View style={styles.stackItem}>
//             <Image
//               source={IMAGES.thetre}
//               style={styles.smallImage}
//               resizeMode="contain"
//             />
//             <Text style={styles.aprTextSmall}>6.43%</Text>
//           </View>
//           <View style={styles.stackItem}>
//             <CustomVectorIcons
//               name="bitcoin"
//               iconSet="FontAwesome6"
//               color="#f7931a"
//               size={20}
//             />
//             <Text style={styles.aprTextSmall}>4.12%</Text>
//           </View>
//           <View style={styles.stackItem}>
//             <Image
//               source={IMAGES.solana}
//               style={styles.smallImage}
//               resizeMode="contain"
//             />
//             <Text style={styles.aprTextSmall}>5.27%</Text>
//           </View>
//         </View>
//       </View>

//       {/* Popular Yield Dapps */}
//       <View style={styles.card}>
//         <View style={styles.rowCenter}>
//           <CustomVectorIcons
//             name="flame"
//             iconSet="Ionicons"
//             color="#ff6b00"
//             size={18}
//             style={{ marginRight: 6 }}
//           />
//           <Text style={styles.sectionTitle}>Popular Yield Dapps</Text>
//         </View>

//         {/* Binance Section */}
//         <View style={[styles.card, styles.innerCard]}>
//           <View style={styles.rowCenter}>
//             <CustomVectorIcons
//               name="dollar-sign"
//               iconSet="Feather"
//               color="#f3ba2f"
//               size={22}
//               style={{ marginRight: 6 }}
//             />
//             <Text style={[styles.sectionTitle, { color: '#fff' }]}>
//               Binance
//             </Text>
//           </View>

//           <Text style={styles.description}>
//             From Binance Earn, supporting hundreds of tokens with flexible terms
//             and high returns.
//           </Text>

//           <View style={[styles.rowBetween, { marginTop: 8 }]}>
//             <View style={styles.stackItem}>
//               <Image
//                 source={IMAGES.thetre}
//                 style={styles.smallImage}
//                 resizeMode="contain"
//               />
//               <Text style={styles.aprTextSmall}>5.27%</Text>
//             </View>
//             {/* <View style={styles.stackItem}>
//               <CustomVectorIcons
//                 name="dollar-sign"
//                 iconSet="Feather"
//                 color="#00ffa2"
//                 size={20}
//               />
//               <Text style={styles.aprTextSmall}>6.43%</Text>
//             </View> */}
//             <View style={styles.stackItem}>
//               <CustomVectorIcons
//                 name="bitcoin"
//                 iconSet="FontAwesome6"
//                 color="#f7931a"
//                 size={20}
//               />
//               <Text style={styles.aprTextSmall}>4.12%</Text>
//             </View>
//             <View style={styles.stackItem}>
//               <Image
//                 source={IMAGES.solana}
//                 style={styles.smallImage}
//                 resizeMode="contain"
//               />
//               <Text style={styles.aprTextSmall}>5.27%</Text>
//             </View>
//             {/* <View style={styles.stackItem}>
//               <CustomVectorIcons
//                 name="ethereum"
//                 iconSet="FontAwesome6"
//                 color="#00f2ff"
//                 size={20}
//               />
//               <Text style={styles.aprTextSmall}>5.27%</Text>
//             </View> */}
//           </View>
//         </View>

//         {/* SFPLUS Section */}
//         <View style={[styles.card, styles.innerCard]}>
//           <View style={styles.rowCenter}>
//             <CustomVectorIcons
//               name="star"
//               iconSet="Feather"
//               color="#f3ba2f"
//               size={22}
//               style={{ marginRight: 6 }}
//             />
//             <Text style={[styles.sectionTitle, { color: '#fff' }]}>SFPLUS</Text>
//           </View>

//           <Text style={styles.description}>
//             Stake for exclusive airdrop rewards.
//           </Text>

//           <View style={[styles.rowBetween, { marginTop: 8 }]}>
//             <View style={styles.stackItem}>
//               {/* <Image
//                 source={IMAGES.thetre}
//                 style={styles.smallImage}
//                 resizeMode="contain"
//               /> */}
//               <Text style={styles.aprTextSmall}>
//                 Rewards <Text style={styles.number}>518K+</Text>
//               </Text>
//             </View>
//             <View style={styles.stackItem}>
//               {/* <CustomVectorIcons
//                 name="bitcoin"
//                 iconSet="FontAwesome6"
//                 color="#f7931a"
//                 size={20}
//               /> */}
//               <Text style={styles.aprTextSmall}>
//                 Stakers <Text style={styles.number}>12.8+</Text>
//               </Text>
//             </View>
//             <View style={styles.stackItem}>
//               {/* <Image
//                 source={IMAGES.solana}
//                 style={styles.smallImage}
//                 resizeMode="contain"
//               /> */}
//               <Text style={styles.aprTextSmall}>
//                 TVL <Text style={styles.number}> 3.0M+</Text>
//               </Text>
//             </View>
//             {/* <View style={styles.stackItem}>
//               <CustomVectorIcons
//                 name="ethereum"
//                 iconSet="FontAwesome6"
//                 color="#00f2ff"
//                 size={20}
//               />
//               <Text style={styles.aprTextSmall}>5.27%</Text>
//             </View> */}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0c0c0e',
//   },
//   scroll: {
//     padding: 16,
//     paddingBottom: 40,
//   },
//   card: {
//     backgroundColor: '#1b1b1e',
//     borderRadius: 12,
//     padding: 14,
//     marginBottom: 14,
//   },
//   innerCard: {
//     backgroundColor: '#242427',
//     marginTop: 10,
//   },
//   cardTitle: {
//     color: '#ccc',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   valueText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '700',
//     marginTop: 4,
//   },
//   subValueText: {
//     color: '#888',
//     fontSize: 12,
//     marginTop: 2,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   rowCenter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   recommendBox: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#5c5c5e',
//     borderRadius: 10,
//     paddingVertical: 10,
//     alignItems: 'center',
//     marginHorizontal: 4,
//   },
//   aprText: {
//     color: '#fff',
//     marginTop: 4,
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   aprTextSmall: {
//     color: '#fff',
//     fontSize: 11,
//     fontWeight: '500',
//     marginLeft: 6,
//   },
//   stackItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#2a2a2e',
//     borderRadius: 8,
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//   },
//   description: {
//     color: '#aaa',
//     fontSize: 13,
//     marginTop: 8,
//     lineHeight: 18,
//   },
//   image: {
//     width: 24,
//     height: 24,
//   },
//   smallImage: {
//     width: 20,
//     height: 20,
//   },
//   number: {
//     color: 'red',
//   },
// });

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import IMAGES from '../../assets/images';

export default function EarnScreen() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  // Section animations
  const equityAnim = useRef(new Animated.Value(0)).current;
  const recommendAnim = useRef(new Animated.Value(0)).current;
  const stackAnim = useRef(new Animated.Value(0)).current;
  const popularAnim = useRef(new Animated.Value(0)).current;

  // Card animations for Popular Yield Dapps
  const binanceCardAnim = useRef(new Animated.Value(0)).current;
  const sfplusCardAnim = useRef(new Animated.Value(0)).current;

  // Recommend boxes animations
  const recommendBoxAnims = useRef(
    [1, 2, 3].map(() => new Animated.Value(0)),
  ).current;

  // Stack items animations
  const stackItemAnims = useRef(
    [1, 2, 3].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    // Main animation sequence
    Animated.sequence([
      // Equity section first
      Animated.parallel([
        Animated.timing(equityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // Recommend section with boxes
      Animated.parallel([
        Animated.timing(recommendAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.stagger(
          100,
          recommendBoxAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ),
        ),
      ]),

      // Stack section with items
      Animated.parallel([
        Animated.timing(stackAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.stagger(
          80,
          stackItemAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ),
        ),
      ]),

      // Popular section
      Animated.timing(popularAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // Cards inside popular section (staggered)
      Animated.stagger(150, [
        Animated.timing(binanceCardAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(sfplusCardAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.ScrollView
      style={[styles.container, { opacity: fadeAnim }]}
      contentContainerStyle={styles.scroll}
    >
      {/* Equity Value Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: equityAnim,
            transform: [
              {
                translateY: equityAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        {/* Title with eye icon centered */}
        <View style={styles.rowCenter}>
          <Text style={styles.cardTitle}>Equity Value</Text>
          <TouchableOpacity
            onPress={() => setBalanceVisible(!balanceVisible)}
            style={{ marginLeft: 6 }}
          >
            <CustomVectorIcons
              name={balanceVisible ? 'eye' : 'eye-off'}
              color="#aaa"
              size={18}
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>

        {/* Values */}
        <Text style={styles.valueText}>{balanceVisible ? '$0' : '******'}</Text>
        <Text style={styles.subValueText}>
          {balanceVisible ? '= 0 BTC' : '******'}
        </Text>
      </Animated.View>

      {/* Recommend Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: recommendAnim,
            transform: [
              {
                translateY: recommendAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.rowBetween}>
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="crown"
              iconSet="FontAwesome5"
              color="#ffcc00"
              size={16}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.sectionTitle}>Recommend</Text>
          </View>
        </View>

        <View style={styles.rowBetween}>
          {recommendBoxAnims.map((anim, index) => (
            <Animated.View
              key={index}
              style={[
                styles.recommendBox,
                {
                  opacity: anim,
                  transform: [
                    {
                      scale: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
              {index === 0 && (
                <Image
                  source={IMAGES.thetre}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
              {index === 1 && (
                <CustomVectorIcons
                  name="bitcoin"
                  iconSet="FontAwesome6"
                  color="#f7931a"
                  size={20}
                />
              )}
              {index === 2 && (
                <Image
                  source={IMAGES.solana}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
              <Text style={styles.aprText}>
                {index === 0 ? '6.43%' : index === 1 ? '4.12%' : '5.27%'} APR
              </Text>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Stack Section */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: stackAnim,
            transform: [
              {
                translateY: stackAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.rowCenter}>
          <CustomVectorIcons
            name="layers"
            iconSet="Feather"
            color="#ff9500"
            size={18}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.sectionTitle}>Stack</Text>
        </View>

        <View style={[styles.rowBetween, { marginTop: 10 }]}>
          {stackItemAnims.map((anim, index) => (
            <Animated.View
              key={index}
              style={[
                styles.stackItem,
                {
                  opacity: anim,
                  transform: [
                    {
                      translateX: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-30, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              {index === 0 && (
                <Image
                  source={IMAGES.thetre}
                  style={styles.smallImage}
                  resizeMode="contain"
                />
              )}
              {index === 1 && (
                <CustomVectorIcons
                  name="bitcoin"
                  iconSet="FontAwesome6"
                  color="#f7931a"
                  size={20}
                />
              )}
              {index === 2 && (
                <Image
                  source={IMAGES.solana}
                  style={styles.smallImage}
                  resizeMode="contain"
                />
              )}
              <Text style={styles.aprTextSmall}>
                {index === 0 ? '6.43%' : index === 1 ? '4.12%' : '5.27%'}
              </Text>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Popular Yield Dapps */}
      <Animated.View
        style={[
          styles.card,
          {
            opacity: popularAnim,
            transform: [
              {
                translateY: popularAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.rowCenter}>
          <CustomVectorIcons
            name="flame"
            iconSet="Ionicons"
            color="#ff6b00"
            size={18}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.sectionTitle}>Popular Yield Dapps</Text>
        </View>

        {/* Binance Section */}
        <Animated.View
          style={[
            styles.card,
            styles.innerCard,
            {
              opacity: binanceCardAnim,
              transform: [
                {
                  translateY: binanceCardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
                {
                  scale: binanceCardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="dollar-sign"
              iconSet="Feather"
              color="#f3ba2f"
              size={22}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>
              Binance
            </Text>
          </View>

          <Text style={styles.description}>
            From Binance Earn, supporting hundreds of tokens with flexible terms
            and high returns.
          </Text>

          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <View style={styles.stackItem}>
              <Image
                source={IMAGES.thetre}
                style={styles.smallImage}
                resizeMode="contain"
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View>
            <View style={styles.stackItem}>
              <CustomVectorIcons
                name="bitcoin"
                iconSet="FontAwesome6"
                color="#f7931a"
                size={20}
              />
              <Text style={styles.aprTextSmall}>4.12%</Text>
            </View>
            <View style={styles.stackItem}>
              <Image
                source={IMAGES.solana}
                style={styles.smallImage}
                resizeMode="contain"
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View>
          </View>
        </Animated.View>

        {/* SFPLUS Section */}
        <Animated.View
          style={[
            styles.card,
            styles.innerCard,
            {
              opacity: sfplusCardAnim,
              transform: [
                {
                  translateY: sfplusCardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
                {
                  scale: sfplusCardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="star"
              iconSet="Feather"
              color="#f3ba2f"
              size={22}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>SFPLUS</Text>
          </View>

          <Text style={styles.description}>
            Stake for exclusive airdrop rewards.
          </Text>

          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <View style={styles.stackItem}>
              <Text style={styles.aprTextSmall}>
                Rewards <Text style={styles.number}>518K+</Text>
              </Text>
            </View>
            <View style={styles.stackItem}>
              <Text style={styles.aprTextSmall}>
                Stakers <Text style={styles.number}>12.8+</Text>
              </Text>
            </View>
            <View style={styles.stackItem}>
              <Text style={styles.aprTextSmall}>
                TVL <Text style={styles.number}> 3.0M+</Text>
              </Text>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0e',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1b1b1e',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  innerCard: {
    backgroundColor: '#242427',
    marginTop: 10,
  },
  cardTitle: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '500',
  },
  valueText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },
  subValueText: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#5c5c5e',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  aprText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
  },
  aprTextSmall: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
    marginLeft: 6,
  },
  stackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2e',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  description: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
  image: {
    width: 24,
    height: 24,
  },
  smallImage: {
    width: 20,
    height: 20,
  },
  number: {
    color: 'red',
  },
});
