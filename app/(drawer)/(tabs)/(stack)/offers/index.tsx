import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const OffersScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Ionicons name="megaphone-outline" size={28} color="black" />
      <Text className="mt-2 text-xl">Ofertas</Text>
    </View>
  );
};

export default OffersScreen;
