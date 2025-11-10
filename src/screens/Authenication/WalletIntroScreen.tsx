import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import IMAGES from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from '@d11/react-native-fast-image';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Own and Manage Your Assets',
    subtitle: '100+ Blockchain Support',
    image: IMAGES.computer2,
  },
  {
    title: 'Secure Your Wallet Easily',
    subtitle: 'Fast & Reliable Transactions',
    image: IMAGES.computer2,
  },
  {
    title: 'Connect with Hardware Wallet',
    subtitle: 'Safe & Convenient',
    image: IMAGES.computer2,
  },
];

const WalletIntroScreen = ({ navigation }) => {
  // 🎬 Animations for main buttons
  const fadeAnims = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const translateYAnims = [
    useRef(new Animated.Value(30)).current,
    useRef(new Animated.Value(30)).current,
    useRef(new Animated.Value(30)).current,
  ];

  // 🎬 Modal animations
  const [modalVisible, setModalVisible] = useState(false);
  const [pin, setPin] = useState('');
  const pinFadeAnims = Array.from(
    { length: 6 },
    () => useRef(new Animated.Value(0)).current,
  );
  const modalTranslateY = useRef(new Animated.Value(height)).current;
  const keyboardTranslateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Animate buttons on load
    Animated.stagger(
      250,
      fadeAnims.map((fade, i) =>
        Animated.parallel([
          Animated.timing(fade, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(translateYAnims[i], {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ),
    ).start();
  }, []);

  useEffect(() => {
    if (pin.length === 6) {
      setTimeout(() => {
        closeModal();
        navigation.navigate('BackUpScreen');
      }, 400);
    }
  }, [pin]);

  const openModal = () => {
    setModalVisible(true);

    // Slide modal + animate boxes + then keypad
    Animated.sequence([
      Animated.spring(modalTranslateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 14,
      }),
      Animated.stagger(
        120,
        pinFadeAnims.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.timing(keyboardTranslateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(modalTranslateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(keyboardTranslateY, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      pinFadeAnims.forEach(anim => anim.setValue(0));
      setPin('');
    });
  };

  const handleNumberPress = num => {
    if (pin.length < 6) setPin(pin + num);
  };

  const handleDelete = () => setPin(pin.slice(0, -1));

  return (
    <LinearGradient
      colors={['#001da0ff', '#160101ff']}
      style={styles.gradientContainer}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <CustomVectorIcons
              name="circle-dollar-to-slot"
              size={28}
              color="#fff"
              iconSet="FontAwesome6"
            />
            <Text style={styles.appName}>SafePal</Text>
          </View>

          {/* Swiper */}
          <Swiper
            style={styles.swiper}
            showsPagination={false}
            autoplay
            autoplayTimeout={3}
          >
            {slides.map((slide, index) => (
              <View key={index} style={styles.slide}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>
                <FastImage
                  source={slide.image}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            ))}
          </Swiper>

          {/* Animated Buttons */}
          {[
            'Create New Wallet',
            'Add Existing Wallet',
            'Connect Hardware Wallet',
          ].map((text, i) => (
            <Animated.View
              key={i}
              style={[
                styles.animatedContainer,
                {
                  opacity: fadeAnims[i],
                  transform: [{ translateY: translateYAnims[i] }],
                },
              ]}
            >
              <TouchableOpacity
                style={i === 0 ? styles.primaryButton : styles.secondaryButton}
                onPress={i === 0 ? openModal : undefined}
              >
                <View style={styles.iconWrapper}>
                  <CustomVectorIcons
                    name={i === 1 ? 'share-from-square' : 'plus'}
                    size={22}
                    color={i === 2 ? '#8a2be2' : 'black'}
                    iconSet={i === 1 ? 'FontAwesome6' : 'EvilIcons'}
                  />
                </View>
                <Text
                  style={
                    i === 0
                      ? styles.primaryButtonText
                      : styles.secondaryButtonText
                  }
                >
                  {text}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing you agree to our
            </Text>
            <Text style={styles.linkText}>Term of Use</Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* 🔐 Security Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY: modalTranslateY }] },
            ]}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Enter Security Password</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <CustomVectorIcons
                  name="close"
                  size={22}
                  color="#fff"
                  iconSet="AntDesign"
                />
              </TouchableOpacity>
            </View>

            {/* PIN Boxes */}
            <View style={styles.pinContainer}>
              {pinFadeAnims.map((anim, i) => (
                <Animated.View
                  key={i}
                  style={[
                    styles.pinBox,
                    {
                      opacity: anim,
                      transform: [
                        {
                          scale: anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.8, 1],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <Text style={styles.pinText}>{pin[i] ? '•' : ''}</Text>
                </Animated.View>
              ))}
            </View>

            {/* Numeric Keyboard */}
            <Animated.View
              style={[
                styles.keyboardContainer,
                { transform: [{ translateY: keyboardTranslateY }] },
              ]}
            >
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(
                (num, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.keyButton}
                    onPress={() => handleNumberPress(num)}
                  >
                    <Text style={styles.keyText}>{num}</Text>
                  </TouchableOpacity>
                ),
              )}
              <TouchableOpacity
                style={[styles.keyButton, { backgroundColor: '#8a2be2' }]}
                onPress={handleDelete}
              >
                <CustomVectorIcons
                  name="delete"
                  size={20}
                  color="#fff"
                  iconSet="AntDesign"
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default WalletIntroScreen;

const styles = StyleSheet.create({
  gradientContainer: { flex: 1 },
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  appName: { color: '#fff', fontSize: 22, fontWeight: '600', marginLeft: 6 },
  swiper: { height: 300, marginBottom: 20 },
  slide: { alignItems: 'center', justifyContent: 'center' },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: { width: 180, height: 180, marginVertical: 10 },
  animatedContainer: { width: '100%' },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  secondaryButtonText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: '#7c7979ff', fontSize: 12, textAlign: 'center' },
  linkText: { color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 2 },

  // 🔐 Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#121212',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    minHeight: height * 0.45,
  },
  modalHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  closeButton: { position: 'absolute', right: 0, top: 0 },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 35,
  },
  pinBox: {
    width: 40,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#eae6eeff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: { color: '#fff', fontSize: 26 },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  keyButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  keyText: { color: '#fff', fontSize: 20, fontWeight: '600' },
});
