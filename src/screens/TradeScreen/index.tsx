import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const TradeScreen = () => {
  const coins = [
    {
      name: 'BTCUSDT',
      leverage: '100x',
      price: '109730.8',
      change: '+0.84%',
      positive: true,
      icon: 'bitcoin',
    },
    {
      name: 'ETHUSDT',
      leverage: '100x',
      price: '3847.80',
      change: '+0.01%',
      positive: true,
      icon: 'ethereum',
    },
    {
      name: 'SOLUSDT',
      leverage: '25x',
      price: '187.5800',
      change: '-0.62%',
      positive: false,
      icon: 'solana',
    },
    {
      name: 'BNBUSDT',
      leverage: '100x',
      price: '1082.500',
      change: '-1.80%',
      positive: false,
      icon: 'binance',
    },
  ];

  const miniPrograms = [
    { name: 'Binance', icon: 'binance' },
    { name: 'Ethereum', icon: 'ethereum' },
    { name: 'Polygon', icon: 'polygon' },
    { name: 'Solana', icon: 'solana' },
    { name: 'Avalanche', icon: 'avalanche' },
    { name: 'Cardano', icon: 'cardano' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Perpetuals</Text>
        <View style={styles.headerLogo}>
          <CustomVectorIcons name="aster" size={18} color="#E2B66D" />
          <Text style={styles.headerLogoText}>ASTER</Text>
        </View>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <TouchableOpacity style={styles.volumeButton}>
            <Text style={styles.volumeText}>Volume ▾</Text>
          </TouchableOpacity>
          <View style={styles.iconRow}>
            <CustomVectorIcons
              name="search"
              size={18}
              color="#ccc"
              style={styles.iconSpacing}
            />
            <CustomVectorIcons name="settings" size={18} color="#ccc" />
          </View>
        </View>

        {coins.map((item, index) => (
          <View key={index} style={styles.coinRow}>
            <View style={styles.coinInfo}>
              <CustomVectorIcons name={item.icon} size={22} color="#fff" />
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
          </View>
        ))}

        <TouchableOpacity>
          <Text style={styles.exploreMore}>Explore More ➜</Text>
        </TouchableOpacity>
      </View>

      {/* Mini Program Section */}
      <View style={styles.miniProgramContainer}>
        <Text style={styles.miniProgramTitle}>Exchange Mini Program</Text>
        <View style={styles.miniProgramBox}>
          {miniPrograms.map((item, index) => (
            <View key={index} style={styles.miniProgramItem}>
              <CustomVectorIcons name={item.icon} size={28} color="#fff" />
              <Text style={styles.miniProgramText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    paddingHorizontal: 16,
    paddingTop: 40,
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
  },
  coinChange: {
    fontSize: 12,
    marginTop: 2,
  },
  exploreMore: {
    textAlign: 'center',
    color: '#34C759',
    marginTop: 10,
    fontSize: 13,
  },
  miniProgramContainer: {
    marginTop: 20,
  },
  miniProgramTitle: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
  },
  miniProgramBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    paddingVertical: 12,
  },
  miniProgramItem: {
    alignItems: 'center',
  },
  miniProgramText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
