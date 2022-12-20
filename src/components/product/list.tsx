import { Product } from "@/graphql/products";
import React from "react";
import ProductItem from "@/components/product/item";

export default function ProductList({ list }: { list: Product[] }) {
  return (
    <ul className="products">
      {list.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}
