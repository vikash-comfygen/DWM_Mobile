import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  StatusBar,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import CustomVectorIcons from '../../../components/CustomVectorIcons';
import BottomTab from '../../../navigation/BottomTab';

const { width, height } = Dimensions.get('window');

const mnemonicWords = [
  'sand',
  'can',
  'always',
  'minor',
  'blade',
  'prevent',
  'total',
  'brave',
  'shoulder',
  'library',
  'give',
  'object',
];

const BackUpScreenTwo = ({ navigation, onNext }) => {
  // Existing animations
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const fadeWords = mnemonicWords.map(
    () => useRef(new Animated.Value(0)).current,
  );
  const fadeRecommendations = useRef(new Animated.Value(0)).current;
  const fadeAvoid = useRef(new Animated.Value(0)).current;
  const fadeButton = useRef(new Animated.Value(0)).current;

  // New wallet modal states + animations
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeTitle, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.stagger(
        80,
        fadeWords.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.timing(fadeRecommendations, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAvoid, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeButton, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const openModal = () => {
    setModalVisible(true);
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisible(false));
  };

  return (
    <LinearGradient
      colors={['#0c0c0c', '#0c0c0c']}
      style={styles.gradientContainer}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left Back Button */}

          {/* Wallet Dropdown in center-left */}
          <TouchableOpacity style={styles.walletDropdown} onPress={openModal}>
            <Text style={styles.walletName}>Wallet-005-QXH</Text>
            <CustomVectorIcons
              name="chevron-down"
              size={16}
              color="#fff"
              iconSet="Entypo"
            />
          </TouchableOpacity>

          {/* Placeholder right side */}
          <View style={{ width: 20 }} />
        </View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomVectorIcons
              name="arrowleft"
              size={20}
              color="#fff"
              iconSet="AntDesign"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Backup</Text>
          <View style={{ width: 20 }} />
        </View>

        {/* Title */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Animated.Text style={[styles.subtitle, { opacity: fadeTitle }]}>
            Write down the mnemonic phrase in order.
          </Animated.Text>

          {/* Mnemonic Words */}
          <View style={styles.wordsContainer}>
            {mnemonicWords.map((word, index) => (
              <Animated.View
                key={index}
                style={[styles.wordBox, { opacity: fadeWords[index] }]}
              >
                <Text style={styles.wordIndex}>{index + 1}</Text>
                <Text style={styles.wordText}>{word}</Text>
              </Animated.View>
            ))}
          </View>

          {/* Recommended */}
          <Animated.View style={{ opacity: fadeRecommendations }}>
            <View style={styles.recommendationRow}>
              <CustomVectorIcons
                name="check"
                size={16}
                color="#00c851"
                iconSet="AntDesign"
              />
              <Text style={styles.recommendTitle}> Recommended:</Text>
            </View>
            <Text style={styles.recommendDesc}>
              Write it down on a piece of paper and store it somewhere secure.
            </Text>
          </Animated.View>

          {/* Avoid */}
          <Animated.View style={{ opacity: fadeAvoid }}>
            <View style={styles.avoidRow}>
              <CustomVectorIcons
                name="close"
                size={16}
                color="#ff4444"
                iconSet="AntDesign"
              />
              <Text style={styles.avoidTitle}> Avoid:</Text>
            </View>
            <View style={styles.avoidList}>
              <View style={styles.bulletPoint} />
              <Text style={styles.avoidText}>
                Do not screenshot or copy it to the clipboard.
              </Text>
            </View>
            <View style={styles.avoidList}>
              <View style={styles.bulletPoint} />
              <Text style={styles.avoidText}>
                Do not store the mnemonic phrase online.
              </Text>
            </View>
            <View style={styles.avoidList}>
              <View style={styles.bulletPoint} />
              <Text style={styles.avoidText}>
                Do not send the mnemonic phrase to anyone.
              </Text>
            </View>
          </Animated.View>

          {/* Learn more */}
          <Animated.Text style={[styles.learnMore, { opacity: fadeAvoid }]}>
            Learn more about mnemonic phrases.
          </Animated.Text>

          {/* Next Button */}
          <Animated.View
            style={[styles.nextButtonContainer, { opacity: fadeButton }]}
          >
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('BackupScreenThree')}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>

      {/* Wallet List Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeModal}
      >
        <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <View style={styles.modalHeader}>
              <View style={{ width: 20 }} />
              <Text style={styles.modalTitle}>My Wallets</Text>
              <TouchableOpacity onPress={closeModal}>
                <CustomVectorIcons
                  name="close"
                  size={22}
                  color="#fff"
                  iconSet="AntDesign"
                />
              </TouchableOpacity>
            </View>

            {/* Search */}
            <View style={styles.searchBox}>
              <CustomVectorIcons
                name="search1"
                size={18}
                color="#aaa"
                iconSet="AntDesign"
              />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#aaa"
                style={styles.searchInput}
              />
            </View>

            <Text style={styles.sectionTitle}>Software Wallet</Text>

            <View style={styles.walletCard}>
              <View style={styles.walletIconBox}>
                <CustomVectorIcons
                  name="wallet"
                  size={20}
                  color="#8A2BE2"
                  iconSet="Entypo"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.walletLabel}>Wallet-005-QXH</Text>
                <View style={styles.walletRow}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Mnemonic</Text>
                  </View>
                  <Text style={styles.walletBalance}>≈ $0</Text>
                </View>
              </View>
              <CustomVectorIcons
                name="checkcircle"
                size={18}
                color="#00c851"
                iconSet="AntDesign"
              />
              <CustomVectorIcons
                name="dots-three-vertical"
                size={18}
                color="#aaa"
                iconSet="Entypo"
                style={{ marginLeft: 8 }}
              />
            </View>

            <TouchableOpacity style={styles.addButton}>
              <CustomVectorIcons
                name="plus"
                size={22}
                color="#fff"
                iconSet="Entypo"
              />
              <Text style={styles.addButtonText}>Add Wallet</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </Modal>
    </LinearGradient>
  );
};

