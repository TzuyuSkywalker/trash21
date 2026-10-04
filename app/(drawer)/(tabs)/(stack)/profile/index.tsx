import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Ionicons name="person-outline" size={28} color="black" />
      <Text className="mt-2 text-xl">Perfil</Text>
    </View>
  );
};

export default ProfileScreen;
