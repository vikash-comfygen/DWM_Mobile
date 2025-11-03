/* eslint-disable react-native/no-inline-styles */
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale } from 'react-native-size-matters';

const CustomDropdown: React.FC<any> = ({
  title,
  data,
  onChange,
  value,
  placeholder,
  marginTop,
  maxHeight,
  errorMessage,
  customDropdownStyle,
  customDropdownContainerStyle,
  onFocus,
  titleStyle,
  errorStyle,
}) => {
  const { theme, isDark } = useTheme();
  const styles = getStyles(theme);

  return (
    <View
      style={[
        {
          width: '100%',
        },
        customDropdownContainerStyle,
      ]}
    >
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <Dropdown
        maxHeight={maxHeight}
        style={[
          {
            height: moderateScale(45),
            borderRadius: 10,
            width: '100%',
            backgroundColor: isDark ? theme.background : theme.white,
          },
          customDropdownStyle,
        ]}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        iconColor={theme.black}
        iconStyle={{
          height: moderateScale(20),
          width: moderateScale(20),
        }}
        activeColor={isDark ? theme.gray : theme.white}
        onChange={onChange}
        selectedTextStyle={styles.selectedText}
        placeholderStyle={styles.placeholder}
        containerStyle={{
          backgroundColor: isDark ? theme.background : theme.white,
          borderRadius: 10,
          width: '86%',
        }}
        itemContainerStyle={{
          backgroundColor: isDark ? theme.background : theme.white,
        }}
        itemTextStyle={{ fontSize: moderateScale(14), color: theme.text }}
      />

      {errorMessage && (
        <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    dropdown: {
      height: 50,
      borderRadius: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: 'white',
      paddingHorizontal: 15,
    },
    title: {
      fontSize: moderateScale(12),
      fontFamily: FontFamily.PoppinsMedium,
      marginBottom: moderateScale(5),
      color: theme.authentTitle,
    },
    errorText: {
      marginTop: moderateScale(2),
      fontSize: moderateScale(14),
      color: theme.themeRed,
      fontFamily: FontFamily.PoppinsMedium,
    },
    dropdownBox: {
      backgroundColor: 'white',
      // borderRadius: 10,
    },
    placeholder: {
      color: theme.grayLight,
      fontSize: moderateScale(14),
      fontFamily: FontFamily.PoppinsMedium,
    },
    selectedText: {
      fontSize: moderateScale(14),
      color: theme.black,
      fontFamily: FontFamily.PoppinsMedium,
    },
  });

export default CustomDropdown;
