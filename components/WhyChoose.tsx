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

        <h2 className="text-center text-5xl font-black text-cyan-400 mb-16">
          KENAPA PILIH DJURAGAN DINO?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {items.map((item)=>(
            <div
              key={item}
              className="rounded-2xl border border-cyan-500/30 bg-white/5 p-8 text-center hover:bg-cyan-500 transition"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}