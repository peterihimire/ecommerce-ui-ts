// import React, { useRef, useEffect } from "react";
// import ReactDOM from "react-dom";

// interface Props {
//   open?: boolean;
//   clicked?: () => void;
// }

// const Backdrop: React.FC<Props> = ({ open, clicked }) => {
//   const elRef = useRef<Element>(null);

//   useEffect(() => {
//     // 👉️ ref could be null here
//     if (elRef.current != null) {
//       // 👉️ TypeScript knows that ref is not null here
//       elRef.current!;
//     }
//   }, []);
//   return ReactDOM.createPortal(
//     <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
//     elRef.current!
//   );
// };

// export default Backdrop;

// import React, { useRef, useEffect } from "react";
// import ReactDOM from "react-dom";

// interface Props {
//   open?: boolean;
//   clicked?: () => void;
// }

// const Backdrop: React.FC<Props> = ({ open, clicked }) => {
//   const elRef = useRef<HTMLDivElement>(document.createElement("div"));

//   useEffect(() => {
//     const container = document.getElementById("backdrop-container");
//     if (container) {
//       container.appendChild(elRef.current);
//     }
//     return () => {
//       if (container) {
//         container.removeChild(elRef.current);
//       }
//     };
//   }, []);

//   return ReactDOM.createPortal(
//     <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
//     elRef.current
//   );
// };

// export default Backdrop;


import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  open: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ open, clicked }) => {
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
        <div ref={backdropRef} className="backdrop" />,
        document.body
      )
    : null;
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
