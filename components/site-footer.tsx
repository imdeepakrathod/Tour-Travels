import Link from 'next/link';
import { navLinks, site } from '../lib/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-slate-950">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{site.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <div className="mt-4 grid gap-2 text-sm">
            <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="transition hover:text-slate-950">
              {site.phone}
            </a>
            <span>{site.hours}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}