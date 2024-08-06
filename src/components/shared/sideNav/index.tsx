import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation, NavLink } from "react-router-dom";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faArrowLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { getCart } from "../../../redux/features/cart/cartSlice";
import { SideNavProps, SidebarItemProps } from "../../../types/types";

import styles from "./styles.module.scss";

const SideNav: React.FC<SideNavProps> = ({ isOpen, clicked, items }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cartData);

  const [openSlider, setOpenSlider] = useState(isOpen);
  const [currentItems, setCurrentItems] = useState(items);
  const [navStack, setNavStack] = useState<SidebarItemProps[][]>([]);
  const [currentPath, setCurrentPath] = useState<SidebarItemProps | null>(null);

  useEffect(() => {
    setOpenSlider(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      dispatch(getCart());
    }
  }, [isOpen, dispatch]);

  const backdropRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: SidebarItemProps) => {
    if (item.subItems) {
      // Save current items to stack before navigating to sub-items
      setNavStack((prevNavStack) => [...prevNavStack, currentItems]);
      setCurrentItems(item.subItems);
      setCurrentPath(item);
    }
  };

  const handleBackClick = () => {
    const previousItems = navStack.pop(); // Retrieve the last state
    if (previousItems) {
      setCurrentItems(previousItems);
      setNavStack([...navStack]);
      // Find the correct path to set
      const newPath =
        navStack.length > 0
          ? navStack[navStack.length - 1].find(
              (item) =>
                item.subItems &&
                item.subItems.some((subItem) => subItem === currentPath)
            )
          : null;
      setCurrentPath(newPath || null);
    }
  };

  const SidebarItem: React.FC<{ item: SidebarItemProps }> = ({ item }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div className="sidebar-item">
        <div
          className="sidebar-item-label"
          onClick={item.subItems ? () => handleItemClick(item) : undefined}
        >
          {item.link ? (
            <NavLink to={item.link}>{item.label}</NavLink>
          ) : (
            <span>{item.label}</span>
          )}
          {item.subItems && (
            <span className={`sidebar-toggle ${open ? "open" : ""}`}>
              {
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.forwardIcon}
                />
              }
            </span>
          )}
        </div>
        {item.subItems && open && (
          <div className="sidebar-subitems">
            {item.subItems.map((subItem, index) => (
              <SidebarItem key={index} item={subItem} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles.sideNav} ${
        openSlider ? styles.show : styles.hidden
      }`}
      ref={backdropRef}
    >
      <div className={styles.cartWrapper}>
        <div className={styles.cartHeader}>
          <div className={styles.logo}>
            <h6>BENKIH</h6>
          </div>

          <button
            className={styles.flexHead}
            onClick={clicked}
            style={{ background: "none" }}
          >
            <FontAwesomeIcon icon={faClose} className={styles.close} />
          </button>
        </div>
        <div className={styles.navBody}>
          {navStack.length > 0 && (
            <button
              className={styles.backButton}
              onClick={handleBackClick}
              // style={{ background: "none" }}
            >
              <FontAwesomeIcon icon={faCaretLeft} className={styles.backIcon} />
              {`Back to ${currentPath?.label || "Menu"}`}
            </button>
          )}
          {currentItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
        <div className={styles.cartFooter}>Logout</div>
      </div>
    </div>,
    document.body
  );
};

export default SideNav;
