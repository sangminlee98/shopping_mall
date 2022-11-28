import { useQuery } from "@tanstack/react-query";
import ProductItem from "@/components/product/item";
import { fetcher, QueryKeys } from "@/queryClient";
import { Product } from "@/types";

export default function ProductListPage() {
  const { data } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
