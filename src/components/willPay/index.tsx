import { checkedCartState } from "@/recoils/cart";
import React, { SyntheticEvent } from "react";
import { useRecoilValue } from "recoil";
import ItemData from "@/components/cart/itemData";

export default function WillPay({
  handleSubmit,
  submitTitle,
}: {
  handleSubmit: (e: SyntheticEvent) => void;
  submitTitle: string;
}) {
  const checkedItems = useRecoilValue(checkedCartState);
  const totalPrice = checkedItems.reduce((res, { price, amount }) => {
    res += price * amount;
    return res;
  }, 0);
  return (
    <div className="cart-willpay">
      <ul>
        {checkedItems.map(({ imageUrl, price, title, amount, id }) => (
          <li key={id}>
            <ItemData imageUrl={imageUrl} price={price} title={title} />
            <p>{amount * price}</p>
          </li>
        ))}
      </ul>
      <p>총 예상 결제액 : {totalPrice}</p>
      <button onClick={handleSubmit}>{submitTitle}</button>
    </div>
  );
}
