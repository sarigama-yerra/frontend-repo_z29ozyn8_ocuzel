import { motion } from "framer-motion";

const stories = [
  { name: "Ava & Liam", quote: "It felt like booking a flight — date, place, done!", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Mia & Noah", quote: "We booked everything in one evening.", img: "https://images.unsplash.com/photo-1522335789203-9a5a7d1b9c0f?q=80&w=1200&auto=format&fit=crop" },
  { name: "Emma & Oliver", quote: "Real-time availability saved us weeks.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Real stories</h2>
        <p className="mt-2 text-gray-600">Couples who planned with joy and ease.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-gray-800">“{s.quote}”</p>
                <p className="text-sm text-gray-500 mt-2">— {s.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
