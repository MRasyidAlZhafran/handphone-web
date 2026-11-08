import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white/60 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <img
                  src="/images/Samsung-Logo-2005.png"
                  alt="Samsung Logo"
                  className="h-6 md:h-7 brightness-0 invert cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Mendorong batas inovasi seluler. Galaxy S26 Ultra menghadirkan teknologi masa depan ke dalam genggaman Anda hari ini.
            </p>
          </div>

          {/* Eksplorasi Produk / Navigasi Halaman */}
          <div>
            <h4 className="text-white font-bold mb-6">Galaxy S26 Ultra</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#hero" className="hover:text-primary transition-colors">Ringkasan</a></li>
              <li><a href="/#features" className="hover:text-primary transition-colors">Fitur Utama</a></li>
              <li><a href="/#showcase" className="hover:text-primary transition-colors">Desain & Kamera</a></li>
              <li><a href="/#ai" className="hover:text-primary transition-colors">Galaxy AI</a></li>
              <li><a href="/#gallery" className="hover:text-primary transition-colors">Galeri Foto</a></li>
            </ul>
          </div>

          {/* Layanan & Transaksi */}
          <div>
            <h4 className="text-white font-bold mb-6">Pemesanan</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/beli" className="hover:text-primary transition-colors">Beli Galaxy S26 Ultra</Link></li>
              <li><Link href="/checkout" className="hover:text-primary transition-colors">Checkout & Pesanan</Link></li>
              <li><a href="/beli#varian" className="hover:text-primary transition-colors">Pilihan Varian & Warna</a></li>
              <li><a href="/#features" className="hover:text-primary transition-colors">Spesifikasi Lengkap</a></li>
            </ul>
          </div>

          {/* Dukungan */}
          <div>
            <h4 className="text-white font-bold mb-6">Dukungan</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/6285711504817?text=Halo%20Admin%2C%20saya%20tertarik%20ingin%20bertanya%20seputar%20Samsung%20Galaxy%20S26%20Ultra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1.5"
                >
                  WhatsApp Support ↗
                </a>
              </li>
              <li><a href="/#hero" className="hover:text-primary transition-colors">Layanan Pelanggan</a></li>
              <li><a href="/#hero" className="hover:text-primary transition-colors">Garansi Resmi Samsung</a></li>
              <li><a href="/#hero" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wider">
          <p>HAK CIPTA © 1995-2026 SAMSUNG. SEMUA HAK DILINDUNGI.</p>
          <div className="flex gap-8">
            <span className="text-white/40">KEBIJAKAN PRIVASI</span>
            <span className="text-white/40">SYARAT & KETENTUAN</span>
            <span className="text-white/40">LEGAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
