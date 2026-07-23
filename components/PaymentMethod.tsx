"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  Wallet,
  Landmark,
  MessageCircle,
} from "lucide-react";

export default function PaymentMethod() {
  return (
    <section
      id="payment"
      className="relative overflow-hidden bg-[#08111E] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[4px] font-semibold text-cyan-400">
            Payment
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Pembayaran Mudah & Aman
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-400">
            Kami menerima pembayaran melalui <b>QRIS</b> yang dapat dipindai
            menggunakan berbagai aplikasi E-Wallet maupun Mobile Banking di Indonesia.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <QrCode size={30} className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Metode Pembayaran
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "DANA",
                "OVO",
                "GoPay",
                "ShopeePay",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-cyan-500/20 bg-[#0D1B2A] p-5 text-center"
                >
                  <Wallet className="mx-auto mb-3 text-cyan-400" />

                  <p>{item}</p>
                </div>

              ))}

              <div className="col-span-2 rounded-xl border border-cyan-500/20 bg-[#0D1B2A] p-5 text-center">
                <Landmark className="mx-auto mb-3 text-cyan-400" />

                <p>Seluruh Mobile Banking yang Mendukung QRIS</p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
              <p className="leading-7 text-cyan-100">
                QRIS akan dikirim setelah pesanan dikonfirmasi melalui WhatsApp
                sehingga proses pembayaran lebih aman dan mudah diverifikasi.
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8"
          >

            <div className="mb-8 flex items-center gap-3">
              <MessageCircle
                size={30}
                className="text-cyan-400"
              />

              <h3 className="text-2xl font-bold">
                Cara Pembayaran
              </h3>
            </div>

            <div className="space-y-6">

              {[
                "Hubungi kami melalui WhatsApp.",
                "Pilih layanan yang ingin dipesan.",
                "QRIS akan dikirim setelah pesanan dikonfirmasi.",
                "Lakukan pembayaran menggunakan aplikasi pilihan Anda.",
                "Setelah pembayaran terverifikasi, pengerjaan akan segera dimulai.",
              ].map((step, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="pt-2 text-gray-300">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}