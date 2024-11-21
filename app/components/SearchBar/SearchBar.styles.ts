import {StyleSheet} from 'react-native';
import {FontSizes} from '../../constants/Fonts';
import {BorderRadius} from '../../constants/BorderRadius';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    height: 45,
    padding: 12,
    width: '100%',
    borderRadius: BorderRadius.Small,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  searchText: {
    fontSize: FontSizes.Medium,
    fontWeight: 300,
  },
});
