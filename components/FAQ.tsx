"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah akun saya aman saat menggunakan jasa joki?",
    answer:
      "Ya. Keamanan akun adalah prioritas kami. Kami menjaga kerahasiaan data akun dan tidak akan mengubah email maupun password tanpa izin Anda.",
  },
  {
    question: "Berapa lama proses joki selesai?",
    answer:
      "Waktu pengerjaan tergantung jenis layanan yang dipilih. Kami akan memberikan estimasi sebelum proses dimulai dan selalu mengabarkan progres pengerjaan.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan di awal sebelum proses joki dimulai. Untuk layanan tertentu dapat didiskusikan sesuai kesepakatan.",
  },
  {
    question: "Apakah saya akan mendapatkan update progress?",
    answer:
      "Tentu. Kami akan mengirimkan update progres secara berkala melalui WhatsApp agar Anda mengetahui perkembangan akun Anda.",
  },
  {
    question: "Apakah bisa request jam pengerjaan?",
    answer:
      "Bisa. Jika Anda memiliki permintaan waktu tertentu, silakan sampaikan sebelum proses dimulai dan kami akan menyesuaikan semaksimal mungkin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Pertanyaan yang Sering Ditanyakan
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Semua yang perlu Anda ketahui sebelum menggunakan jasa DJURAGAN DINO.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <span className="text-cyan-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
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