import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation } from '@react-navigation/native';

export default function CreatePasswordScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleChange = (code: string) => {
    const numericCode = code.replace(/[^0-9]/g, '');
    setPassword(numericCode);

    // navigate only when fully filled
    if (numericCode.length === 6) {
      navigation.navigate('ConfirmPassword', { initialPassword: numericCode });
    }
  };

  const handleBackspace = (remainingCode: string) => {
    setPassword(remainingCode);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create Your 6-Digit Password</Text>

      <View style={styles.otpWrapper}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={handleChange}
          onBackspace={handleBackspace}
          autoFocus
          focusColor="#7b61ff"
          value={password}
          theme={{
            pinCodeContainerStyle: styles.otpBox,
            pinCodeTextStyle: styles.otpText,
          }}
        />
      </View>

      <Text style={styles.subtitle}>
        Your password will be used to secure your account.
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
    top: 50,
    left: 20,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
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
    borderColor: '#6b6666ff',
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
