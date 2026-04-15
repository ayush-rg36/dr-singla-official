export default function PatientReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            Clinical Outcomes &amp; Patient Success
          </h2>
          <p className="text-gray-500 text-lg">
            Real cases. Real recoveries. Documented by the patients themselves.
          </p>
        </div>

        {/* Video grid — symmetric 2-column, constrained width */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Video 1 — Vertical (9:16) */}
          <div className="flex flex-col items-center gap-4">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/EHE7m46L0kM"
                title="Clinical Outcome 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm italic text-center">
              "Successful management of advanced CKD — restored quality of life."
            </p>
          </div>

          {/* Video 2 — Vertical (9:16) */}
          <div className="flex flex-col items-center gap-4">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/hp8wWmZzWUI"
                title="Clinical Outcome 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm italic text-center">
              "Post-transplant recovery — back to full health within 4 months of expert care."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
