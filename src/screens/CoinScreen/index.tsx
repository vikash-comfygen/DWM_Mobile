import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const categories = [
  'Watchlist',
  'All',
  'Hot',
  'New',
  'Gainers',
  'Losers',
  'Infra',
  'xStocks',
  'PoW',
];

const CoinScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Tabs */}
      <View style={styles.topTabs}>
        {['Coin', 'NFT', 'News'].map((tab, i) => (
          <TouchableOpacity key={i}>
            <Text style={[styles.tabText, tab === 'Coin' && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Category Buttons */}
      <View style={styles.categories}>
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
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
        ))}
      </View>

      {/* Recommendation Card */}
      <View style={styles.recommendationCard}>
        <Text style={styles.recommendationTitle}>Recommendation</Text>
        <View style={styles.coinRow}>
          {['SFP', 'ETH', 'XRP'].map((coin, i) => (
            <View key={i} style={styles.coinItem}>
              <CustomVectorIcons
                name={coin.toLowerCase()}
                size={30}
                color="#fff"
              />
              <Text style={styles.coinText}>{coin}</Text>
            </View>
          ))}
          {['BTC', 'SOL', 'BNB'].map((coin, i) => (
            <View key={i} style={styles.coinItem}>
              <CustomVectorIcons
                name={coin.toLowerCase()}
                size={30}
                color="#fff"
              />
              <Text style={styles.coinText}>{coin}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add To Favorites</Text>
        </TouchableOpacity>
      </View>

      {/* News Cards */}
      <View style={styles.newsContainer}>
        <View style={styles.newsCard}>
          <Text style={styles.newsTitle}>
            NEO ignites the robotics track, what Robotic projects are worth
            paying attention to?
          </Text>
          <Text style={styles.newsDesc}>
            The day before yesterday, Norwegian humanoid robot company 1X
            Technologies officially released the NEO robot...
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
        </View>

        <View style={styles.newsCard}>
          <Text style={styles.newsTitle}>
            Ethereum shows new momentum as DeFi projects surge
          </Text>
          <Text style={styles.newsDesc}>
            Several DeFi protocols are experiencing higher liquidity inflows,
            signaling renewed investor confidence.
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
        </View>
      </View>
    </ScrollView>
  );
};

export default CoinScreen;

const styles = StyleSheet.create({
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
    fontSize: 14,
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
