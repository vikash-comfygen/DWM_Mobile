import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import IMAGES from '../../assets/images';

const { width } = Dimensions.get('window');

const BankAccountScreen = () => {
  const features = [
    'Open a Swiss bank account for free with no management fee',
    'Get a free virtual MasterCard supporting Google Pay, Apple Pay, and Samsung Pay',
    'Use cryptocurrency for daily expenses',
    'Buy USDC with 0 Fee',
    'Make seamless transfers with your other bank accounts',
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* Top Card image */}
      <Image
        source={IMAGES.creditcard}
        style={styles.cardImage}
        resizeMode="cover"
      />

      {/* Info card with border and centered overlapping title */}
      <View style={styles.infoWrapper}>
        {/* This small view is used so title visually sits on the top border */}
        <View style={styles.titleWrapper}>
          <View style={styles.titleLine} />
          <Text style={styles.centerTitle}>Own Your Crypto Bank Account</Text>
          <View style={styles.titleLine} />
        </View>

        <View style={styles.infoCard}>
          {features.map((item, index) => (
            <View key={index} style={styles.featureRow}>
              <CustomVectorIcons
                name="check-circle"
                size={18}
                color="#00C853"
                iconSet="MaterialIcons"
              />
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Learn More and CTA */}
      <TouchableOpacity>
        <Text style={styles.learnMore}>
          Learn More <Text style={{ fontSize: 16 }}>➜</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.getStartedBtn}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BankAccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#0B0B0B',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 36,
  },

  /* card image */
  cardImage: {
    width: width - 40, // full width minus horizontal padding
    height: 190,
    borderRadius: 14,
    marginBottom: 22,
    // shadow for iOS (optional)
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    // elevation for android
    elevation: 6,
  },

  /* wrapper to keep title overlapping the top border */
  infoWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },

  /* title that sits visually on the top border (center with side lines) */
  titleWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -14, // lift it to overlap the card border
    zIndex: 2,
  },
  // titleLine: {
  //   flex: 1,
  //   height: 1,
  //   backgroundColor: '#4B3A8A',
  //   marginHorizontal: 8,
  // },
  centerTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    backgroundColor: '#111111', // same as card background so it appears cut-out
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 10,
  },

  /* the bordered info card under the title */
  infoCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4B3A8A',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: '#111111',
    // ensure the title appears to sit on top of this border
    marginTop: 6,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  featureText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 10,
    flexShrink: 1,
    lineHeight: 18,
  },

  learnMore: {
    color: '#B197FC',
    marginTop: 18,
    textAlign: 'center',
    fontSize: 14,
  },

  getStartedBtn: {
    backgroundColor: '#8B2FFF',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 18,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },
});
