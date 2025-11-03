import FontFamily from '@assets/fonts/FontFamily';
import CustomLucideIcon from '@components/CustomLucideIcon';
import { useTheme } from '@theme/themeContext';
import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
const { width } = Dimensions.get('window');
interface NoInternetModalProps {
  isConnected?: boolean;
}
const NoInternetModal: React.FC<NoInternetModalProps> = ({
  isConnected = true,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <Modal visible={isConnected} transparent animationType="none">
      <View style={styles.backdrop}>
        <StatusBar
          backgroundColor={theme.background}
          barStyle={'light-content'}
        />
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <View
              style={{
                backgroundColor: theme.themeColor,
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}
            >
              <CustomLucideIcon
                name={'SatelliteDish'}
                size={60}
                color={theme.white}
              />
            </View>
            <Text style={styles.title}>Ooops!!</Text>
            <Text style={styles.message}>Slow or No internet connection.</Text>
            <Text style={styles.message}>
              Please check your internet settings.
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
const getStyles = (theme: any) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.themeLightMax,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    contentContainer: {
      backgroundColor: '#FFF',
      width: '90%',
      height: '60%',
      elevation: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      color: theme.themeColor,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
    message: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      fontFamily: FontFamily.PoppinsSemiBold,
      marginTop: 5,
    },
  });
export default NoInternetModal;
