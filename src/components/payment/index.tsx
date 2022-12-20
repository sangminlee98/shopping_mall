import { checkedCartState } from "@/recoils/cart";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import WillPay from "@/components/willPay";
import PaymentModal from "./modal";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { graphqlFetcher } from "@/queryClient";
import { EXECUTE_PAY } from "@/graphql/payment";

type PaymentInfos = string[];

export default function Payment() {
  const navigate = useNavigate();
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const [modalShown, toggleModal] = useState(false);

  const { mutate: executePay } = useMutation((payInfo: PaymentInfos) =>
    graphqlFetcher(EXECUTE_PAY, payInfo)
  );

  const showModal = () => {
    toggleModal(true);
  };
  const proceed = () => {
    const payInfo = checkedCartData.map(({ id }) => id);
    executePay(payInfo);
    setCheckedCartData([]);
    alert("결제 완료되었습니다.");
    navigate("/producs", { replace: true });
  };
  const cancel = () => {
    toggleModal(false);
  };
  return (
    <div>
      <WillPay handleSubmit={showModal} submitTitle="결제하기" />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  );
}
