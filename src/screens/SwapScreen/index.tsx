import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const SwapScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Tabs */}
      <View style={styles.tabsContainer}>
        {['Swap', 'Bridge', 'Buy/Sell'].map((tab, i) => (
          <TouchableOpacity key={i}>
            <Text style={[styles.tabText, tab === 'Swap' && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pay Section */}
      <View style={styles.swapCard}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <CustomVectorIcons name="btc" size={28} color="#f7931a" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.coinSymbol}>BTC</Text>
              <Text style={styles.coinName}>Bitcoin</Text>
            </View>
          </View>
          <View style={styles.rightBox}>
            <CustomVectorIcons name="wallet" size={16} color="#777" />
            <Text style={styles.amountText}>0</Text>
            <TouchableOpacity>
              <Text style={styles.maxText}>Max</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.placeholderText}>Enter Amount</Text>
      </View>

      {/* Swap Icon (Center Floating) */}
      <View style={styles.centerIcon}>
        <View style={styles.swapIconCircle}>
          <CustomVectorIcons name="swap-vertical" size={18} color="#fff" />
        </View>
      </View>

      {/* Receive Section */}
      <View style={styles.swapCard}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <CustomVectorIcons name="eth" size={28} color="#627eea" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.coinSymbol}>ETH</Text>
              <Text style={styles.coinName}>Ethereum</Text>
            </View>
          </View>
          <View style={styles.rightBox}>
            <CustomVectorIcons name="wallet" size={16} color="#777" />
            <Text style={styles.amountText}>0</Text>
          </View>
        </View>
      </View>

      {/* Swap Button */}
      <TouchableOpacity style={styles.swapBtn}>
        <Text style={styles.swapBtnText}>Swap</Text>
      </TouchableOpacity>

      {/* Provider Info */}
      <View style={styles.providerCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.infoLabel}>Provider</Text>
          <View style={styles.row}>
            <CustomVectorIcons name="flash" size={14} color="#ffcc00" />
            <Text style={styles.infoValue}> Bridges</Text>
            <CustomVectorIcons
              name="right"
              size={12}
              color="#777"
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.infoLabel}>Slippage</Text>
          <Text style={styles.infoValue}>3%</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.infoLabel}>Rate</Text>
          <Text style={styles.infoValue}>1 BTC = 108998.827 USD</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoValue}>Instant</Text>
        </View>

        <View style={styles.expandArrow}>
          <CustomVectorIcons name="chevron-up" size={16} color="#777" />
        </View>
      </View>

      {/* Disclaimer Box */}
      <View style={styles.noticeBox}>
        <CustomVectorIcons name="alert" size={16} color="#ffcc00" />
        <Text style={styles.noticeText}>
          Due to exchange rate fluctuations, there may be a slight difference
          between the amount you actually receive and the estimated amount on
          this page.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F12',
    padding: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    paddingBottom: 8,
  },
  tabText: {
    color: '#777',
    fontSize: 15,
    fontWeight: '600',
  },
  activeTab: {
    color: '#9C6DFF',
    borderBottomWidth: 2,
    borderBottomColor: '#9C6DFF',
    paddingBottom: 6,
  },
  swapCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinSymbol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  coinName: {
    color: '#777',
    fontSize: 12,
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
  },
  maxText: {
    color: '#9C6DFF',
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '600',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
    marginTop: 8,
  },
  centerIcon: {
    alignItems: 'center',
    marginTop: -25,
    marginBottom: 5,
  },
  swapIconCircle: {
    backgroundColor: '#2C2C32',
    borderRadius: 20,
    padding: 10,
  },
  swapBtn: {
    backgroundColor: '#2C2C32',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
  },
  swapBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  providerCard: {
    backgroundColor: '#1A1A1E',
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
  },
  infoLabel: {
    color: '#777',
    fontSize: 13,
  },
  infoValue: {
    color: '#fff',
    fontSize: 13,
  },
  expandArrow: {
    alignItems: 'center',
    marginTop: 8,
  },
  noticeBox: {
    backgroundColor: '#1A1A1E',
    borderRadius: 10,
    padding: 12,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  noticeText: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 8,
    flex: 1,
    lineHeight: 16,
  },
});
