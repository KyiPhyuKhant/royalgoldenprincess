import HomeSlider from '../components/HomeSlider';
import LinkButton from '../components/LinkButton';
import ReviewSlider from '../components/ReviewSlider';
import { newArrivals, shopCategories } from '../data/siteData';

function HomePage({ navigate }) {
  return (
    <main className="home-page">
      <HomeSlider navigate={navigate} />

      <section className="new-arrivals" aria-label="New arrivals">
        <div className="storefront-heading">
          <p className="section-kicker">Fresh From The Showroom</p>
          <h1>New Arrivals</h1>
        </div>

        <div className="arrival-grid">
          {newArrivals.map((item, index) => (
            <article className={index === 1 ? 'arrival-card spotlight-arrival' : 'arrival-card'} key={item.name}>
              <span className="new-badge">New</span>
              <div className="arrival-image-wrap">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="arrival-content">
                <p className="arrival-type">Royal Golden Princess</p>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-action">
          <LinkButton to="/gallery" navigate={navigate} className="button dark-button">
            View More
          </LinkButton>
        </div>
      </section>

      <section className="secondary-hero" aria-label="Royal Golden Princess showroom highlight">
        <img src="/images/slide-4.jpg" alt="Royal Golden Princess jewelry collection" />
        <div className="secondary-hero-copy">
          <p className="eyebrow">In Store Now</p>
          <h2>Gemstone pieces with royal gold detail.</h2>
          <p>
            A bright edit of gold, ruby, sapphire, and emerald styles selected for ceremonies,
            gifts, and standout everyday looks.
          </p>
          <LinkButton to="/collections" navigate={navigate} className="button button-primary">
            Shop Collections
          </LinkButton>
        </div>
      </section>

      <section className="shop-category" aria-label="Shop by category">
        <div className="storefront-heading">
          <p className="section-kicker">Find Your Piece</p>
          <h2>Shop by Category</h2>
        </div>

        <div className="category-strip">
          {shopCategories.map((category) => (
            <LinkButton
              key={category.title}
              to={category.path}
              navigate={navigate}
              className="category-tile"
            >
              <img src={category.image} alt="" />
              <span>{category.title}</span>
            </LinkButton>
          ))}
        </div>
      </section>

      <ReviewSlider />
    </main>
  );
}

export default HomePage;
