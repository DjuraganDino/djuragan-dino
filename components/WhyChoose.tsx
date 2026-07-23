"use client";

import { motion } from "framer-motion";

const items = [
  "⚡ Proses Cepat",
  "🔒 Terpercaya",
  "💎 Harga Murah",
  "🕒 Respon Cepat",
];

export default function WhyChoose() {
  return (
    <section className="bg-[#071827] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-16 text-center text-5xl font-black text-cyan-400">
            KENAPA PILIH DJURAGAN DINO?
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">

          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.18,
                  ease: "easeOut",
                },
              }}
              className="rounded-2xl border border-cyan-500/30 bg-white/5 p-8 text-center"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}