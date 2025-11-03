import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const { width } = Dimensions.get('window');

const WalletScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Wallet');
  const [activeTopTab, setActiveTopTab] = useState('Coin');
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
    { name: 'Send', icon: 'arrow-up', iconSet: 'Feather' },
    { name: 'Receive', icon: 'arrow-down', iconSet: 'Feather' },
    { name: 'Buy', icon: 'plus-circle', iconSet: 'Feather' },
    { name: 'Gas Station', icon: 'droplet', iconSet: 'Feather' },
    { name: 'More', icon: 'more-horizontal', iconSet: 'Feather' },
  ];

  const topTabs = ['Coin', 'Bank', 'Earn', 'NFT'];
  const bottomTabs = [
    { name: 'Wallet', icon: 'credit-card', iconSet: 'Feather' },
    { name: 'Market', icon: 'bar-chart-2', iconSet: 'Feather' },
    { name: 'Explore', icon: 'compass', iconSet: 'Feather' },
    { name: 'Swap', icon: 'repeat', iconSet: 'Feather' },
    { name: 'Trade', icon: 'trending-up', iconSet: 'Feather' },
  ];

  const handleTopTabPress = tab => {
    setActiveTopTab(tab);

    // Navigate to different screens based on the tab
    switch (tab) {
      case 'Bank':
        navigation.navigate('BankAccountScreen');
        break;
      case 'Earn':
        navigation.navigate('EarnScreen');
        break;
      case 'NFT':
        navigation.navigate('NFTScreen');
        break;
      default:
        // For Coin tab, stay on the same screen
        setActiveTopTab('Coin');
        break;
    }
  };

  const renderCoinContent = () => (
    <View style={styles.coinList}>
      {coins.map((coin, index) => (
        <TouchableOpacity key={index} style={styles.coinItem}>
          <View style={styles.coinLeft}>
            <View style={styles.coinIcon}>
              <CustomVectorIcons
                name="bitcoin"
                size={24}
                color="#fff"
                iconSet="FontAwesome5"
              />
            </View>
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
      ))}
    </View>
  );

  const renderContent = () => {
    // Only show content for Coin tab, others will navigate to separate screens
    if (activeTopTab === 'Coin') {
      return renderCoinContent();
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerIcon}>
            <CustomVectorIcons
              name="settings"
              size={22}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <CustomVectorIcons
              name="bell"
              size={22}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerCenter}>
          <TouchableOpacity style={styles.walletSelector}>
            <Text style={styles.walletName}>Wallet01-652</Text>
            <CustomVectorIcons
              name="chevron-down"
              size={16}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <CustomVectorIcons
              name="copy"
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <CustomVectorIcons
              name="maximize"
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Navigation Tabs */}
      <View style={styles.topTabsContainer}>
        {topTabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.topTab}
            onPress={() => handleTopTabPress(tab)}
          >
            <Text
              style={[
                styles.topTabText,
                activeTopTab === tab && styles.topTabTextActive,
              ]}
            >
              {tab}
            </Text>
            {activeTopTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Balance Section */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <TouchableOpacity
              onPress={() => setBalanceVisible(!balanceVisible)}
            >
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
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
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
          ))}
        </View>

        {/* Search Section */}
        <View style={styles.searchHeader}>
          <View style={styles.searchContainer}>
            <CustomVectorIcons
              name="search"
              size={18}
              color="#666"
              iconSet="Feather"
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All</Text>
            <CustomVectorIcons
              name="chevron-down"
              size={14}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.moreButton}>
            <CustomVectorIcons
              name="more-vertical"
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>

        {/* Dynamic Content based on Top Tab - Only shows Coin content */}
        {renderContent()}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {bottomTabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomTab}
            onPress={() => setActiveTab(tab.name)}
          >
            <CustomVectorIcons
              name={tab.icon}
              size={24}
              color={activeTab === tab.name ? '#8a2be2' : '#666'}
              iconSet={tab.iconSet}
            />
            <Text
              style={[
                styles.bottomTabText,
                { color: activeTab === tab.name ? '#8a2be2' : '#666' },
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerIcon: {
    padding: 8,
    marginHorizontal: 4,
  },
  walletSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  walletName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  scrollView: {
    flex: 1,
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
  // Top Tabs Styles
  topTabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  topTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  topTabText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  topTabTextActive: {
    color: '#8a2be2',
  },
  activeIndicator: {
    width: '100%',
    height: 2,
    backgroundColor: '#8a2be2',
    borderRadius: 1,
  },
  // Search Section - Fixed Box Sizes
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 3, // Bigger width for search
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
    flex: 1, // Smaller width for All
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
    width: 50, // Fixed small width for More
    height: 50,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Content Containers
  contentContainer: {
    paddingHorizontal: 16,
  },
  // Coin List Styles
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
  // Bank Styles
  bankItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
  },
  bankLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bankIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  bankDetails: {
    color: '#888',
    fontSize: 14,
  },
  bankRight: {
    alignItems: 'flex-end',
  },
  bankBalance: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  addBankButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginTop: 8,
  },
  addBankText: {
    color: '#8a2be2',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  // Earn Styles
  earnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
  },
  earnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  earnIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  earnInfo: {
    flex: 1,
  },
  earnName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  earnApy: {
    color: '#888',
    fontSize: 14,
  },
  earnRight: {
    alignItems: 'flex-end',
  },
  earnAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  earnValue: {
    color: '#888',
    fontSize: 14,
  },
  exploreEarnButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginTop: 8,
  },
  exploreEarnText: {
    color: '#8a2be2',
    fontSize: 16,
    fontWeight: '600',
  },
  // NFT Styles
  nftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
  },
  nftLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nftIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  nftInfo: {
    flex: 1,
  },
  nftName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  nftCollection: {
    color: '#888',
    fontSize: 14,
  },
  nftRight: {
    alignItems: 'flex-end',
  },
  nftValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  browseNFTButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginTop: 8,
  },
  browseNFTText: {
    color: '#8a2be2',
    fontSize: 16,
    fontWeight: '600',
  },
  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0f0f0f',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  bottomTabText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default WalletScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   TextInput,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomVectorIcons from '../../components/CustomVectorIcons';

