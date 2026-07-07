import './App.css';

function App() {
  const galleryImages = [
    { src: '/images/gallery-1.jpg', alt: 'Gold jewelry set with gemstone details' },
    { src: '/images/gallery-2.jpg', alt: 'Diamond and gold necklace design' },
    { src: '/images/gallery-3.jpg', alt: 'Elegant bracelet and ring collection' },
    { src: '/images/gallery-4.jpg', alt: 'Gold pendant jewelry close up' },
    { src: '/images/gallery-5.jpg', alt: 'Premium gold jewelry arrangement' },
    { src: '/images/gallery-6.jpg', alt: 'Royal Golden Princess jewelry display' },
  ];

  const phones = [
    '+95 09 5074312',
    '+95 5015101',
    '+95 409553327',
    '+95 459920102',
    '+95 49250902',
  ];

  return (
    <main className="site-shell">
      <section id="top" className="hero">
        <img className="hero-image" src="/images/hero.jpg" alt="Royal Golden Princess jewelry" />
        <div className="hero-overlay">
          <nav className="topbar" aria-label="Main navigation">
            <a className="brand-mark" href="#top" aria-label="Royal Golden Princess home">
              <img src="/images/logo.jpg" alt="" />
              <span>Royal Golden Princess</span>
            </a>
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>

          <div className="hero-copy">
            <p className="eyebrow">Fine gold and gemstone jewelry</p>
            <h1>Royal Golden Princess</h1>
            <p>
              A refined new online showroom is coming soon. Visit our Yangon branches
              or call us today for jewelry details, appointments, and custom orders.
            </p>
            <div className="hero-actions">
              <a href="#gallery" className="button button-primary">View Gallery</a>
              <a href="tel:+9595074312" className="button button-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="announcement" aria-label="Website launch announcement">
        <div>
          <p className="section-kicker">Coming Soon</p>
          <h2>A complete digital jewelry experience is in progress.</h2>
        </div>
        <p>
          Until launch, our team is available in person and by phone for collections,
          pricing, sizing, and order support.
        </p>
      </section>

      <section id="gallery" className="gallery">
        <div className="section-heading">
          <p className="section-kicker">Selected Pieces</p>
          <h2>Elegant Gems Gallery</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className={index === 0 ? 'featured-piece' : undefined}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-heading">
          <p className="section-kicker">Visit Us</p>
          <h2>Contact Royal Golden Princess</h2>
          <p>Better yet, see us in person.</p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-label">Branch 1</span>
            <h3>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (1)</h3>
            <p>
              အမှတ် ၆၆၂၊ ခေမာသီလမ်းမကြီး၊ (စ) ဈေးနှင့် AYA BANK အနီး၊
              မြောက်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့။
            </p>
          </article>

          <article className="contact-card">
            <span className="contact-label">Branch 2</span>
            <h3>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (2)</h3>
            <p>Time City Jewelry Mall၊ တတိယထပ် (Level 3)၊ အခန်းအမှတ် (C-302)</p>
          </article>

          <article className="contact-card phone-card">
            <span className="contact-label">Orders & Questions</span>
            <h3>အသေးစိတ်စုံစမ်းရန်နှင့် အော်ဒါတင်ရန် ဖုန်းများ</h3>
            <div className="phone-list">
              {phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              ))}
            </div>
          </article>

          <article className="contact-card hours-card">
            <span className="contact-label">Hours</span>
            <h3>Royal Golden Princess</h3>
            <p>Open daily 09:00 am - 05:00 pm</p>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="" />
          <span>Royal Golden Princess</span>
        </div>
        <p>Copyright © 2026 Royal Golden Princess - All Rights Reserved.</p>
      </footer>

      <a href="#contact" className="floating-contact" aria-label="Go to contact section">
        Contact
      </a>
    </main>
  );
}

export default App;
