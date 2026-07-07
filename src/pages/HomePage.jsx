import HomeSlider from '../components/HomeSlider';
import LinkButton from '../components/LinkButton';
import { newArrivals, shopCategories } from '../data/siteData';

function HomePage({ navigate }) {
  return (
    <>
      <HomeSlider navigate={navigate} />

      <section className="new-arrivals" aria-label="New arrivals">
        <div className="storefront-heading">
          <h2>New Arrivals</h2>
        </div>

        <div className="arrival-grid">
          {newArrivals.map((item) => (
            <article className="arrival-card" key={item.name}>
              <span className="new-badge">New</span>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
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
        <img src="/images/Sapphire-2.jpg" alt="Royal Golden Princess jewelry collection" />
        <div className="secondary-hero-copy">
          <p className="eyebrow">In Store Now</p>
          <h2>Gemstone pieces with royal gold detail</h2>
          <LinkButton to="/collections" navigate={navigate} className="button button-primary">
            Shop Collections
          </LinkButton>
        </div>
      </section>

      <section className="shop-category" aria-label="Shop by category">
        <div className="storefront-heading">
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
    </>
  );
}

export default HomePage;
