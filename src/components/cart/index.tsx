import { Cart } from "@/graphql/cart";
import React, { createRef, useRef } from "react";
import CartItem from "./item";

export default function CartList({ items }: { items: Cart[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = items.map(() => createRef<HTMLInputElement>());

  const handleCheckboxChanged = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (!formRef.current) return;

    const targetInput = e.target;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll("select-item").length;

    if (targetInput.classList.contains("select-all")) {
      // select-all 선택시
      const allChecked = targetInput.checked;
      checkboxRefs.forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      });
    } else {
      // 개별 아이템 선택시
      const allChecked = selectedCount === items.length;
      formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
        allChecked;
    }
  };
  return (
    <form ref={formRef} onChange={handleCheckboxChanged}>
      <label>
        <input className="select-all" name="select-all" type="checkbox" />
        전체선택
      </label>
      <ul className="cart">
        {items.map((item, i) => (
          <CartItem key={item.id} {...item} ref={checkboxRefs[i]} />
        ))}
      </ul>
    </form>
  );
}
