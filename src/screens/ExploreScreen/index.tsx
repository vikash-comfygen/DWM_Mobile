import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const featuredCoins = ['Binance', 'Ethereum', 'Polygon', 'Solana', 'Avalanche'];

const cexList = [
  { name: 'Binance', desc: 'Spot, futures & savings' },
  { name: 'MEXC', desc: 'Spot and futures trading' },
  { name: 'BingX', desc: 'Spot and futures trading' },
  { name: 'OKX', desc: 'Spot, futures & staking' },
  { name: 'Bybit', desc: 'Futures & options' },
];

const dexList = [
  { name: 'Binance', desc: 'Spot, futures & savings' },
  { name: 'MEXC', desc: 'Spot and futures trading' },
  { name: 'BingX', desc: 'Spot and futures trading' },
  { name: 'OKX', desc: 'Spot, futures & staking' },
  { name: 'Bybit', desc: 'Futures & options' },
];

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <CustomVectorIcons name="search" size={18} color="#aaa" />
        <TextInput
          placeholder="Type coin name..."
          placeholderTextColor="#777"
          style={styles.searchInput}
        />
      </View>

      {/* Featured Section */}
      <View style={styles.featuredCard}>
        {/* Image Banner */}
        <View style={styles.bannerContainer}>
          {/* <Image
            source={{
              uri: 'https://i.ibb.co/gjCdB2y/bitcoin-banner.png', // Replace with your own image
            }}
            resizeMode="cover"
            style={styles.bannerImg}
          /> */}
        </View>

        {/* Featured Row */}
        <View style={styles.featuredHeader}>
          <Text style={styles.featuredTitle}>Featured</Text>
          <TouchableOpacity>
            <Text style={styles.showMore}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuredRow}>
          {featuredCoins.map((coin, index) => (
            <View key={index} style={styles.featuredItem}>
              <CustomVectorIcons
                name={coin.toLowerCase()}
                size={24}
                color="#fff"
              />
              <Text style={styles.featuredText}>{coin}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CEX Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CEX Mini-program</Text>
        <View style={styles.listContainer}>
          {cexList.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <View style={styles.iconTextRow}>
                <CustomVectorIcons
                  name={item.name.toLowerCase()}
                  size={28}
                  color="#fff"
                />
                <View>
                  <Text style={styles.exchangeName}>{item.name}</Text>
                  <Text style={styles.exchangeDesc}>{item.desc}</Text>
                </View>
              </View>
              <CustomVectorIcons name="right" size={14} color="#777" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* DEX Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Decentralized Exchanges</Text>
        <View style={styles.listContainer}>
          {dexList.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <View style={styles.iconTextRow}>
                <CustomVectorIcons
                  name={item.name.toLowerCase()}
                  size={28}
                  color="#fff"
                />
                <View>
                  <Text style={styles.exchangeName}>{item.name}</Text>
                  <Text style={styles.exchangeDesc}>{item.desc}</Text>
                </View>
              </View>
              <CustomVectorIcons name="right" size={14} color="#777" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F12',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C20',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  },
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
  bannerImg: {
    width: '100%',
    height: '100%',
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  showMore: {
    color: '#9C6DFF',
    fontSize: 13,
  },
  featuredRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  featuredItem: {
    alignItems: 'center',
  },
  featuredText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
  },
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
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  exchangeName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  exchangeDesc: {
    color: '#888',
    fontSize: 12,
  },
});
