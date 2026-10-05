import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'expo-router/react-navigation';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const CategoryStack = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  const botonMenu = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        contentStyle: { backgroundColor: 'white' },
        animation: 'fade_from_bottom',
        headerLeft: (props: { tintColor?: string; canGoBack?: boolean }) => {
          const canGoBack = !!props.canGoBack;
          return (
            <Ionicons
              name={canGoBack ? 'arrow-back-outline' : 'menu-outline'}
              size={24}
              color={props.tintColor}
              style={{ marginRight: 20 }}
              onPress={() => botonMenu(canGoBack)}
            />
          );
        },
      }}
    >
      <Stack.Screen name="index" options={{ title }} />
      <Stack.Screen name="[id]" options={{ title: 'Detalle' }} />
    </Stack>
  );
};

export default CategoryStack;
