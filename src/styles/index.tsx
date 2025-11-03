import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import FontFamily from '@assets/fonts/FontFamily';

const createBasicStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: moderateScale(0),
      backgroundColor: theme.white,
    },
    textStyleExtraLarge: {
      fontSize: moderateScale(20),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsMedium,
    },
    textStyleExtraLargeBold: {
      fontSize: moderateScale(20),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsSemiBold,
    },
    textStyleLarge: {
      fontSize: moderateScale(16),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsMedium,
    },
    textStyleLargeBold: {
      fontSize: moderateScale(16),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsSemiBold,
    },
    textStyleMedium: {
      fontSize: moderateScale(13),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsMedium,
    },
    textStyleRegular: {
      fontSize: moderateScale(13),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsRegular,
    },
    textStyleMediumBold: {
      fontSize: moderateScale(13),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsSemiBold,
    },
    textStyleSmall: {
      fontSize: moderateScale(12),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsMedium,
    },
    textStyleSmallBold: {
      fontSize: moderateScale(12),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsSemiBold,
    },
    textStyleExtraSmall: {
      fontSize: moderateScale(10),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsMedium,
    },
    textStyleExtraSmallBold: {
      fontSize: moderateScale(10),
      color: theme?.text || '#000',
      fontFamily: FontFamily.PoppinsSemiBold,
    },
    flexDirectionRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default createBasicStyles;
