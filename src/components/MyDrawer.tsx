import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomVectorIcons from './CustomVectorIcons';
import DrawerItem from './DrawerItem'; // ensure this is the .tsx version
import { useTheme } from '@theme/themeContext';
import createBasicStyles from 'styles';
import CustomLucideIcon from './CustomLucideIcon';
import { moderateScale } from 'react-native-size-matters';
import FontFamily from '@assets/fonts/FontFamily';
import FastImage from '@d11/react-native-fast-image';
import IMAGES from '@assets/images';
import Popup from './Popup';
import ToggleSwitch from 'toggle-switch-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyDrawer = (props: any) => {
  const { theme, isDark, toggleTheme, setThemeToLight } = useTheme();

  const styles = getStyles(theme);
  const basicStyles = createBasicStyles(theme);
  const { navigation } = props;
  const [logoutPopup, setlogoutPopup] = useState(false);
  const [deleteAccPopup, setdeleteAccPopup] = useState(false);
  const [themeState, setthemeState] = useState(false);

  // function handleLogout() {
  //     setThemeToLight()
  //     setlogoutPopup(false)
  //     props.navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'Login', params: { screen: 'Login' } }],
  //     });
  // }

  function handleLogout() {
    setThemeToLight();
    setlogoutPopup(false);

    // Remove both userToken and userType
    AsyncStorage.multiRemove(['userToken', 'userType'])
      .then(() => {
        props.navigation.reset({
          index: 0,
          routes: [
            { name: 'ChooseProfile', params: { screen: 'ChooseProfile' } },
          ],
        });
      })
      .catch(error => {
        console.error('AsyncStorage error during logout:', error);
        // Optionally still navigate
        props.navigation.reset({
          index: 0,
          routes: [
            { name: 'ChooseProfile', params: { screen: 'ChooseProfile' } },
          ],
        });
      });
  }

  function handleDeleteAcc() {
    setThemeToLight();
    setdeleteAccPopup(false);
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'ChooseProfile', params: { screen: 'ChooseProfile' } }],
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          activeOpacity={0.7}
          style={styles.iconCircle}
        >
          <CustomLucideIcon
            name="ChevronLeft"
            size={moderateScale(25)}
            color={isDark ? theme.background : theme.black}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.divider} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '95%', alignSelf: 'center' }}>
          <Text
            style={{
              fontSize: moderateScale(15),
              color: theme.authentTitle,
              fontFamily: FontFamily.PoppinsSemiBold,
            }}
          >
            PEROSNAL DETAILS
          </Text>
          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.profileIcon}
                tintColor={(isDark && theme.white) || undefined}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                resizeMode="contain"
              />
            }
            title="Profile"
            onPress={() => {
              props.navigation.closeDrawer(),
                navigation.navigate('OwnerProfile');
            }}
          />
        </View>

        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            marginTop: moderateScale(25),
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(15),
              color: theme.authentTitle,
              fontFamily: FontFamily.PoppinsSemiBold,
            }}
          >
            GENERAL
          </Text>
          {/* <DrawerItem
                        icon={<FastImage source={IMAGES.propertyIcon} style={{ width: moderateScale(30), height: moderateScale(30) }} tintColor={isDark && theme.white || undefined} resizeMode='contain' />}
                        title="Property Settings"
                        onPress={() => props.navigation.closeDrawer()}
                    /> */}
          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.propertyIcon}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                tintColor={(isDark && theme.white) || undefined}
                resizeMode="contain"
              />
            }
            title="Property Settings"
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('PropertyListScreen'); // 👈 Navigate here
            }}
          />

          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.electricityIcon}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                tintColor={(isDark && theme.white) || undefined}
                resizeMode="contain"
              />
            }
            title="Pay Electricity Bills"
            onPress={() => {
              props.navigation.navigate('OwnerElectricityBills'),
                props.navigation.closeDrawer();
            }}
          />
          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.notificationIcon}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                tintColor={(isDark && theme.white) || undefined}
                resizeMode="contain"
              />
            }
            title="Notifications & Message"
            onPress={() => {
              props.navigation.navigate('OwnerNotifcations'),
                props.navigation.closeDrawer();
            }}
          />
          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.premiumIcon}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                tintColor={(isDark && theme.white) || undefined}
                resizeMode="contain"
              />
            }
            title="Premium Plan"
            onPress={() => {
              props.navigation.navigate('OwnerPlans'),
                props.navigation.closeDrawer();
            }}
          />
          <DrawerItem
            icon={
              <FastImage
                source={IMAGES.settingsIcon}
                style={{ width: moderateScale(30), height: moderateScale(30) }}
                tintColor={(isDark && theme.white) || undefined}
                resizeMode="contain"
              />
            }
            title="Security Settings"
            onPress={() => {
              props.navigation.closeDrawer(),
                props.navigation.navigate('OwnerSettings');
            }}
          />

          <View
            style={{
              marginTop: moderateScale(10),
              width: '85%',
              alignSelf: 'center',
              height: 45,
              borderRadius: 8,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {isDark ? (
                <CustomLucideIcon
                  name="Moon"
                  size={moderateScale(25)}
                  color={theme.white}
                />
              ) : (
                <CustomLucideIcon
                  name="SunMedium"
                  size={moderateScale(25)}
                  color={theme.themeColor}
                />
              )}
              <Text
                style={{
                  color: theme.black,
                  fontFamily: FontFamily.PoppinsMedium,
                  fontSize: moderateScale(13),
                  marginBottom: -3,
                  marginLeft: moderateScale(20),
                }}
              >
                {isDark ? 'Dark' : 'Light'} Theme
              </Text>
            </View>
            <ToggleSwitch
              isOn={isDark}
              onColor={theme.themeGreen}
              offColor={theme.borderColor}
              size="small"
              onToggle={toggleTheme}
            />
          </View>
        </View>
        <View style={{ marginBottom: 30 }} />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          width: '95%',
          alignSelf: 'center',
          bottom: moderateScale(20),
        }}
      >
        <DrawerItem
          icon={
            <FastImage
              source={IMAGES.logoutIcon}
              style={{ width: moderateScale(30), height: moderateScale(30) }}
              tintColor={(isDark && theme.white) || undefined}
              resizeMode="contain"
            />
          }
          title="Logout"
          onPress={() => {
            props.navigation.closeDrawer(), setlogoutPopup(true);
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.closeDrawer(), setdeleteAccPopup(true);
            }}
            activeOpacity={0.6}
            style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CustomLucideIcon
                name="Trash"
                size={moderateScale(25)}
                color={theme.themeRed}
              />
            </View>
            <View style={{ paddingLeft: 10, flex: 1 }}>
              <Text
                style={{
                  color: theme.themeRed,
                  fontFamily: FontFamily.PoppinsMedium,
                  fontSize: 16,
                }}
              >
                {'Delete Account'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Popup
        visible={logoutPopup}
        type={'logout'}
        onClose={() => setlogoutPopup(false)}
        handleLogout={() => handleLogout()}
      />
      <Popup
        visible={deleteAccPopup}
        type={'deleteAccount'}
        onClose={() => setdeleteAccPopup(false)}
        handleLogout={() => handleDeleteAcc()}
      />
    </SafeAreaView>
  );
};

export default MyDrawer;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: moderateScale(10),
    },
    profileContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      marginVertical: 20,
      padding: 10,
    },
    iconCircle: {
      height: moderateScale(40),
      width: moderateScale(40),
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: theme.white,
      borderWidth: 1,
      borderColor: theme.borderColor2,
      justifyContent: 'center',
    },
    divider: {
      borderBottomWidth: 0.5,
      borderColor: theme.themeColor,
      elevation: 5,
      marginBottom: 5,
    },
  });
