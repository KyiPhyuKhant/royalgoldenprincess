import LinkButton from '../components/LinkButton';

function BlogDetailPage({ post, navigate }) {
  return (
    <main className="blog-detail-page">
      <section className="blog-detail-hero" aria-label={post.title}>
        <div className="blog-detail-copy">
          <p className="section-kicker">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <small>
            {post.date} / {post.readTime}
          </small>
        </div>
        <img src={post.image} alt={post.title} />
      </section>

      <article className="blog-article">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="blog-article-action">
          <LinkButton to="/blog" navigate={navigate} className="button dark-button">
            Back To Blog
          </LinkButton>
        </div>
      </article>
    </main>
  );
}

export default BlogDetailPage;
