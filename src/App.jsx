import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Featured from './components/Featured'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Partners from './components/Partners'

function App() {
  const [query, setQuery] = useState({ date: '', location: '' })

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 text-gray-900">
      <Navbar />
      <main>
        <Hero onStart={(q) => setQuery(q)} />
        <Overview />
        <Featured />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Partners />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BlissBook. All rights reserved.
        {query.date || query.location ? (
          <div className="mt-2 text-xs text-gray-600">Selected: {query.date || '—'} · {query.location || '—'}</div>
        ) : null}
      </footer>
    </div>
  )
}

export default App
