import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS, SERVICES } from '../data/content';
import { EnquiryPayload, PageRoute } from '../types';

interface EnquiryFormProps {
  preselectedService?: string;
  sourcePage: PageRoute;
  darkSurface?: boolean;
}

interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Annual Visibility Plans',
  'Enterprise Partnerships',
  'General Strategic Consultation',
];

export function EnquiryForm({
  preselectedService = '',
  sourcePage,
  darkSurface = false,
}: EnquiryFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterestedIn: preselectedService || SERVICE_OPTIONS[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryPayload | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({
        ...prev,
        serviceInterestedIn: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!data.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company or venture name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    const cleanedPhone = data.phone.replace(/[\s\-().]/g, '');
    if (!cleanedPhone || !/^\+?\d{8,15}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!data.serviceInterestedIn.trim()) {
      nextErrors.serviceInterestedIn = 'Please choose the primary area of interest.';
    }
    if (!data.message.trim() || data.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief overview of your goals (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          companyName: values.companyName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          serviceInterestedIn: values.serviceInterestedIn,
          message: values.message.trim(),
          sourcePage,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (data?.fieldErrors && typeof data.fieldErrors === 'object') {
          setErrors(data.fieldErrors as FormErrors);
        }
        setSubmitError(
          data?.error ||
            'Unable to submit your enquiry right now. Please check your details or reach us directly via WhatsApp.'
        );
        setIsSubmitting(false);
        return;
      }

      if (!data?.referenceId) {
        setSubmitError(
          'Unexpected server response while logging your enquiry. Please try again or contact us via WhatsApp.'
        );
        setIsSubmitting(false);
        return;
      }

      setSubmittedRecord({
        fullName: data.fullName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        serviceInterestedIn: data.serviceInterestedIn,
        message: data.message,
        sourcePage: data.sourcePage || sourcePage,
        submittedAt: data.submittedAt,
        referenceId: data.referenceId,
      });
      setIsSubmitting(false);
    } catch {
      setSubmitError(
        'Network error while sending your brief. Your entered details have been preserved—please retry or connect on WhatsApp.'
      );
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setErrors({});
    setSubmitError(null);
    setValues({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceInterestedIn: preselectedService || SERVICE_OPTIONS[0],
      message: '',
    });
  };

  const labelClass = darkSurface
    ? 'block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#F5F3EE]/85 mb-2'
    : 'block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#10100F] mb-2';

  const inputBaseClass = darkSurface
    ? 'w-full px-4 py-3.5 bg-[#10100F] border text-sm text-[#F5F3EE] placeholder:text-[#77736C] focus:outline-none focus:border-[#C9A45C] transition-colors'
    : 'w-full px-4 py-3.5 bg-[#FFFFFF] border text-sm text-[#10100F] placeholder:text-[#77736C] focus:outline-none focus:border-[#C9A45C] transition-colors';

  const borderNormal = darkSurface ? 'border-[#2C2A26]' : 'border-[#DEDAD1]';

  if (submittedRecord) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`p-8 sm:p-10 border ${
          darkSurface
            ? 'bg-[#10100F] border-[#C9A45C]/60 text-[#F5F3EE]'
            : 'bg-[#FFFFFF] border-[#C9A45C] text-[#10100F]'
        } space-y-6`}
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-[#C9A45C] shrink-0 mt-1" strokeWidth={1.75} />
          <div className="space-y-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C] tabular-nums">
              Confirmed · Reference {submittedRecord.referenceId}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl">
              Thank you, {submittedRecord.fullName}.
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                darkSurface ? 'text-[#F5F3EE]/80' : 'text-[#6E6B65]'
              }`}
            >
              Our senior advisory desk has received and logged your consultation brief for{' '}
              <strong className="font-semibold text-[#C9A45C]">
                {submittedRecord.serviceInterestedIn}
              </strong>{' '}
              on behalf of {submittedRecord.companyName}. We review all submissions within one
              business day.
            </p>
          </div>
        </div>

        <div
          className={`pt-5 border-t ${
            darkSurface ? 'border-[#252421]' : 'border-[#DEDAD1]'
          } flex flex-wrap items-center gap-4`}
        >
          <a
            href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              `Hello The Comeback Project, I just submitted enquiry ${submittedRecord.referenceId} for ${submittedRecord.companyName} (${submittedRecord.serviceInterestedIn}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#d8b46e] transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            <span>Continue on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className={`px-6 py-3.5 border text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
              darkSurface
                ? 'border-[#2C2A26] text-[#F5F3EE] hover:border-[#C9A45C]'
                : 'border-[#DEDAD1] text-[#10100F] hover:border-[#10100F]'
            }`}
          >
            Submit Another Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {submitError && (
        <div
          role="alert"
          className={`p-4 border flex items-start gap-3 text-sm ${
            darkSurface
              ? 'border-red-500/60 bg-red-950/30 text-red-300'
              : 'border-red-600/50 bg-red-50 text-red-800'
          }`}
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.5} />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`fullName-${sourcePage}`} className={labelClass}>
            Full Name <span className="text-[#C9A45C]">*</span>
          </label>
          <input
            id={`fullName-${sourcePage}`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Aarav Kapoor"
            value={values.fullName}
            onChange={(e) => {
              setValues({ ...values, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `fullName-err-${sourcePage}` : undefined}
            className={`${inputBaseClass} ${errors.fullName ? 'border-red-600' : borderNormal}`}
          />
          {errors.fullName && (
            <p
              id={`fullName-err-${sourcePage}`}
              className="mt-1.5 text-xs text-red-600 font-medium"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`companyName-${sourcePage}`} className={labelClass}>
            Company Name <span className="text-[#C9A45C]">*</span>
          </label>
          <input
            id={`companyName-${sourcePage}`}
            name="companyName"
            type="text"
            autoComplete="organization"
            required
            placeholder="e.g. Meridian Ventures"
            value={values.companyName}
            onChange={(e) => {
              setValues({ ...values, companyName: e.target.value });
              if (errors.companyName) setErrors({ ...errors, companyName: undefined });
            }}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? `companyName-err-${sourcePage}` : undefined}
            className={`${inputBaseClass} ${
              errors.companyName ? 'border-red-600' : borderNormal
            }`}
          />
          {errors.companyName && (
            <p
              id={`companyName-err-${sourcePage}`}
              className="mt-1.5 text-xs text-red-600 font-medium"
            >
              {errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`email-${sourcePage}`} className={labelClass}>
            Email Address <span className="text-[#C9A45C]">*</span>
          </label>
          <input
            id={`email-${sourcePage}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@company.com"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `email-err-${sourcePage}` : undefined}
            className={`${inputBaseClass} ${errors.email ? 'border-red-600' : borderNormal}`}
          />
          {errors.email && (
            <p id={`email-err-${sourcePage}`} className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`phone-${sourcePage}`} className={labelClass}>
            Phone / WhatsApp Number <span className="text-[#C9A45C]">*</span>
          </label>
          <input
            id={`phone-${sourcePage}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91 98200 00000"
            value={values.phone}
            onChange={(e) => {
              setValues({ ...values, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `phone-err-${sourcePage}` : undefined}
            className={`${inputBaseClass} ${errors.phone ? 'border-red-600' : borderNormal}`}
          />
          {errors.phone && (
            <p id={`phone-err-${sourcePage}`} className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`service-${sourcePage}`} className={labelClass}>
          Service Interested In <span className="text-[#C9A45C]">*</span>
        </label>
        <select
          id={`service-${sourcePage}`}
          name="serviceInterestedIn"
          value={values.serviceInterestedIn}
          onChange={(e) => {
            setValues({ ...values, serviceInterestedIn: e.target.value });
            if (errors.serviceInterestedIn) {
              setErrors({ ...errors, serviceInterestedIn: undefined });
            }
          }}
          aria-invalid={Boolean(errors.serviceInterestedIn)}
          className={`${inputBaseClass} ${
            errors.serviceInterestedIn ? 'border-red-600' : borderNormal
          }`}
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceInterestedIn && (
          <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.serviceInterestedIn}</p>
        )}
      </div>

      <div>
        <label htmlFor={`message-${sourcePage}`} className={labelClass}>
          Tell Us About Your Business <span className="text-[#C9A45C]">*</span>
        </label>
        <textarea
          id={`message-${sourcePage}`}
          name="message"
          rows={5}
          required
          placeholder="Share your growth stage, timeline, visibility objectives, or strategic priorities..."
          value={values.message}
          onChange={(e) => {
            setValues({ ...values, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `message-err-${sourcePage}` : undefined}
          className={`${inputBaseClass} resize-y min-h-[130px] ${
            errors.message ? 'border-red-600' : borderNormal
          }`}
        />
        {errors.message && (
          <p id={`message-err-${sourcePage}`} className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] disabled:opacity-60 transition-all duration-200 hover:-translate-y-[1px] cursor-pointer whitespace-nowrap"
        >
          <span>{isSubmitting ? 'Submitting Brief...' : 'Submit Your Enquiry'}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
        </button>

        <p className={`text-xs ${darkSurface ? 'text-[#F5F3EE]/60' : 'text-[#6E6B65]'}`}>
          Confidential review within 1 business day. Mutual NDA available on request.
        </p>
      </div>
    </form>
  );
}
