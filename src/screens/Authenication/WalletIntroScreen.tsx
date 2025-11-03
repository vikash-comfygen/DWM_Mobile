// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import IMAGES from '../../assets/images';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FastImage from '@d11/react-native-fast-image';
// import CustomVectorIcons from '../../components/CustomVectorIcons';
// import LinearGradient from 'react-native-linear-gradient'; // Make sure to install react-native-linear-gradient

// const WalletIntroScreen = ({ navigation }) => {
//   return (
//     <LinearGradient
//       colors={['#001da0ff', '#160101ff']}
//       style={styles.gradientContainer}
//     >
//       <SafeAreaView style={styles.container}>
//         <ScrollView contentContainerStyle={styles.content}>
//           {/* Header with icon */}
//           <View style={styles.header}>
//             <CustomVectorIcons
//               name="circle-dollar-to-slot" // choose an appropriate icon
//               size={28}
//               color="#fff"
//               iconSet="FontAwesome6"
//             />
//             <Text style={styles.appName}>SafePal</Text>
//           </View>

//           {/* Title */}
//           <Text style={styles.title}>Own and Manage Your Assets</Text>
//           <Text style={styles.subtitle}>100+ Blockchain Support</Text>

//           {/* Illustration */}
//           <FastImage
//             source={IMAGES.computer2}
//             style={styles.image}
//             resizeMode={FastImage.resizeMode.contain}
//           />

//           {/* Buttons */}
//           <TouchableOpacity
//             style={styles.primaryButton}
//             onPress={() => navigation.navigate('CreatePassword')}
//           >
//             <View style={styles.iconWrapper}>
//               <CustomVectorIcons
//                 name="plus"
//                 size={24}
//                 color="black"
//                 iconSet="EvilIcons"
//               />
//             </View>
//             <Text style={styles.primaryButtonText}>Create New Wallet</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.secondaryButton}>
//             <View style={styles.iconWrapper}>
//               <CustomVectorIcons
//                 name="share-from-square"
//                 size={20}
//                 color="black"
//                 iconSet="FontAwesome6"
//               />
//             </View>
//             <Text style={styles.secondaryButtonText}>Add Existing Wallet</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.secondaryButton}>
//             <View style={styles.iconWrapper}>
//               <CustomVectorIcons
//                 name="plus"
//                 size={20}
//                 color="#8a2be2"
//                 iconSet="EvilIcons"
//               />
//             </View>
//             <Text style={styles.secondaryButtonText}>
//               Connect Hardware Wallet
//             </Text>
//           </TouchableOpacity>

//           {/* Footer */}
//           <Text style={styles.footerText}>
//             By continuing you agree to our{' '}
//             <Text style={styles.linkText}>Term of Use</Text>
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default WalletIntroScreen;

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   content: {
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // marginBottom: 20,
//     paddingLeft: 5, // optional: adjust to align with title text
//   },
//   appName: {
//     color: '#ffffff',
//     fontSize: 22,
//     fontWeight: '600',
//     marginLeft: 6, // space between icon and text
//   },
//   title: {
//     color: '#ffffff',
//     fontSize: 26,
//     fontWeight: '700',
//     marginTop: 8,
//   },
//   subtitle: {
//     color: '#b0b0b0',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   image: {
//     width: 180,
//     height: 180,
//     marginVertical: 40,
//     alignSelf: 'center',
//   },
//   primaryButton: {
//     flexDirection: 'row',
//     backgroundColor: '#8a2be2',
//     borderRadius: 10,
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   secondaryButton: {
//     flexDirection: 'row',
//     backgroundColor: '#1e1e1e',
//     borderRadius: 10,
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   iconWrapper: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   secondaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   footerText: {
//     color: '#888',
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   linkText: {
//     color: '#8a2be2',
//     textDecorationLine: 'underline',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import IMAGES from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from '@d11/react-native-fast-image';
import CustomVectorIcons from '../../components/CustomVectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const slides = [
  {
    title: 'Own and Manage Your Assets',
    subtitle: '100+ Blockchain Support',
    image: IMAGES.computer2,
  },
  {
    title: 'Secure Your Wallet Easily',
    subtitle: 'Fast & Reliable Transactions',
    image: IMAGES.computer2,
  },
  {
    title: 'Connect with Hardware Wallet',
    subtitle: 'Safe & Convenient',
    image: IMAGES.computer2,
  },
];

const WalletIntroScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#001da0ff', '#160101ff']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Header with icon */}
          <View style={styles.header}>
            <CustomVectorIcons
              name="circle-dollar-to-slot"
              size={28}
              color="#fff"
              iconSet="FontAwesome6"
            />
            <Text style={styles.appName}>SafePal</Text>
          </View>

          {/* Swiper for title, subtitle, and GIF */}
          <Swiper
            style={styles.swiper}
            showsPagination={true}
            autoplay={true}
            autoplayTimeout={3}
          >
            {slides.map((slide, index) => (
              <View key={index} style={styles.slide}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>
                <FastImage
                  source={slide.image}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            ))}
          </Swiper>

          {/* Buttons */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('CreatePassword')}
          >
            <View style={styles.iconWrapper}>
              <CustomVectorIcons
                name="plus"
                size={24}
                color="black"
                iconSet="EvilIcons"
              />
            </View>
            <Text style={styles.primaryButtonText}>Create New Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={styles.iconWrapper}>
              <CustomVectorIcons
                name="share-from-square"
                size={20}
                color="black"
                iconSet="FontAwesome6"
              />
            </View>
            <Text style={styles.secondaryButtonText}>Add Existing Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={styles.iconWrapper}>
              <CustomVectorIcons
                name="plus"
                size={20}
                color="#8a2be2"
                iconSet="EvilIcons"
              />
            </View>
            <Text style={styles.secondaryButtonText}>
              Connect Hardware Wallet
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing you agree to our
            </Text>
            <Text style={styles.linkText}>Term of Use</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WalletIntroScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  appName: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 6,
  },
  swiper: {
    height: 300,
    marginBottom: 20,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    paddingLeft: 2,
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 10,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#7c7979ff',
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    // textDecorationLine: 'underline',
    marginTop: 2,
  },
});
