"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rendy",
    text: "Pengerjaan Daily Activity sangat cepat dan aman. Recommended!",
  },
  {
    name: "Fajar",
    text: "Dreamscape selesai. Admin ramah banget.",
  },
  {
    name: "Kevin",
    text: "Sudah langganan joki Frostfire Mine di sini, hasilnya selalu memuaskan.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-[#08111E] py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            TESTIMONI
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Apa Kata Customer?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Kepuasan customer adalah prioritas kami. Berikut beberapa ulasan
            dari pelanggan yang telah menggunakan jasa DJURAGAN DINO.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 shadow-lg transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >

              <div className="mb-5 flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="italic leading-7 text-gray-300">
                "{item.text}"
              </p>

              <div className="mt-8 border-t border-cyan-500/20 pt-5">

                <h3 className="font-bold text-cyan-300">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Customer Whiteout Survival
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}