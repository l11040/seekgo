import React from 'react';

import {Image, View} from 'react-native';
import {styles} from './Header.styles';
import Assets from '../../assets';
import {Button} from '../Button';

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image style={styles.LogoImage} source={Assets.Images.Logo.title} />
      <View style={styles.RightContainer}>
        <Button
          style={styles.Button}
          onPress={() => {}}
          title="고수가입"
          size="small"
        />
      </View>
    </View>
  );
};

export default Header;
