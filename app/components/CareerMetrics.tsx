const metrics = [
  { value: "28+", label: "Years in the legal sector", detail: "Legal work beginning in 1998." },
  { value: "~11", label: "Years in public prosecution", detail: "Regional and federal prosecution experience." },
  { value: "14+", label: "Years in private practice", detail: "Attorney and legal consultant since January 2012." },
  { value: "Regional + Federal", label: "Court experience", detail: "Work across regional and federal justice institutions." },
];

export default function CareerMetrics() {
  return (
    <section className="career-metrics page-shell" aria-labelledby="metrics-heading">
      <div className="metrics-intro">
        <h2 id="metrics-heading" className="eyebrow">A career in perspective</h2>
        <p>Figures as of October 2026, based on Taye&apos;s professional CV.</p>
      </div>
      <dl className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-detail">{metric.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
