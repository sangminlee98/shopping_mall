import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    children,
    document.getElementById("modal") as HTMLElement
  );
};

export default function PaymentModal({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) {
  return show ? (
    <ModalPortal>
      <div className={`modal ${show ? "show" : ""}`}>
        <div className="modal__inner">
          <p>정말 결제할까요?</p>
          <div>
            <button className="modal__button" onClick={proceed}>
              예
            </button>
            <button className="modal__button" onClick={cancel}>
              아니오
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  ) : null;
}
