import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {Spacing} from '../../constants/Spacing';
import {FontSizes} from '../../constants/Fonts';
import {BorderRadius} from '../../constants/BorderRadius';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.Tiny,
  },
  primary: {
    backgroundColor: Colors.Primary,
  },

  secondary: {
    backgroundColor: Colors.Secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.Primary,
  },
  disabled: {
    backgroundColor: Colors.Disabled,
  },
  small: {
    borderRadius: BorderRadius.Small,
    paddingVertical: Spacing.Tiny,
    paddingHorizontal: Spacing.Small,
  },
  medium: {
    borderRadius: BorderRadius.Medium,
    paddingVertical: Spacing.Small,
    paddingHorizontal: Spacing.Medium,
  },
  large: {
    borderRadius: BorderRadius.Large,
    paddingVertical: Spacing.Medium,
    paddingHorizontal: Spacing.Large,
  },
  text: {
    fontSize: FontSizes.Small,
  },
  primaryText: {
    color: Colors.Text.Inverted,
  },
  secondaryText: {
    color: Colors.Text.Secondary,
  },
  outlineText: {
    color: Colors.Primary,
  },
});
