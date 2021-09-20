import * as React from "react";
import { Modal } from "../../../../react-modal/components/Modal";

type Props = {
  text: string;
  close: () => any;
};
export const SaveDialog = ({ text, close }: Props) => {
  return (
    <Modal>
      <div
        style={{
          padding: "8px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>Configuration export</h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid black",
            overflow: "scroll",
          }}
          contentEditable={true}
        >
          {text}
        </div>
        <button onClick={() => close()}> Close</button>
      </div>
    </Modal>
  );
};
