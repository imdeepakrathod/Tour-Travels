'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, PhoneCall, X } from 'lucide-react';
import logo from '../logo.jpg';
import { navLinks, site } from '../lib/content';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt={site.name} className="h-12 w-12 rounded-2xl bg-white object-contain p-1 ring-1 ring-white/10" />
          <div>
            <p className="font-display text-lg font-semibold text-white">{site.name}</p>
            <p className="text-xs text-slate-300">{site.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            <PhoneCall size={16} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:translate-y-[-1px]"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <a
                href={`tel:${site.phone.replace(/\s+/g, '')}`}
                className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}