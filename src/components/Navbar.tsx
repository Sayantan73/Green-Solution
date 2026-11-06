import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-2 text-white">
      <svg viewBox="0 0 40 40" className="h-9 w-9 text-lime-400" fill="none" aria-hidden="true">
        <path d="M34 5C17 5 6 12 6 24c0 6 4 10 10 10C29 34 34 19 34 5Z" fill="currentColor" />
        <path d="M8 34C14 25 21 18 30 11" stroke="#092d20" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-bold tracking-tight">Green Solution</span>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 bg-[#0d2b1d] text-white">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:max-w-[1600px] lg:px-14">
        <Brand />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-300 sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 bg-[#0d2b1d] px-6 pb-6 pt-2 shadow-lg sm:static sm:flex sm:flex-row sm:items-center sm:gap-9 sm:bg-transparent sm:p-0 sm:shadow-none`}>
          <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/85 transition hover:text-lime-300">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="w-fit rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-[#10291a] transition hover:bg-lime-300">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}
