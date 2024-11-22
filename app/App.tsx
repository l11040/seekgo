/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Assets from './assets';
import FindScreen from './pages/Find';
import ReceivedScreen from './pages/Received';
import ChatScreen from './pages/Chat';
import CommunityScreen from './pages/Community';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const App = (): React.JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: Colors.Primary,
          sceneStyle: {
            backgroundColor: '#fff', // 화면 전체 배경색 설정
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Assets.Icons.Person fill={color} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="FindSeekGo"
          component={FindScreen}
          options={{
            title: '고수 찾기',
            tabBarIcon: ({color, size}) => (
              <Assets.Icons.Find fill={color} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="QuoteReceived"
          component={ReceivedScreen}
          options={{
            title: '받은 견적',
            tabBarIcon: ({color, size}) => (
              <Assets.Icons.Receipt fill={color} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: '채팅',
            tabBarIcon: ({color, size}) => (
              <Assets.Icons.Chat fill={color} width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            title: '커뮤니티',
            tabBarIcon: ({color, size}) => (
              <Assets.Icons.Community fill={color} width={size} height={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
