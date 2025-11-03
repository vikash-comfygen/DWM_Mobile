import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { useRoute } from '@react-navigation/native';
import CustomVectorIcons from '../../components/CustomVectorIcons';

export default function ConfirmPasswordScreen({ navigation }) {
  const route = useRoute();

  const { initialPassword } = route.params as { initialPassword: string };
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (code: string) => {
    const numericCode = code.replace(/[^0-9]/g, '');
    setConfirmPassword(numericCode);

    if (numericCode.length === 6) {
      if (numericCode === initialPassword) {
        Alert.alert('✅ Success', 'Password created successfully!');
        navigation.navigate('WalletScreen');
      } else {
        Alert.alert('❌ Mismatch', 'Passwords do not match.');
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        {/* <CustomVectorIcons name="chevron-back" size={26} color="#fff" /> */}
        {/* <Text style={styles.backText}>Back</Text> */}
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Confirm Your Password</Text>

      <View style={styles.otpWrapper}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={handleChange}
          autoFocus
          theme={{
            pinCodeContainerStyle: styles.otpBox,
            pinCodeTextStyle: styles.otpText,
          }}
        />
      </View>

      <Text style={styles.subtitle}>
        Please confirm your password to continue.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111114',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50, // adjust for your header height or status bar
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 26,
    marginLeft: 4,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpBox: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6e6a6aff',
    borderRadius: 15,
    width: 45,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  otpText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});
