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

export interface SidebarItemProps {
  label: string;
  link?: string;
  subItems?: SidebarItemProps[]; // Define subItems directly here
}

export interface SideNavProps {
  isOpen: boolean;
  clicked: () => void;
  items: SidebarItemProps[]; // Array of SidebarItemProps
}

// FOR FILTERNAV
export type FilterNavProps = {
  isOpen: boolean;
  clicked: () => void;
  children?: React.ReactNode;
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
  oldPrice?: number | undefined;
  // slash: string;
};

// FOR ACCORDION-CARD
export type AccordionProps = {
  title: string;
  content: string | React.ReactNode;
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
  labelClass?: string;
  optionalText?: string;
  required?: boolean;
  passIcon?: React.ReactNode;
  iconSrc?: string;
  iconFont?: React.ReactNode;
  wrapperClass?: string;
  children?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
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
  labelClass?: string;
  labelText?: string;
  optionalText?: string;
  required?: boolean;
  passIcon?: React.ReactNode;
  iconSrc?: string;
  iconFont?: React.ReactNode;
  wrapperClass?: string;
  children?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  // onBlur: () => void;
  // onChange: () => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

// FOR SELECT
export type CustomSelectProps = {
  id: string;
  name: string;
  reveal?: () => void;
  clicked?: () => void;
  password?: boolean;
  innerLabel?: string;
  labelClass?: string;
  labelText?: string;
  optionalText?: string;
  required?: boolean;
  sort?: string;
  iconSrc?: string;
  iconFont?: React.ReactNode;
  wrapperClass?: string;
  children?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  defaultValue?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
  iconFont?: React.ReactNode;
  wrapperClass?: string;
  children?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  checkText?: string;
  htmlFor: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// // FOR TEXTAREA
// export type CustomTabProps = {
//   // id: string;
//   // name: string;
//   clicked?: () => void;
//   activeTab?: boolean;
//   passIcon?: React.ReactNode;
//   dot?: string;
//   headers?: string;
//   headersSpaced?: string;
//   children?: string;
// };

// Assuming these are the types defined in your types file
export type TabHeader = {
  id: number;
  name: string;
  icon?: string;
};

export type CustomTabProps = {
  children?: React.ReactNode;
  activeTab?: number;
  clicked?: (id: number) => void;
  headers: TabHeader[];
  headersSpaced?: boolean;
  dot?: boolean;
};

export type CustomTabProdProps = {
  children?: React.ReactNode;
  activeTab?: number;
  clicked?: (id: number) => void;
  headers: TabHeader[];
  headersSpaced?: boolean;
  dot?: boolean;
};

export type UserPayloadProps = {
  email: string;
  password: string;
};

export type UserResponseProps = {
  status: string;
  acct_id: string;
  email: string;
};

export type VerifyPayloadProps = {
  otp: number;
};

export type VerifyResponseProps = {
  acct_id: string;
  email: string;
};

export type ContactPayloadProps = {
  fullname: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
};

export type ContactResponseProps = {
  status: string;
  msg: string;
};

export type ProductPayloadProps = {
  prod_id: string;
};

// FOR PAGINATION
export type PaginationProps = {
  page: number;
  pages: number;
  changePage: (page: number) => void;
};

// LIGHTBOX PROP
export type LightboxProps = {
  images: string[];
};

// CART PROS
export type CartPayloadProps = {
  prod_id: string;
};

export type CartQtyPayloadProps = {
  prod_id: string;
  qty: number;
};

export type CartUpdateProps = {
  prod_id: string;
  qty: number;
};

export type CartDataProps = {
  id: number;
  price: number;
  cartId: number;
  productId: number;
  quantity: number;
  addedBy: string;
  uuid: string;
  addedAt: string;
  title: string;
};

export type ProductProps = {
  image: string;
  prod_uuid: string;
  price: number;
  title: string;
  quantity: number;
};

export type CartProps = {
  cart_uuid: string;
  products: ProductProps[];
  total_qty: number;
  total_price: number;
};


export type Product = {
  oldPrice: number | null;
  price: number;
  title: string;
  slug: string;
  images: string[];
  color: string;
  categories: string[];
  flashSale: boolean | null;
  featured: boolean | null;
  popular: boolean | null;
  brand: string;
  countInStock: number;
  desc: string;
  size: string;
  uuid: string;
};
