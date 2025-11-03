/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import CustomVectorIcons from './CustomVectorIcons';
import { useNavigation } from '@react-navigation/native';
import FontFamily from '@assets/fonts/FontFamily';
import { useTheme } from '@theme/themeContext';
import { moderateScale } from 'react-native-size-matters';
import IMAGES from '@assets/images';
import CustomImageComponent from './CustomImageComponent';

type AuthenticationHeaderProps = {
  goBack?: boolean;
  title?: string;
};

const AuthenticationHeader: React.FC<AuthenticationHeaderProps> = ({
  goBack,
  title = 'Back',
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<any>();

  return (
    <View style={{ borderRadius: moderateScale(30) }}>
      <CustomImageComponent
        source={IMAGES.bg_card_primary} // Using a placeholder image component
        width={'100%'}
        height={moderateScale(120)}
        resizeMode="stretch"
        style={{
          marginTop: moderateScale(-30),
          borderRadius: moderateScale(20),
        }}
      />
      {goBack && (
        <View style={styles.headCont}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <CustomVectorIcons
              name="arrow-back"
              iconSet="Ionicons"
              size={moderateScale(24)}
              color={theme.white}
            />
            <Text style={styles.backText}>{title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      marginTop: Platform.OS === 'android' ? moderateScale(25) : 0,
    },
    headCont: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(30),
      left: moderateScale(20),
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backText: {
      color: theme.white,
      fontSize: moderateScale(18),
      fontFamily: FontFamily.KhulaSemiBold,
      marginLeft: moderateScale(5),
      marginTop: 3,
    },
  });

export default AuthenticationHeader;
