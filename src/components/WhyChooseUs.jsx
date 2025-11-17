import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Real-time availability",
  "Transparent pricing",
  "Verified vendors",
  "All services in one place",
  "Personalized recommendations",
  "Budget planner & smart suggestions",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why couples choose us</h2>
            <p className="mt-2 text-gray-600">Plan with confidence thanks to live inventory, clear pricing, and trusted partners.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 p-3 ring-1 ring-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-800 text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-200/40 to-sky-200/40 blur-2xl rounded-3xl -z-10" />
            <img className="w-full rounded-3xl shadow-xl ring-1 ring-white" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop" alt="Happy couple" />
          </div>
        </div>
      </div>
    </section>
  );
}
