const linkGroups = [
  { title: 'Quick Links', links: ['Home', 'About', 'Services', 'Contact'] },
  { title: 'Resources', links: ['Blog', 'FAQs', 'Support'] },
]

const socialLinks = [
  { name: 'Facebook', icon: <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" /> },
  { name: 'LinkedIn', icon: <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" /> },
  { name: 'X', icon: <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2h-2l13.1 17.5Z" /> },
  { name: 'YouTube', icon: <><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12s0-3.9-.5-5.8Z" /><path d="m9.6 15.5 6.3-3.5-6.3-3.5v7Z" fill="#ffffff" /></> },
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
              <a key={name} href="#contact" aria-label={`Follow us on ${name}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d2b1d] transition duration-300 hover:scale-110 hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 motion-reduce:transition-none">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
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
