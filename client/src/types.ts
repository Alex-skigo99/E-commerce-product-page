export interface ItemType{
    id: number;
    name: string;
    manufacturer: string;
    price: number;
    discount: number;
    description: string;
    images: string[];
};

export interface CartItemType {
    item: ItemType;
    price: number;
    quantity: number;
  };

export interface CartContextType {
    cart: CartItemType[];
    setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  };