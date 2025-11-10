import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const COINS = [
  {
    id: '1',
    name: 'Aave (AAVE)',
    price: '$1,354.464',
    change: '+2.06%',
    positive: true,
    icon: 'trending-up',
    iconSet: 'Feather',
  },
  {
    id: '2',
    name: 'Binance Coin (BNB)',
    price: '$1,714.066',
    change: '-0.85%',
    positive: false,
    icon: 'dollar-sign',
    iconSet: 'Feather',
  },
  {
    id: '3',
    name: 'Bitcoin (BTC)',
    price: '$757.521',
    change: '-1.45%',
    positive: false,
    icon: 'bitcoin',
    iconSet: 'FontAwesome5',
  },
  {
    id: '4',
    name: 'Bitcoin Cash (BCH)',
    price: '$1,787.747',
    change: '+3.60%',
    positive: true,
    icon: 'circle',
    iconSet: 'Feather',
  },
  {
    id: '5',
    name: 'Cardano (ADA)',
    price: '$1,367.579',
    change: '+1.13%',
    positive: true,
    icon: 'hexagon',
    iconSet: 'Feather',
  },
  {
    id: '6',
    name: 'Chainlink (LINK)',
    price: '$874.27',
    change: '-4.40%',
    positive: false,
    icon: 'link',
    iconSet: 'Feather',
  },
  {
    id: '7',
    name: 'Cosmos (ATOM)',
    price: '$1,411.16',
    change: '+1.11%',
    positive: true,
    icon: 'atom',
    iconSet: 'FontAwesome5',
  },
  {
    id: '8',
    name: 'Dogecoin (DOGE)',
    price: '$1,098.403',
    change: '+3.68%',
    positive: true,
    icon: 'dog',
    iconSet: 'FontAwesome5',
  },
  {
    id: '9',
    name: 'Ethereum (ETH)',
    price: '$742.686',
    change: '+0.80%',
    positive: true,
    icon: 'ethereum',
    iconSet: 'FontAwesome5',
  },
];

export default function ReceiveScreen({ navigation }) {
  const fadeAnims = useRef(COINS.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.stagger(
      100,
      fadeAnims.map(anim =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, []);

  const handleBackPress = () => {
    navigation.navigate('MainApp');
  };

  const renderItem = ({ item, index }) => (
    <Animated.View
      style={[
        styles.coinContainer,
        {
          opacity: fadeAnims[index],
          transform: [
            {
              translateY: fadeAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.leftSection}>
        <View style={styles.coinIconContainer}>
          <CustomVectorIcons
            name={item.icon}
            size={20}
            color="#fff"
            iconSet={item.iconSet}
          />
        </View>
        <View>
          <Text style={styles.coinName}>{item.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.coinPrice}>{item.price}</Text>
            <Text
              style={[
                styles.change,
                { color: item.positive ? '#4ADE80' : '#EF4444' },
              ]}
            >
              {item.change}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amount}>0</Text>
        <Text style={styles.value}>$0</Text>
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={handleBackPress}>
          <CustomVectorIcons
            name="arrow-left"
            size={20}
            color="#fff"
            iconSet="Feather"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Receive</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <CustomVectorIcons
          name="search"
          size={18}
          color="#8E8E93"
          iconSet="Feather"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Search coin..."
          placeholderTextColor="#8E8E93"
          style={styles.searchInput}
        />
      </View>

      {/* Coin List */}
      <FlatList
        data={COINS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingTop: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1C',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  coinName: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 2,
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinPrice: {
    color: '#A1A1AA',
    fontSize: 13,
    marginRight: 6,
  },
  change: {
    fontSize: 13,
    fontWeight: '500',
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amount: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  value: {
    color: '#A1A1AA',
    fontSize: 13,
  },
});
