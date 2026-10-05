import ProductList from "@/components/shared/ProductList";
import { catalogoProductos } from "@/store/catalogo";

export default function Screen() {
  return <ProductList data={catalogoProductos} basePath="products" />;
}
