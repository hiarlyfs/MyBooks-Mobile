import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Concluido from './screens/Concluido';
import Page2 from './Page2';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{unmountOnBlur: true}}
          name="Concluído"
          component={Concluido}
        />
        <Drawer.Screen
          options={{unmountOnBlur: true}}
          name="Notifications"
          component={Page2}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
