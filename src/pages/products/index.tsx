import { useQuery } from "@tanstack/react-query";
import { graphqlFetcher, QueryKeys } from "@/queryClient";
import GET_PRODUCTS, { Products } from "@/graphql/products";
import ProductList from "@/components/product/list";

export default function ProductListPage() {
  const { data } = useQuery<Products>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ProductList list={data?.products || []} />
    </div>
  );
}
