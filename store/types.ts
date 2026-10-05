import { ImageSourcePropType } from 'react-native';

export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  foto: ImageSourcePropType;
}

export const formatPrecio = (precio: number) =>
  `$ ${Number.isInteger(precio) ? precio : precio.toFixed(2)}`;
