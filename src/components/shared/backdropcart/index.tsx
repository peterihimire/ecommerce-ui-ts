import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  open: boolean;
  clicked: () => void;
}

const BackdropCart: React.FC<BackdropProps> = ({ open, clicked }) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (
        backdropRef.current &&
        backdropRef.current.contains(event.target as Node)
      ) {
        clicked();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleBackdropClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleBackdropClick);
    };
  }, [open, clicked]);

  return open
    ? ReactDOM.createPortal(
        <div ref={backdropRef} className="backdrop-cart" />,
        document.body
      )
    : null;
};

export default BackdropCart;
