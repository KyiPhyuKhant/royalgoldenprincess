import SocialLinks from '../components/SocialLinks';
import { mapLocations, phones } from '../data/siteData';

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-label="Contact Royal Golden Princess">
        <div className="contact-hero-copy">
          <p className="section-kicker">Visit Us</p>
          <h1>Step into Royal Golden Princess.</h1>
          <p>
            Visit our Yangon branches for gold sets, gemstone pieces, sizing support, and custom
            order guidance.
          </p>
        </div>

        <article className="contact-feature-card">
          <img src="/images/logo.jpg" alt="Royal Golden Princess" />
          <div>
            <span className="contact-label">Open Daily</span>
            <h2>09:00 am - 05:00 pm</h2>
            <p>Call before visiting for product availability and appointment support.</p>
          </div>
        </article>
      </section>

      <section className="contact" aria-label="Branch and order details">
        <div className="contact-grid">
          <article className="contact-card branch-card">
            <span className="contact-label">Branch 1</span>
            <h2>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (1)</h2>
            <p>
              အမှတ် ၆၆၂၊ ခေမာသီလမ်းမကြီး၊ (စ) ဈေးနှင့် AYA BANK အနီး၊
              မြောက်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့။
            </p>
          </article>

          <article className="contact-card branch-card">
            <span className="contact-label">Branch 2</span>
            <h2>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (2)</h2>
            <p>Time City Jewelry Mall၊ တတိယထပ် (Level 3)၊ အခန်းအမှတ် (C-302)</p>
          </article>

          <article className="contact-card phone-card">
            <span className="contact-label">Orders & Questions</span>
            <h2>အသေးစိတ်စုံစမ်းရန်နှင့် အော်ဒါတင်ရန် ဖုန်းများ</h2>
            <div className="phone-list">
              {phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>
                  {phone}
                </a>
              ))}
            </div>
          </article>

          <article className="contact-card social-card">
            <span className="contact-label">Social Media</span>
            <h2>Follow Royal Golden Princess</h2>
            <p>See new arrivals, showroom updates, and featured jewelry pieces.</p>
            <SocialLinks />
          </article>
        </div>

        <div className="map-section">
          <div className="storefront-heading">
            <p className="section-kicker">Find Our Shops</p>
            <h2>Yangon Locations</h2>
          </div>

          <div className="map-grid">
            {mapLocations.map((location) => (
              <article className="map-card" key={location.title}>
                <div>
                  <span className="contact-label">{location.title}</span>
                  <h2>{location.description}</h2>
                </div>
                <iframe
                  src={location.src}
                  title={location.title}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
