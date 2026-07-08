import { policySections } from '../data/siteData';

function PolicyPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero" aria-label="Royal Golden Princess policy">
        <div>
          <p className="section-kicker">Policy</p>
          <h1>Clear information for showroom visits, orders, and customer care.</h1>
          <p>
            Please contact Royal Golden Princess directly for the latest product, order, and branch
            details.
          </p>
        </div>
      </section>

      <section className="page-section policy-section">
        <div className="policy-grid">
          {policySections.map((section) => (
            <article className="policy-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PolicyPage;
