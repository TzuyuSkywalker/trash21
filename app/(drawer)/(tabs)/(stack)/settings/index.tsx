import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Ionicons name="settings-outline" size={28} color="black" />
      <Text className="mt-2 text-xl">Ajustes</Text>
    </View>
  );
};

export default SettingsScreen;
