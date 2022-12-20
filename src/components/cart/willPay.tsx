import { checkedCartState } from "@/recoils/cart";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ItemData from "./itemData";

export default function WillPay() {
  const navigate = useNavigate();
  const checkedItems = useRecoilValue(checkedCartState);
  const totalPrice = checkedItems.reduce((res, { price, amount }) => {
    res += price * amount;
    return res;
  }, 0);
  const handleSubmit = () => {
    if (checkedItems.length) {
      navigate("/payment");
    } else {
      alert("결제할 대상이 없어요");
    }
  };
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
      <button onClick={handleSubmit}>결제하기</button>
    </div>
  );
}
