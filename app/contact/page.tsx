import { Clock3, MessageSquare, PhoneCall } from 'lucide-react';
import { AnimatedReveal } from '../../components/animated-reveal';
import { LeadForm } from '../../components/lead-form';
import { PageHero } from '../../components/page-hero';
import { SectionHeading } from '../../components/section-heading';
import { site } from '../../lib/content';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Contact"
        title="A simple contact page that turns visitors into enquiries."
        description="The form opens WhatsApp with the enquiry details, which is a practical choice for a frontend-only travel website."
      />

      <section className="section-shell section-spacing">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedReveal>
            <div className="card p-6">
              <SectionHeading
                eyebrow="Quick contact"
                title="Call, message, or submit the booking form"
                description="Use whichever contact path is easiest on mobile."
              />
              <div className="mt-6 grid gap-4 text-sm text-slate-600">
                <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-900 transition hover:bg-slate-100">
                  <PhoneCall size={18} className="text-brand-600" />
                  {site.phone}
                </a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-900 transition hover:bg-slate-100">
                  <MessageSquare size={18} className="text-brand-600" />
                  WhatsApp enquiry
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-900">
                  <Clock3 size={18} className="text-brand-600" />
                  {site.hours}
                </div>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal>
            <div className="rounded-[2rem] bg-slate-950 p-2 shadow-2xl shadow-brand-950/30">
              <LeadForm />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}