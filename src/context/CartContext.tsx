"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  color: string;
  colorHex: string;
  image: string;
  storage: string;
  price: number;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  buyNowItem: CartItem | null;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "id">, openDrawer?: boolean) => void;
  setBuyNowItem: (item: Omit<CartItem, "id"> | null) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [buyNowItem, setBuyNowItemState] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, "id">, openDrawer = true) => {
    const id = `${item.color}-${item.storage}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => i.id === id ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, { ...item, id }];
    });
    if (openDrawer) setIsOpen(true);
  }, []);

  const setBuyNowItem = useCallback((item: Omit<CartItem, "id"> | null) => {
    if (item) {
      setBuyNowItemState({ ...item, id: "buynow" });
    } else {
      setBuyNowItemState(null);
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      buyNowItem,
      isOpen, 
      openCart, 
      closeCart, 
      addItem, 
      setBuyNowItem,
      removeItem, 
      updateQty, 
      totalItems, 
      totalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