export default BackUpScreenTwo;

// STYLES
const styles = StyleSheet.create({
  gradientContainer: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: '#0c0c0c' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  walletDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  walletName: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-SemiBold',
    fontSize: 14,
    marginRight: 4,
  },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  subtitle: {
    fontFamily: 'BricolageGrotesque-Regular',
    color: '#ffffffff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  wordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: (width - 60) / 3,
    marginBottom: 12,
  },
  wordIndex: {
    color: '#8a8a8a',
    fontFamily: 'BricolageGrotesque-Regular',
    fontSize: 13,
    marginRight: 8,
  },
  wordText: {
    color: '#fff',
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: 15,
  },
  recommendationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  recommendTitle: {
    color: '#FFFFFF',
    fontFamily: 'BricolageGrotesque-SemiBold',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 2,
  },
  recommendDesc: {
    color: '#707070ff',
    fontFamily: 'BricolageGrotesque-Regular',
    fontSize: 13,
    marginBottom: 20,
    marginLeft: 20,
  },
  avoidRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  avoidTitle: {
    color: '#FFFFFF',
    fontFamily: 'BricolageGrotesque-SemiBold',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 2,
  },
  avoidList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 6,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 6,
    marginRight: 8,
  },
  avoidText: {
    color: '#707070ff',
    fontFamily: 'BricolageGrotesque-Regular',
    fontSize: 13,
    lineHeight: 18,
    flexShrink: 1,
  },
  learnMore: {
    color: '#a88dff',
    fontFamily: 'BricolageGrotesque-Regular',
    fontSize: 13,
    textAlign: 'left',
    marginTop: 12,
    textDecorationLine: 'underline',
    marginLeft: 20,
  },
  nextButtonContainer: { marginTop: 40, alignItems: 'center' },
  nextButton: {
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    paddingVertical: 14,
    width: width * 0.85,
    alignItems: 'center',
    elevation: 5,
  },
  nextButtonText: {
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: '#fff',
    fontSize: 16,
  },

  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#121212',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 18,
    minHeight: height * 0.55,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'BricolageGrotesque-SemiBold',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  sectionTitle: {
    color: '#999',
    fontSize: 13,
    fontFamily: 'BricolageGrotesque-Regular',
    marginBottom: 10,
  },
  walletCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  walletIconBox: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  walletLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'BricolageGrotesque-SemiBold',
  },
  walletRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  tag: {
    backgroundColor: '#2e2e2e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 8,
  },
  tagText: {
    color: '#aaa',
    fontSize: 11,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  walletBalance: {
    color: '#ccc',
    fontSize: 13,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 6,
    fontFamily: 'BricolageGrotesque-SemiBold',
  },
  headerTitle: {
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: '#fff',
    fontSize: 17,
  },
});
