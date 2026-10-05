import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const PURPLE = '#4A0E8F';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: PURPLE,
        drawerActiveBackgroundColor: '#E8DFF0',
        sceneStyle: { backgroundColor: '#DDA0DD' },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: 'white' },
      }}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: 'Productos',
          title: 'Productos',
          drawerIcon: ({ color, size }) => <Ionicons name="bag-check-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="branches/index"
        options={{
          drawerLabel: 'Sucursales',
          title: 'Sucursales',
          drawerIcon: ({ color, size }) => <Ionicons name="storefront-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="about/index"
        options={{
          drawerLabel: 'Acerca de ...',
          title: 'Acerca de ...',
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
