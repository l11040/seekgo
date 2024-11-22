import React, {ReactNode} from 'react';

import {SafeAreaView, View} from 'react-native';
import {styles} from './Layout.styles';

type LayoutProps = {children: ReactNode};

const Layout = ({children}: LayoutProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};
export default Layout;
