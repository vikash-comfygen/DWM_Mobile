import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const MoneyInvestShowing = ({ navigation }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const coins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '0',
      change: '$0',
      amount: '0.2',
      value: '$5,000',
      changeType: 'positive',
      change2: '+0.65%',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '0',
      change: '$0',
      amount: '1.5',
      value: '$4,446.23',
      changeType: 'positive',
      change2: '+0.65%',
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      price: '0',
      change: '$0',
      amount: '1000',
      value: '$1,000',
      changeType: 'negative',
      change2: '+0.65%',
    },
    {
      name: 'BNB',
      symbol: 'BNB',
      price: '0',
      change: '$0',
      amount: '3',
      value: '$1,736.73',
      changeType: 'positive',
      change2: '+0.65%',
    },
  ];

  const quickActions = [
    {
      name: 'Send',
      icon: 'arrow-up',
      iconSet: 'Feather',
      screen: 'SendScreen',
      description: 'Send crypto to others',
    },
    {
      name: 'Receive',
      icon: 'arrow-down',
      iconSet: 'Feather',
      screen: 'ReceiveScreen',
      description: 'Receive crypto from others',
    },
    {
      name: 'Buy',
      icon: 'plus-circle',
      iconSet: 'Feather',
      screen: 'BuySellScreen',
      description: 'Buy crypto with fiat',
    },
    {
      name: 'Gas Station',
      icon: 'droplet',
      iconSet: 'Feather',
      screen: 'GasStationScreen',
      description: 'Manage gas fees',
    },
    {
      name: 'More',
      icon: 'more-horizontal',
      iconSet: 'Feather',
      screen: 'MoreOptionsScreen',
      description: 'More options',
    },
  ];

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  // Balance section animations
  const balanceAnim = useRef(new Animated.Value(0)).current;

  // Quick actions animations
  const actionAnims = useRef(
    quickActions.map(() => new Animated.Value(0)),
  ).current;

  // Search section animations
  const searchAnim = useRef(new Animated.Value(0)).current;
  const filterAnim = useRef(new Animated.Value(0)).current;
  const moreAnim = useRef(new Animated.Value(0)).current;

  // Coin list animations
  const coinAnims = useRef(coins.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Main animation sequence
    Animated.sequence([
      // Fade in entire screen
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      // Balance section
      Animated.parallel([
        Animated.timing(balanceAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideUpAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // Quick actions staggered
      Animated.stagger(
        80,
        actionAnims.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ),
      ),

      // Search section elements
      Animated.stagger(100, [
        Animated.timing(searchAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(filterAnim, {
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

      // Coin list staggered
      Animated.stagger(
        120,
        coinAnims.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ),
      ),
    ]).start();
  }, []);

  // In MoneyInvestShowing.js, try this approach:
  const handleActionPress = (screenName, actionName) => {
    console.log(`Navigating to ${screenName} for ${actionName}`);

    // If navigation.navigate doesn't work, try resetting or replacing
    navigation.reset({
      index: 0,
      routes: [{ name: screenName, params: { action: actionName } }],
    });
  };

  // Handle coin item press
  const handleCoinPress = coin => {
    console.log(`Coin pressed: ${coin.name}`);
    navigation.navigate('CoinDetailScreen', { coin });
  };

  const renderCoinContent = () => (
    <View style={styles.coinList}>
      {coins.map((coin, index) => (
        <Animated.View
          key={index}
          style={{
            opacity: coinAnims[index],
            transform: [
              {
                translateX: coinAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0],
                }),
              },
              {
                scale: coinAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            style={styles.coinItem}
            onPress={() => handleCoinPress(coin)}
          >
            <View style={styles.coinLeft}>
              <Animated.View
                style={[
                  styles.coinIcon,
                  {
                    transform: [
                      {
                        scale: coinAnims[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 1],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <CustomVectorIcons
                  name="bitcoin"
                  size={24}
                  color="#fff"
                  iconSet="FontAwesome5"
                />
              </Animated.View>
              <View style={styles.coinInfo}>
                <View style={styles.coinNameRow}>
                  <Text style={styles.coinName}>{coin.name}</Text>
                  <Text style={styles.coinSymbol}>({coin.symbol})</Text>
                </View>
                <View style={styles.coinValueRow}>
                  <Text style={styles.coinValue}>{coin.value}</Text>
                  <Text
                    style={[
                      styles.coinChange,
                      coin.changeType === 'positive'
                        ? styles.positiveChange
                        : styles.negativeChange,
                    ]}
                  >
                    {`  ${coin.change2}`}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.coinRight}>
              <Text style={styles.coinPrice}>{coin.price}</Text>
              <Text style={styles.coinChange2}>{coin.change}</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );

  return (
    <Animated.ScrollView
      style={[styles.scrollView, { opacity: fadeAnim }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Balance Section */}
      <Animated.View
        style={[
          styles.balanceSection,
          {
            opacity: balanceAnim,
            transform: [
              {
                translateY: slideUpAnim,
              },
              {
                scale: balanceAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)}>
            <CustomVectorIcons
              name={balanceVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceAmount}>
          {balanceVisible ? '$0' : '******'}
        </Text>
        <Text style={styles.btcAmount}>
          {balanceVisible ? '0 BTC' : '******'}
        </Text>
      </Animated.View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {quickActions.map((action, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: actionAnims[index],
              transform: [
                {
                  translateY: actionAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
                {
                  scale: actionAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleActionPress(action.screen, action.name)}
            >
              <View style={styles.actionIcon}>
                <CustomVectorIcons
                  name={action.icon}
                  size={24}
                  color="#fff"
                  iconSet={action.iconSet}
                />
              </View>
              <Text style={styles.actionText}>{action.name}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Search Section */}
      <Animated.View
        style={[
          styles.searchHeader,
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
        <Animated.View
          style={{
            flex: 3,
            opacity: searchAnim,
            transform: [
              {
                translateX: searchAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <View style={styles.searchContainer}>
            <CustomVectorIcons
              name="search"
              size={18}
              color="#666"
              iconSet="Feather"
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search coins..."
              placeholderTextColor="#666"
            />
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            opacity: filterAnim,
            transform: [
              {
                translateY: filterAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
              {
                scale: filterAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All</Text>
            <CustomVectorIcons
              name="chevron-down"
              size={14}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </Animated.View>

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
          <TouchableOpacity style={styles.moreButton}>
            <CustomVectorIcons
              name="more-vertical"
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Coin Content */}
      {renderCoinContent()}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  balanceSection: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 14,
    marginRight: 8,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  btcAmount: {
    color: '#fff',
    fontSize: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
    padding: 0,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    minWidth: 60,
  },
  filterText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 6,
  },
  moreButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinList: {
    paddingHorizontal: 16,
  },
  coinItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
  },
  coinLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  coinInfo: {
    flex: 1,
  },
  coinNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  coinName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  coinSymbol: {
    color: '#888',
    fontSize: 14,
  },
  coinValue: {
    color: '#888',
    fontSize: 14,
  },
  coinRight: {
    alignItems: 'flex-end',
  },
  coinPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  coinChange2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  coinChange: {
    fontSize: 14,
    fontWeight: '500',
  },
  positiveChange: {
    color: '#ec6003ff',
  },
  negativeChange: {
    color: '#F44336',
  },
  coinValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MoneyInvestShowing;
