import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Assets from '../../assets';
import {styles} from './SearchBar.styles';

type SearchBarProps = {
  onSearchPress?: () => void;
};

const SearchBar = ({onSearchPress}: SearchBarProps) => {
  return (
    <TouchableWithoutFeedback onPress={onSearchPress}>
      <View style={styles.container}>
        <Assets.Icons.Search width={24} height={24} />
        <Text style={styles.searchText}>어떤 서비스가 필요하세요?</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
