// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from 'react-native';
// import CustomVectorIcons from '../../components/CustomVectorIcons';

// const cryptoIcons = [
//   { id: '1', name: 'bitcoin', iconSet: 'FontAwesome6', color: '#f7931a' },
//   { id: '2', name: 'ethereum', iconSet: 'FontAwesome6', color: '#627eea' },
//   {
//     id: '3',
//     name: 'solidity',
//     iconSet: 'MaterialCommunityIcons',
//     color: '#00f2ff',
//   },
//   { id: '4', name: 'tether', iconSet: 'FontAwesome6', color: '#26a17b' },
//   {
//     id: '5',
//     name: 'litecoin',
//     iconSet: 'MaterialCommunityIcons',
//     color: '#345c9c',
//   },
//   { id: '6', name: 'dogecoin', iconSet: 'FontAwesome6', color: '#c2a633' },
//   { id: '7', name: 'ripple', iconSet: 'FontAwesome6', color: '#00aae4' },
//   {
//     id: '8',
//     name: 'cardano',
//     iconSet: 'MaterialCommunityIcons',
//     color: '#0033ad',
//   },
// ];

// export default function NFTScreen() {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
//       {/* 🔹 Crypto Icons Horizontal Scroll */}
//       <FlatList
//         data={cryptoIcons}
//         keyExtractor={item => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.cryptoRow}
//         renderItem={({ item }) => (
//           <View style={styles.cryptoIconBox}>
//             <CustomVectorIcons
//               name={item.name}
//               iconSet={item.iconSet}
//               size={30}
//               color={item.color}
//             />
//           </View>
//         )}
//       />

//       {/* 🔹 Search Bar + Actions in One Row */}
//       <View style={styles.searchActionRow}>
//         {/* Search bar */}
//         <View style={styles.searchBar}>
//           <CustomVectorIcons
//             name="search"
//             iconSet="Feather"
//             size={18}
//             color="#888"
//             style={{ marginRight: 6 }}
//           />
//           <TextInput
//             placeholder="Search..."
//             placeholderTextColor="#888"
//             style={styles.searchInput}
//           />
//         </View>

//         {/* Receive */}
//         <TouchableOpacity style={[styles.actionButton, styles.receiveButton]}>
//           <Text style={styles.actionText}>Receive</Text>
//         </TouchableOpacity>

//         {/* More */}
//         <TouchableOpacity style={[styles.actionButton, styles.moreButton]}>
//           <CustomVectorIcons
//             name="more-horizontal"
//             iconSet="Feather"
//             color="#fff"
//             size={18}
//           />
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111114',
//   },
//   scroll: {
//     padding: 16,
//   },
//   cryptoRow: {
//     paddingVertical: 10,
//   },
//   cryptoIconBox: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#1c1c1e',
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 12,
//   },
//   searchActionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1c1c1e',
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     flex: 1,
//     height: 40,
//     marginRight: 8,
//   },
//   searchInput: {
//     color: '#fff',
//     flex: 1,
//     fontSize: 14,
//   },
//   actionButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 12,
//     height: 40,
//     borderRadius: 12,
//   },
//   receiveButton: {
//     backgroundColor: '#2a2a2e',
//   },
//   moreButton: {
//     backgroundColor: '#444',
//     marginLeft: 6,
//   },
//   actionText: {
//     color: '#fff',
//     fontSize: 14,
//   },
// });

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

// Fixed crypto icons with correct icon names
const cryptoIcons = [
  { id: '1', name: 'bitcoin', iconSet: 'FontAwesome5', color: '#f7931a' },
  { id: '2', name: 'ethereum', iconSet: 'FontAwesome5', color: '#627eea' },
  { id: '3', name: 'usd', iconSet: 'FontAwesome5', color: '#00f2ff' },
  {
    id: '4',
    name: 'money-bill-wave',
    iconSet: 'FontAwesome5',
    color: '#26a17b',
  },
  { id: '5', name: 'gem', iconSet: 'FontAwesome5', color: '#345c9c' },
  { id: '6', name: 'rocket', iconSet: 'FontAwesome5', color: '#c2a633' },
  { id: '7', name: 'star', iconSet: 'FontAwesome5', color: '#00aae4' },
  { id: '8', name: 'crown', iconSet: 'FontAwesome5', color: '#0033ad' },
];

