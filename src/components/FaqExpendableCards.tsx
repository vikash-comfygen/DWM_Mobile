import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
// import { FontFamily, theme } from './yourConstants'; // replace with actual path
import createBasicStyles from 'styles';
import { useTheme } from '@theme/themeContext';
import FontFamily from '@assets/fonts/FontFamily';
import CustomLucideIcon from './CustomLucideIcon'; // replace with actual path

type OptionCardProps = {
  title: string;
  subitle?: string;
};

const FaqExpendableCards: React.FC<OptionCardProps> = ({ title, subitle }) => {
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
    outputRange: [0, moderateScale(70)], // adjust based on your content height
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View
      style={{
        marginTop: moderateScale(5),
        backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
        borderRadius: 10,
        padding: moderateScale(10),
        borderWidth: 1,
        borderColor: '#D2D2D2',
      }}
    >
      <TouchableOpacity activeOpacity={0.9} onPress={toggleExpand}>
        <View
          style={{
            backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
            borderRadius: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '85%' }}>
            <Text
              style={{
                fontSize: moderateScale(15),
                fontFamily: FontFamily.PoppinsSemiBold,
                color: theme.black,
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              width: moderateScale(25),
              height: moderateScale(25),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {expanded ? (
              <CustomLucideIcon
                name="ChevronUp"
                size={moderateScale(25)}
                color={theme.black}
              />
            ) : (
              <CustomLucideIcon
                name="ChevronDown"
                size={moderateScale(25)}
                color={theme.black}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <Animated.View
        style={{
          overflow: 'hidden',
          height: animatedHeight,
          opacity: animatedOpacity,
          backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: moderateScale(5),
        }}
      >
        <View style={{ width: '100%' }}>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontFamily: FontFamily.PoppinsRegular,
              color: theme.subtitleColor,
            }}
          >
            {subitle}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default FaqExpendableCards;
