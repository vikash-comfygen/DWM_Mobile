import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const cryptoIcons = [
  { id: '1', name: 'bitcoin', iconSet: 'FontAwesome6', color: '#f7931a' },
  { id: '2', name: 'ethereum', iconSet: 'FontAwesome6', color: '#627eea' },
  {
    id: '3',
    name: 'solidity',
    iconSet: 'MaterialCommunityIcons',
    color: '#00f2ff',
  },
  { id: '4', name: 'tether', iconSet: 'FontAwesome6', color: '#26a17b' },
  {
    id: '5',
    name: 'litecoin',
    iconSet: 'MaterialCommunityIcons',
    color: '#345c9c',
  },
  { id: '6', name: 'dogecoin', iconSet: 'FontAwesome6', color: '#c2a633' },
  { id: '7', name: 'ripple', iconSet: 'FontAwesome6', color: '#00aae4' },
  {
    id: '8',
    name: 'cardano',
    iconSet: 'MaterialCommunityIcons',
    color: '#0033ad',
  },
];

export default function NFTScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {/* 🔹 Crypto Icons Horizontal Scroll */}
      <FlatList
        data={cryptoIcons}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cryptoRow}
        renderItem={({ item }) => (
          <View style={styles.cryptoIconBox}>
            <CustomVectorIcons
              name={item.name}
              iconSet={item.iconSet}
              size={30}
              color={item.color}
            />
          </View>
        )}
      />

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
        <TouchableOpacity style={[styles.actionButton, styles.receiveButton]}>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>

        {/* More */}
        <TouchableOpacity style={[styles.actionButton, styles.moreButton]}>
          <CustomVectorIcons
            name="more-horizontal"
            iconSet="Feather"
            color="#fff"
            size={18}
          />
        </TouchableOpacity>
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
  cryptoRow: {
    paddingVertical: 10,
  },
  cryptoIconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#1c1c1e',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  searchActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1,
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
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 12,
  },
  receiveButton: {
    backgroundColor: '#2a2a2e',
  },
  moreButton: {
    backgroundColor: '#444',
    marginLeft: 6,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
});
