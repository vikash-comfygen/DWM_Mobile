import React from 'react';
import FastImage from '@d11/react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';

const CustomImageComponent = ({
  source,
  height = moderateScale(15),
  width = moderateScale(15),
  resizeMode = FastImage.resizeMode.cover,
  priority = FastImage.priority.normal,
  style = {},
}) => {
  let imageSource;

  if (typeof source === 'string') {
    // Remote URL or local file path
    if (source.startsWith('http://') || source.startsWith('https://')) {
      imageSource = { uri: source, priority };
    } else {
      imageSource = { uri: source };
    }
  } else if (typeof source === 'number') {
    // Bundled local asset (require)
    imageSource = source;
  } else {
    console.warn('AppImage: Invalid image source provided');
    return null;
  }

  return (
    <FastImage
      style={[
        {
          height: moderateScale(height),
          width: moderateScale(width),
        },
        style,
      ]}
      source={imageSource}
      resizeMode={resizeMode}
    />
  );
};

export default CustomImageComponent;
