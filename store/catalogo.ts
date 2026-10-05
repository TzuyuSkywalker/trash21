// Junta tus 3 stores en un solo lugar.
// Si alguno de tus archivos se llama distinto, corregí SOLO estas 3 líneas de import.
import { phone } from './phone-store';
import { products } from './prod.store';
import { tv } from './tv-store';
import { Producto } from './types';

export const catalogoProductos = products as unknown as Producto[];
export const catalogoCelulares = phone as unknown as Producto[];
export const catalogoTelevisores = tv as unknown as Producto[];
