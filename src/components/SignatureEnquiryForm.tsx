import { enquiryFormFields } from "@/data/booking";

type SignatureEnquiryFormProps = {
  tourTitle: string;
};

/**
 * Enquiry UI is built but fully disabled.
 * Do not collect enquiries during SEO / demand validation.
 */
export function SignatureEnquiryForm({ tourTitle }: SignatureEnquiryFormProps) {
  const initialFields = enquiryFormFields.filter((f) => f.phase === "initial");

  return (
    <section id="request-availability" className="scroll-mt-24" aria-hidden="false">
      <div className="rounded-2xl border border-limestone-200 bg-limestone-50/80 p-6 sm:p-8 opacity-90">
        <p className="section-eyebrow">Later stage</p>
        <h2 className="section-title mt-2 text-2xl">Enquiry form for {tourTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-volcanic-700">
          Enquiries are not open on this site yet. We are first validating organic interest in
          Signature Tour content. A response-ready enquiry process will open only after traffic
          justifies operations and Papillon’s commercial terms are confirmed.
        </p>

        <div
          className="mt-6 rounded-xl border border-dashed border-limestone-300 bg-limestone-100/90 px-4 py-3 text-sm font-medium text-volcanic-500"
          role="note"
        >
          Booking availability coming later
        </div>

        <form className="mt-8 space-y-5 pointer-events-none">
          <fieldset disabled className="space-y-5 border-0 p-0 m-0 min-w-0">
            <legend className="sr-only">Disabled enquiry fields</legend>
          {initialFields.map((field) => {
            const fieldId = `enquiry-${field.id}`;
            return (
              <div key={field.id}>
                <label htmlFor={fieldId} className="block text-sm font-medium text-volcanic-500">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    id={fieldId}
                    name={field.name}
                    disabled
                    className="mt-1.5 w-full rounded-lg border border-limestone-300 bg-limestone-100 px-3 py-2.5 text-sm text-volcanic-500"
                  >
                    <option value="">Select…</option>
                  </select>
                ) : (
                  <input
                    id={fieldId}
                    name={field.name}
                    type={field.type === "textarea" ? "text" : field.type}
                    disabled
                    className="mt-1.5 w-full rounded-lg border border-limestone-300 bg-limestone-100 px-3 py-2.5 text-sm text-volcanic-500"
                  />
                )}
              </div>
            );
          })}
          <button
            type="button"
            disabled
            className="rounded-xl bg-limestone-300 px-6 py-3.5 text-sm font-semibold text-volcanic-500 cursor-not-allowed"
          >
            Booking availability coming later
          </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
