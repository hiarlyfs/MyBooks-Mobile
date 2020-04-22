import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodosConcluido from './screens/Concluido/TodosLivros';
import ConcluidoEsseAno from './screens/Concluido/EsseAno';
import ConcluidoAnoPassado from './screens/Concluido/AnoPassado';
import Home from './screens/Home';

import Lendo from './screens/Lendo';
import ListaDesejos from './screens/ListaDesejos';

export default function Routes() {
  function LivrosConcluidos() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          showIcon: false,
          labelStyle: {
            fontSize: 14,
          },
          style: {
            display: 'flex',
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          },
        }}
        initialRouteName={`Lidos em ${new Date().getFullYear()}`}>
        <Tab.Screen
          name={`Lidos em ${new Date().getFullYear()}`}
          component={ConcluidoEsseAno}
        />
        <Tab.Screen
          name={`Lidos em ${new Date().getFullYear() - 1}`}
          component={ConcluidoAnoPassado}
        />
        <Tab.Screen name="Todos livos lidos" component={TodosConcluido} />
      </Tab.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          // options={{unmountOnBlur: true}}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          // options={{unmountOnBlur: true}}
          name="Concluído"
          component={LivrosConcluidos}
        />
        <Drawer.Screen
          // options={{unmountOnBlur: true}}
          name="Lendo"
          component={Lendo}
        />
        <Drawer.Screen
          // options={{unmountOnBlur: true}}
          name="Lista de Desejos"
          component={ListaDesejos}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
