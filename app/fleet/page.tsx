import { AnimatedReveal } from '../../components/animated-reveal';
import { PageHero } from '../../components/page-hero';
import { SectionHeading } from '../../components/section-heading';
import { fleet } from '../../lib/content';

export const metadata = {
  title: 'Fleet'
};

export default function FleetPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Fleet"
        title="Vehicle cards that are easy to compare on mobile and desktop."
        description="Show the fleet in a structured grid with seating, pricing, and booking readiness so customers can pick the right vehicle fast."
      />

      <section className="section-shell section-spacing">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Available vehicles"
            title="A clean presentation for your cars and travelers"
            description="You can replace the sample images with your own vehicle photos later without changing the page structure."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((vehicle) => (
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
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </main>
  );
}