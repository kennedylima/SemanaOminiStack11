import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Incidents from './pages/incidents/incidents';
import Detail from './pages/Detail/detail';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer o>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="incidents" component={Incidents}/>
        <AppStack.Screen name="detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}