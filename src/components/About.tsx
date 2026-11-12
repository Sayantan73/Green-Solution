import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const stats = [
  { icon: 'users', value: 10, suffix: 'K+', label: 'Happy Clients' },
  { icon: 'trophy', value: 500, suffix: '+', label: 'Projects Delivered' },
  { icon: 'star', value: 98, suffix: '%', label: 'Success Rate' },
] as const

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(() => {
    if (typeof window === 'undefined') return 0
    return !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0
  })

  useEffect(() => {
    const element = statsRef.current
    if (!element) return

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = Math.min((now - start) / 1600, 1)
        setProgress(1 - (1 - elapsed) ** 3)
        if (elapsed < 1) frame = requestAnimationFrame(animate)
      }

      frame = requestAnimationFrame(animate)
    }, { threshold: 0.3 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-8 lg:max-w-[1600px] lg:px-14 lg:pb-20 lg:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-lg">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#4f9a4c]">About us</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#12251c] sm:text-5xl">
            Your Partner
            <br /> in Progress
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
            We’re committed to helping you achieve your goals with innovative solutions and dedicated support.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#378446] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#286d37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#378446]"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="group relative mx-auto w-full max-w-[600px]">
          <div className="absolute -inset-4 -z-10 rotate-[-4deg] rounded-[36%_64%_61%_39%/50%_42%_58%_50%] bg-lime-100" />
          <img
            className="h-[300px] w-full rounded-2xl object-cover shadow-md transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none sm:h-[360px]"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="Modern glass office building"
            loading="lazy"
          />
        </div>
      </div>

      <div ref={statsRef} className="mt-16 grid grid-cols-1 divide-y divide-[#cfe6c5] overflow-hidden rounded-2xl bg-[#eaf7df] shadow-sm sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(({ icon, value, suffix, label }) => (
          <div key={label} className="group flex flex-col items-center py-7 text-center transition duration-300 hover:bg-[#e1f3d4] sm:py-8">
            <Icon name={icon} className="mb-3 h-8 w-8 text-[#347c3f] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
            <strong className="text-3xl font-extrabold tracking-tight text-[#14261c]">
              {Math.round(value * progress).toLocaleString()}{suffix}
            </strong>
            <span className="mt-1 text-sm font-medium text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
