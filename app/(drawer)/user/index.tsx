import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const PURPLE = '#4A0E8F';

// TODO: poné tus datos
const usuario = {
  iniciales: 'JD',
  nombre: 'Juan Díaz',
  email: 'juan.diaz@email.com',
  telefono: '11 1234-5678',
  direccion: 'Ituzaingó, Buenos Aires',
  cliente: 'Cliente desde 2024',
};

const Fila = ({ icono, texto }: { icono: keyof typeof Ionicons.glyphMap; texto: string }) => (
  <View className="flex-row items-center py-3 border-b border-gray-200">
    <Ionicons name={icono} size={22} color={PURPLE} />
    <Text className="ml-3 text-base">{texto}</Text>
  </View>
);

const UserScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View className="items-center mb-5">
        <View
          className="w-28 h-28 rounded-full items-center justify-center"
          style={{ backgroundColor: PURPLE }}
        >
          <Text className="text-4xl font-black text-white">{usuario.iniciales}</Text>
        </View>
        <Text className="text-2xl font-black mt-3">{usuario.nombre}</Text>
        <Text>{usuario.cliente}</Text>
      </View>

      <View className="bg-white rounded-2xl px-4">
        <Fila icono="mail-outline" texto={usuario.email} />
        <Fila icono="call-outline" texto={usuario.telefono} />
        <Fila icono="location-outline" texto={usuario.direccion} />
      </View>
    </ScrollView>
  );
};

export default UserScreen;
