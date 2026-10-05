import ProductList from '@/components/shared/ProductList';
import { tvs } from '@/store/tvs.store';

export default function Screen() {
  return <ProductList data={tvs} basePath="tvs" />;
}
