import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-sky-500 text-white p-8 sm:p-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Your dream wedding is one click away.</h3>
            <p className="mt-2 text-white/90">Start with your date and location, then book every detail instantly.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#top" className="inline-flex justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow">
                Start Planning
              </a>
              <a href="#featured" className="inline-flex justify-center rounded-xl bg-white/20 backdrop-blur px-5 py-3 font-semibold ring-1 ring-white/50">
                Explore Venues
              </a>
            </div>
          </motion.div>
          <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
