export interface Temple {
  id: number;
  name: string;
  image: string;
  street: string;
  city: string;
  nosach: string;
  length_man: number;
  width_man: number;
  length_woman: number;
  width_woman: number;
  sketch_man: number[][];
  sketch_woman: number[][];
}
export interface OptionsTemple {
  label: string;
  id: number;
}
export interface TempleContextType {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  // filter: () => void;
  // addToCart: (id: number) => void;
  // removeFromCart: (id: number) => void;
  // cart: ProductData[];
  // products: ProductData[];
  // localProductAmaount: number;
  // productsListToRemove: number[];
  // setProductsListToRemove: React.Dispatch<React.SetStateAction<number[]>>;
  // setLocalProductAmaount: React.Dispatch<React.SetStateAction<number>>;
  // selectedRemove: () => void;
}
