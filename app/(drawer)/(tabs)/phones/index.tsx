import ProductList from '@/components/shared/ProductList';
import { catalogoCelulares } from '@/store/catalogo';

export default function Screen() {
  return <ProductList data={catalogoCelulares} basePath="phones" />;
}
