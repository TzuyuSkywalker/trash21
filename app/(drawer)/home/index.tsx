import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const PURPLE = '#4A0E8F';

const accesos: { titulo: string; icono: keyof typeof Ionicons.glyphMap; ruta: string }[] = [
  { titulo: 'Productos', icono: 'cart-outline', ruta: '/(drawer)/(tabs)/products' },
  { titulo: 'Celulares', icono: 'phone-portrait-outline', ruta: '/(drawer)/(tabs)/phones' },
  { titulo: 'Televisores', icono: 'tv-outline', ruta: '/(drawer)/(tabs)/tvs' },
  { titulo: 'Sucursales', icono: 'storefront-outline', ruta: '/(drawer)/branches' },
  { titulo: 'Usuario', icono: 'person-circle-outline', ruta: '/(drawer)/user' },
  { titulo: 'Acerca de ...', icono: 'information-circle-outline', ruta: '/(drawer)/about' },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 12 }}>
      <View className="items-center my-6">
        <Ionicons name="home-outline" size={40} color="black" />
        <Text className="text-2xl mt-1" style={{ color: PURPLE }}>
          Bienvenido a Fábregas
        </Text>
        <Text className="mt-1 text-center">¿A dónde querés ir?</Text>
      </View>

      <View className="flex-row flex-wrap">
        {accesos.map((a) => (
          <View key={a.titulo} className="w-1/2 p-2">
            <Pressable
              onPress={() => router.push(a.ruta as any)}
              className="bg-white rounded-2xl py-6 items-center active:opacity-70"
            >
              <Ionicons name={a.icono} size={34} color={PURPLE} />
              <Text className="mt-2 font-bold" style={{ color: PURPLE }}>
                {a.titulo}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
