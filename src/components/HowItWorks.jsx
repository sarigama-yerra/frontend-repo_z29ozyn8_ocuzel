import { motion } from "framer-motion";
import { CalendarCheck2, MapPin, Wand2, CreditCard } from "lucide-react";

const steps = [
  { icon: CalendarCheck2, title: "Choose date & location", desc: "Pick when and where the magic happens." },
  { icon: MapPin, title: "Explore venues & services", desc: "Browse verified options with real-time availability." },
  { icon: Wand2, title: "Customize your wedding", desc: "Tailor every detail with guided suggestions." },
  { icon: CreditCard, title: "Book instantly", desc: "Secure everything in one seamless checkout." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How it works</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">A simple flow inspired by airline booking—fast, clear, and joyful.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-pink-400 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