// const WalletScreen = ({ navigation, route }) => {
//   const [activeTopTab, setActiveTopTab] = useState('Coin');
//   const [balanceVisible, setBalanceVisible] = useState(true);

//   const coins = [
//     {
//       name: 'Bitcoin',
//       symbol: 'BTC',
//       price: '0',
//       change: '$0',
//       amount: '0.2',
//       value: '$5,000',
//       changeType: 'positive',
//       change2: '+0.65%',
//     },
//     {
//       name: 'Ethereum',
//       symbol: 'ETH',
//       price: '0',
//       change: '$0',
//       amount: '1.5',
//       value: '$4,446.23',
//       changeType: 'positive',
//       change2: '+0.65%',
//     },
//     // ... other coins
//   ];

//   const quickActions = [
//     { name: 'Send', icon: 'arrow-up', iconSet: 'Feather' },
//     { name: 'Receive', icon: 'arrow-down', iconSet: 'Feather' },
//     { name: 'Buy', icon: 'plus-circle', iconSet: 'Feather' },
//     { name: 'Gas Station', icon: 'droplet', iconSet: 'Feather' },
//     { name: 'More', icon: 'more-horizontal', iconSet: 'Feather' },
//   ];

//   const topTabs = ['Coin', 'Bank', 'Earn', 'NFT'];

//   const handleTopTabPress = (tab: string) => {
//     setActiveTopTab(tab);

//     // Navigate to different screens based on the tab
//     switch (tab) {
//       case 'Bank':
//         navigation.navigate('BankAccountScreen');
//         break;
//       case 'Earn':
//         navigation.navigate('EarnScreen');
//         break;
//       case 'NFT':
//         navigation.navigate('NFTScreen');
//         break;
//       default:
//         // For Coin tab, we're already on WalletScreen
//         break;
//     }
//   };

