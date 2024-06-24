import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Statistics from './Statistics';
import MyCards from './MyCards';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function HomeTabs({ toggleTheme, isDarkTheme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Statistics') {
            iconName = 'stats-chart';
          } else if (route.name === 'MyCards') {
            iconName = 'card';
          }else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#23265A',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
  
      <Tab.Screen
        name="Home"  options={{ headerShown: false }}>
        {props => <Home {...props}  />}
      </Tab.Screen>
      <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false }}/>
      <Tab.Screen name="MyCards" component={MyCards} options={{ headerShown: false }}/>
       <Tab.Screen
        name="Settings">
        {props => <Settings {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
