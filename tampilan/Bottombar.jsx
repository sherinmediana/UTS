import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import App from './App';
import Stack from './Stack';
import Detail from './Detail';
import Pembatalan from './Pembatalan';

// import Beranda from './Beranda';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'Beranda'}>
      <Tab.Screen
        name="Beranda"
        component={Stack}
        tabBarLabel="HomePage"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="home" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pesanan Saya"
        component={Detail}
        tabBarLabel="Detail"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="book" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        tabBarLabel="Pembatalan"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="receipt" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;