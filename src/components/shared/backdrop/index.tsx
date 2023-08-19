import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  open?: boolean;
  clicked?: () => void;
}

const Backdrop: React.FC<Props> = ({ open, clicked }) => {
  const elRef = useRef(null);

  useEffect(() => {
    // 👉️ ref could be null here
    if (elRef.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      return elRef.current;
    }
  }, []);
  return ReactDOM.createPortal(
    <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
    elRef.current as any
  );
};

export default Backdrop;