// Alternative simple icons if above don't work
const simpleCryptoIcons = [
  { id: '1', name: 'bitcoin', iconSet: 'FontAwesome5', color: '#f7931a' },
  { id: '2', name: 'ethereum', iconSet: 'FontAwesome5', color: '#627eea' },
  { id: '3', name: 'dollar-sign', iconSet: 'Feather', color: '#00f2ff' },
  { id: '4', name: 'credit-card', iconSet: 'Feather', color: '#26a17b' },
  { id: '5', name: 'trending-up', iconSet: 'Feather', color: '#345c9c' },
  { id: '6', name: 'award', iconSet: 'Feather', color: '#c2a633' },
  { id: '7', name: 'zap', iconSet: 'Feather', color: '#00aae4' },
  { id: '8', name: 'shield', iconSet: 'Feather', color: '#0033ad' },
];

export default function NFTScreen() {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  // Crypto icons animations
  const cryptoIconAnims = useRef(
    simpleCryptoIcons.map(() => new Animated.Value(0)),
  ).current;

  // Search row animations
  const searchAnim = useRef(new Animated.Value(0)).current;
  const receiveAnim = useRef(new Animated.Value(0)).current;
  const moreAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Main animation sequence
    Animated.sequence([
      // Fade in entire screen
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // Crypto icons staggered animation
      Animated.stagger(
        80,
        cryptoIconAnims.map(anim =>
          Animated.parallel([
            Animated.timing(anim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ]),
        ),
      ),

      // Search row elements staggered
      Animated.stagger(100, [
        Animated.timing(searchAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(receiveAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(moreAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const renderCryptoIcon = ({ item, index }) => (
    <Animated.View
      style={[
        styles.cryptoIconBox,
        {
          opacity: cryptoIconAnims[index],
          transform: [
            {
              translateY: cryptoIconAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
            {
              scale: cryptoIconAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
          ],
        },
      ]}
    >
      <CustomVectorIcons
        name={item.name}
        iconSet={item.iconSet}
        size={24}
        color={item.color}
      />
    </Animated.View>
  );

  return (
    <Animated.ScrollView
      style={[styles.container, { opacity: fadeAnim }]}
      contentContainerStyle={styles.scroll}
    >
      {/* 🔹 Crypto Icons Horizontal Scroll */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Cryptos</Text>
        <Animated.FlatList
          data={simpleCryptoIcons}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cryptoRow}
          renderItem={renderCryptoIcon}
        />
      </View>

      {/* 🔹 Search Bar + Actions in One Row */}
      <Animated.View
        style={[
          styles.searchActionRow,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: slideUpAnim,
              },
            ],
          },
        ]}
      >
        {/* Search bar */}
        <Animated.View
          style={[
            styles.searchBar,
            {
              opacity: searchAnim,
              transform: [
                {
                  translateX: searchAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <CustomVectorIcons
            name="search"
            iconSet="Feather"
            size={18}
            color="#888"
            style={{ marginRight: 6 }}
          />
          <TextInput
            placeholder="Search NFTs, collections..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </Animated.View>

        {/* Receive Button */}
        <Animated.View
          style={{
            opacity: receiveAnim,
            transform: [
              {
                translateY: receiveAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
              {
                scale: receiveAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity style={[styles.actionButton, styles.receiveButton]}>
            <CustomVectorIcons
              name="download"
              iconSet="Feather"
              size={16}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.actionText}>Receive</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* More Button */}
        <Animated.View
          style={{
            opacity: moreAnim,
            transform: [
              {
                translateY: moreAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
              {
                scale: moreAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity style={[styles.actionButton, styles.moreButton]}>
            <CustomVectorIcons
              name="more-horizontal"
              iconSet="Feather"
              color="#fff"
              size={18}
            />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* 🔹 Placeholder for NFT Content */}
      <Animated.View
        style={[
          styles.placeholderSection,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: slideUpAnim,
              },
            ],
          },
        ]}
      >
        <Text style={styles.placeholderTitle}>Your NFT Collection</Text>
        <View style={styles.placeholderBox}>
          <CustomVectorIcons
            name="image"
            iconSet="Feather"
            size={40}
            color="#666"
          />
          <Text style={styles.placeholderText}>No NFTs yet</Text>
          <Text style={styles.placeholderSubText}>
            Start building your collection by minting or purchasing NFTs
          </Text>
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111114',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  cryptoRow: {
    paddingVertical: 10,
  },
  cryptoIconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#1c1c1e',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: -35,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchInput: {
    color: '#fff',
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 12,
  },
  receiveButton: {
    backgroundColor: '#2a2a2e',
    borderWidth: 1,
    borderColor: '#444',
  },
  moreButton: {
    backgroundColor: '#444',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#555',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  placeholderSection: {
    marginTop: 20,
  },
  placeholderTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  placeholderBox: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  placeholderSubText: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
