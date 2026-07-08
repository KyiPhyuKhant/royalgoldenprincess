import { blogPosts } from '../data/siteData';
import LinkButton from '../components/LinkButton';

function BlogPage({ navigate }) {
  const [featuredPost, ...sidePosts] = blogPosts;

  return (
    <main className="blog-page">
      <section className="blog-hero" aria-label="Royal Golden Princess blog">
        <div className="blog-hero-copy">
          <p className="section-kicker">Journal</p>
          <h1>Jewellery stories, styling notes, and gemstone inspiration.</h1>
          <p>
            Read short guides from Royal Golden Princess about gold sets, gemstone colors,
            occasion styling, and showroom favorites.
          </p>
        </div>

        <div className="blog-hero-stack" aria-hidden="true">
          {blogPosts.map((post) => (
            <img key={post.id} src={post.image} alt="" />
          ))}
        </div>
      </section>

      <section className="blog-showcase" aria-label="Latest blog posts">
        <div className="storefront-heading">
          <p className="section-kicker">Latest Notes</p>
          <h2>From The Showroom</h2>
        </div>

        <div className="blog-layout">
          <article className="blog-feature-card">
            <img src={featuredPost.image} alt={featuredPost.title} />
            <div>
              <span>{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <small>
                {featuredPost.date} / {featuredPost.readTime}
              </small>
              <LinkButton
                to={`/blog/${featuredPost.id}`}
                navigate={navigate}
                className="blog-read-link"
              >
                Read Full Post
              </LinkButton>
            </div>
          </article>

          <div className="blog-side-grid">
            {sidePosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <img src={post.image} alt={post.title} />
                <div>
                  <span>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <small>
                    {post.date} / {post.readTime}
                  </small>
                  <LinkButton to={`/blog/${post.id}`} navigate={navigate} className="blog-read-link">
                    Read Full Post
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blog-note">
          <p className="section-kicker">Coming Next</p>
          <h2>More gold, gemstone, and styling stories are on the way.</h2>
          <p>
            Follow our social pages or visit the showroom for the newest pieces before the next
            journal update.
          </p>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
