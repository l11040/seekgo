import {StyleSheet} from 'react-native';
import {Spacing} from '../../constants/Spacing';
import {scaled} from '../../utils/scaleUtils';

export const styles = StyleSheet.create({
  HeaderContainer: {
    paddingVertical: Spacing.Small,
    height: scaled(46),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  RightContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },

  Button: {
    height: 32,
  },

  LogoImage: {
    height: 26,
    width: 82.25,
    resizeMode: 'contain',
  },
});
