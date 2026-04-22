"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import {
  User, Mail, Phone, MapPin, Building2, ChevronRight,
  CreditCard, Landmark, Wallet, Check, ShoppingBag, ArrowLeft
} from "lucide-react";

const paymentMethods = [
  { id: "transfer", icon: <Landmark className="w-5 h-5" />, label: "Transfer Bank", desc: "BCA, Mandiri, BNI, BRI" },
  { id: "card", icon: <CreditCard className="w-5 h-5" />, label: "Kartu Kredit / Debit", desc: "Visa, Mastercard, JCB" },
  { id: "ewallet", icon: <Wallet className="w-5 h-5" />, label: "E-Wallet", desc: "GoPay, OVO, DANA, ShopeePay" },
];

interface FormData {
  nama: string;
  email: string;
  telepon: string;
  alamat: string;
  kota: string;
  provinsi: string;
  kodePos: string;
  catatan: string;
  payment: string;
}

const initialForm: FormData = {
  nama: "", email: "", telepon: "", alamat: "",
  kota: "", provinsi: "", kodePos: "", catatan: "", payment: "",
};

export default function CheckoutPage() {
  const { items, buyNowItem, totalPrice, totalItems } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  // If we have a buyNowItem, we only show that. Otherwise we show the cart items.
  const displayItems = buyNowItem ? [buyNowItem] : items;
  const displayTotalPrice = buyNowItem ? buyNowItem.price * buyNowItem.qty : totalPrice;
  const displayTotalItems = buyNowItem ? buyNowItem.qty : totalItems;

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.nama.trim()) e.nama = "Nama wajib diisi";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email tidak valid";
    if (!form.telepon.trim() || !/^[0-9+\-\s]{8,15}$/.test(form.telepon)) e.telepon = "Nomor telepon tidak valid";
    if (!form.alamat.trim()) e.alamat = "Alamat wajib diisi";
    if (!form.kota.trim()) e.kota = "Kota wajib diisi";
    if (!form.provinsi.trim()) e.provinsi = "Provinsi wajib diisi";
    if (!form.kodePos.trim()) e.kodePos = "Kode pos wajib diisi";
    if (!form.payment) e.payment = "Pilih metode pembayaran";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Pesanan Dikonfirmasi!</h1>
          <p className="text-foreground/60 mb-2">Terima kasih, <span className="text-white font-medium">{form.nama}</span>.</p>
          <p className="text-foreground/50 text-sm mb-8">
            Detail pesanan akan dikirim ke <span className="text-primary">{form.email}</span>.<br />
            Estimasi pengiriman 2–3 hari kerja.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-8">
          {/* Left: Empty for centering balance */}
          <div className="flex-1" />

          {/* Middle: Title (Visible on all devices) */}
          <div className="flex-1 flex justify-center items-center">
            <span className="text-[10px] md:text-xs text-white uppercase tracking-[0.3em] font-bold">
              Checkout
            </span>
          </div>

          {/* Right: Back Button */}
          <div className="flex-1 flex justify-end items-center">
            <Link href="/beli" className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-foreground/60 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10">
              <ArrowLeft className="w-3 md:w-3.5 h-3 md:h-3.5" />
              <span className="hidden xs:inline uppercase tracking-widest">Kembali</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight mb-10">Informasi Pemesanan</h1>

        {displayItems.length === 0 ? (
          <div className="text-center py-20 text-foreground/40">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg mb-4">Keranjang Anda kosong</p>
            <Link href="/beli" className="text-primary hover:underline">← Kembali ke halaman produk</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left: Form */}
              <div className="lg:col-span-2 space-y-8">

                {/* Personal Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel rounded-3xl p-8 space-y-6"
                >
                  <h2 className="text-lg font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">1</div>
                    Data Diri
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      icon={<User className="w-4 h-4" />}
                      label="Nama Lengkap"
                      placeholder="Masukkan nama lengkap"
                      value={form.nama}
                      onChange={(v) => handleChange("nama", v)}
                      error={errors.nama}
                    />
                    <InputField
                      icon={<Mail className="w-4 h-4" />}
                      label="Email"
                      type="email"
                      placeholder="nama@email.com"
                      value={form.email}
                      onChange={(v) => handleChange("email", v)}
                      error={errors.email}
                    />
                    <InputField
                      icon={<Phone className="w-4 h-4" />}
                      label="Nomor Telepon"
                      placeholder="08xx-xxxx-xxxx"
                      value={form.telepon}
                      onChange={(v) => handleChange("telepon", v)}
                      error={errors.telepon}
                    />
                  </div>
                </motion.div>

                {/* Shipping Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass-panel rounded-3xl p-8 space-y-6"
                >
                  <h2 className="text-lg font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">2</div>
                    Alamat Pengiriman
                  </h2>

                  <div className="space-y-5">
                    <InputField
                      icon={<MapPin className="w-4 h-4" />}
                      label="Alamat Lengkap"
                      placeholder="Jl. Contoh No. 123, RT/RW"
                      value={form.alamat}
                      onChange={(v) => handleChange("alamat", v)}
                      error={errors.alamat}
                      fullWidth
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <InputField
                        icon={<Building2 className="w-4 h-4" />}
                        label="Kota"
                        placeholder="Jakarta"
                        value={form.kota}
                        onChange={(v) => handleChange("kota", v)}
                        error={errors.kota}
                      />
                      <InputField
                        label="Provinsi"
                        placeholder="DKI Jakarta"
                        value={form.provinsi}
                        onChange={(v) => handleChange("provinsi", v)}
                        error={errors.provinsi}
                      />
                      <InputField
                        label="Kode Pos"
                        placeholder="12345"
                        value={form.kodePos}
                        onChange={(v) => handleChange("kodePos", v)}
                        error={errors.kodePos}
                      />
                    </div>
                    {/* Catatan */}
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">Catatan (opsional)</label>
                      <textarea
                        rows={3}
                        placeholder="Catatan untuk kurir..."
                        value={form.catatan}
                        onChange={(e) => handleChange("catatan", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 resize-none transition-colors"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-panel rounded-3xl p-8 space-y-5"
                >
                  <h2 className="text-lg font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">3</div>
                    Metode Pembayaran
                  </h2>
                  <div className="space-y-3">
                    {paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleChange("payment", m.id)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 text-left ${
                          form.payment === m.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 hover:border-white/25 bg-white/3"
                        }`}
                      >
                        <div className={`p-2 rounded-xl ${form.payment === m.id ? "bg-primary/20 text-primary" : "bg-white/10 text-foreground/50"}`}>
                          {m.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{m.label}</p>
                          <p className="text-xs text-foreground/50 mt-0.5">{m.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          form.payment === m.id ? "border-primary" : "border-white/20"
                        }`}>
                          {form.payment === m.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                        </div>
                      </button>
                    ))}
                    {errors.payment && <p className="text-red-400 text-xs mt-1">{errors.payment}</p>}
                  </div>
                </motion.div>
              </div>

              {/* Right: Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="glass-panel rounded-3xl p-6 sticky top-28 space-y-5"
                >
                  <h2 className="text-base font-bold">Ringkasan Pesanan</h2>

                  <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                    {displayItems.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center">
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-[#1a1a1a]">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{item.name}</p>
                          <p className="text-xs text-foreground/50">{item.color} · {item.storage} · x{item.qty}</p>
                          <p className="text-xs text-primary font-bold mt-0.5">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Subtotal ({displayTotalItems} item)</span>
                      <span>{formatPrice(displayTotalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Ongkos Kirim</span>
                      <span className="text-green-400 font-medium">GRATIS</span>
                    </div>
                    <div className="flex justify-between font-bold text-base pt-2 border-t border-white/10">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(displayTotalPrice)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-[1.02]"
                  >
                    Konfirmasi Pesanan
                  </button>
                  <p className="text-xs text-foreground/40 text-center">
                    Dengan menekan tombol di atas, Anda menyetujui syarat & ketentuan kami.
                  </p>
                </motion.div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// Reusable input field
function InputField({
  icon, label, placeholder, value, onChange, error, type = "text", fullWidth = false,
}: {
  icon?: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "col-span-full" : ""}>
      <label className="block text-sm font-medium text-foreground/70 mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-foreground/30 focus:outline-none transition-colors ${
            icon ? "pl-10" : ""
          } ${
            error ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-primary/50"
          }`}
        />
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
