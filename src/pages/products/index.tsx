import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../components/product";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

export default function ProductList() {
  const { data } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);

  return (
    <div>
      <ul className="products">
        {data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
