import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from 'expo-router/react-navigation';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const HomeTabScreen = () => {
  const navigation = useNavigation();

  const abrirMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="mt-3 ml-4 text-base">Inicio</Text>

      <View className="mx-10 mt-8">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary-200"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/offers')}
        >
          Ofertas
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/profile')}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/settings')}
        >
          Ajustes
        </CustomButton>

        <CustomButton
          className="mb-4"
          variant="solo-texto"
          color="primary"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
        >
          Productos
        </CustomButton>

        <CustomButton onPress={abrirMenu}>Abrir Menú</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeTabScreen;