//   const renderCoinContent = () => (
//     <View style={styles.coinList}>
//       {coins.map((coin, index) => (
//         <TouchableOpacity key={index} style={styles.coinItem}>
//           <View style={styles.coinLeft}>
//             <View style={styles.coinIcon}>
//               <CustomVectorIcons
//                 name="bitcoin"
//                 size={24}
//                 color="#fff"
//                 iconSet="FontAwesome5"
//               />
//             </View>
//             <View style={styles.coinInfo}>
//               <View style={styles.coinNameRow}>
//                 <Text style={styles.coinName}>{coin.name}</Text>
//                 <Text style={styles.coinSymbol}>({coin.symbol})</Text>
//               </View>
//               <View style={styles.coinValueRow}>
//                 <Text style={styles.coinValue}>{coin.value}</Text>
//                 <Text
//                   style={[
//                     styles.coinChange,
//                     coin.changeType === 'positive'
//                       ? styles.positiveChange
//                       : styles.negativeChange,
//                   ]}
//                 >
//                   {`  ${coin.change2}`}
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.coinRight}>
//             <Text style={styles.coinPrice}>{coin.price}</Text>
//             <Text style={styles.coinChange2}>{coin.change}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="settings"
//               size={22}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="bell"
//               size={22}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.headerCenter}>
//           <TouchableOpacity style={styles.walletSelector}>
//             <Text style={styles.walletName}>Wallet01-652</Text>
//             <CustomVectorIcons
//               name="chevron-down"
//               size={16}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="copy"
//               size={20}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <CustomVectorIcons
//               name="maximize"
//               size={20}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Top Navigation Tabs */}
//       <View style={styles.topTabsContainer}>
//         {topTabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.topTab}
//             onPress={() => handleTopTabPress(tab)}
//           >
//             <Text
//               style={[
//                 styles.topTabText,
//                 activeTopTab === tab && styles.topTabTextActive,
//               ]}
//             >
//               {tab}
//             </Text>
//             {activeTopTab === tab && <View style={styles.activeIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Balance Section */}
//         <View style={styles.balanceSection}>
//           <View style={styles.balanceHeader}>
//             <Text style={styles.balanceLabel}>Balance</Text>
//             <TouchableOpacity
//               onPress={() => setBalanceVisible(!balanceVisible)}
//             >
//               <CustomVectorIcons
//                 name={balanceVisible ? 'eye' : 'eye-off'}
//                 size={20}
//                 color="#fff"
//                 iconSet="Feather"
//               />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.balanceAmount}>
//             {balanceVisible ? '$0' : '******'}
//           </Text>
//           <Text style={styles.btcAmount}>
//             {balanceVisible ? '0 BTC' : '******'}
//           </Text>
//         </View>

//         {/* Quick Actions */}
//         <View style={styles.quickActions}>
//           {quickActions.map((action, index) => (
//             <TouchableOpacity key={index} style={styles.actionButton}>
//               <View style={styles.actionIcon}>
//                 <CustomVectorIcons
//                   name={action.icon}
//                   size={24}
//                   color="#fff"
//                   iconSet={action.iconSet}
//                 />
//               </View>
//               <Text style={styles.actionText}>{action.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search Section */}
//         <View style={styles.searchHeader}>
//           <View style={styles.searchContainer}>
//             <CustomVectorIcons
//               name="search"
//               size={18}
//               color="#666"
//               iconSet="Feather"
//             />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search"
//               placeholderTextColor="#666"
//             />
//           </View>

