import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Modal,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from '../../components/CustomVectorIcons';

const BuySellScreen = ({ navigation }) => {
  const [isBuy, setIsBuy] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('All');

  const fadeValues = useRef(
    [...Array(5)].map(() => new Animated.Value(0)),
  ).current;

  const animateComponents = () => {
    fadeValues.forEach((val, i) => {
      Animated.timing(val, {
        toValue: 1,
        duration: 400,
        delay: i * 150,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    animateComponents();
  }, []);

  const handleBackPress = () => {
    navigation.navigate('MainApp');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Wallet Header */}
        {/* <Animated.View
          style={[
            styles.walletHeader,
            { opacity: fadeValues[0], transform: [{ scale: fadeValues[0] }] },
          ]}
        >
          <View style={{ width: 24 }} />

        
          <TouchableOpacity style={styles.walletDropdown}>
            <Text style={styles.walletText}>Wallet-009-IZO ▾</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomVectorIcons
              name="refresh-cw"
              size={18}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </Animated.View> */}

        {/* Wallet Header */}
        <Animated.View
          style={[
            styles.walletHeader,
            { opacity: fadeValues[0], transform: [{ scale: fadeValues[0] }] },
          ]}
        >
          {/* Back Button */}
          <TouchableOpacity style={styles.iconButton} onPress={handleBackPress}>
            <CustomVectorIcons
              name="arrow-left"
              size={20}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>

          {/* Centered Wallet Dropdown */}
          <TouchableOpacity style={styles.walletDropdown}>
            <Text style={styles.walletText}>Wallet-009-IZO ▾</Text>
          </TouchableOpacity>

          {/* Refresh Button */}
          <TouchableOpacity style={styles.iconButton}>
            <CustomVectorIcons
              name="refresh-cw"
              size={18}
              color="#fff"
              iconSet="Feather"
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.tabsContainer,
            { opacity: fadeValues[1], transform: [{ scale: fadeValues[1] }] },
          ]}
        >
          {['Swap', 'Bridge', 'Buy/Sell'].map((tab, i) => (
            <Text
              key={i}
              style={[
                styles.tabText,
                tab === 'Buy/Sell' && {
                  color: '#9B5CFF',
                  borderBottomWidth: 1.5,
                  borderBottomColor: '#9B5CFF',
                },
              ]}
            >
              {tab}
            </Text>
          ))}
        </Animated.View>

        {/* Buy/Sell Toggle */}
        <Animated.View
          style={[
            styles.toggleContainer,
            { opacity: fadeValues[2], transform: [{ scale: fadeValues[2] }] },
          ]}
        >
          <TouchableOpacity
            style={[styles.toggleButton, isBuy && styles.activeToggle]}
            onPress={() => setIsBuy(true)}
          >
            <Text style={[styles.toggleText, isBuy && styles.activeToggleText]}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isBuy && styles.activeToggle]}
            onPress={() => setIsBuy(false)}
          >
            <Text
              style={[styles.toggleText, !isBuy && styles.activeToggleText]}
            >
              Sell
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Pay Section */}
        <Animated.View
          style={[
            styles.section,
            { opacity: fadeValues[3], transform: [{ scale: fadeValues[3] }] },
          ]}
        >
          <Text style={styles.sectionTitle}>Pay</Text>
          <View style={styles.tokenRow}>
            <CustomVectorIcons
              name="dollar-sign"
              iconSet="Feather"
              color="#FFC94A"
              size={22}
            />
            <Text style={styles.tokenText}>USD</Text>
            <Text style={styles.arrowText}>▾</Text>
            <Text style={styles.amountText}>0</Text>
          </View>
        </Animated.View>

        {/* Convert Icon */}
        <Animated.View
          style={[
            styles.exchangeCircle,
            { opacity: fadeValues[3], transform: [{ scale: fadeValues[3] }] },
          ]}
        >
          <CustomVectorIcons
            name="repeat"
            size={20}
            color="#fff"
            iconSet="Feather"
          />
        </Animated.View>

        {/* Receive Section */}
        <Animated.View
          style={[
            styles.section,
            { opacity: fadeValues[4], transform: [{ scale: fadeValues[4] }] },
          ]}
        >
          <Text style={styles.sectionTitle}>Estimated Receive</Text>
          <View style={styles.tokenRow}>
            <CustomVectorIcons
              name="bitcoin"
              iconSet="FontAwesome"
              color="#FFA726"
              size={22}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.tokenText}>BTC</Text>
              <Text style={styles.subText}>Bitcoin</Text>
            </View>
            <Text style={styles.amountText}>0</Text>
          </View>
        </Animated.View>

        {/* Payment Method */}
        <TouchableOpacity
          style={styles.paymentBox}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.paymentLabel}>Payment Method</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.paymentValue}>{selectedPayment}</Text>
            <Text style={styles.arrowText}>▾</Text>
          </View>
        </TouchableOpacity>

        {/* Receiving Address */}
        <View style={styles.addressBox}>
          <CustomVectorIcons
            name="wallet"
            size={18}
            color="#FFC94A"
            iconSet="Feather"
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.addressLabel}>Receiving Address (Bitcoin)</Text>
            <Text style={styles.addressValue}>bcshd23h4k45n2rd...</Text>
          </View>
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>{isBuy ? 'Buy' : 'Sell'}</Text>
        </TouchableOpacity>

        {/* Provided by */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Provided by :</Text>
          <CustomVectorIcons
            name="binance"
            iconSet="FontAwesome5"
            size={16}
            color="#FFC94A"
          />
          <Text style={[styles.footerText, { marginLeft: 4 }]}>
            Binance Connect
          </Text>
        </View>
      </ScrollView>

      {/* Payment Method Modal */}
      <PaymentModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        selected={selectedPayment}
        setSelected={setSelectedPayment}
      />
    </SafeAreaView>
  );
};

