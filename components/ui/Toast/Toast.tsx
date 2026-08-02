"use client";

import { motion, AnimatePresence } from "framer-motion";
import { create } from 'zustand';

type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
};

type ToastStore = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
};

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],
  
  addToast: (toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    
    set({ toasts: [...get().toasts, newToast] });
    
    // Auto remove toast after duration
    setTimeout(() => {
      get().removeToast(id);
    }, toast.duration || 2000);
  },
  
  removeToast: (id) => {
    set({ toasts: get().toasts.filter(toast => toast.id !== id) });
  },
}));

export function ToastProvider() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-20 right-4 z-[9999] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.4 
            }}
            className={`flex items-center gap-4 rounded-2xl border px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl ${
              toast.type === 'success' 
                ? 'bg-white/95 border-green-200 text-green-800'
                : toast.type === 'error'
                ? 'bg-white/95 border-red-200 text-red-800'  
                : 'bg-white/95 border-[#588b76]/20 text-[#1e2a25]'
            }`}
          >
            <div className="flex-shrink-0">
              {toast.type === 'success' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-lg">✓</span>
                </div>
              )}
              {toast.type === 'error' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                  <span className="text-lg">✕</span>
                </div>
              )}
              {toast.type === 'info' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#588b76]/10">
                  <span className="text-lg">🛍️</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <span className="sr-only">Fermer</span>
              <span className="text-lg">×</span>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}