import ProductList from '@/components/shared/ProductList';
import { phones } from '@/store/phones.store';

export default function Screen() {
  return <ProductList data={phones} basePath="phones" />;
}
