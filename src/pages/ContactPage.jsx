import SocialLinks from '../components/SocialLinks';
import { mapLocations, phones } from '../data/siteData';

function ContactPage() {
  return (
    <section className="page-section contact">
      <div className="section-heading">
        <p className="section-kicker">Visit Us</p>
        <p>Better yet, see us in person.</p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <span className="contact-label">Branch 1</span>
          <h2>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (1)</h2>
          <p>
            အမှတ် ၆၆၂၊ ခေမာသီလမ်းမကြီး၊ (စ) ဈေးနှင့် AYA BANK အနီး၊
            မြောက်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့။
          </p>
        </article>

        <article className="contact-card">
          <span className="contact-label">Branch 2</span>
          <h2>တော်ဝင်ရွှေမင်းသမီးရဲ့ ဆိုင်ခွဲအမှတ် (2)</h2>
          <p>Time City Jewelry Mall၊ တတိယထပ် (Level 3)၊ အခန်းအမှတ် (C-302)</p>
        </article>
      </div>
      <div className="map-section">
        <div className="section-heading">
          
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
      <div className="">
        <article className="contact-card phone-card">
          <span className="contact-label">Orders & Questions</span>
          <h2>အသေးစိတ်စုံစမ်းရန်နှင့် အော်ဒါတင်ရန် ဖုန်းများ</h2>
          <div className="phone-list">
            {phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            ))}
          </div>
        </article>

        <article className="contact-card hours-card">
          <span className="contact-label">Hours</span>
          <h2>Royal Golden Princess</h2>
          <p>Open daily 09:00 am - 05:00 pm</p>
        </article>

        {/* <article className="contact-card social-card">
          <span className="contact-label">Social Media</span>
          <h2>Follow Royal Golden Princess</h2>
          <SocialLinks />
        </article> */}
      </div>

      
    </section>
  );
}

export default ContactPage;
