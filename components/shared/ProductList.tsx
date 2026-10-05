import { formatPrecio, Producto } from '@/store/types';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface Props {
  data: Producto[];
  /** carpeta de la pestaña: 'products' | 'phones' | 'tvs' */
  basePath: string;
}

const ProductList = ({ data, basePath }: Props) => {
  return (
    <View className="flex flex-1 px-4 bg-white">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View className="mt-5">
            <Text className="text-2xl font-black">{item.titulo}</Text>
            <Text>{item.descripcion}</Text>

            <View className="flex flex-row justify-between items-center mt-1">
              <Text className="font-bold">{formatPrecio(item.precio)}</Text>
              <Link
                href={`/(drawer)/(tabs)/${basePath}/${item.id}` as any}
                style={{ color: '#4A0E8F' }}
              >
                Ver Detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;
