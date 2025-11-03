import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import IMAGES from '@assets/images';
import FastImage from '@d11/react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';

type PopupProps = {
  visible?: any;
  onClose?: any;
  type?: any;
  handleLogout?: any;
};

const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  type,
  handleLogout,
}) => {
  const { theme, isDark } = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      {type === 'logout' && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View style={styles.modalContainer}>
            <View
              style={{
                padding: 10,
                paddingHorizontal: 25,
                borderRadius: 10,
                alignItems: 'center',
                backgroundColor: theme.background,
                width: '95%',
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <FastImage
                  source={IMAGES.logout}
                  style={{
                    width: moderateScale(100),
                    height: moderateScale(100),
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontFamily: FontFamily.PoppinsSemiBold,
                  fontSize: moderateScale(16),
                  color: theme.black,
                }}
              >
                {'Are you sure you want to logout?'}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 0,
                  fontFamily: FontFamily.PoppinsMedium,
                  fontSize: moderateScale(12),
                  color: isDark ? theme.gray : '#000000B2',
                }}
              >
                Only use this feature if you would like your account deleted or
                data removed?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 10,
                  marginTop: moderateScale(20),
                  width: '100%',
                }}
              >
                <TouchableOpacity
                  onPress={onClose}
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: isDark ? theme.gray : theme.white,
                    height: 45,
                    borderWidth: 1,
                    borderColor: '#00000033',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: isDark ? '#000' : theme.black,
                      fontFamily: FontFamily.PoppinsSemiBold,
                      fontSize: 14,
                      marginBottom: -3,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleLogout}
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: theme.themeColor,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: FontFamily.PoppinsSemiBold,
                      fontSize: 14,
                      marginBottom: -3,
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {type === 'deleteAccount' && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View style={styles.modalContainer}>
            <View
              style={{
                padding: 10,
                paddingHorizontal: 25,
                borderRadius: 10,
                alignItems: 'center',
                backgroundColor: theme.background,
                width: '95%',
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <FastImage
                  source={IMAGES.deleteAcc}
                  style={{
                    width: moderateScale(100),
                    height: moderateScale(100),
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontFamily: FontFamily.PoppinsSemiBold,
                  fontSize: moderateScale(16),
                  color: theme.black,
                }}
              >
                {'This action is permanent and cannot be undone later'}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 0,
                  fontFamily: FontFamily.PoppinsMedium,
                  fontSize: moderateScale(12),
                  color: isDark ? theme.gray : '#000000B2',
                }}
              >
                Note: This will erase all your data. This may take up to 7 days.
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  fontFamily: FontFamily.PoppinsSemiBold,
                  fontSize: moderateScale(16),
                  color: isDark ? theme.gray : '#000000B2',
                }}
              >
                {'Are you sure?'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 10,
                  marginTop: moderateScale(5),
                  width: '100%',
                }}
              >
                <TouchableOpacity
                  onPress={onClose}
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: isDark ? theme.gray : theme.white,
                    height: 45,
                    borderWidth: 1,
                    borderColor: '#00000033',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: theme.black,
                      fontFamily: FontFamily.PoppinsSemiBold,
                      fontSize: 14,
                      marginBottom: -3,
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleLogout}
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: '#FF0000',
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: FontFamily.PoppinsSemiBold,
                      fontSize: 14,
                      marginBottom: -3,
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popupContainer: {
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 20,
      fontFamily: FontFamily.PoppinsSemiBold,
      marginTop: 20,
      color: theme.theme,
    },
    message: {
      textAlign: 'center',
      marginVertical: 10,
      fontFamily: FontFamily.PoppinsRegular,
      fontSize: 16,
      color: '#000000',
    },
    okButton: {
      width: 50,
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    okButtonText: {
      color: 'black',
      fontFamily: FontFamily.PoppinsSemiBold,
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },

    cancelButton: {
      backgroundColor: theme.btnOrange,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      borderRadius: 5,
      marginRight: 5,
    },
    confirmButton: {
      backgroundColor: theme.btnGreen,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      borderRadius: 5,
      marginLeft: 5,
    },
    buttonText: {
      color: 'white',
      fontFamily: FontFamily.PoppinsSemiBold,
      fontSize: 16,
    },
  });

export default Popup;
