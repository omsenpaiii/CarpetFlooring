"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  title: string;
  category: string;
  price: string;
  image: string;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (title: string) => void;
  updateQuantity: (title: string, quantity: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem("rubicon_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("rubicon_cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.title === item.title);
      if (existingItem) {
        return prevCart.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (title: string) => {
    setCart((prevCart) => prevCart.filter((i) => i.title !== title));
  };

  const updateQuantity = (title: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(title);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((i) => (i.title === title ? { ...i, quantity } : i))
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        toggleCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
