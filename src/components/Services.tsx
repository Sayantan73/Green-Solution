import Icon from './Icon'

const services = [
  {
    title: 'Consulting',
    description: 'Expert advice for greater impact.',
    image: '/image/consulting.svg',
    alt: 'Workspace with a laptop and planning notes',
    icon: 'briefcase',
  },
  {
    title: 'Technology',
    description: 'Build smarter with modern technology.',
    image: '/image/technology.svg',
    alt: 'Glowing digital network around the earth',
    icon: 'cloud',
  },
  {
    title: 'Business Growth',
    description: 'Strategies for long-term success.',
    image: '/image/growth.svg',
    alt: 'Analytics dashboard on a laptop',
    icon: 'chart',
  },
] as const

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pb-16 pt-1 sm:px-8 sm:pb-20 lg:max-w-[1600px] lg:px-14">
      <div className="mb-7 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#14251d]">Our Services</h2>
        <p className="mt-2 text-base font-medium text-slate-600">Tailored solutions to meet your needs</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map(({ title, description, image, alt, icon }) => (
          <article key={title} className="group overflow-hidden rounded-2xl bg-[#f3f8f6] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none">
            <img className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" src={image} alt={alt} loading="lazy" />
            <div className="px-5 pb-5 pt-4 text-center">
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#e0f2d8] text-[#378446]">
                <Icon name={icon} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#16251d]">{title}</h3>
              <p className="mx-auto mt-1 max-w-[230px] text-sm leading-5 text-slate-600">{description}</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#347c3f] hover:text-[#205a2d]">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
