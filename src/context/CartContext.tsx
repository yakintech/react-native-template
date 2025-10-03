import { createContext, useEffect, useState } from "react";
import storageHelper from "../utils/storage/storageHelper";


export type CartItem = {
    id: number;
    name: string;
    unitPrice: number;
    quantity: number;
};

export type CartContextType = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: number) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);


    useEffect(() => {

        const fetchCartItems = async () => {
            const storedItems = await storageHelper.getData("cartItems");
            if (storedItems) {
                setItems(storedItems);
            }
        }
        fetchCartItems();

    }, [])
    


    const addItem = (item: CartItem) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
           
            if (existingItem) {
                let result = prevItems.map(i => {
                    if (i.id === item.id) {
                        return { ...i, quantity: i.quantity + item.quantity };
                    }
                    return i;
                });
                storageHelper.storeData("cartItems", result);
                return result;
            } else {
                storageHelper.storeData("cartItems", [...prevItems, item]);
                return [...prevItems, item];
            }
        });
    }
    const removeItem = (itemId: number) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter(i => i.id !== itemId);
            storageHelper.storeData("cartItems", updatedItems);
            return updatedItems;
        });
    }
    const clearCart = () => {
        setItems([]);
        storageHelper.clearAllData();
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;