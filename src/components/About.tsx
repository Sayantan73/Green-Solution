import Icon from './Icon'

const stats = [
  { icon: 'users', value: '10K+', label: 'Happy Clients' },
  { icon: 'trophy', value: '500+', label: 'Projects Delivered' },
  { icon: 'star', value: '98%', label: 'Success Rate' },
] as const

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:px-8 lg:max-w-[1600px] lg:px-14 lg:pb-16 lg:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="max-w-lg">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-[#4f9a4c]">About us</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#12251c] sm:text-4xl">
            Your Partner
            <br /> in Progress
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
            We’re committed to helping you achieve your goals with innovative solutions and dedicated support.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#378446] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#286d37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#378446]"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-4 -z-10 rotate-[-4deg] rounded-[36%_64%_61%_39%/50%_42%_58%_50%] bg-lime-100" />
          <img
            className="h-[250px] w-full rounded-2xl object-cover shadow-sm sm:h-[290px]"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="Modern glass office building"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 divide-y divide-[#cfe6c5] overflow-hidden rounded-2xl bg-[#eaf7df] sm:mt-16 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(({ icon, value, label }) => (
          <div key={label} className="flex flex-col items-center py-5 text-center sm:py-6">
            <Icon name={icon} className="mb-2 h-7 w-7 text-[#347c3f]" />
            <strong className="text-2xl font-extrabold tracking-tight text-[#14261c]">{value}</strong>
            <span className="mt-1 text-sm font-medium text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
