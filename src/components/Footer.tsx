const linkGroups = [
  { title: 'Quick Links', links: ['Home', 'About', 'Services', 'Contact'] },
  { title: 'Resources', links: ['Blog', 'FAQs', 'Support'] },
]

const socialLinks = [
  { name: 'Facebook', icon: <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" /> },
  { name: 'LinkedIn', icon: <><path d="M6.5 9.5v8M6.5 6.5v.1M10.5 17.5v-8h3v1.2a3 3 0 0 1 5.5 1.8v5" /><circle cx="6.5" cy="6.5" r="1" /></> },
  { name: 'X', icon: <path d="m5 4 14 16M19 4 5 20" /> },
  { name: 'YouTube', icon: <><path d="M22 8.1a2.8 2.8 0 0 0-2-2C18.2 5.6 12 5.6 12 5.6s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.5 12a29 29 0 0 0 .5 3.9 2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.9 29 29 0 0 0-.5-3.9Z" /><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="#ffffff" /></> },
] as const

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
            {socialLinks.map(({ name, icon }) => (
              <a key={name} href="#contact" aria-label={`Follow us on ${name}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d2b1d] transition hover:bg-lime-300">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill={name === 'LinkedIn' || name === 'X' ? 'none' : 'currentColor'} stroke={name === 'LinkedIn' || name === 'X' ? 'currentColor' : 'none'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icon}
                </svg>
              </a>
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
