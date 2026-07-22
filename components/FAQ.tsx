"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah akun saya aman?",
    answer:
      "Ya. Akun Anda aman. Kami menjaga kerahasiaan data login dan tidak akan mengubah informasi akun tanpa izin.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Tergantung layanan yang dipilih. Daily Activity dikerjakan setiap hari, sedangkan event mengikuti jadwal Whiteout Survival.",
  },
  {
    question: "Apakah bisa request jam pengerjaan?",
    answer:
      "Bisa. Selama jadwal kami tersedia, kami akan menyesuaikan waktu pengerjaan.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan di awal melalui transfer atau metode pembayaran yang disepakati.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Kami menjamin pengerjaan sesuai layanan yang dipilih dengan proses yang aman dan transparan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#08111E] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-center text-5xl font-black text-cyan-400">
          FAQ
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Pertanyaan yang sering ditanyakan pelanggan.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0D1B2A] shadow-lg"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between bg-[#0D1B2A] px-6 py-5 transition-all duration-300 hover:bg-[#13283E]"
              >
                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-cyan-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-cyan-500/20 bg-[#102235] px-6 py-5 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}