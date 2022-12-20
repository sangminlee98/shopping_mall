import { CartType } from "@/graphql/cart";
import { atom, selectorFamily } from "recoil";

export const checkedCartState = atom<CartType[]>({
  key: "cartState",
  default: [],
});

// export const cartItemSelector = selectorFamily({
//   key: "cartItem",
//   get:
//     (id: string) =>
//     ({ get }) => {
//       const carts = get(cartState);
//       return carts.get(id);
//     },
//   set:
//     (id: string) =>
//     ({ get, set }, newValue) => {
//       if (typeof newValue === "number") {
//         const newCart = new Map([...get(cartState).set(id, newValue)]);
//         set(cartState, newCart);
//       }
//     },
// });
