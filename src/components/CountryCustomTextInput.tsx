/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CustomVectorIcons from './CustomVectorIcons';
import { useTheme } from '@theme/themeContext';
import FontFamily from '@assets/fonts/FontFamily';
import { moderateScale } from 'react-native-size-matters';
import CustomDropdown from './CustomDropdown';

interface CountryCustomTextInputProps extends TextInputProps {
  title?: string;
  placeholder?: string;
  countryCode?: string;
  icon?: any;
  secureTextEntry?: boolean;
  onIconPress?: () => void;
  showBorderOnFocus?: boolean;
  defaultBorderColor?: string;
  focusBorderColor?: string;
  focusOuterBorderColor?: string;
  errorMessage?: any;
  onFocusClearError?: () => void;
  OnpressCountery?: () => void;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
}

const CountryCustomTextInput = forwardRef<
  TextInput,
  CountryCustomTextInputProps
>(
  (
    {
      title,
      placeholder,
      value,
      onChangeText,
      secureTextEntry = false,
      icon,
      onIconPress,
      showBorderOnFocus = true,
      defaultBorderColor = '#CFCFCF',
      focusBorderColor = '#5f259f',
      focusOuterBorderColor = '#e0cbd7',
      errorMessage = '',
      onFocusClearError,
      style,
      inputStyle,
      errorStyle,
      onSubmitEditing,
      keyboardType,
      returnKeyType,
      autoCapitalize,
      countryCode = '91',
      OnpressCountery,
      ...textInputProps
    },
    ref,
  ) => {
    const { theme, isDark } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(!secureTextEntry);
    const styles = getStyles(theme, isDark);

    const handleFocus = () => {
      setIsFocused(true);
      if (onFocusClearError) {
        onFocusClearError();
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const hasError = !!errorMessage;

    return (
      <View style={[styles.container, style]}>
        {title && <Text style={styles.title}>{title}</Text>}

        <View
          style={[
            styles.inputContainer,
            {
              borderColor: hasError
                ? theme.themeRed
                : showBorderOnFocus && isFocused
                ? focusBorderColor
                : defaultBorderColor,
            },
          ]}
        >
          <CustomDropdown
            data={[{ label: '🇮🇳 +91', value: '🇮🇳 +91' }]}
            placeholder={''}
            value={{ label: '🇮🇳 +91', value: '🇮🇳 +91' }}
            onChange={(item: any) => console.log(item)}
            customDropdownContainerStyle={{
              width: '25%',
            }}
          />
          <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={theme.grayLight}
            value={value}
            ref={ref}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            secureTextEntry={!showPassword}
            {...textInputProps}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <CustomVectorIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size={moderateScale(25)}
                color={theme.grayLight}
                iconSet="Ionicons"
              />
            </TouchableOpacity>
          )}
        </View>

        {hasError && (
          <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
        )}
      </View>
    );
  },
);

const getStyles = (theme: any, isDark: any) =>
  StyleSheet.create({
    container: {
      marginBottom: moderateScale(20),
    },
    title: {
      fontSize: moderateScale(12),
      fontFamily: FontFamily.PoppinsMedium,
      marginBottom: moderateScale(5),
      color: isDark ? theme.white : theme.authentTitle,
    },
    outerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.4,
      borderColor: theme.whiteTransparent50,
      borderRadius: moderateScale(10),
      backgroundColor: theme.white,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.themeColor,
      borderRadius: moderateScale(5),
      height: moderateScale(50),
      paddingHorizontal: moderateScale(10),
      backgroundColor: isDark ? theme.background : theme.white,
      // elevation: 5,
    },
    input: {
      flex: 1,
      height: moderateScale(45),
      paddingVertical: 0,
      fontSize: moderateScale(14),
      fontFamily: FontFamily.PoppinsMedium,
      color: isDark ? theme.black : theme.Heading1,
      marginHorizontal: moderateScale(5),
    },
    errorText: {
      marginTop: moderateScale(5),
      fontSize: moderateScale(14),
      color: theme.themeRed,
      fontFamily: FontFamily.PoppinsMedium,
    },
  });

export default CountryCustomTextInput;
