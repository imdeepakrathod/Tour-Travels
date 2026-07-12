import { CheckCircle2 } from 'lucide-react';
import { AnimatedReveal } from '../../components/animated-reveal';
import { PageHero } from '../../components/page-hero';
import { SectionHeading } from '../../components/section-heading';
import { benefits, site } from '../../lib/content';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="About us"
        title="Built for travel customers who want clarity, speed, and trust."
        description="This page tells the business story, service promise, and the practical reasons people choose the company when booking local and outstation travel."
      />

      <section className="section-shell section-spacing">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Our story"
            title={site.name}
            description="A frontend-first website should still feel like a proper travel brand. We use strong typography, a premium color palette, and focused calls to action so visitors quickly understand what the company does."
          />
        </AnimatedReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedReveal>
            <div className="card p-6 leading-7 text-slate-600">
              <p>
                The business offers city rides, airport transfers, outstation cabs, tour packages, and event transport across India. The website keeps these services visible from the first screen so people can move from browsing to enquiry without confusion.
              </p>
              <p className="mt-4">
                The layout is also easy to expand later if you want to add online booking, payments, trip tracking, or a customer dashboard.
              </p>
            </div>
          </AnimatedReveal>
          <AnimatedReveal>
            <div className="card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">What we promise</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}