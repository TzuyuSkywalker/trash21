import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const PURPLE = "#4A0E8F";

const Bloque = ({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) => (
  <View className="bg-white rounded-2xl p-4 mb-3">
    <Text className="text-lg font-black mb-1" style={{ color: PURPLE }}>
      {titulo}
    </Text>
    {children}
  </View>
);

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View className="items-center mb-4">
        <Ionicons name="information-circle-outline" size={44} color="black" />
        <Text className="text-2xl font-black mt-1">App Fábregas</Text>
      </View>

      <Bloque titulo="La empresa">
        <Text>
          Fábregas es una empresa dedicada a la venta de tecnología y
          electrodomésticos, con sucursales físicas y atención personalizada.
          (Completá con los datos reales.)
        </Text>
      </Bloque>

      <Bloque titulo="La aplicación">
        <Text>Versión: 1.0.0</Text>
        <Text>
          Catálogo de productos, celulares y televisores, y listado de
          sucursales.
        </Text>
        <Text>Desarrollada con React Native, Expo y Expo Router.</Text>
      </Bloque>

      <Bloque titulo="Autor">
        <Text>Alumno: F.G. Arispe</Text>
        <Text>Materia: Desarrollo de Aplicativos Móviles</Text>
        <Text>Docente: Delgado Joaquín</Text>
        <Text>Centro Regional Universitario de Ituzaingó</Text>
      </Bloque>
    </ScrollView>
  );
};

export default AboutScreen;
