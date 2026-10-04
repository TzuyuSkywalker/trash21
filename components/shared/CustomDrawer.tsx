import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { DrawerActions } from 'expo-router/react-navigation';
import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const cerrarMenu = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">JD</Text>
        </View>
      </View>

      <DrawerItemList {...props} />

      <CustomButton className="mx-3 mt-5" onPress={cerrarMenu}>
        Cerrar Menú
      </CustomButton>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
