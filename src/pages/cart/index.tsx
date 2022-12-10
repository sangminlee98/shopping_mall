import CartList from "@/components/cart";
import { Cart, GET_CART } from "@/graphql/cart";
import { graphqlFetcher, QueryKeys } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";

export default function CartPage() {
  const { data } = useQuery([QueryKeys.CART], () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,
  });
  const cartItems = Object.values(data || {}) as Cart[];
  if (!cartItems.length) return <div>장바구니가 비었어요</div>;
  return <CartList items={cartItems} />;
}
