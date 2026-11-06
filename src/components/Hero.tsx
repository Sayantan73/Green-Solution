import Icon from './Icon'

const benefits = [
  { icon: 'leaf', title: <>Sustainable<br />Growth</> },
  { icon: 'shield', title: <>Trusted<br />Services</> },
  { icon: 'users', title: <>Expert Team</> },
  { icon: 'headset', title: <>24/7 Support</> },
] as const

export default function Hero() {
  return (
    <section id="home" className="hero-section relative isolate text-white">
      <div className="hero-backdrop absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[440px] max-w-7xl items-center px-6 pb-12 pt-16 sm:px-10 lg:min-h-[470px] lg:max-w-[1600px] lg:px-14">
        <div className="max-w-xl">
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

      <div className="relative mx-auto -mt-7 max-w-6xl px-5 sm:px-8 lg:max-w-[1600px] lg:px-14">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white py-5 text-[#10291a] shadow-[0_12px_36px_rgba(13,40,25,0.12)] sm:grid-cols-4 sm:py-6">
          {benefits.map(({ icon, title }) => (
            <div key={icon} className="flex min-h-[82px] flex-col items-center justify-center gap-2 border-[#e7eee8] px-2 text-center [&:nth-child(2)]:border-r sm:border-r sm:last:border-r-0">
              <Icon name={icon} className="h-7 w-7 text-[#418b42]" />
              <span className="text-sm font-semibold leading-5">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
