import { Cart } from "@/graphql/cart";
import CartItem from "./item";

export default function CartList({ items }: { items: Cart[] }) {
  return (
    <ul className="cart">
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
