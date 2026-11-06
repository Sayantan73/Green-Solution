const linkGroups = [
  { title: 'Quick Links', links: ['Home', 'About', 'Services', 'Contact'] },
  { title: 'Resources', links: ['Blog', 'FAQs', 'Support'] },
]

function Brand() {
  return (
    <a href="#home" className="inline-flex items-center gap-2 text-white">
      <svg viewBox="0 0 40 40" className="h-9 w-9 text-lime-400" fill="none" aria-hidden="true">
        <path d="M34 5C17 5 6 12 6 24c0 6 4 10 10 10C29 34 34 19 34 5Z" fill="currentColor" />
        <path d="M8 34C14 25 21 18 30 11" stroke="#092d20" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-bold tracking-tight">Green Solution</span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d2b1d] text-white">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-4 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-lime-400/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:max-w-[1600px] lg:px-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Let’s Grow Together</h2>
            <p className="mt-1 text-sm text-white/70">Get in touch and start your journey.</p>
          </div>
          <a href="mailto:hello@greensolution.com" className="inline-flex w-fit items-center gap-3 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-[#10291a] transition hover:bg-lime-300">
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:max-w-[1600px] lg:grid-cols-4 lg:px-14">
        <div><Brand /></div>
        {linkGroups.map(({ title, links }) => (
          <div key={title}>
            <h3 className="mb-3 text-sm font-bold">{title}</h3>
            <ul className="space-y-2 text-sm text-white/65">
              {links.map((link) => (
                <li key={link}><a className="transition hover:text-lime-300" href={`#${link.toLowerCase()}`}>{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-3 text-sm font-bold">Follow Us</h3>
          <div className="flex gap-2">
            {['f', 'in', '𝕏', '▶'].map((social) => (
              <a key={social} href="#contact" aria-label={`Follow us on ${social}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0d2b1d] transition hover:bg-lime-300">{social}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-6 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:max-w-[1600px] lg:px-14">
        <p>© 2025 Green Solution. All rights reserved.</p>
        <div className="flex gap-4"><a href="#privacy" className="hover:text-white">Privacy Policy</a><a href="#terms" className="hover:text-white">Terms of Service</a></div>
      </div>
    </footer>
  )
}
