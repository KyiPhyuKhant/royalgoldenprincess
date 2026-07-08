import LinkButton from '../components/LinkButton';
import { aboutTimeline, aboutValues, teamMembers } from '../data/siteData';

function AboutPage({ navigate }) {
  return (
    <>
      <section className="page-section about">
        <div className="about-media">
          <img src="/images/logo.jpg" alt="Royal Golden Princess logo" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">About Us</p>
          <h1>Trusted jewelry guidance with an elegant showroom experience.</h1>
          <p>
            Royal Golden Princess helps customers choose meaningful gold and gemstone
            pieces for personal wear, gifts, ceremonies, and custom orders. Our team
            welcomes in-person visits at our Yangon branches for product details,
            sizing, and order support.
          </p>
          <LinkButton to="/contact" navigate={navigate} className="text-link">
            Plan Your Visit
          </LinkButton>
        </div>
      </section>

      <section className="page-section history-section">
        <div className="history-layout">
          <div className="history-feature">
            <p className="section-kicker">Our History</p>
            <h2>From one trusted showroom to two Yangon branches.</h2>
            <p>
              A bright journey built on customer trust, jewellery guidance, and meaningful pieces
              for ceremonies, gifts, and family milestones.
            </p>
            <div className="history-feature-image">
              <img src="/images/gold-set-3.jpg" alt="Royal Golden Princess gold jewellery" />
            </div>
          </div>

          <div className="timeline-rail" aria-label="Royal Golden Princess history timeline">
            {aboutTimeline.map((item, index) => (
              <article className="timeline-card" key={`${item.year}-${item.title}`}>
                <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section vision-section">
        <div className="vision-grid">
          {aboutValues.map((item) => (
            <article className="vision-card" key={item.label}>
              <span className="contact-label">{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section team-section">
        <div className="section-heading">
          <p className="section-kicker">Our People</p>
          {/* <h2>Boss and staff</h2> */}
          <p>
            Meet the team behind Royal Golden Princess. 
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.role}>
              <img src={member.image} alt={`${member.role} - ${member.name}`} />
              <div>
                <span className="contact-label">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
