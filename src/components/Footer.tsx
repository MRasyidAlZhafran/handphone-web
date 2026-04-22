export function Footer() {
  return (
    <footer className="bg-black text-white/60 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <img
                src="/images/Samsung-Logo-2005.png"
                alt="Samsung Logo"
                className="h-6 md:h-7 brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Mendorong batas inovasi seluler. Galaxy S26 Ultra menghadirkan teknologi masa depan ke dalam genggaman Anda hari ini.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Produk</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors">Smartphone</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tablet</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wearables</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aksesoris</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Dukungan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Layanan Garansi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lokasi Servis</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Berita</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Keberlanjutan</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wider">
          <p>HAK CIPTA © 1995-2026 SAMSUNG. SEMUA HAK DILINDUNGI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">KEBIJAKAN PRIVASI</a>
            <a href="#" className="hover:text-white transition-colors">SYARAT & KETENTUAN</a>
            <a href="#" className="hover:text-white transition-colors">LEGAL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
