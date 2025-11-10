import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalHeader from '../../components/GlobalHeader';
import EarnScreen from '../EarnScreen';
import MoneyInvestShowing from '../MoneyInvestShowing';
import NFTScreen from '../NFTScreen.tsx';
import BankAccountScreen from '../BankAccountScreen/index.tsx';

const { width } = Dimensions.get('window');

const WalletScreen = ({ navigation }) => {
  const [activeTopTab, setActiveTopTab] = useState('Coin');

  const topTabs = ['Coin', 'Bank', 'Earn', 'NFT'];

  const handleTopTabPress = tab => {
    setActiveTopTab(tab);
  };

  // const renderContent = () => {
  //   switch (activeTopTab) {
  //     case 'Coin':
  //       return <MoneyInvestShowing />;
  //     case 'Bank':
  //       return <BankAccountScreen />;
  //     case 'Earn':
  //       return <EarnScreen />;
  //     case 'NFT':
  //       return <NFTScreen />;
  //     default:
  //       return <MoneyInvestShowing />;
  //   }
  // };

  const renderContent = () => {
    switch (activeTopTab) {
      case 'Coin':
        return <MoneyInvestShowing navigation={navigation} />;
      case 'Bank':
        return <BankAccountScreen navigation={navigation} />;
      case 'Earn':
        return <EarnScreen navigation={navigation} />;
      case 'NFT':
        return <NFTScreen navigation={navigation} />;
      default:
        return <MoneyInvestShowing navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      <GlobalHeader />

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

      {/* Render the selected screen content */}
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
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
});

export default WalletScreen;
