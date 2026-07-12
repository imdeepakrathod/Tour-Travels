import { AnimatedReveal } from '../../components/animated-reveal';
import { PageHero } from '../../components/page-hero';
import { SectionHeading } from '../../components/section-heading';
import { packages } from '../../lib/content';

export const metadata = {
  title: 'Packages'
};

export default function PackagesPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Packages"
        title="Tour packages and itinerary blocks you can edit from content later."
        description="A frontend-only build works best when package data is simple, clear, and ready to swap without touching design code."
      />

      <section className="section-shell section-spacing">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Featured tours"
            title="Trips that fit real booking conversations"
            description="Use these cards for destination packages, local sightseeing, and custom travel quotes."
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
    </main>
  );
}