import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";

const PURPLE = "#4A0E8F";

const sucursales = [
  {
    nombre: "Casa Central - Ituzaingó",
    direccion: "Av. Rivadavia 1234, Ituzaingó",
    horario: "Lun a Sáb 9:00 a 20:00",
    telefono: "+541144440001",
  },
  {
    nombre: "Sucursal Morón",
    direccion: "Av. Rivadavia 5678, Morón",
    horario: "Lun a Sáb 9:00 a 20:00",
    telefono: "+541144440002",
  },
  {
    nombre: "Sucursal Castelar",
    direccion: "Av. Santa Rosa 910, Castelar",
    horario: "Lun a Sáb 9:30 a 19:30",
    telefono: "+541144440003",
  },
  {
    nombre: "Sucursal Merlo",
    direccion: "Av. del Libertador 1500, Merlo",
    horario: "Lun a Sáb 9:00 a 19:00",
    telefono: "+541144440004",
  },
];

const BranchesScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {sucursales.map((s) => (
        <View key={s.nombre} className="bg-white rounded-2xl p-4 mb-3">
          <View className="flex-row items-center">
            <Ionicons name="storefront-outline" size={24} color={PURPLE} />
            <Text className="ml-2 text-lg font-black flex-1">{s.nombre}</Text>
          </View>
          <Text className="mt-2">📍 {s.direccion}</Text>
          <Text className="mt-1">🕒 {s.horario}</Text>
          <Pressable onPress={() => Linking.openURL(`tel:${s.telefono}`)}>
            <Text className="mt-1" style={{ color: PURPLE }}>
              📞 {s.telefono}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default BranchesScreen;
