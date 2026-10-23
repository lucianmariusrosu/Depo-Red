import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

export type QuoteItem = {
  productId: string;
  name: string;
  unit: string;
  quantity: number;
  priceRon?: number;
};

type QuoteContextValue = {
  items: QuoteItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);
const STORAGE_KEY = "construmat-demo-quote";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as QuoteItem[]);
    } catch {
      // Session storage is an enhancement only.
    }
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage failures and keep the in-memory request functional.
    }
  }, [items]);

  const value = useMemo<QuoteContextValue>(() => {
    const addItem = (product: Product, quantity: number) => {
      const safeQuantity = Math.max(1, Math.round(quantity));
      setItems((current) => {
        const existing = current.find((item) => item.productId === product.id);
        if (existing) {
          return current.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + safeQuantity }
              : item,
          );
        }
        return [
          ...current,
          {
            productId: product.id,
            name: product.name,
            unit: product.unit,
            quantity: safeQuantity,
            priceRon: product.priceRon,
          },
        ];
      });
    };

    const setQuantity = (productId: string, quantity: number) => {
      const safeQuantity = Math.max(1, Math.round(quantity));
      setItems((current) =>
        current.map((item) =>
          item.productId === productId ? { ...item, quantity: safeQuantity } : item,
        ),
      );
    };

    return {
      items,
      addItem,
      removeItem: (productId: string) => setItems((current) => current.filter((item) => item.productId !== productId)),
      setQuantity,
      clear: () => setItems([]),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [items]);

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used inside QuoteProvider");
  return context;
}
