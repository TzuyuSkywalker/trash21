import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

const ProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: product?.titulo ?? 'Producto',
    });
  }, [product, navigation]);

  if (!product) {
    return <Redirect href="/(drawer)/(tabs)/(stack)/home" />;
  }

  return (
    <View className="flex-1 bg-white px-5 pt-3">
      <Image
        source={product.imagen}
        className="w-full h-52"
        resizeMode="contain"
      />

      <Text className="font-bold text-2xl mt-2">{product.titulo}</Text>
      <Text className="mt-2">{product.descripcion}</Text>
      <Text className="font-bold mt-2">{product.precio.toFixed(2)}</Text>
    </View>
  );
};

export default ProductScreen;
