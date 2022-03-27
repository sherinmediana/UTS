
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Beranda from './tampilan/Beranda';
// import Detail from './tampilan/Detail';
// import Pemesanan from './tampilan/Pemesanan';
import Tab from './tampilan/Bottombar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Tab/>
    </NavigationContainer>
  );
}
export default App;

// initialRouteName="Beranda"