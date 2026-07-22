"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricing = [
  {
    title: "Full Package 1 Month",
    price: "Rp450.000",
    popular: true,
  },
  {
    title: "1 Month BearTrap",
    price: "Rp75.000",
  },
  {
    title: "1 Month Daily Tasks",
    price: "Rp300.000",
  },
  {
    title: "Frostfire",
    price: "Rp20.000",
  },
  {
    title: "Foundry",
    price: "Rp20.000",
  },
  {
    title: "Sunfire Castle",
    price: "Rp10.000 (Minimum Point)",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#08111E] py-24 text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Harga Management Account
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi.
            Pilih layanan sesuai kebutuhan akun Whiteout Survival kamu.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {pricing.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border p-8 transition ${
                item.popular
                  ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
                  : "border-cyan-500/20 bg-white/5"
              }`}
            >

              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black">
                  ⭐ BEST SELLER
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="my-6 text-4xl font-black text-cyan-400">
                {item.price}
              </p>

              <div className="space-y-3 text-gray-300">

                <div className="flex items-center gap-2">
                  <Check size={18} className="text-cyan-400" />
                  Aman & Transparan
                </div>

                <div className="flex items-center gap-2">
                  <Check size={18} className="text-cyan-400" />
                  Dikerjakan Player Berpengalaman
                </div>

                <div className="flex items-center gap-2">
                  <Check size={18} className="text-cyan-400" />
                  Update Progress
                </div>

              </div>

              <a
                href="https://wa.me/6288294084382"
                target="_blank"
                className={`mt-8 block rounded-xl py-4 text-center font-bold transition ${
                  item.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                ORDER SEKARANG
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}