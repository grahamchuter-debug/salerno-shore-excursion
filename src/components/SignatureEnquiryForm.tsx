"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ENQUIRY_FORM_ENABLED,
  ENQUIRY_TEST_MODE,
  enquiryFormFields,
} from "@/data/booking";
import type { SignatureTourId } from "@/data/signature-tours";

type SignatureEnquiryFormProps = {
  tourId?: SignatureTourId;
  tourTitle: string;
};

export function SignatureEnquiryForm({ tourId, tourTitle }: SignatureEnquiryFormProps) {
  const initialFields = enquiryFormFields.filter((f) => f.phase === "initial");
  const testMode = ENQUIRY_TEST_MODE;
  const productionEnabled = ENQUIRY_FORM_ENABLED;
  const interactive = productionEnabled || testMode;
  const [submittedTest, setSubmittedTest] = useState(false);

  const defaultTourValue =
    tourId === "salerno-pompeii-vesuvius-winery"
      ? "pompeii-vesuvius-winery"
      : tourId === "salerno-pompeii-amalfi-coast"
        ? "pompeii-amalfi-coast"
        : undefined;

  return (
    <section id="request-availability" className="scroll-mt-24">
      <div className="rounded-2xl border border-limestone-200 bg-limestone-50/80 p-6 sm:p-8">
        <p className="section-eyebrow">Request availability</p>
        <h2 className="section-title mt-2 text-2xl">Check your sailing — {tourTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-volcanic-700">
          Secure online payment is not active yet. Share your sailing details so we can confirm
          operational feasibility before any payment. This does not create an instant booking.
        </p>

        {testMode ? (
          <div
            className="mt-6 rounded-xl border-2 border-dashed border-maple-400 bg-maple-50 px-4 py-3 text-sm leading-relaxed text-maple-950"
            role="status"
          >
            <strong>Development / preview test mode.</strong> This form is interactive for QA only.
            Submissions are not delivered to production inboxes and do not create reservations.
          </div>
        ) : null}

        {!interactive ? (
          <div
            className="mt-6 rounded-xl border border-citrus-200 bg-citrus-50/90 px-4 py-3 text-sm leading-relaxed text-volcanic-800"
            role="status"
          >
            Availability requests will open once operational confirmation is complete. For now,
            please{" "}
            <Link href="/contact" className="font-semibold text-ionian-700 underline underline-offset-2">
              contact us by email
            </Link>{" "}
            with your ship, date and party size — or use Request Availability once the form is
            activated.
          </div>
        ) : null}

        {submittedTest ? (
          <div
            className="mt-6 rounded-xl border border-ionian-200 bg-ionian-50 px-4 py-3 text-sm text-ionian-900"
            role="status"
          >
            Test submission recorded locally in this browser session only. No email was sent.
          </div>
        ) : null}

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (testMode) {
              setSubmittedTest(true);
            }
          }}
        >
          {initialFields.map((field) => {
            const fieldId = `enquiry-${field.id}`;
            const commonProps = {
              id: fieldId,
              name: field.name,
              disabled: !interactive,
              required: field.required && interactive,
              "aria-disabled": !interactive,
              className:
                "mt-1.5 w-full rounded-lg border border-limestone-300 bg-white px-3 py-2.5 text-sm text-volcanic-900 disabled:cursor-not-allowed disabled:bg-limestone-100 disabled:text-volcanic-500",
            };

            return (
              <div key={field.id}>
                <label htmlFor={fieldId} className="block text-sm font-medium text-volcanic-800">
                  {field.label}
                  {field.required ? <span className="text-maple-600"> *</span> : null}
                </label>
                {field.type === "select" ? (
                  <select
                    {...commonProps}
                    defaultValue={
                      field.name === "preferredTour" ? defaultTourValue : undefined
                    }
                  >
                    <option value="">Select…</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    {...commonProps}
                    rows={3}
                    placeholder={field.placeholder}
                    className={`${commonProps.className} resize-y min-h-[88px]`}
                  />
                ) : (
                  <input
                    {...commonProps}
                    type={field.type}
                    placeholder={field.placeholder}
                    min={field.type === "number" ? 1 : undefined}
                    max={field.type === "number" && field.name === "passengers" ? 8 : undefined}
                  />
                )}
                {field.helpText ? (
                  <p className="mt-1.5 text-xs leading-relaxed text-volcanic-500">{field.helpText}</p>
                ) : null}
              </div>
            );
          })}

          <button type="submit" disabled={!interactive} className="btn-accent disabled:opacity-60">
            {testMode ? "Submit test request" : "Request Availability"}
          </button>
        </form>
      </div>
    </section>
  );
}
