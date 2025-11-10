import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomVectorIcons from '../../../components/CustomVectorIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMAGES from '../../../assets/images';

const { width, height } = Dimensions.get('window');

const BackUpScreen = ({ navigation }) => {
  // 🎬 Animation Refs
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const fadeDesc = useRef(new Animated.Value(0)).current;
  const fadeBackupBtn = useRef(new Animated.Value(0)).current;
  const fadeSkipBtn = useRef(new Animated.Value(0)).current;

  const translateLogo = useRef(new Animated.Value(30)).current;
  const translateTitle = useRef(new Animated.Value(30)).current;
  const translateDesc = useRef(new Animated.Value(30)).current;
  const translateBackupBtn = useRef(new Animated.Value(30)).current;
  const translateSkipBtn = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // 🎞️ Staggered cinematic fade-up animation
    Animated.stagger(180, [
      Animated.parallel([
        Animated.timing(fadeLogo, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(translateLogo, {
          toValue: 0,
          damping: 8,
          stiffness: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeTitle, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(translateTitle, {
          toValue: 0,
          damping: 8,
          stiffness: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeDesc, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(translateDesc, {
          toValue: 0,
          damping: 8,
          stiffness: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeBackupBtn, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(translateBackupBtn, {
          toValue: 0,
          damping: 8,
          stiffness: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeSkipBtn, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(translateSkipBtn, {
          toValue: 0,
          damping: 8,
          stiffness: 80,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <LinearGradient colors={['#0c0c0c', '#0c0c0c']} style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.safeArea}>
        {/* Animated Wallet Logo */}
        <Animated.View
          style={[
            styles.iconContainer,
            { opacity: fadeLogo, transform: [{ translateY: translateLogo }] },
          ]}
        >
          {/* <CustomVectorIcons
            name="shield"
            size={90}
            color="#8A2BE2"
            iconSet="FontAwesome5"
          /> */}
          <Image source={IMAGES.logo} style={styles.logo} />
        </Animated.View>

        {/* Animated Title */}
        <Animated.Text
          style={[
            styles.title,
            { opacity: fadeTitle, transform: [{ translateY: translateTitle }] },
          ]}
        >
          Your Wallet is Ready!
        </Animated.Text>

        {/* Animated Description */}
        <Animated.Text
          style={[
            styles.description,
            { opacity: fadeDesc, transform: [{ translateY: translateDesc }] },
          ]}
        >
          Secure your wallet by saving your mnemonic phrase. This unique set of
          words is your only key to access your funds. We cannot store or
          recover it for you.
        </Animated.Text>

        {/* Animated Buttons */}
        <Animated.View
          style={{
            opacity: fadeBackupBtn,
            transform: [{ translateY: translateBackupBtn }],
          }}
        >
          <TouchableOpacity
            style={styles.backupButton}
            onPress={() => navigation.navigate('BackUpScreenTwo')}
          >
            <Text style={styles.backupButtonText}>Back Up Now</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeSkipBtn,
            transform: [{ translateY: translateSkipBtn }],
          }}
        >
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('MainApp')}
          >
            <Text style={styles.skipButtonText}>Skip Backup</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BackUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'BricolageGrotesque-Bold',
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 14,
    fontWeight: '800',
  },
  description: {
    fontFamily: 'BricolageGrotesque-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 50,
  },
  backupButton: {
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    paddingVertical: 14,
    width: width * 0.85,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#8A2BE2',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  backupButtonText: {
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  skipButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingVertical: 14,
    width: width * 0.85,
    alignItems: 'center',
  },
  skipButtonText: {
    fontFamily: 'BricolageGrotesque-Regular',
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
});
