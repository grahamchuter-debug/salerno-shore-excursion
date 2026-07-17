/**
 * Disabled commercial CTA for the demand-validation stage.
 * Must not look clickable or imply booking is available.
 */
export function BookingComingLaterNotice() {
  return (
    <div
      className="mt-6 select-none rounded-xl border border-dashed border-limestone-300 bg-limestone-100/90 px-4 py-3 text-center text-sm font-medium text-volcanic-500"
      role="note"
    >
      Booking availability coming later
    </div>
  );
}
