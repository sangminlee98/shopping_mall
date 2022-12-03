import ProductDetail from "@/components/product/detail";
import GET_PRODUCTS, { GET_PRODUCT, Product } from "@/graphql/products";
import { graphqlFetcher, QueryKeys } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  );
  if (!data) return null;
  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail {...data} />
    </div>
  );
}
