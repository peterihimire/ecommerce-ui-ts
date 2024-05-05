// FOR BACKDROP
export type BackdropProps = {
  open: boolean;
  clicked: () => void;
};

// FOR CARTNAV
export type CartNavProps = {
  isOpen: boolean;
  clicked: () => void;
};

// FOR PRODUCT-CARD
export type ProductCardProps = {
  id: string;
  addProd: () => void;
  infoProd: string;
  // infoProd: () => void;
  // likeProd: () => void;
  image: string;
  title: string;
  price: number;
  // slash: string;
};

// FOR ACCORDION-CARD
export type AccordionProps = {
  title: string;
  content: string;
  focus: number;
};

// FOR ACCORDION-CARD
export type CollapsibleProps = {
  title: string;
  content: string;
  focus: number;
  id: number;
  index: number;
};

// FOR INPUT
export type CustomInputProps = {
  id: string;
  name: string;
  reveal?: () => void;
  clicked?: () => void;
  password?: boolean;
  innerLabel?: string;
  labelText?: string;
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

// FOR TEXTAREA
export type CustomTextareaProps = {
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

// FOR SELECT
export type CustomSelectProps = {
  id: string;
  name: string;
  reveal?: () => void;
  clicked?: () => void;
  password?: boolean;
  innerLabel?: string;
  labelText?: string;
  optionalText?: string;
  required?: boolean;
  sort?: string;
  iconSrc?: string;
  wrapClass?: string;
  children?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue: string;
};

// FOR CHECKBOX
export type CustomCheckboxProps = {
  checked?: boolean;
  id?: string;
  name?: string;
  reveal?: () => void;
  clicked?: () => void;
  password?: boolean;
  innerLabel?: string;
  labelText?: string;
  optionalText?: string;
  required?: boolean;
  passIcon?: React.ReactNode;
  iconSrc?: string;
  wrapperClass?: string;
  children?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  checkText: string;
  htmlFor: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
