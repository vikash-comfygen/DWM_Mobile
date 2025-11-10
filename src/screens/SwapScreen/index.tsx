import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const SwapScreen = () => {
  const [showDetails, setShowDetails] = useState(true);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const cardAnim = useRef(new Animated.Value(0)).current;
  const providerAnim = useRef(new Animated.Value(0)).current;
  const noticeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      fadeAnim.setValue(0);
      cardAnim.setValue(0);
      providerAnim.setValue(0);
      noticeAnim.setValue(0);

      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.stagger(100, [
          Animated.timing(cardAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(providerAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(noticeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }, []),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.ScrollView
        style={[styles.container, { opacity: fadeAnim }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Tabs */}
        <View style={styles.tabsContainer}>
          {['Swap', 'Bridge', 'Buy/Sell'].map((tab, i) => (
            <TouchableOpacity key={i}>
              <Text
                style={[styles.tabText, tab === 'Swap' && styles.activeTab]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pay Section */}
        <Animated.View
          style={[
            styles.swapCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <CustomVectorIcons
                name="logo-bitcoin"
                size={28}
                color="#f7931a"
                iconSet="Ionicons"
              />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.coinSymbol}>BTC</Text>
                <Text style={styles.coinName}>Bitcoin</Text>
              </View>
            </View>
            <View style={styles.rightBox}>
              <CustomVectorIcons
                name="wallet"
                size={16}
                color="#777"
                iconSet="Feather"
              />
              <Text style={styles.amountText}>0</Text>
              <TouchableOpacity>
                <Text style={styles.maxText}>Max</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.placeholderText}>Enter Amount</Text>
        </Animated.View>

        {/* Swap Icon (Center Floating) */}
        <View style={styles.centerIcon}>
          <View style={styles.swapIconCircle}>
            <CustomVectorIcons
              name="swap-vertical"
              size={18}
              color="#fff"
              iconSet="Ionicons"
            />
          </View>
        </View>

        {/* Receive Section */}
        <Animated.View
          style={[
            styles.swapCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <CustomVectorIcons
                name="logo-ethereum"
                size={28}
                color="#627eea"
                iconSet="Ionicons"
              />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.coinSymbol}>ETH</Text>
                <Text style={styles.coinName}>Ethereum</Text>
              </View>
            </View>
            <View style={styles.rightBox}>
              <CustomVectorIcons
                name="wallet"
                size={16}
                color="#777"
                iconSet="Feather"
              />
              <Text style={styles.amountText}>0</Text>
            </View>
          </View>
        </Animated.View>

        {/* Swap Button */}
        <Animated.View
          style={[
            styles.swapBtn,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity>
            <Text style={styles.swapBtnText}>Swap</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Provider Info */}
        <Animated.View
          style={[
            styles.providerCard,
            {
              opacity: providerAnim,
              transform: [
                {
                  translateY: providerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.rowBetween}>
            <Text style={styles.infoLabel}>Provider</Text>
            <View style={styles.row}>
              <CustomVectorIcons
                name="flash"
                size={14}
                color="#ffcc00"
                iconSet="Ionicons"
              />
              <Text style={styles.infoValue}> Bridges</Text>
              <CustomVectorIcons
                name="chevron-forward"
                size={12}
                color="#777"
                iconSet="Ionicons"
                style={{ marginLeft: 4 }}
              />
            </View>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.infoLabel}>Slippage</Text>
            <Text style={styles.infoValue}>3%</Text>
          </View>

          {/* Rate & Time (Toggle Visibility) */}
          {showDetails && (
            <>
              <View style={styles.rowBetween}>
                <Text style={styles.infoLabel}>Rate</Text>
                <Text style={styles.infoValue}>1 BTC = 108998.827 USD</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.infoLabel}>Time</Text>
                <Text style={styles.infoValue}>Instant</Text>
              </View>
            </>
          )}

          <TouchableOpacity
            style={styles.expandArrow}
            onPress={() => setShowDetails(!showDetails)}
          >
            <CustomVectorIcons
              name={showDetails ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="#777"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </Animated.View>

        {/* Disclaimer Box */}
        <Animated.View
          style={[
            styles.noticeBox,
            {
              opacity: noticeAnim,
              transform: [
                {
                  translateY: noticeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <CustomVectorIcons
            name="alert-circle"
            size={16}
            color="#ffcc00"
            iconSet="Feather"
          />
          <Text style={styles.noticeText}>
            Due to exchange rate fluctuations, there may be a slight difference
            between the amount you actually receive and the estimated amount on
            this page.
          </Text>
        </Animated.View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default SwapScreen;

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
