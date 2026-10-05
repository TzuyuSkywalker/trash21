import ProductDetail from '@/components/shared/ProductDetail';
import { products } from '@/store/products.store';

export default function Screen() {
  return <ProductDetail data={products} />;
}
