import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import FontFamily from '@assets/fonts/FontFamily';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTheme } from '@theme/themeContext';

interface SwiperItem {
  id: string;
  source: any;
  heading: string;
  content: string;
}

interface CustomSwiperFlatlistProps {
  data: SwiperItem[];
  onIndexChanged: (index: number) => void;
}

const CustomSwiperFlatlist = forwardRef(
  ({ data, onIndexChanged }: CustomSwiperFlatlistProps, ref) => {
    const { theme, isDark } = useTheme();

    const flatListRef = useRef<FlatList>(null);
    const scrollX = useSharedValue(0);
    const screenWidth = 360; // Set fixed width (adjust based on your design)
    const screenHeight = 640;

    // Custom scroll handler
    const scrollHandler = useAnimatedScrollHandler(event => {
      scrollX.value = event.contentOffset.x;
    });

    useImperativeHandle(ref, () => ({
      scrollToNext: () => {
        if (flatListRef.current) {
          const nextIndex = Math.min(
            data.length - 1,
            Math.round(scrollX.value / wp('100%')) + 1,
          );
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
      },
    }));

    return (
      <View style={{ height: hp('60%'), width: '100%' }}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={data}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / wp('100%'),
            );
            onIndexChanged(newIndex);
          }}
          onScroll={scrollHandler} // Correct way to handle scrolling
          renderItem={({ item, index }) => (
            <SwiperItemComponent item={item} index={index} scrollX={scrollX} />
          )}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          {data.map((_, index) => {
            const dotStyle = useAnimatedStyle(() => {
              const opacity = interpolate(
                scrollX.value,
                [
                  index * screenWidth - screenWidth,
                  index * screenWidth,
                  index * screenWidth + screenWidth,
                ],
                [0.5, 1, 0.5],
                Extrapolate.CLAMP,
              );
              const scale = interpolate(
                scrollX.value,
                [
                  index * screenWidth - screenWidth,
                  index * screenWidth,
                  index * screenWidth + screenWidth,
                ],
                [0.8, 1.2, 0.8],
                Extrapolate.CLAMP,
              );
              const width = interpolate(
                scrollX.value,
                [
                  index * screenWidth - screenWidth,
                  index * screenWidth,
                  index * screenWidth + screenWidth,
                ],
                [10, 25, 10],
                Extrapolate.CLAMP,
              );

              return { opacity, transform: [{ scale }], width };
            });

            return (
              <Animated.View
                key={index}
                style={[
                  dotStyle,
                  {
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: theme.themeColor,
                    marginHorizontal: 5,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  },
);

// Separate animated component
const SwiperItemComponent = ({
  item,
  index,
  scrollX,
}: {
  item: SwiperItem;
  index: number;
  scrollX: any;
}) => {
  // Move screen width and height outside of the animation function
  const screenWidth = wp('100%');
  const screenHeight = hp('50%');

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [0.85, 1, 0.85], // Scaling effect
      Extrapolate.CLAMP,
    );
    return { transform: [{ scale }] };
  });

  return (
    <Animated.View
      style={[animatedStyle, { width: screenWidth, height: screenHeight }]}
    >
      <Image
        source={item.source}
        style={{ width: '100%', height: '80%', resizeMode: 'contain' }}
      />
      <Text
        style={{
          fontSize: wp('6%'),
          fontFamily: FontFamily.PoppinsSemiBold,
          color: '#000',
          textAlign: 'center',
          marginVertical: hp('1.5%'),
        }}
      >
        {item.heading}
      </Text>
      <Text
        style={{
          fontSize: wp('4%'),
          fontFamily: FontFamily.PoppinsRegular,
          textAlign: 'center',
          color: '#000',
          width: '80%',
          alignSelf: 'center',
        }}
      >
        {item.content}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: hp('30%'),
    width: '80%',
    resizeMode: 'contain',
  },
  heading: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  content: {
    fontSize: wp('5%'),
    textAlign: 'center',
    color: '#000',
  },
});

export default CustomSwiperFlatlist;
