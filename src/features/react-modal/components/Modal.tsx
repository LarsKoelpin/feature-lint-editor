import * as React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./Backdrop";
import { ModalFrame } from "./ModalFrame";

type Props = {
  children: any;
};
export const Modal = (props: Props) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ModalFrame>{props.children}</ModalFrame>
    </Backdrop>,
    document.getElementById("portal")!
  );
};
