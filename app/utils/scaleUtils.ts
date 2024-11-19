import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const scaled = (value: number) => scale(value);
export const vScaled = (value: number) => verticalScale(value);
export const mScaled = (value: number) => moderateScale(value);
