import ProductDetail from "@/components/product/detail";
import { fetcher, QueryKeys } from "@/queryClient";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  if (!data) return null;
  const { category, title, description, image, price, rating } = data;
  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail {...data} />
    </div>
  );
}
