// import React, { useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, Animated } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';
// // import { FontFamily, theme } from './yourConstants'; // replace with actual path
// import createBasicStyles from 'styles';
// import { useTheme } from '@theme/themeContext';
// import FontFamily from '@assets/fonts/FontFamily';
// import CustomLucideIcon from './CustomLucideIcon'; // replace with actual path
// import CustomVectorIcons from './CustomVectorIcons';
// import moment from 'moment';

// const NotificationCard = (props: any) => {
//     const { navigation } = props;
//     const { theme, isDark } = useTheme();
//     const basicStyles = createBasicStyles(theme);

//     return (
//         <View style={{ marginTop: moderateScale(0), backgroundColor: isDark ? theme.pageBackgroundColor : theme.white, borderRadius: 10, padding: moderateScale(10), borderWidth: 1, borderColor: '#D2D2D2' }}>

//             <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
//                 <View style={{ borderRadius: 100, width: moderateScale(30), height: moderateScale(30), alignItems: 'center', justifyContent: 'center' }}>
//                     <CustomVectorIcons name='bell-fill' iconSet='Octicons' color={theme.black} size={moderateScale(20)} />
//                 </View>
//                 <View style={{ width: '85%' }}>
//                     <Text style={{ fontSize: moderateScale(14), fontFamily: FontFamily.PoppinsSemiBold, color: theme.black }}>Received Rs. 5000 from Tenant.</Text>
//                     <Text style={{ fontSize: moderateScale(12), fontFamily: FontFamily.PoppinsRegular, color: theme.subtitleColor }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took make.</Text>
//                 </View>
//             </View>

//             <View style={{ alignSelf: 'flex-end', paddingHorizontal: moderateScale(10) }}>
//             <Text style={{ fontSize: moderateScale(10), fontFamily: FontFamily.PoppinsMedium, color: theme.subtitleColor }}>{moment().format('DD MMM YYYY, hh:mm A')}</Text>
//             </View>

//         </View>

//     );
// };

// export default NotificationCard;

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '@theme/themeContext';
import FontFamily from '@assets/fonts/FontFamily';
import CustomVectorIcons from './CustomVectorIcons';
import moment from 'moment';
import { apiRequest } from '@services/ApiServices';
import { ApiURL } from '@services/ApiConstants';

const NotificationCard = ({ navigation, route }: any) => {
  const { theme, isDark } = useTheme();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log('[NotificationCard] useEffect triggered');
    fetchNotification();
  }, []);

  const fetchNotification = async () => {
    const url = `${ApiURL.OwnerNotification}/list?page=1&size=10`;
    console.log(`[NotificationCard] Fetching notifications from: ${url}`);
    try {
      setLoading(true);
      console.log('[NotificationCard] Loading state set to TRUE');

      const res: any = await apiRequest(url, 'GET', null, true, false);
      console.log(
        '[NotificationCard] Raw API response:',
        JSON.stringify(res, null, 2),
      );

      if (!res?.error && Array.isArray(res.data?.list)) {
        console.log(
          `[NotificationCard] Notifications fetched: ${res.data.list.length} items`,
        );
        setNotifications(res.data.list);
        console.log('[NotificationCard] Notifications state updated');
      } else {
        const msg = res?.message || 'Failed to fetch notifications';
        console.warn('[NotificationCard] API indicated failure:', msg);
        setErrorMessage(msg);
      }
    } catch (err: any) {
      console.error('[NotificationCard] Fetch Notification Error:', err);
      setErrorMessage(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
      console.log('[NotificationCard] Loading state set to FALSE');
    }
  };

  if (loading) {
    console.log('[NotificationCard] Rendering loading indicator');
    return <ActivityIndicator style={{ marginTop: 20 }} />;
  }
  if (errorMessage) {
    console.log('[NotificationCard] Rendering error message:', errorMessage);
    return <Text style={{ color: 'red' }}>{errorMessage}</Text>;
  }

  console.log('[NotificationCard] Rendering notifications UI');
  return (
    <View style={{ padding: moderateScale(10) }}>
      {notifications.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: moderateScale(10),
            backgroundColor: isDark ? theme.pageBackgroundColor : theme.white,
            borderRadius: 10,
            padding: moderateScale(10),
            borderWidth: 1,
            borderColor: '#D2D2D2',
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                borderRadius: 100,
                width: moderateScale(30),
                height: moderateScale(30),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CustomVectorIcons
                name="bell-fill"
                iconSet="Octicons"
                color={theme.black}
                size={moderateScale(20)}
              />
              {/* Red Dot if NOT read */}
              {item.isRead === true && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'red',
                  }}
                />
              )}
            </View>

            <View style={{ width: '85%' }}>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontFamily: FontFamily.PoppinsSemiBold,
                  color: theme.black,
                }}
              >
                {item.title || 'Notification'}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: FontFamily.PoppinsRegular,
                  color: theme.subtitleColor,
                }}
              >
                {item.description || 'No description provided.'}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              paddingHorizontal: moderateScale(10),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(10),
                fontFamily: FontFamily.PoppinsMedium,
                color: theme.subtitleColor,
              }}
            >
              {moment(item.createdAt).format('DD MMM YYYY, hh:mm A')}
            </Text>
          </View>
        </View>
      ))}

      {notifications.length === 0 && !loading && (
        <Text style={{ textAlign: 'center', color: theme.subtitleColor }}>
          No notifications found
        </Text>
      )}
    </View>
  );
};

export default NotificationCard;
