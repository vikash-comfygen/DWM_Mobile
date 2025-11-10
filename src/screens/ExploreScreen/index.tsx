import React, { useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import IMAGES from '../../assets/images';

const featuredCoins = [
  { name: 'Binance', icon: 'dollar-sign', iconSet: 'Feather' },
  { name: 'Ethereum', icon: 'ethereum', iconSet: 'FontAwesome5' },
  { name: 'Polygon', icon: 'hexagon', iconSet: 'Feather' },
  { name: 'Solana', icon: 'sun', iconSet: 'Feather' },
  { name: 'Avalanche', icon: 'mountain', iconSet: 'MaterialCommunityIcons' },
];

const cexList = [
  {
    name: 'Binance',
    desc: 'Spot, futures & savings',
    icon: 'dollar-sign',
    iconSet: 'Feather',
  },
  {
    name: 'MEXC',
    desc: 'Spot and futures trading',
    icon: 'trending-up',
    iconSet: 'Feather',
  },
  {
    name: 'BingX',
    desc: 'Spot and futures trading',
    icon: 'bar-chart',
    iconSet: 'Feather',
  },
  {
    name: 'OKX',
    desc: 'Spot, futures & staking',
    icon: 'layers',
    iconSet: 'Feather',
  },
  {
    name: 'Bybit',
    desc: 'Futures & options',
    icon: 'activity',
    iconSet: 'Feather',
  },
];

const dexList = [
  {
    name: 'Uniswap',
    desc: 'Decentralized trading',
    icon: 'refresh-cw',
    iconSet: 'Feather',
  },
  {
    name: 'PancakeSwap',
    desc: 'BSC DEX platform',
    icon: 'circle',
    iconSet: 'Feather',
  },
  {
    name: 'SushiSwap',
    desc: 'Multi-chain DEX',
    icon: 'wind',
    iconSet: 'Feather',
  },
  {
    name: 'Curve',
    desc: 'Stablecoin DEX',
    icon: 'trending-up',
    iconSet: 'Feather',
  },
  {
    name: 'Balancer',
    desc: 'Automated portfolio',
    icon: 'sliders',
    iconSet: 'Feather',
  },
];

const ExploreScreen = () => {
  /** Animation Values */
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  const searchAnim = useRef(new Animated.Value(0)).current;
  const bannerAnim = useRef(new Animated.Value(0)).current;
  const featuredTitleAnim = useRef(new Animated.Value(0)).current;
  const featuredItemAnims = useRef(
    featuredCoins.map(() => new Animated.Value(0)),
  ).current;

  const cexTitleAnim = useRef(new Animated.Value(0)).current;
  const cexItemAnims = useRef(cexList.map(() => new Animated.Value(0))).current;

  const dexTitleAnim = useRef(new Animated.Value(0)).current;
  const dexItemAnims = useRef(dexList.map(() => new Animated.Value(0))).current;

  /** Run Animation when Screen Focuses */
  useFocusEffect(
    useCallback(() => {
      // Reset all animations
      fadeAnim.setValue(0);
      slideUpAnim.setValue(30);
      searchAnim.setValue(0);
      bannerAnim.setValue(0);
      featuredTitleAnim.setValue(0);
      featuredItemAnims.forEach(anim => anim.setValue(0));
      cexTitleAnim.setValue(0);
      cexItemAnims.forEach(anim => anim.setValue(0));
      dexTitleAnim.setValue(0);
      dexItemAnims.forEach(anim => anim.setValue(0));

      // Animation Sequence
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(searchAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.parallel([
          Animated.timing(bannerAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(featuredTitleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),

        Animated.stagger(
          100,
          featuredItemAnims.map(anim =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ),
        ),

        Animated.parallel([
          Animated.timing(cexTitleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.stagger(
            80,
            cexItemAnims.map(anim =>
              Animated.timing(anim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
              }),
            ),
          ),
        ]),

        Animated.parallel([
          Animated.timing(dexTitleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.stagger(
            80,
            dexItemAnims.map(anim =>
              Animated.timing(anim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
              }),
            ),
          ),
        ]),
      ]).start();

      return () => fadeAnim.stopAnimation();
    }, []),
  );

  /** Render UI */
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.ScrollView
        style={[styles.container, { opacity: fadeAnim }]}
        showsVerticalScrollIndicator={false}
      >
        {/* 🔍 Search Bar */}
        <Animated.View
          style={[
            styles.searchContainer,
            {
              opacity: searchAnim,
              transform: [
                {
                  translateY: searchAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
                {
                  scale: searchAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <CustomVectorIcons
            name="search"
            size={18}
            color="#aaa"
            iconSet="Feather"
          />
          <TextInput
            placeholder="Type coin name..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </Animated.View>

        {/* 🌟 Featured Section */}
        <Animated.View
          style={[
            styles.featuredCard,
            { opacity: fadeAnim, transform: [{ translateY: slideUpAnim }] },
          ]}
        >
          <Animated.View
            style={[
              styles.bannerContainer,
              {
                opacity: bannerAnim,
                transform: [
                  {
                    scale: bannerAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              source={IMAGES.banner}
              resizeMode="cover"
              style={styles.bannerImg}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.featuredHeader,
              {
                opacity: featuredTitleAnim,
                transform: [
                  {
                    translateX: featuredTitleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.featuredTitle}>Featured</Text>
            <TouchableOpacity>
              <Text style={styles.showMore}>Show More</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.featuredRow}>
            {featuredCoins.map((coin, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.featuredItem,
                  {
                    opacity: featuredItemAnims[i],
                    transform: [
                      {
                        translateY: featuredItemAnims[i].interpolate({
                          inputRange: [0, 1],
                          outputRange: [30, 0],
                        }),
                      },
                      {
                        scale: featuredItemAnims[i].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <CustomVectorIcons
                  name={coin.icon}
                  size={24}
                  color="#fff"
                  iconSet={coin.iconSet}
                />
                <Text style={styles.featuredText}>{coin.name}</Text>
              </Animated.View>
            ))}
          </View>
        </Animated.View>

        {/* 🏦 CEX Section */}
        <View style={styles.section}>
          <Animated.Text
            style={[
              styles.sectionTitle,
              {
                opacity: cexTitleAnim,
                transform: [
                  {
                    translateX: cexTitleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            CEX Mini-program
          </Animated.Text>

          <View style={styles.listContainer}>
            {cexList.map((item, i) => (
              <Animated.View
                key={i}
                style={{
                  opacity: cexItemAnims[i],
                  transform: [
                    {
                      translateX: cexItemAnims[i].interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 0],
                      }),
                    },
                  ],
                }}
              >
                <TouchableOpacity style={styles.listItem}>
                  <View style={styles.iconTextRow}>
                    <CustomVectorIcons
                      name={item.icon}
                      size={28}
                      color="#fff"
                      iconSet={item.iconSet}
                    />
                    <View>
                      <Text style={styles.exchangeName}>{item.name}</Text>
                      <Text style={styles.exchangeDesc}>{item.desc}</Text>
                    </View>
                  </View>
                  <CustomVectorIcons
                    name="chevron-right"
                    size={14}
                    color="#777"
                    iconSet="Feather"
                  />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* 🌐 DEX Section */}
        <View style={styles.section}>
          <Animated.Text
            style={[
              styles.sectionTitle,
              {
                opacity: dexTitleAnim,
                transform: [
                  {
                    translateX: dexTitleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            Decentralized Exchanges
          </Animated.Text>

          <View style={styles.listContainer}>
            {dexList.map((item, i) => (
              <Animated.View
                key={i}
                style={{
                  opacity: dexItemAnims[i],
                  transform: [
                    {
                      translateX: dexItemAnims[i].interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 0],
                      }),
                    },
                  ],
                }}
              >
                <TouchableOpacity style={styles.listItem}>
                  <View style={styles.iconTextRow}>
                    <CustomVectorIcons
                      name={item.icon}
                      size={28}
                      color="#fff"
                      iconSet={item.iconSet}
                    />
                    <View>
                      <Text style={styles.exchangeName}>{item.name}</Text>
                      <Text style={styles.exchangeDesc}>{item.desc}</Text>
                    </View>
                  </View>
                  <CustomVectorIcons
                    name="chevron-right"
                    size={14}
                    color="#777"
                    iconSet="Feather"
                  />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0F0F12' },
  container: { flex: 1, backgroundColor: '#0F0F12', padding: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C20',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchInput: { color: '#fff', fontSize: 14, marginLeft: 8, flex: 1 },
  featuredCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  bannerContainer: {
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  bannerImg: { width: '100%', height: '100%' },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredTitle: { color: '#fff', fontSize: 15, fontWeight: '600' },
  showMore: { color: '#9C6DFF', fontSize: 13 },
  featuredRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  featuredItem: { alignItems: 'center' },
  featuredText: { color: '#ccc', fontSize: 12, marginTop: 4 },
  section: { marginBottom: 20, marginTop: 20 },
  sectionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  listContainer: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    paddingVertical: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomColor: '#222',
    borderBottomWidth: 0.5,
  },
  iconTextRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  exchangeName: { color: '#fff', fontSize: 14, fontWeight: '600' },
  exchangeDesc: { color: '#888', fontSize: 12 },
});
