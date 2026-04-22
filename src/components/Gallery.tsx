"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/gallery_city_night.png",
    label: "Night Mode",
    desc: "Kota malam tanpa noise",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery_portrait.png",
    label: "Portrait Mode",
    desc: "Bokeh sinematik",
    span: "",
  },
  {
    src: "/images/gallery_macro.png",
    label: "Macro Ultra",
    desc: "Detail tak terlihat mata",
    span: "",
  },
  {
    src: "/images/gallery_landscape.png",
    label: "Wide Angle",
    desc: "Panorama 200MP",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            Kamera 200MP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Setiap Momen, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Karya Seni</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Sistem kamera triple-lensa dengan AI Scene Optimizer mendeteksi kondisi cahaya secara otomatis dan menghasilkan foto yang memukau
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Big card - night mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-2 h-[350px] md:h-[500px]"
          >
            <img src="/images/gallery_city_night.png" alt="Night Mode" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-100 translate-y-0">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Night Mode</span>
              <p className="text-white font-semibold text-lg">Kota malam tanpa noise</p>
            </div>
          </motion.div>

          {/* Right column - portrait + macro stacked */}
          <div className="md:col-span-2 grid grid-rows-2 gap-4 h-[500px]">
            {[
              { src: "/images/gallery_portrait.png", label: "Portrait Mode", desc: "Bokeh sinematik" },
              { src: "/images/gallery_macro.png", label: "Macro Ultra", desc: "Detail tak terlihat mata" },
            ].map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
              >
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-100 translate-y-0">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{photo.label}</span>
                  <p className="text-white font-semibold text-lg">{photo.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full-width bottom - landscape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-4 h-[280px]"
          >
            <img src="/images/gallery_landscape.png" alt="Wide Angle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-100 translate-y-0">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Wide Angle</span>
              <p className="text-white font-semibold text-lg">Panorama 200MP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