export default BuySellScreen;

/* ---------------- PAYMENT MODAL ---------------- */

const PaymentModal = ({
  visible,
  onClose,
  selected,
  setSelected,
}: {
  visible: boolean;
  onClose: () => void;
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const methods = [
    { name: 'All', icon: 'credit-card' },
    { name: 'Visa', icon: 'credit-card' },
    { name: 'MasterCard', icon: 'credit-card' },
    { name: 'PayPal', icon: 'dollar-sign' },
    { name: 'Apple Pay', icon: 'smartphone' },
    { name: 'Google Pay', icon: 'chrome' },
  ];

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Payment Method</Text>
            <TouchableOpacity onPress={onClose}>
              <CustomVectorIcons
                name="x"
                iconSet="Feather"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          {methods.map((m, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.modalItemBox,
                selected === m.name && { borderColor: '#9B5CFF' },
              ]}
              onPress={() => {
                setSelected(m.name);
                onClose();
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomVectorIcons
                  name={m.icon}
                  iconSet="Feather"
                  color="#9B5CFF"
                  size={18}
                />
                <Text style={styles.modalItemText}>{m.name}</Text>
              </View>
              {selected === m.name && (
                <CustomVectorIcons
                  name="check"
                  iconSet="Feather"
                  size={18}
                  color="#9B5CFF"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B0B0B' },
  container: { padding: 16 },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tabText: {
    color: '#ccc',
    fontFamily: 'BricolageGrotesque-Medium',
    paddingBottom: 6,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    padding: 4,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  toggleButton: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 8 },
  activeToggle: { backgroundColor: '#9B5CFF33' },
  toggleText: { color: '#ccc', fontFamily: 'BricolageGrotesque-Medium' },
  activeToggleText: { color: '#9B5CFF' },
  section: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 14,
    marginTop: 18,
  },
  sectionTitle: {
    color: '#ccc',
    fontFamily: 'BricolageGrotesque-Regular',
    marginBottom: 8,
  },
  tokenRow: { flexDirection: 'row', alignItems: 'center' },
  tokenText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'BricolageGrotesque-SemiBold',
    marginLeft: 8,
  },
  subText: {
    color: '#888',
    fontSize: 12,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  amountText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 'auto',
    fontFamily: 'BricolageGrotesque-Medium',
  },
  exchangeCircle: {
    alignSelf: 'center',
    backgroundColor: '#9B5CFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -20,
    zIndex: 2,
  },
  paymentBox: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    padding: 12,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    color: '#ccc',
    fontFamily: 'BricolageGrotesque-Regular',
  },
  paymentValue: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-Medium',
    marginRight: 4,
  },
  addressBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 14,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressLabel: {
    color: '#ccc',
    fontSize: 12,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  addressValue: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-Medium',
    marginTop: 2,
  },
  buyButton: {
    backgroundColor: '#9B5CFF',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'BricolageGrotesque-SemiBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  footerText: {
    color: '#ccc',
    fontSize: 12,
    marginRight: 4,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 16,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'BricolageGrotesque-SemiBold',
    textAlign: 'center',
    flex: 1,
  },
  modalItemBox: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalItemText: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-Regular',
    marginLeft: 8,
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  iconButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },

  walletDropdown: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  walletText: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});
