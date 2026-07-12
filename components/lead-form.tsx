'use client';

import { useForm } from 'react-hook-form';
import { site } from '../lib/content';

type LeadFormValues = {
  name: string;
  phone: string;
  service: string;
  date: string;
  route: string;
  message: string;
};

const serviceOptions = ['Airport transfer', 'Local rental', 'Outstation trip', 'Tour package', 'Corporate travel'];

export function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<LeadFormValues>({
    defaultValues: {
      service: serviceOptions[0]
    }
  });

  const onSubmit = async (values: LeadFormValues) => {
    const details = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      values.date ? `Date: ${values.date}` : '',
      values.route ? `Route: ${values.route}` : '',
      values.message ? `Message: ${values.message}` : ''
    ]
      .filter(Boolean)
      .join('%0A');

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 sm:p-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            {...register('name', { required: true })}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none ring-0 transition focus:border-brand-300 focus:bg-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone
          <input
            {...register('phone', { required: true })}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none ring-0 transition focus:border-brand-300 focus:bg-white"
            placeholder="Mobile number"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service
          <select
            {...register('service')}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-brand-300 focus:bg-white"
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Travel date
          <input
            type="date"
            {...register('date')}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-brand-300 focus:bg-white"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
        Pickup / route
        <input
          {...register('route')}
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-brand-300 focus:bg-white"
          placeholder="City, airport, or route"
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
        Trip details
        <textarea
          {...register('message')}
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-300 focus:bg-white"
          placeholder="Passenger count, luggage, pickup time, special request"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 disabled:opacity-60"
      >
        Send enquiry on WhatsApp
      </button>
    </form>
  );
}