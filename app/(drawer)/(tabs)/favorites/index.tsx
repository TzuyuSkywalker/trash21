import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Ionicons name="star-outline" size={28} color="black" />
      <Text className="mt-2 text-xl">Favoritos</Text>
    </View>
  );
};

export default FavoritesScreen;
