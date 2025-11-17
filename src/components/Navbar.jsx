import { Menu, Plane, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-sky-400 flex items-center justify-center shadow-md">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">
            BlissBook
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#overview" className="hover:text-gray-900">Services</a>
          <a href="#featured" className="hover:text-gray-900">Venues</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#why" className="hover:text-gray-900">Why us</a>
          <a href="#stories" className="hover:text-gray-900">Stories</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
            <Sparkles className="h-4 w-4 text-pink-500" />
            Explore
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 bg-white text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
