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

// FOR PRODUCT-CARD
export type CustomInputProps = {
  id: string;
  name: string;
  reveal?: () => void;
  clicked?: () => void;
  password?: boolean;
  innerLabel?: string;
  labelText: string;
  optionalText?: string;
  required?: boolean;
  passIcon?: React.ReactNode;
  iconSrc?: string;
  wrapperClass?: string;
  children?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  // onBlur: () => void;
  // onChange: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
