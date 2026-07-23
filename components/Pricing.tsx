"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricing = [
  {
    title: "Full Package 1 Month",
    price: "Rp450.000",
    popular: true,
    features: [
      "Semua Daily Tasks selama 30 Hari",
      "Semua Event selama 30 Hari",
      "Bear Trap, Frostfire, Foundry & Sunfire Castle",
      "Update progress secara berkala",
      "Tidak termasuk layanan push rank",
    ],
  },
  {
    title: "1 Month Bear Trap",
    price: "Rp75.000",
    features: [
      "Bear Trap selama 1 Bulan",
      "Mengikuti seluruh jadwal event (2 hari sekali)",
      "Fokus memaksimalkan damage akun",
      "Update progress secara berkala",
      "Tidak termasuk layanan push rank",
    ],
  },
  {
    title: "1 Month Daily Tasks",
    price: "Rp300.000",
    features: [
      "Daily Tasks setiap hari",
      "Intel Mission",
      "Gathering Resource",
      "Claim semua Reward & Red Dot",
      "Maintenance akun selama 30 Hari",
    ],
  },
  {
    title: "Frostfire Mine",
    price: "Rp20.000",
    features: [
      "Pengerjaan 1x Event Frostfire Mine",
      "Mengikuti strategi tim",
      "Player berpengalaman",
      "Jasa pengerjaan saja",
      "Tidak termasuk layanan push rank",
    ],
  },
  {
    title: "Foundry Battle",
    price: "Rp20.000",
    features: [
      "Pengerjaan 1x Event Foundry Battle",
      "Mengikuti strategi tim",
      "Player berpengalaman",
      "Jasa pengerjaan saja",
      "Tidak termasuk layanan push rank",
    ],
  },
  {
    title: "Sunfire Castle / SVS",
    price: "Rp10.000 (Minimum Point)",
    features: [
      "Pengerjaan Sunfire Castle / SVS",
      "Target Minimum Point",
      "Mengikuti arahan R4 / R5",
      "Jasa pengerjaan saja",
      "Tidak termasuk layanan push rank",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#08111E] py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Harga Management Account
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Harga transparan tanpa biaya tersembunyi.
            <br />
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
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
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

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="my-6 text-4xl font-black text-cyan-400">
                {item.price}
              </p>

              <div className="flex-1 space-y-3 text-gray-300">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-cyan-400"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6288294084382"
                target="_blank"
                rel="noopener noreferrer"
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