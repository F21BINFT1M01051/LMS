import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Icon from 'react-native-vector-icons/Ionicons';
import { DashBoard_1 } from './Dashboard1';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route,}) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Lessons') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Reviews') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Dashboard" component={DashBoard_1} />
      <Tab.Screen name="Lessons" component={Screen2} />
      <Tab.Screen name="Reviews" component={Screen3} />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
