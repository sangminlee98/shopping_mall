import { useQuery } from "@tanstack/react-query";
import ProductItem from "@/components/product/item";
import { graphqlFetcher, QueryKeys } from "@/queryClient";
import GET_PRODUCTS, { Products } from "@/graphql/products";

export default function ProductListPage() {
  const { data } = useQuery<Products>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
