import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
// import { FontFamily, theme } from './yourConstants'; // replace with actual path
import createBasicStyles from 'styles';
import { useTheme } from '@theme/themeContext';
import FontFamily from '@assets/fonts/FontFamily';
import CustomLucideIcon from './CustomLucideIcon'; // replace with actual path

const ExpandableCard = (props: any) => {
  const { navigation } = props;
  const { theme, isDark } = useTheme();
  const basicStyles = createBasicStyles(theme);
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, moderateScale(170)], // adjust based on your content height
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} onPress={toggleExpand}>
        <View
          style={{
            marginTop: moderateScale(5),
            backgroundColor: theme.white,
            borderRadius: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: moderateScale(13),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              borderRadius: 100,
              width: moderateScale(25),
              height: moderateScale(25),
              backgroundColor: theme.themeColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="User"
              color={theme.white}
              size={moderateScale(20)}
            />
          </View>
          <View style={{ width: '75%' }}>
            <Text
              style={{
                fontSize: moderateScale(15),
                fontFamily: FontFamily.PoppinsSemiBold,
                color: theme.themeColor,
              }}
            >
              Testing Tenant
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              width: moderateScale(25),
              height: moderateScale(25),
              backgroundColor: theme.themeLight,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="ChevronDown"
              size={moderateScale(18)}
              color={theme.themeColor}
            />
          </View>
        </View>
      </TouchableOpacity>

      <Animated.View
        style={{
          overflow: 'hidden',
          height: animatedHeight,
          opacity: animatedOpacity,
          backgroundColor: theme.white,
          // padding: moderateScale(10),
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: moderateScale(5),
        }}
      >
        <View style={{ width: '80%', alignSelf: 'flex-end' }}>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: FontFamily.PoppinsMedium,
              color: theme.black,
            }}
          >
            Tenant Name : Testing Teanant
          </Text>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: FontFamily.PoppinsMedium,
              color: theme.black,
            }}
          >
            Tenant Id: 123456487126
          </Text>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: FontFamily.PoppinsMedium,
              color: theme.black,
            }}
          >
            Phone No.: +91 74546464646
          </Text>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: FontFamily.PoppinsMedium,
              color: theme.black,
            }}
          >
            Rent: 3500 Per Month
          </Text>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: FontFamily.PoppinsMedium,
              color: theme.black,
            }}
          >
            Dues: No Dues
          </Text>
        </View>
        <View
          style={{
            marginVertical: moderateScale(5),
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#e7eedd',
              width: moderateScale(40),
              borderRadius: 100,
              alignItems: 'center',
              height: moderateScale(40),
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="Phone"
              size={moderateScale(20)}
              color={theme.themeColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e7eedd',
              width: moderateScale(40),
              borderRadius: 100,
              alignItems: 'center',
              height: moderateScale(40),
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="MessageCircleMore"
              size={moderateScale(20)}
              color={theme.themeColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e7eedd',
              width: moderateScale(40),
              borderRadius: 100,
              alignItems: 'center',
              height: moderateScale(40),
              justifyContent: 'center',
            }}
          >
            <CustomLucideIcon
              name="EllipsisVertical"
              size={moderateScale(20)}
              color={theme.themeColor}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ExpandableCard;
