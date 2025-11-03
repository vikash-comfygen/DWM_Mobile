import { Props } from './types';
import styles from './styles';
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import CustomVectorIcons from './CustomVectorIcons';
import { useNavigation } from '@react-navigation/native';
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import { moderateScale } from 'react-native-size-matters';
import IMAGES from '@assets/images';
import CustomLucideIcon from './CustomLucideIcon';

type HeaderProps = {
  title?: string;
  subtitle?: any;
  onPress?: any;
  onPress2?: any;
  iconColor?: any;
  helpIcon?: any;
  headerContainerStyle?: any;
  marginHorizontal?: any;
};

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onPress,
  onPress2,
  helpIcon,
  headerContainerStyle,
  iconColor,
  marginHorizontal = moderateScale(0),
}) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  const handleDarkMode = () => {
    toggleTheme();
  };

  const navigation = useNavigation<any>();

  return (
    <View
      style={[
        styles.container,
        headerContainerStyle,
        { marginHorizontal: marginHorizontal },
      ]}
    >
      <View style={styles.headCont}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
              width: moderateScale(45),
              height: moderateScale(45),
              borderRadius: 100,
              backgroundColor: theme.themeColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="ChevronLeft"
              size={30}
              color={theme.white}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: moderateScale(15), width: '80%' }}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontFamily: FontFamily.PoppinsSemiBold,
                color: theme.themeColor,
              }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: FontFamily.PoppinsMedium,
                  color: theme.gray,
                  marginTop: moderateScale(5),
                  marginLeft: moderateScale(5),
                }}
              >
                {subtitle}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: moderateScale(15),
      backgroundColor: 'transparent',
    },
    headCont: {
      marginVertical: moderateScale(25),
    },
    logoContainer: {
      width: '80%',
      marginLeft: moderateScale(10),
    },
    logo: {
      width: moderateScale(150),
      height: moderateScale(52),
      resizeMode: 'contain',
    },
    title: {
      fontSize: moderateScale(16),
      fontFamily: FontFamily.PoppinsSemiBold,
      color: theme.text,
    },
    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Header;
