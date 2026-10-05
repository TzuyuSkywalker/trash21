import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const PURPLE = '#4A0E8F';
const LILAC = '#DDA0DD';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PURPLE,
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: LILAC,
        tabBarStyle: { backgroundColor: PURPLE },
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <Ionicons size={22} name="cart-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="phones"
        options={{
          title: 'Celulares',
          tabBarIcon: ({ color }) => <Ionicons size={22} name="phone-portrait-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tvs"
        options={{
          title: 'Televisores',
          tabBarIcon: ({ color }) => <Ionicons size={22} name="tv-outline" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
