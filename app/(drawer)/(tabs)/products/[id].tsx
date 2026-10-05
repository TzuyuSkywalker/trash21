import ProductDetail from '@/components/shared/ProductDetail';
import { catalogoProductos } from '@/store/catalogo';

export default function Screen() {
  return <ProductDetail data={catalogoProductos} />;
}
