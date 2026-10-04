import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4 bg-white">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-5">
            <Text className="text-2xl font-bold">{item.titulo}</Text>
            <Text>{item.descripcion}</Text>

            <View className="flex flex-row justify-between items-center mt-1">
              <Text className="font-bold">{item.precio.toFixed(2)}</Text>
              <Link
                href={`/(drawer)/(tabs)/(stack)/products/${item.id}`}
                className="text-primary"
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

export default ProductsScreen;
