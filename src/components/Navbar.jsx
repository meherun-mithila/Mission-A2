import { useState } from 'react'

const navLinks = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900 tracking-tight">
          CS — Ticket System
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link}
            </a>
          ))}
          <button style={{ backgroundColor: '#422AD5' }} className="hover:opacity-90 text-white text-sm font-medium px-4 py-2 rounded-md transition-opacity">
            + New Ticket
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 px-2 pb-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button style={{ backgroundColor: '#422AD5' }} className="hover:opacity-90 text-white text-sm font-medium px-4 py-2 rounded-md transition-opacity w-fit">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  )
}
