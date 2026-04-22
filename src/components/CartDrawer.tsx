"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, totalItems } = useCart();

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) closeCart();
            }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-md z-[70] bg-[#0d0d0d] border-l border-white/10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold tracking-tight">Keranjang</h2>
                {totalItems > 0 && (
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-foreground/40">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg font-medium">Keranjang kosong</p>
                  <p className="text-sm text-center">Tambahkan produk untuk memulai belanja</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="glass-panel rounded-2xl p-4 flex gap-4"
                      >
                        {/* Image */}
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#1a1a1a]">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{item.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                              style={{ backgroundColor: item.colorHex }}
                            />
                            <p className="text-xs text-foreground/50">{item.color} · {item.storage}</p>
                          </div>
                          <p className="text-primary font-bold text-sm mt-1">{formatPrice(item.price)}</p>

                          {/* Qty + Delete */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQty(item.id, item.qty - 1)}
                                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:border-primary transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                              <button
                                onClick={() => updateQty(item.id, item.qty + 1)}
                                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:border-primary transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-foreground/30 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60 text-sm">Subtotal ({totalItems} item)</span>
                  <span className="font-bold text-lg">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-foreground/40">
                  <span>Ongkos kirim</span>
                  <span className="text-green-400 font-semibold">GRATIS</span>
                </div>
                <div className="flex items-center justify-between font-bold text-base border-t border-white/10 pt-3">
                  <span>Total</span>
                  <span className="text-primary text-xl">{formatPrice(totalPrice)}</span>
                </div>

                {/* Checkout button */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Lanjut ke Pembayaran
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full py-3 rounded-full border border-white/15 text-foreground/70 hover:text-white hover:border-white/30 font-medium text-sm transition-all"
                >
                  Lanjut Belanja
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
