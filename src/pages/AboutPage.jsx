import LinkButton from '../components/LinkButton';
import { teamMembers } from '../data/siteData';

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
                <h2>{member.name}</h2>
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
