import { Cart } from "@/graphql/cart";

export default function CartItem({ id, imageUrl, price, title, amount }: Cart) {
  return (
    <li>
      {id} {imageUrl} {price} {title} {amount}
    </li>
  );
}
