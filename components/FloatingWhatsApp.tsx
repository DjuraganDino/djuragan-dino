import { event } from "@/lib/gtag";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6288294084382"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        event({
          action: "click_whatsapp",
          category: "engagement",
          label: "floating_button",
          value: 1,
        })
      }
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white font-bold shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      💬 Order via WhatsApp
    </a>
  );
}