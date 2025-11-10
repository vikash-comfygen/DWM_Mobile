import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import CustomVectorIcons from '../../components/CustomVectorIcons';
import BottomTab from '../../navigation/BottomTab';

const SendScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MainApp')}
        >
          <CustomVectorIcons
            name="arrow-left"
            size={20}
            color="#fff"
            iconSet="Feather"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Back</Text>
      </View>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        <CustomVectorIcons
          name="search"
          size={20}
          color="#fff"
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      {/* Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Your wallet has no access to send
        </Text>
      </View>
      {/* <BottomTab /> */}
    </View>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F12',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    padding: 6,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 30, // balances the back icon spacing visually
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C20',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchText: {
    color: '#aaa',
    fontSize: 15,
  },
  messageContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  messageText: {
    color: '#888',
    fontSize: 14,
  },
});
