// FOR BACKDROP
export type BackdropProps = {
  open: boolean;
  clicked: () => void;
};

// FOR PRODUCT-CARD
export type ProductCardProps = {
  id: string;
  // addProd: () => void;
  // infoProd: () => void;
  // likeProd: () => void;
  image: string;
  title: string;
  price: number;
  // slash: string;
};
