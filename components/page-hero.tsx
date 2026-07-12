import Link from 'next/link';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({ eyebrow, title, description, primaryHref = '/contact', primaryLabel = 'Book now' }: PageHeroProps) {
  return (
    <section className="section-shell py-10 sm:py-14 lg:py-16">
      <div className="rounded-[2rem] border border-white/10 bg-hero-radial px-6 py-12 text-white shadow-2xl shadow-brand-950/30 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={primaryHref} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:translate-y-[-1px]">
            {primaryLabel}
          </Link>
          <Link href="/fleet" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
            Explore fleet
          </Link>
        </div>
      </div>
    </section>
  );
}