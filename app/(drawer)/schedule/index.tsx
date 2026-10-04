import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const ScheduleScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#F7A8C4]">
      <Ionicons name="calendar-outline" size={28} color="black" />
      <Text className="mt-2 text-xl">Horario</Text>
    </View>
  );
};

export default ScheduleScreen;
