import React, { useEffect, useRef } from "react";
import { BackdropProps } from "../../../types/BackdropProps";
import ReactDOM from "react-dom";

const Backdrop: React.FC<BackdropProps> = ({
  open,
  clicked,
}: BackdropProps) => {
  // const elRef = useRef<HTMLDivElement | null>(null);
  const elRef = useRef(null);

  useEffect(() => {
    // const elRef = useRef<HTMLDivElement | null>(null);
    // const elRef = useRef() as MutableRefObject<HTMLDivElement>;

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
