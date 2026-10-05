import ProductDetail from '@/components/shared/ProductDetail';
import { tvs } from '@/store/tvs.store';

export default function Screen() {
  return <ProductDetail data={tvs} />;
}
