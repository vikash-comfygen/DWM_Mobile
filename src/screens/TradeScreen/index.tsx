import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const TradeScreen = () => {
  const coins = [
    {
      name: 'BTCUSDT',
      leverage: '100x',
      price: '109730.8',
      change: '+0.84%',
      positive: true,
      icon: 'bitcoin',
      iconSet: 'FontAwesome5',
    },
    {
      name: 'ETHUSDT',
      leverage: '100x',
      price: '3847.80',
      change: '+0.01%',
      positive: true,
      icon: 'ethereum',
      iconSet: 'FontAwesome5',
    },
    {
      name: 'SOLUSDT',
      leverage: '25x',
      price: '187.5800',
      change: '-0.62%',
      positive: false,
      icon: 'sun',
      iconSet: 'Feather',
    },
    {
      name: 'BNBUSDT',
      leverage: '100x',
      price: '1082.500',
      change: '-1.80%',
      positive: false,
      icon: 'dollar-sign',
      iconSet: 'Feather',
    },
  ];

  const miniPrograms = [
    {
      name: 'Binance',
      icon: 'activity',
      iconSet: 'Feather',
    },
    {
      name: 'Ethereum',
      icon: 'zap',
      iconSet: 'Feather',
    },
    {
      name: 'Polygon',
      icon: 'hexagon',
      iconSet: 'Feather',
    },
    {
      name: 'Solana',
      icon: 'sun',
      iconSet: 'Feather',
    },
    {
      name: 'Avalanche',
      icon: 'wind',
      iconSet: 'Feather',
    },
    {
      name: 'Cardano',
      icon: 'layers',
      iconSet: 'Feather',
    },
  ];

  // 🔹 Animation Refs
  const fadeValues = useRef(coins.map(() => new Animated.Value(0))).current;
  const miniFadeValues = useRef(
    miniPrograms.map(() => new Animated.Value(0)),
  ).current;

  // 🔹 Trigger animation when screen focused
  useFocusEffect(
    React.useCallback(() => {
      fadeValues.forEach((anim, index) => {
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          delay: index * 120,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });

      miniFadeValues.forEach((anim, index) => {
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          delay: index * 150 + 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    }, []),
  );

  const renderMiniProgramItem = ({ item, index }) => (
    <Animated.View
      style={[
        styles.miniProgramItem,
        {
          opacity: miniFadeValues[index],
          transform: [{ scale: miniFadeValues[index] }],
        },
      ]}
    >
      <View style={styles.miniProgramIconContainer}>
        <CustomVectorIcons
          name={item.icon}
          size={16}
          color="#fff"
          iconSet={item.iconSet}
        />
      </View>
      <Text style={styles.miniProgramText}>{item.name}</Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Perpetuals</Text>
          <View style={styles.headerLogo}>
            <CustomVectorIcons
              name="star"
              size={18}
              color="#E2B66D"
              iconSet="Feather"
            />
            <Text style={styles.headerLogoText}>ASTER</Text>
          </View>
        </View>

        {/* Coins Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TouchableOpacity style={styles.volumeButton}>
              <Text style={styles.volumeText}>Volume ▾</Text>
            </TouchableOpacity>
            <View style={styles.iconRow}>
              <TouchableOpacity style={styles.iconSpacing}>
                <CustomVectorIcons
                  name="search"
                  size={18}
                  color="#ccc"
                  iconSet="Feather"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomVectorIcons
                  name="settings"
                  size={18}
                  color="#ccc"
                  iconSet="Feather"
                />
              </TouchableOpacity>
            </View>
          </View>

          {coins.map((item, index) => (
            <Animated.View
              key={index}
              style={[
                styles.coinRow,
                {
                  opacity: fadeValues[index],
                  transform: [{ scale: fadeValues[index] }],
                },
              ]}
            >
              <View style={styles.coinInfo}>
                <View style={styles.coinIconContainer}>
                  <CustomVectorIcons
                    name={item.icon}
                    size={20}
                    color="#fff"
                    iconSet={item.iconSet}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <View style={styles.coinNameRow}>
                    <Text style={styles.coinName}>{item.name}</Text>
                    <View style={styles.leverageBox}>
                      <Text style={styles.leverageText}>{item.leverage}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.coinRight}>
                <Text style={styles.coinPrice}>{item.price}</Text>
                <Text
                  style={[
                    styles.coinChange,
                    { color: item.positive ? '#34C759' : '#FF453A' },
                  ]}
                >
                  {item.change}
                </Text>
              </View>
            </Animated.View>
          ))}

          <TouchableOpacity>
            <Text style={styles.exploreMore}>Explore More ➜</Text>
          </TouchableOpacity>
        </View>

        {/* Mini Programs Section */}
        <View style={styles.miniProgramContainer}>
          <Text style={styles.miniProgramTitle}>Exchange Mini Program</Text>
          <View style={styles.miniProgramBox}>
            <FlatList
              data={miniPrograms}
              renderItem={renderMiniProgramItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.miniProgramList}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoText: {
    color: '#E2B66D',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginTop: 16,
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  volumeButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  volumeText: {
    color: '#ccc',
    fontSize: 12,
  },
  iconRow: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginRight: 12,
  },
  coinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#2F2F2F',
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2a2a2bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  leverageBox: {
    backgroundColor: '#2A2A2A',
    marginLeft: 6,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  leverageText: {
    color: '#ccc',
    fontSize: 10,
  },
  coinRight: {
    alignItems: 'flex-end',
  },
  coinPrice: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  coinChange: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
  exploreMore: {
    textAlign: 'center',
    color: '#34C759',
    marginTop: 10,
    fontSize: 13,
    fontWeight: '500',
  },
  miniProgramContainer: {
    marginTop: 20,
  },
  miniProgramTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  miniProgramBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    paddingVertical: 16,
  },
  miniProgramList: {
    paddingHorizontal: 1,
    alignItems: 'center',
  },
  miniProgramItem: {
    alignItems: 'center',
    marginHorizontal: 12,
    minWidth: 30,
  },
  miniProgramIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#323133ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  miniProgramText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});
