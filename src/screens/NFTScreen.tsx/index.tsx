import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

export default function NFTScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {/* Header */}
      {/* <Text style={styles.title}>My NFTs</Text> */}

      {/* 🔹 Crypto Icons Row */}
      <View style={styles.cryptoRow}>
        <View style={styles.cryptoIconBox}>
          <CustomVectorIcons
            name="bitcoin"
            iconSet="FontAwesome6"
            size={30}
            color="#f7931a"
          />
          <Text style={styles.cryptoName}>BTC</Text>
        </View>
        <View style={styles.cryptoIconBox}>
          <CustomVectorIcons
            name="ethereum"
            iconSet="FontAwesome6"
            size={30}
            color="#627eea"
          />
          <Text style={styles.cryptoName}>ETH</Text>
        </View>
        <View style={styles.cryptoIconBox}>
          <CustomVectorIcons
            name="solidity"
            iconSet="MaterialCommunityIcons"
            size={30}
            color="#00f2ff"
          />
          <Text style={styles.cryptoName}>SOL</Text>
        </View>
        <View style={styles.cryptoIconBox}>
          <CustomVectorIcons
            name="tether"
            iconSet="FontAwesome6"
            size={30}
            color="#26a17b"
          />
          <Text style={styles.cryptoName}>USDT</Text>
        </View>
        <View style={styles.cryptoIconBox}>
          <CustomVectorIcons
            name="litecoin"
            iconSet="MaterialCommunityIcons"
            size={30}
            color="#345c9c"
          />
          <Text style={styles.cryptoName}>LTC</Text>
        </View>
      </View>

      {/* 🔹 Search Bar + Actions in One Row */}
      <View style={styles.searchActionRow}>
        {/* Search bar */}
        <View style={styles.searchBar}>
          <CustomVectorIcons
            name="search"
            iconSet="Feather"
            size={18}
            color="#888"
            style={{ marginRight: 6 }}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* Receive */}
        <TouchableOpacity style={styles.actionButton}>
          <CustomVectorIcons
            name="download"
            iconSet="Feather"
            color="#00ffa2"
            size={18}
          />
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>

        {/* More */}
        <TouchableOpacity style={styles.actionButton}>
          <CustomVectorIcons
            name="more-horizontal"
            iconSet="Feather"
            color="#888"
            size={18}
          />
          <Text style={styles.actionText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 NFT Grid */}
      <Text style={styles.sectionTitle}>Your NFTs</Text>
      <View style={styles.nftGrid}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <View key={i} style={styles.nftBox}>
            <CustomVectorIcons
              name="image"
              iconSet="Feather"
              color="#555"
              size={36}
            />
            <Text style={styles.nftText}>NFT #{i + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111114',
  },
  scroll: {
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  cryptoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cryptoIconBox: {
    alignItems: 'center',
  },
  cryptoName: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 6,
  },
  searchActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1, // takes available width
    height: 40,
    marginRight: 8,
  },
  searchInput: {
    color: '#fff',
    flex: 1,
    fontSize: 14,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  actionText: {
    color: '#fff',
    fontSize: 11,
    marginTop: 3,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  nftGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nftBox: {
    width: '47%',
    backgroundColor: '#1b1b1e',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginBottom: 12,
  },
  nftText: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 8,
  },
});
