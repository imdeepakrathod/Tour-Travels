import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedReveal } from '../components/animated-reveal';
import { LeadForm } from '../components/lead-form';
import { SectionHeading } from '../components/section-heading';
import { benefits, faqs, fleet, packages, services, site, stats, testimonials } from '../lib/content';

export default function HomePage() {
  return (
    <main>
      <section className="section-shell py-10 sm:py-14 lg:py-20">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-hero-radial p-6 text-white shadow-2xl shadow-brand-950/30 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <AnimatedReveal>
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Sparkles size={16} />
                {site.tagline}
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Premium travel, tour, and cab bookings built for comfort and speed.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                {site.description} We focus on reliable pickups, transparent communication, and a clean fleet for every kind of journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:translate-y-[-1px]">
                  Book a Trip
                  <ArrowRight size={16} />
                </Link>
                <Link href="/fleet" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                  View Fleet
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="font-display text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Fast enquiry</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white">Request a callback or WhatsApp quote</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Share your route, date, and vehicle preference. We will get back with a trip-ready plan.</p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell section-spacing bg-slate-50 text-slate-900">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything a modern travel customer expects"
            description="The site is structured around the services people actually book most often: airport drops, family trips, outstation rides, weddings, and corporate movement."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <AnimatedReveal key={service.title}>
              <article className="card h-full p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Service</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing bg-white text-slate-900">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Fleet"
            title="Show your vehicles clearly, with a booking-first presentation"
            description="The fleet section is designed to make the car options easy to scan, compare, and contact from mobile."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fleet.slice(0, 6).map((vehicle) => (
            <AnimatedReveal key={vehicle.name}>
              <article className="card overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="h-56 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-950">{vehicle.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{vehicle.seats}</p>
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{vehicle.price}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                    <CheckCircle2 size={16} />
                    Available for booking
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/fleet" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-500 hover:text-brand-700">
            See full fleet
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-shell section-spacing bg-slate-50 text-slate-900">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Packages"
            title="Tour packages that can be edited later without changing the layout"
            description="The package page is ready for destination-wise content, itinerary blocks, and custom pricing quotes."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {packages.map((item) => (
            <AnimatedReveal key={item.title}>
              <article className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.duration}</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.price}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.details}</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing bg-white text-slate-900">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="A simple, credible layout that builds trust quickly"
            description="The site highlights what matters most to travel customers: clean vehicles, safe drivers, transparent pricing, and rapid response."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <AnimatedReveal>
            <div className="card p-6">
              <div className="flex items-center gap-3 text-brand-700">
                <ShieldCheck size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Trust points</span>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedReveal>
          <AnimatedReveal>
            <div className="card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Testimonials</p>
              <div className="mt-5 grid gap-4">
                {testimonials.map((item) => (
                  <blockquote key={item.name} className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm leading-7 text-slate-700">“{item.quote}”</p>
                    <footer className="mt-3 text-sm font-semibold text-slate-900">{item.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell section-spacing bg-slate-50 text-slate-900">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions customers usually ask before booking"
            description="A compact FAQ block keeps the homepage useful and helps people move from browsing to enquiry faster."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <AnimatedReveal key={item.question}>
              <details className="card group p-6 open:shadow-glow">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            </AnimatedReveal>
          ))}
        </div>
      </section>

    </main>
  );
}