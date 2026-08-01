import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
  volume?: string;
  tone: {
    primary: string;
    secondary: string;
  };
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  isFloatingVisible: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  showFloating: () => void;
  hideFloating: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isFloatingVisible: false,

      addItem: (newItem) => {
        const items = get().items;
        const existingItemIndex = items.findIndex(item => item.id === newItem.id);

        if (existingItemIndex > -1) {
          // Update quantity if item already exists
          set({
            items: items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Add new item
          set({
            items: [...items, { ...newItem, quantity: 1 }],
          });
        }

        // Show floating cart on mobile if items exist
        if (get().getTotalItems() > 0) {
          get().showFloating();
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id),
        });

        // Hide floating cart if no items
        if (get().getTotalItems() === 0) {
          get().hideFloating();
        }
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({
          items: [],
          isOpen: false,
          isFloatingVisible: false,
        });
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      showFloating: () => set({ isFloatingVisible: true }),
      hideFloating: () => set({ isFloatingVisible: false }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items }),
    }
  )
);