//           <TouchableOpacity style={styles.filterButton}>
//             <Text style={styles.filterText}>All</Text>
//             <CustomVectorIcons
//               name="chevron-down"
//               size={14}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.moreButton}>
//             <CustomVectorIcons
//               name="more-vertical"
//               size={20}
//               color="#fff"
//               iconSet="Feather"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Only show coin content when on Coin tab */}
//         {activeTopTab === 'Coin' && renderCoinContent()}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   headerCenter: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   headerIcon: {
//     padding: 8,
//     marginHorizontal: 4,
//   },
//   walletSelector: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1a1a1a',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   walletName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   balanceSection: {
//     alignItems: 'center',
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//   },
//   balanceHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   balanceLabel: {
//     color: '#fff',
//     fontSize: 14,
//     marginRight: 8,
//   },
//   balanceAmount: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   btcAmount: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   actionButton: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#1a1a1a',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   actionText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   // Top Tabs Styles
//   topTabsContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//   },
//   topTab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   topTabText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   topTabTextActive: {
//     color: '#8a2be2',
//   },
//   activeIndicator: {
//     width: '100%',
//     height: 2,
//     backgroundColor: '#8a2be2',
//     borderRadius: 1,
//   },
//   // Search Section - Fixed Box Sizes
//   searchHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     gap: 12,
//   },
//   searchContainer: {
//     flex: 3, // Bigger width for search
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#fff',
//     fontSize: 16,
//     marginLeft: 12,
//     padding: 0,
//   },
//   filterButton: {
//     flex: 1, // Smaller width for All
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     paddingVertical: 14,
//     minWidth: 60,
//   },
//   filterText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//     marginRight: 6,
//   },
//   moreButton: {
//     width: 50, // Fixed small width for More
//     height: 50,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Content Containers
//   contentContainer: {
//     paddingHorizontal: 16,
//   },
//   // Coin List Styles
//   coinList: {
//     paddingHorizontal: 16,
//   },
//   coinItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   coinLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   coinIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#8a2be2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   coinInfo: {
//     flex: 1,
//   },
//   coinNameRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   coinName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   coinSymbol: {
//     color: '#888',
//     fontSize: 14,
//   },
//   coinValue: {
//     color: '#888',
//     fontSize: 14,
//   },
//   coinRight: {
//     alignItems: 'flex-end',
//   },
//   coinPrice: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   coinChange2: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#fff',
//   },
//   coinChange: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   positiveChange: {
//     color: '#ec6003ff',
//   },
//   negativeChange: {
//     color: '#F44336',
//   },
//   coinValueRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   // Bank Styles
//   bankItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   bankLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   bankIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   bankInfo: {
//     flex: 1,
//   },
//   bankName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   bankDetails: {
//     color: '#888',
//     fontSize: 14,
//   },
//   bankRight: {
//     alignItems: 'flex-end',
//   },
//   bankBalance: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   addBankButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginTop: 8,
//   },
//   addBankText: {
//     color: '#8a2be2',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   // Earn Styles
//   earnItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   earnLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   earnIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FF9800',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   earnInfo: {
//     flex: 1,
//   },
//   earnName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   earnApy: {
//     color: '#888',
//     fontSize: 14,
//   },
//   earnRight: {
//     alignItems: 'flex-end',
//   },
//   earnAmount: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   earnValue: {
//     color: '#888',
//     fontSize: 14,
//   },
//   exploreEarnButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginTop: 8,
//   },
//   exploreEarnText: {
//     color: '#8a2be2',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   // NFT Styles
//   nftItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   nftLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   nftIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#E91E63',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   nftInfo: {
//     flex: 1,
//   },
//   nftName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   nftCollection: {
//     color: '#888',
//     fontSize: 14,
//   },
//   nftRight: {
//     alignItems: 'flex-end',
//   },
//   nftValue: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   browseNFTButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 12,
//     marginTop: 8,
//   },
//   browseNFTText: {
//     color: '#8a2be2',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   // Bottom Navigation
//   bottomNav: {
//     flexDirection: 'row',
//     backgroundColor: '#0f0f0f',
//     borderTopWidth: 1,
//     borderTopColor: '#1a1a1a',
//     paddingVertical: 12,
//     paddingHorizontal: 5,
//   },
//   bottomTab: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 6,
//   },
//   bottomTabText: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginTop: 4,
//   },
// });

// export default WalletScreen;
