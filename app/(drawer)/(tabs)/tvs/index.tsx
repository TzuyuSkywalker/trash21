import ProductList from '@/components/shared/ProductList';
import { catalogoTelevisores } from '@/store/catalogo';

export default function Screen() {
  return <ProductList data={catalogoTelevisores} basePath="tvs" />;
}
