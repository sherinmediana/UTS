import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Beranda from './Beranda';
import Detail from './Detail';
import Pemesanan from './Pemesanan';
import Pembatalan from './Pembatalan';
// import Tab from './Bottombar';

const Stack = createNativeStackNavigator();

const SrcStack = () => {
    return (
        <Stack.Navigator
         initialRouteName={'Beranda'}
         screenOptions={{
             headerShown: true,
        }}>
            <Stack.Screen
                name='Beranda'
                component={Beranda}
            />
            <Stack.Screen
                name='Detail'
                component={Detail}
                options={{
                    title: 'Beranda'
            }}
            />
            <Stack.Screen
                name='Pemesanan'
                component={Pemesanan}
                options={{
                    title: 'Daftar Pemesanan'
            }}
            />
            <Stack.Screen
                name='Pembatalan'
                component={Pembatalan}
                options={{
                    title: 'Daftar Pembatalan'
            }}
            />
                
        </Stack.Navigator>
            
    );
};

export default SrcStack;