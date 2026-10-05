import { formatPrecio, Producto } from '@/store/types';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ScrollView, Text } from 'react-native';

const ProductDetail = ({ data }: { data: Producto[] }) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = data.find((p) => p.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: product?.titulo ?? 'Producto' });
  }, [product, navigation]);

  if (!product) {
    return <Redirect href="/(drawer)/home" />;
  }

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32 }}
    >
      <Image source={product.foto} className="w-full h-52" resizeMode="contain" />
      <Text className="font-black text-2xl mt-4">{product.titulo}</Text>
      <Text className="mt-2">{product.descripcion}</Text>
      <Text className="font-bold mt-2">{formatPrecio(product.precio)}</Text>
    </ScrollView>
  );
};

export default ProductDetail;
