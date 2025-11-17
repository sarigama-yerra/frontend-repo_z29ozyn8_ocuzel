import { Star, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Seaside Garden Pavilion",
    location: "Santa Barbara, CA",
    price: "$$$",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Golden Hall Restaurant",
    location: "New York, NY",
    price: "$$",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1520892719287-836d3c560373?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Aspen Ridge Lodge",
    location: "Aspen, CO",
    price: "$$$",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Lakeview Terraza",
    location: "Lake Como, IT",
    price: "$$$$",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1488740304459-45c4277e7aa1?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Venues & Restaurants</h2>
            <p className="text-gray-600 mt-2">Handpicked spaces with real reviews and transparent pricing.</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl bg-gray-900 text-white px-4 py-2">Explore all</button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{it.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm font-medium">{it.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{it.location}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="inline-flex items-center gap-1 text-gray-700">
                    <DollarSign className="h-4 w-4" /> {it.price}
                  </span>
                  <button className="rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 text-white px-3 py-1.5 text-sm shadow">View Availability</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
