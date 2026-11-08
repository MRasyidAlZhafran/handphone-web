"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "6285711504817";
  const message = encodeURIComponent(
    "Halo Admin, saya tertarik ingin bertanya seputar Samsung Galaxy S26 Ultra."
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      aria-label="Kontak WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip label saat hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/90 text-white border border-white/10 shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat via WhatsApp
      </span>

      {/* Tombol WhatsApp (Background Hitam, Icon Putih Otentik) */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat CS via WhatsApp"
        className="w-14 h-14 rounded-full bg-black hover:bg-[#1a1a1a] text-white flex items-center justify-center border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        {/* Real Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="text-white"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.564 5.714 5.861-1.537c1.7 1.013 3.682 1.597 5.803 1.597 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.877 0-3.627-.512-5.132-1.404l-.368-.219-3.486.914.93-3.399-.24-.382c-.99-1.576-1.517-3.418-1.517-5.31 0-5.302 4.314-9.616 9.617-9.616 5.303 0 9.617 4.314 9.617 9.616 0 5.302-4.314 9.616-9.617 9.616z" />
        </svg>

        {/* Pulse effect monochrome */}
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping -z-10 pointer-events-none transition-opacity" />
      </a>
    </motion.aside>
  );
}
