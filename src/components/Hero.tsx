import { useEffect, useState } from 'react'
import Icon from './Icon'

const heroImages = [
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2000&q=85',
]

const benefits = [
  { icon: 'leaf', title: <>Sustainable<br />Growth</> },
  { icon: 'shield', title: <>Trusted<br />Services</> },
  { icon: 'users', title: <>Expert Team</> },
  { icon: 'headset', title: <>24/7 Support</> },
] as const

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let fadeTimeout: number | undefined
    const interval = window.setInterval(() => {
      setIsFading(true)
      fadeTimeout = window.setTimeout(() => {
        setSlideIndex((index) => (index + 1) % heroImages.length)
        setIsFading(false)
      }, 1000)
    }, 6500)

    return () => {
      window.clearInterval(interval)
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout)
    }
  }, [])

  return (
    <section id="home" className="hero-section relative isolate pb-12 text-white">
      <div className="hero-backdrop absolute inset-x-0 top-0 -z-10 h-[490px] lg:h-[530px]" aria-hidden="true">
        <div className="hero-slide absolute inset-0" style={{ backgroundImage: `url("${heroImages[slideIndex]}")` }} />
        <div
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none${isFading ? ' opacity-100' : ' opacity-0'}`}
          style={{ backgroundImage: `url("${heroImages[(slideIndex + 1) % heroImages.length]}")` }}
        />
        <div className="hero-shade absolute inset-0" />
      </div>
      <div className="mx-auto flex min-h-[490px] max-w-7xl items-center px-6 pb-12 pt-16 sm:px-10 lg:min-h-[530px] lg:max-w-[1600px] lg:px-14">
        <div className="hero-copy max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-lime-300">A better future starts here</p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.55rem]">
            Innovate. Grow.
            <br />
            <span className="text-lime-400">Succeed.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/85 sm:text-lg">
            Smart solutions for a brighter
            <br className="hidden sm:block" /> and more successful future.
          </p>
          <a
            href="#services"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-[#10291a] transition hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          >
            Explore More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto -mt-6 max-w-6xl px-5 sm:px-8 lg:max-w-[1500px] lg:px-14">
        <div className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-[#ebf0eb] bg-white py-5 text-[#10291a] shadow-[0_18px_38px_rgba(13,40,25,0.12)] sm:grid-cols-4 sm:py-6">
          {benefits.map(({ icon, title }) => (
            <div key={icon} className="group flex min-h-[82px] flex-col items-center justify-center gap-2 border-[#e7eee8] px-2 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#f1f9ed] hover:shadow-sm motion-reduce:transition-none [&:nth-child(2)]:border-r sm:border-r sm:last:border-r-0">
              <Icon name={icon} className="h-7 w-7 text-[#418b42] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none" />
              <span className="text-sm font-semibold leading-5">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
