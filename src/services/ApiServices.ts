import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
// import ImagePicker from 'react-native-image-crop-picker';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const apiRequest = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  data: any = null,
  isToken: boolean = false,
  isMultipart: boolean = false,
) => {
  try {
    let finalHeaders: any = {
      Accept: 'application/json',
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    };

    // Add token if isToken is true
    if (isToken) {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        finalHeaders.Authorization = `Bearer ${token}`;
      }
    }
    console.log('datadatadatadatadatadatadatadatadata', data);

    // If method is GET, prevent sending a request body
    const config: any = {
      method,
      url,
      headers: finalHeaders,
    };

    console.log('API Config', config);

    if (method !== 'GET') {
      config.data = isMultipart ? createFormData(data) : data;
    }

    const response = await axios(config);

    // Handle unauthorized token errors
    if (
      response.data?.message === 'Send valid token' ||
      response.data?.code === 3
    ) {
      await AsyncStorage.removeItem('userToken');
      throw new Error('Invalid Token: Please log in again.');
    }

    // console.log('API Response', response.data);

    return response.data;
  } catch (error) {
    console.log(
      `API ERROR (${method} - ${url}):`,
      error?.response?.data || error?.message,
    );

    return error?.response?.data;
    // throw error;
  }
};

// Helper function to create FormData for file uploads
const createFormData = (fileData: any) => {
  let formData = new FormData();
  if (fileData) {
    formData.append('module', fileData.module);
    formData.append('file', {
      uri: fileData.path,
      type: fileData.mime,
      name: fileData.path.split('/').pop(),
    });
  }

  console.log('formDataformDataformDataformDataformDataformData', formData);
  return formData;
};

const convertSizeToMB = (sizeInBytes: number): string => {
  const sizeInMB = sizeInBytes / (1024 * 1024); // Convert to MB
  return `${sizeInMB.toFixed(2)} MB`; // Format to 2 decimal places
};
export const formatDuration = (milliseconds: any): string => {
  const totalSeconds = Math.floor(milliseconds / 1000); // Convert to seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    hours > 0 ? String(hours).padStart(2, '0') : null, // Add hours only if > 0
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ]
    .filter(Boolean) // Remove null values
    .join(':');
};

// export const openVideo_Picker = async () => {
//   try {
//     // Open Image Picker
//     const image = await ImagePicker.openPicker({
//       // Enables cropping
//       width: 500,
//       height: 500,
//       mediaType: 'video',
//     });
//     const videoDuration = formatDuration(image?.duration);
//     // console.log('Image picking error:', videoDuration);

//     let alldata = {
//       ...image,
//       video_duration: formatDuration(image?.duration),
//       video_size: convertSizeToMB(image?.size),
//     };

//     return alldata; // Return the image for further use
//   } catch (error) {}
// };
// export const openImage_Picker = async () => {
//   try {
//     // Open Image Picker
//     const image = await ImagePicker.openPicker({
//       cropping: false, // Enables cropping
//       width: widthPercentageToDP('100%'),
//       height: heightPercentageToDP('20%'),
//       mediaType: 'photo',
//     });

//     // console.log('Selected & Cropped Image:', image);
//     return image; // Return the image for further use
//   } catch (error) {
//     // console.error('Image picking error:', error);
//   }
// };
// export const open_video_Picker = async () => {
//   try {
//     // Open Image Picker
//     const image = await ImagePicker.openPicker({
//       cropping: true, // Enables cropping
//       width: 500,
//       height: 500,
//       mediaType: 'video',
//     });

//     // console.log('Selected & Cropped Image:', image);
//     return image; // Return the image for further use
//   } catch (error) {
//     console.log('Image picking error:', error);
//   }
// };

// export const openCamera = async () => {
//   try {
//     const media = await ImagePicker.openCamera({
//       mediaType: 'video', // 'photo' or 'video'
//     });

//     let alldata = {
//       ...media,
//       video_duration: formatDuration(media?.duration),
//       video_size: convertSizeToMB(media?.size),
//     };

//     return alldata; // Return captured media
//   } catch (error) {}
// };

export const time_fun = (updatedAt: any) => {
  const duration = moment.duration(moment().diff(moment(updatedAt)));
  const hours = duration.hours();
  const minutes = duration.minutes();
  return `${hours > 0 ? `${hours}h ` : ''}${
    minutes > 0 ? `${minutes}m` : '2h 24m'
  }`;
};
