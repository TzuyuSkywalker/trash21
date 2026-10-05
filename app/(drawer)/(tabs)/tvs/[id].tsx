import ProductDetail from '@/components/shared/ProductDetail';
import { catalogoTelevisores } from '@/store/catalogo';

export default function Screen() {
  return <ProductDetail data={catalogoTelevisores} />;
}
