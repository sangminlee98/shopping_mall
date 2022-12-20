import { CartType } from "@/graphql/cart";
import React from "react";

export default function ItemData({
  imageUrl,
  price,
  title,
}: Pick<CartType, "imageUrl" | "price" | "title">) {
  return (
    <>
      <img className="cart-item__image" src={imageUrl} />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title">{title}</p>
    </>
  );
}
