import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from './CustomVectorIcons';

const GlobalHeader = ({
  navigation,
  title = 'Wallet01-652',
  showBackButton = false,
  onBackPress,
  rightIcons = [],
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        {/* Left Section */}
        <View style={styles.headerLeft}>
          {showBackButton ? (
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={handleBackPress}
            >
              <CustomVectorIcons
                name="arrow-left"
                size={22}
                color="#fff"
                iconSet="Feather"
              />
            </TouchableOpacity>
          ) : (
            <>
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
            </>
          )}
        </View>

        {/* Center Section */}
        <View style={styles.headerCenter}>
          {typeof title === 'string' ? (
            <TouchableOpacity style={styles.walletSelector}>
              <Text style={styles.walletName}>{title}</Text>
              <CustomVectorIcons
                name="chevron-down"
                size={16}
                color="#fff"
                iconSet="Feather"
              />
            </TouchableOpacity>
          ) : (
            title
          )}
        </View>

        {/* Right Section */}
        <View style={styles.headerRight}>
          {rightIcons.length > 0 ? (
            rightIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={styles.headerIcon}
                onPress={icon.onPress}
              >
                <CustomVectorIcons
                  name={icon.name}
                  size={icon.size || 20}
                  color={icon.color || '#fff'}
                  iconSet={icon.iconSet || 'Feather'}
                />
              </TouchableOpacity>
            ))
          ) : (
            <>
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
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
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
    backgroundColor: '#0f0f0f',
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
    fontSize: 12,
    fontWeight: '600',
    marginRight: 4,
  },
});

export default GlobalHeader;
