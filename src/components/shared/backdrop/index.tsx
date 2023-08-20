import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  open?: boolean;
  clicked?: () => void;
}

const Backdrop: React.FC<Props> = ({ open, clicked }) => {
  const elRef = useRef<HTMLDivElement | null>(null); // Add type annotation for elRef

  useEffect(() => {
    // Refine your useEffect to handle the cleanup function properly
    const element = elRef.current;

    if (open && element) {
      const handleClick = (event: MouseEvent) => {
        if (element.contains(event.target as Node)) {
          // Clicked inside the backdrop, do nothing
          return;
        }
        clicked?.(); // Call the clicked function if provided
      };

      // Attach the event listener
      document.addEventListener("mousedown", handleClick);

      // Return a cleanup function to remove the event listener
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [open, clicked]);

  return elRef.current
    ? ReactDOM.createPortal(
        <div
          className={`backdrop ${open ? "show" : ""}`}
          onClick={clicked}
        ></div>,
        elRef.current
      )
    : null; // Return null if elRef.current is null
};

export default Backdrop;

// import React, { useRef, useEffect } from "react";
// import ReactDOM from "react-dom";

// interface Props {
//   open?: boolean;
//   clicked?: () => void;
// }

// const Backdrop: React.FC<Props> = ({ open, clicked }) => {
//   const elRef = useRef(null);

//   useEffect(() => {
//     // 👉️ ref could be null here
//     if (elRef.current != null) {
//       // 👉️ TypeScript knows that ref is not null here
//       return elRef.current;
//     }
//   }, []);
//   return ReactDOM.createPortal(
//     <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
//     elRef.current as any
//   );
// };

// export default Backdrop;
