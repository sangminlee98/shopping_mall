import { CartType, DELETE_CART, UPDATE_CART } from "@/graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "@/queryClient";
import { useMutation } from "@tanstack/react-query";
import React, { ForwardedRef, forwardRef, RefObject } from "react";
import ItemData from "./itemData";

function CartItem(
  { id, imageUrl, price, title, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries([QueryKeys.CART]);
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>([
          QueryKeys.CART,
        ]);
        if (!prevCart?.[id]) return prevCart;
        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[id], amount },
        };
        queryClient.setQueryData([QueryKeys.CART], newCart);
        return prevCart;
      },
      onSuccess: (newValue) => {
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>([
          QueryKeys.CART,
        ]);
        const newCart = {
          ...(prevCart || {}),
          [id]: newValue,
        };
        queryClient.setQueryData([QueryKeys.CART], newCart);
      },
    }
  );
  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.CART]);
      },
    }
  );
  const handleUpdateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };
  const handleDeleteCart = () => {
    deleteCart({ id });
  };
  return (
    <li className="cart-item">
      <input
        className="cart-item__checkbox"
        type="checkbox"
        name="select-item"
        ref={ref}
        data-id={id}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />
      <input
        className="cart-item__amount"
        type="number"
        value={amount}
        min={1}
        onChange={handleUpdateAmount}
      />
      <button
        className="cart-item__button"
        type="button"
        onClick={handleDeleteCart}
      >
        삭제
      </button>
    </li>
  );
}

export default forwardRef(CartItem);
