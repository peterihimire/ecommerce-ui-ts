import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  open: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ open, clicked }) => {
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const backdropElement = backdropRef.current;

    const handleBackdropClick = (event: MouseEvent) => {
      if (backdropElement && backdropElement.contains(event.target as Node)) {
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

  return ReactDOM.createPortal(
    <div ref={backdropRef} className={`backdrop ${open ? "show" : ""}`} />,
    document.body
  );
};

export default Backdrop;

// import React from "react";
// import ReactDOM from "react-dom";

// interface BackdropProps {
//   open: boolean;
//   clicked: () => void;
// }

// const Backdrop: React.FC<BackdropProps> = ({ open, clicked }) => {
//   return ReactDOM.createPortal(
//     <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
//     document.getElementById("backdrop")!
//   );
// };

// export default Backdrop;
