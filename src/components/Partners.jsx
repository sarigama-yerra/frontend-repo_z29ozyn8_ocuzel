import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">For vendors & partners</h2>
            <p className="mt-2 text-gray-600">Restaurants, photographers, musicians, planners—join our verified marketplace and reach couples ready to book.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold">Become a Partner</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-sky-200/40 to-pink-200/40 blur-2xl rounded-3xl -z-10" />
            <img className="w-full rounded-3xl shadow-xl ring-1 ring-white" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop" alt="Vendors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
