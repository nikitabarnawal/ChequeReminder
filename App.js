// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import Contacts from './components/screens/ContactList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyHome" component={Home} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Contacts" component={Contacts} options={{ title: null }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;