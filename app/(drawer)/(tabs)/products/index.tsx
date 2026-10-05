import ProductList from '@/components/shared/ProductList';
import { products } from '@/store/products.store';

export default function Screen() {
  return <ProductList data={products} basePath="products" />;
}
