import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import IMAGES from '../../assets/images';

export default function EarnScreen() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {/* Equity Value Section */}
      <View style={styles.card}>
        {/* Title with eye icon centered */}
        <View style={styles.rowCenter}>
          <Text style={styles.cardTitle}>Equity Value</Text>
          <TouchableOpacity
            onPress={() => setBalanceVisible(!balanceVisible)}
            style={{ marginLeft: 6 }}
          >
            <CustomVectorIcons
              name={balanceVisible ? 'eye' : 'eye-off'}
              color="#aaa"
              size={18}
              iconSet="Feather"
            />
          </TouchableOpacity>
        </View>

        {/* Values */}
        <Text style={styles.valueText}>{balanceVisible ? '$0' : '******'}</Text>
        <Text style={styles.subValueText}>
          {balanceVisible ? '= 0 BTC' : '******'}
        </Text>
      </View>

      {/* Recommend Section */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="crown"
              iconSet="FontAwesome5"
              color="#ffcc00"
              size={16}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.sectionTitle}>Recommend</Text>
          </View>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.recommendBox}>
            <Image
              source={IMAGES.thetre}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.aprText}>6.43% APR</Text>
          </View>
          <View style={styles.recommendBox}>
            <CustomVectorIcons
              name="bitcoin"
              iconSet="FontAwesome6"
              color="#f7931a"
              size={20}
            />
            <Text style={styles.aprText}>4.12% APR</Text>
          </View>
          <View style={styles.recommendBox}>
            <Image
              source={IMAGES.solana}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.aprText}>5.27% APR</Text>
          </View>
        </View>
      </View>

      {/* Stack Section */}
      <View style={styles.card}>
        <View style={styles.rowCenter}>
          <CustomVectorIcons
            name="layers"
            iconSet="Feather"
            color="#ff9500"
            size={18}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.sectionTitle}>Stack</Text>
        </View>

        <View style={[styles.rowBetween, { marginTop: 10 }]}>
          <View style={styles.stackItem}>
            <Image
              source={IMAGES.thetre}
              style={styles.smallImage}
              resizeMode="contain"
            />
            <Text style={styles.aprTextSmall}>6.43%</Text>
          </View>
          <View style={styles.stackItem}>
            <CustomVectorIcons
              name="bitcoin"
              iconSet="FontAwesome6"
              color="#f7931a"
              size={20}
            />
            <Text style={styles.aprTextSmall}>4.12%</Text>
          </View>
          <View style={styles.stackItem}>
            <Image
              source={IMAGES.solana}
              style={styles.smallImage}
              resizeMode="contain"
            />
            <Text style={styles.aprTextSmall}>5.27%</Text>
          </View>
        </View>
      </View>

      {/* Popular Yield Dapps */}
      <View style={styles.card}>
        <View style={styles.rowCenter}>
          <CustomVectorIcons
            name="flame"
            iconSet="Ionicons"
            color="#ff6b00"
            size={18}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.sectionTitle}>Popular Yield Dapps</Text>
        </View>

        {/* Binance Section */}
        <View style={[styles.card, styles.innerCard]}>
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="dollar-sign"
              iconSet="Feather"
              color="#f3ba2f"
              size={22}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>
              Binance
            </Text>
          </View>

          <Text style={styles.description}>
            From Binance Earn, supporting hundreds of tokens with flexible terms
            and high returns.
          </Text>

          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <View style={styles.stackItem}>
              <Image
                source={IMAGES.thetre}
                style={styles.smallImage}
                resizeMode="contain"
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View>
            {/* <View style={styles.stackItem}>
              <CustomVectorIcons
                name="dollar-sign"
                iconSet="Feather"
                color="#00ffa2"
                size={20}
              />
              <Text style={styles.aprTextSmall}>6.43%</Text>
            </View> */}
            <View style={styles.stackItem}>
              <CustomVectorIcons
                name="bitcoin"
                iconSet="FontAwesome6"
                color="#f7931a"
                size={20}
              />
              <Text style={styles.aprTextSmall}>4.12%</Text>
            </View>
            <View style={styles.stackItem}>
              <Image
                source={IMAGES.solana}
                style={styles.smallImage}
                resizeMode="contain"
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View>
            {/* <View style={styles.stackItem}>
              <CustomVectorIcons
                name="ethereum"
                iconSet="FontAwesome6"
                color="#00f2ff"
                size={20}
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View> */}
          </View>
        </View>

        {/* SFPLUS Section */}
        <View style={[styles.card, styles.innerCard]}>
          <View style={styles.rowCenter}>
            <CustomVectorIcons
              name="star"
              iconSet="Feather"
              color="#f3ba2f"
              size={22}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>SFPLUS</Text>
          </View>

          <Text style={styles.description}>
            Stake for exclusive airdrop rewards.
          </Text>

          <View style={[styles.rowBetween, { marginTop: 8 }]}>
            <View style={styles.stackItem}>
              {/* <Image
                source={IMAGES.thetre}
                style={styles.smallImage}
                resizeMode="contain"
              /> */}
              <Text style={styles.aprTextSmall}>
                Rewards <Text style={styles.number}>518K+</Text>
              </Text>
            </View>
            <View style={styles.stackItem}>
              {/* <CustomVectorIcons
                name="bitcoin"
                iconSet="FontAwesome6"
                color="#f7931a"
                size={20}
              /> */}
              <Text style={styles.aprTextSmall}>
                Stakers <Text style={styles.number}>12.8+</Text>
              </Text>
            </View>
            <View style={styles.stackItem}>
              {/* <Image
                source={IMAGES.solana}
                style={styles.smallImage}
                resizeMode="contain"
              /> */}
              <Text style={styles.aprTextSmall}>
                TVL <Text style={styles.number}> 3.0M+</Text>
              </Text>
            </View>
            {/* <View style={styles.stackItem}>
              <CustomVectorIcons
                name="ethereum"
                iconSet="FontAwesome6"
                color="#00f2ff"
                size={20}
              />
              <Text style={styles.aprTextSmall}>5.27%</Text>
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0e',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1b1b1e',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  innerCard: {
    backgroundColor: '#242427',
    marginTop: 10,
  },
  cardTitle: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '500',
  },
  valueText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },
  subValueText: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#5c5c5e',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  aprText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
  },
  aprTextSmall: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
    marginLeft: 6,
  },
  stackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2e',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  description: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
  image: {
    width: 24,
    height: 24,
  },
  smallImage: {
    width: 20,
    height: 20,
  },
  number: {
    color: 'red',
  },
});
