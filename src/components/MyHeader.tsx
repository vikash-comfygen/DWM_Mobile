import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import { moderateScale } from 'react-native-size-matters';
import CustomLucideIcon from './CustomLucideIcon';

type MyHeaderProps = {
  title?: string;
  subtitle?: any;
  onPress?: any;
  onPress2?: any;
  iconColor?: any;
  helpIcon?: any;
  headerContainerStyle?: any;
  marginHorizontal?: any;
};

const MyHeader: React.FC<MyHeaderProps> = ({
  title,
  subtitle,
  onPress,
  headerContainerStyle,
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: moderateScale(0),
        }}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={{
            height: moderateScale(40),
            width: moderateScale(40),
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: isDark ? theme.gray : theme.white,
            borderWidth: 1,
            borderColor: theme.borderColor2,
            justifyContent: 'center',
          }}
        >
          <CustomLucideIcon name="ChevronLeft" size={30} color={theme.black} />
        </TouchableOpacity>
        <View style={{ marginLeft: moderateScale(15), width: '80%' }}>
          <Text
            style={{
              fontSize: moderateScale(17),
              fontFamily: FontFamily.PoppinsSemiBold,
              color: theme.black,
            }}
          >
            {title}
          </Text>
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
      // backgroundColor: 'blue',
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

export default MyHeader;
