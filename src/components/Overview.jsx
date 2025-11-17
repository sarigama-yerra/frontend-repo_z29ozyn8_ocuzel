import { Brush, Building2, Camera, Car, CheckCircle2, ChefHat, Flower2, Music, ScrollText, Scissors, Sparkles, TestTubes, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Building2, title: "Choose location", desc: "Pick your dream city or destination." },
  { icon: Users, title: "Select a venue", desc: "Find verified venues with transparent pricing." },
  { icon: Scissors, title: "Dresses & suits", desc: "Tailored looks, fittings, and styling." },
  { icon: Brush, title: "Makeup & hair", desc: "On-site artists for flawless looks." },
  { icon: Flower2, title: "Decor & florists", desc: "From arches to centerpieces and more." },
  { icon: ChefHat, title: "Catering & cakes", desc: "Menus, tastings, and custom cakes." },
  { icon: Music, title: "Music & entertainment", desc: "DJs, bands, and live acts." },
  { icon: Camera, title: "Photo & video", desc: "Capture every moment in style." },
  { icon: ScrollText, title: "Invitations", desc: "Design, print, and digital RSVPs." },
  { icon: Car, title: "Transport", desc: "Shuttles, classic cars, and more." },
  { icon: Sparkles, title: "Accessories", desc: "Rings, décor details, and extras." },
  { icon: TestTubes, title: "Planner tools", desc: "Budgeting and smart suggestions." },
];

export default function Overview() {
  return (
    <section id="overview" className="py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold text-gray-900">
          Everything you need, step-by-step
        </motion.h2>
        <p className="mt-2 text-gray-600 max-w-2xl">A guided flow that turns decisions into delightful choices.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-2xl p-5 bg-white/70 backdrop-blur ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-400 to-sky-400 text-white flex items-center justify-center shadow">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
