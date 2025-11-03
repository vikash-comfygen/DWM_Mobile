import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomImageComponent from './CustomImageComponent'; // handles both local & URL images
import CustomLucideIcon from './CustomLucideIcon';
import { moderateScale } from 'react-native-size-matters';

import createBasicStyles from 'styles';
import { useTheme } from '@theme/themeContext';
import FontFamily from '@assets/fonts/FontFamily';
import IMAGES from '@assets/images';

type CustomOptionsCardProps = {
  headerLabel: string;
  navigation: any;
  onWalletPress: () => void;
  onBanksPress: () => void;
  onMobileMoneyPress: () => void;
  onCheckBalancePress: () => void;
};

const CustomOptionsCard: React.FC<CustomOptionsCardProps> = ({
  navigation,
  headerLabel,
  onWalletPress,
  onBanksPress,
  onMobileMoneyPress,
  onCheckBalancePress,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const basicStyles = createBasicStyles(theme);

  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <Text style={basicStyles.textStyleMediumBold}>{headerLabel}</Text>

        <TouchableOpacity
          style={[basicStyles.flexDirectionRow]}
          onPress={() => {
            console.log('Wallet pressed');
            navigation.navigate('CardBankOptionSelection'); // Optional chaining
          }}
        >
          <CustomImageComponent
            source={
              'https://i.pinimg.com/736x/eb/55/d1/eb55d100ee42369d2e984e3cb4758c76.jpg'
            }
            style={{ marginRight: moderateScale(5) }}
          />
          <Text style={basicStyles.textStyleSmall}>XXXX2580</Text>

          <Text
            style={[
              basicStyles.textStyleExtraSmall,
              {
                backgroundColor: theme.themeDarkGreen,
                color: theme.white,
                paddingHorizontal: moderateScale(8),
                paddingVertical: moderateScale(2),
                borderRadius: moderateScale(10),
                fontFamily: FontFamily.PoppinsRegular,
                marginLeft: moderateScale(5),
              },
            ]}
          >
            Primary
          </Text>

          <CustomLucideIcon
            name="ChevronDown"
            style={{ marginLeft: moderateScale(5) }}
          />
        </TouchableOpacity>
      </View>

      {/* Labels Section (no condition) */}
      <View style={styles.cardOptionsSection}>
        {[
          {
            id: 0,
            label: 'To Wallet',
            img: IMAGES.ic_to_wallet,
            actionPress: onWalletPress,
          },
          {
            id: 1,
            label: 'To Bank & Self A/c',
            img: IMAGES.ic_to_bank,
            actionPress: onBanksPress,
          },
          {
            id: 2,
            label: 'Mobile Money',
            img: IMAGES.ic_mobile_money,
            actionPress: onMobileMoneyPress,
          },
          {
            id: 3,
            label: 'Check Balance',
            img: IMAGES.ic_check_balance,
            actionPress: onCheckBalancePress,
          },
        ].map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={item.actionPress}
            style={{ justifyContent: 'center' }}
          >
            <CustomImageComponent
              source={item.img}
              height={moderateScale(40)}
              width={moderateScale(40)}
              style={{ alignSelf: 'center' }}
            />

            <Text style={[basicStyles.textStyleSmall, styles.labelCustomStyle]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomOptionsCard;

const getStyles = (theme: any) =>
  StyleSheet.create({
    cardContainer: {
      marginTop: moderateScale(20),
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      paddingBottom: moderateScale(10),
      borderStyle: 'dashed',
      borderColor: theme.grayLight,
    },
    cardOptionsSection: {
      marginTop: moderateScale(15),
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    labelCustomStyle: {
      width: moderateScale(55),
      marginTop: moderateScale(5),
      textAlign: 'center',
      color: theme.text,
    },
  });
