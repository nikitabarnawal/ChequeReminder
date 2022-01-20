// In App.js in a new project

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Money from '../screens/Money';
import Settings from '../screens/Settings';
import Container from './Container';

const Tab = createBottomTabNavigator();


export default function TabBar() {
    return (
        <Container>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Money') {
                            iconName = focused ? 'card' : 'card-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings-sharp' : 'settings-outline';
                        }
                        // You can return any component that you like here!
                        return <Icons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Money" component={Money} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </Container>
    );
}
