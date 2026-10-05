import ProductDetail from '@/components/shared/ProductDetail';
import { phones } from '@/store/phones.store';

export default function Screen() {
  return <ProductDetail data={phones} />;
}
