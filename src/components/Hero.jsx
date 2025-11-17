import { useState } from "react";
import { Calendar, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] bg-gradient-to-r from-pink-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-70 rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
            <Calendar className="h-4 w-4 text-pink-500" />
            Plan a wedding as simple as buying a plane ticket.
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Plan a wedding as simple as buying a plane ticket.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Instantly explore available venues, services, and full wedding packages tailored to your date and destination.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-8 sm:mt-10">
          <div className="mx-auto max-w-4xl rounded-2xl p-2 sm:p-3 bg-white/70 backdrop-blur shadow-xl ring-1 ring-white/50">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3">
              <div className="sm:col-span-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-gray-200">
                <Calendar className="h-5 w-5 text-pink-500" />
                <div className="flex-1">
                  <label className="block text-xs text-gray-500">Wedding date</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent outline-none text-gray-900" />
                </div>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-gray-200">
                <MapPin className="h-5 w-5 text-sky-500" />
                <div className="flex-1">
                  <label className="block text-xs text-gray-500">Location</label>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or venue" className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400" />
                </div>
              </div>
              <button onClick={() => onStart?.({ date, location })} className="sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-sky-500 text-white font-semibold px-4 py-3 shadow-lg hover:opacity-95 transition">
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">Start Planning</span>
                <span className="sm:hidden">Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
