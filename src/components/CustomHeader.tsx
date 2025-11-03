/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import CustomVectorIcons from './CustomVectorIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import { moderateScale } from 'react-native-size-matters';
import IMAGES from '@assets/images';
import CustomLucideIcon from './CustomLucideIcon';
import { Dropdown } from 'react-native-element-dropdown';
import { apiRequest } from '@services/ApiServices';
import { ApiURL } from '@services/ApiConstants';
import { RoomI } from '@views/OwnerScreens/OwnerAddTenant';

type CustomHeaderProps = {
  title?: string;
  data?: any;
  value?: any;
  onChangeItem?: (item: any) => void;
  onChangeFocus?: any;
  onPress1?: any;
  onPress2?: any;
  onPress?: any;
};

type DropdownItem = { label: string; value: string };

type RootStackParamList = {
  Home1: undefined;
  ownerProperty: undefined; // 👈 Add this if it exists
};

interface PropertyI {
  rooms: RoomI[];
  _id: string;
  property_name: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  data,
  value,
  onChangeItem,
  onChangeFocus,
  onPress,
  onPress1,
  onPress2,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme, isDark);
  const [currentProperty, setCurrentProperty] = useState<string>('');
  const [propertyOptions, setPropertyOptions] = useState<DropdownItem[]>([]);
  const [realProperty, setRealProperty] = useState<PropertyI[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handelOnChange = (e: { label: string; value: string }) => {
    console.log('e', e);

    onChangeItem(e.value);
    setCurrentProperty(e?.label);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        {data.length > 0 ? (
          <Dropdown
            style={{
              width: '60%',
              borderRadius: moderateScale(0),
              height: moderateScale(50),
              paddingHorizontal: moderateScale(5),
              backgroundColor: isDark ? theme.background : theme.white,
            }}
            placeholderStyle={{
              fontSize: moderateScale(14),
              color: theme.black,
              fontFamily: FontFamily.PoppinsRegular,
            }}
            selectedTextStyle={{
              fontSize: moderateScale(18),
              color: theme.black,
              fontFamily: FontFamily.PoppinsMedium,
            }}
            containerStyle={{
              backgroundColor: isDark ? theme.background : theme.white,
            }}
            data={data}
            labelField="label"
            activeColor={isDark ? theme.pageBackgroundColor : theme.white}
            valueField="value"
            placeholder="Select Propery"
            value={currentProperty}
            iconColor={theme.black}
            renderRightIcon={item => (
              <CustomLucideIcon
                name="ChevronDown"
                size={moderateScale(24)}
                color={theme.black}
              />
            )}
            renderItem={item => (
              <View style={{ padding: 10 }}>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontFamily: FontFamily.PoppinsMedium,
                    color: theme.gray,
                  }}
                >
                  {item.label}
                </Text>
                <View
                  style={{
                    height: 0.5,
                    width: '95%',
                    alignSelf: 'center',
                    backgroundColor: theme.grayLight,
                    marginTop: moderateScale(10),
                  }}
                />
              </View>
            )}
            onChange={handelOnChange}
            onFocus={onChangeFocus}
          />
        ) : (
          <Button
            title="+ Add Property"
            onPress={() => navigation.navigate('ownerProperty')}
          />
        )}
      </View>

      <View
        style={{
          width: '32%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={onPress1}
          activeOpacity={0.7}
          style={{
            height: moderateScale(30),
            width: moderateScale(30),
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
            borderWidth: 1,
            borderColor: theme.borderColor2,
            justifyContent: 'center',
          }}
        >
          <CustomLucideIcon
            name="Bell"
            color={theme.black}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          activeOpacity={0.7}
          style={{
            height: moderateScale(30),
            width: moderateScale(30),
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
            borderWidth: 1,
            borderColor: theme.borderColor2,
            justifyContent: 'center',
          }}
        >
          <CustomVectorIcons
            name="support-agent"
            iconSet="MaterialIcons"
            color={theme.black}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={{
            height: moderateScale(30),
            width: moderateScale(30),
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
            borderWidth: 1,
            borderColor: theme.borderColor2,
            justifyContent: 'center',
          }}
        >
          <CustomLucideIcon
            name="AlignJustify"
            color={theme.black}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (theme: any, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.white,
      marginTop: moderateScale(0),
      height: moderateScale(70),
      borderBottomWidth: 1,
      borderColor: theme.grayBox,
      paddingHorizontal: moderateScale(15),
      elevation: 5,
      shadowColor: isDark ? theme.white : '#000',
    },
    headCont: {
      // marginVertical: moderateScale(25),
      width: '70%',
      alignItems: 'flex-start',
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

export default CustomHeader;
