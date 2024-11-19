import React, {ReactNode} from 'react';

import {View} from 'react-native';
import {styles} from './Layout.styles';

type LayoutProps = {children: ReactNode};

const Layout = ({children}: LayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};
export default Layout;
