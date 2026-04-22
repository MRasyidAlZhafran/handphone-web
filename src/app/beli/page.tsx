"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, Shield, Truck, RotateCcw, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const colors = [
  { name: "Cobalt Violet", hex: "#a9aabf", image: "/images/cobalt%20violet%20s26%20ultra.png" },
  { name: "Sky Blue", hex: "#b6c9da", image: "/images/sky%20blue%20s26.png" },
  { name: "Black", hex: "#585b63", image: "/images/bg%20hitam%20s26.png" },
  { name: "White", hex: "#f5f5f5", image: "/images/white%20s26%20ultra.png" },
];

const storages = [
  { size: "256GB", price: 24499000 },
  { size: "512GB", price: 27499000 },
  { size: "1TB", price: 31999000 },
];

const features = [
  "Kamera 200MP dengan AI Scene Optimizer",
  "Snapdragon 8 Elite Gen 5",
  "Baterai 5000mAh + 60W Fast Charging",
  "Layar 6.9\" QHD+ 144Hz Dynamic AMOLED",
  "IP68 Water & Dust Resistant",
  "Galaxy AI — Circle to Search & Live Translate",
];

export default function BeliPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, setBuyNowItem, totalItems, openCart } = useCart();

  const handleAddToCart = () => {
    setBuyNowItem(null); // Clear any instant buy state
    addItem({
      name: "Samsung Galaxy S26 Ultra",
      color: colors[selectedColor].name,
      colorHex: colors[selectedColor].hex,
      image: colors[selectedColor].image,
      storage: storages[selectedStorage].size,
      price: storages[selectedStorage].price,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    setBuyNowItem({
      name: "Samsung Galaxy S26 Ultra",
      color: colors[selectedColor].name,
      colorHex: colors[selectedColor].hex,
      image: colors[selectedColor].image,
      storage: storages[selectedStorage].size,
      price: storages[selectedStorage].price,
      qty,
    });
  };

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/images/Samsung-Logo-2005.png" 
              alt="Samsung Logo" 
              className="h-5 md:h-6 brightness-0 invert"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/#showcase" className="hover:text-white transition-colors">Design</Link>
            <Link href="/#ai" className="hover:text-white transition-colors">Galaxy AI</Link>
            <Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 text-sm text-foreground/70 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link href="/" className="text-sm text-foreground/60 hover:text-white transition-colors flex items-center gap-1">
              ← Kembali
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-foreground/50 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Galaxy S26 Ultra</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 space-y-6 mb-8 lg:mb-0"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#111] aspect-square flex items-center justify-center shadow-2xl">
              <img
                src={colors[selectedColor].image}
                alt={colors[selectedColor].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full text-xs font-semibold text-primary uppercase tracking-widest">
                New 2026
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-4 gap-3 mt-6">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${selectedColor === i ? "border-primary scale-105 shadow-[0_0_15px_rgba(14,165,233,0.3)]" : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                >
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Title + Rating */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Samsung</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">Galaxy S26 Ultra</h1>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-foreground/50 ml-1">(1.284 ulasan)</span>
              </div>
            </div>

            {/* Price */}
            <div className="glass-panel rounded-2xl p-6">
              <p className="text-foreground/50 text-sm mb-1">Mulai dari</p>
              <p className="text-4xl font-bold text-white">
                {formatPrice(storages[selectedStorage].price)}
              </p>
              <p className="text-sm text-primary mt-1">Cicilan 0% hingga 24 bulan</p>
            </div>

            {/* Color Selector */}
            <div>
              <p className="text-sm font-semibold mb-3 text-foreground/80">
                Warna: <span className="text-white">{colors[selectedColor].name}</span>
              </p>
              <div className="flex gap-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={c.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${selectedColor === i ? "border-primary scale-110 shadow-[0_0_12px_rgba(14,165,233,0.6)]" : "border-white/20 hover:border-white/50"
                      }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selector */}
            <div>
              <p className="text-sm font-semibold mb-3 text-foreground/80">Kapasitas Penyimpanan</p>
              <div className="flex gap-3">
                {storages.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedStorage(i)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${selectedStorage === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-white/10 text-foreground/60 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm font-semibold mb-3 text-foreground/80">Jumlah</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-bold w-6 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/checkout"
                onClick={handleBuyNow}
                className="flex-1 py-4 rounded-full font-bold text-lg bg-primary hover:bg-primary/90 text-white hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 text-center"
              >
                Beli Sekarang
              </Link>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-full font-bold text-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? "border-green-500 bg-green-500/10 text-green-400 scale-95"
                    : "border-white/20 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {added ? (
                  <><Check className="w-5 h-5" /> Ditambahkan!</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Tambah ke Keranjang</>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Truck className="w-5 h-5 text-primary" />, text: "Gratis Ongkir" },
                { icon: <Shield className="w-5 h-5 text-primary" />, text: "Garansi 2 Tahun" },
                { icon: <RotateCcw className="w-5 h-5 text-primary" />, text: "30 Hari Return" },
              ].map((b, i) => (
                <div key={i} className="glass-panel rounded-xl p-3 flex flex-col items-center gap-2 text-center">
                  {b.icon}
                  <span className="text-xs text-foreground/70 font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-semibold mb-4 text-foreground/80">Spesifikasi Unggulan</p>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
