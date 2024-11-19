import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {Header} from './components/Header';
import {Layout} from './components/Layout';

const App = (): React.JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <Layout>
        <Header />
      </Layout>
    </SafeAreaView>
  );
};

export default App;
