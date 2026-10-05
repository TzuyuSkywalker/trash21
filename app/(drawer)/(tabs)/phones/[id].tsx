import ProductDetail from '@/components/shared/ProductDetail';
import { catalogoCelulares } from '@/store/catalogo';

export default function Screen() {
  return <ProductDetail data={catalogoCelulares} />;
}
