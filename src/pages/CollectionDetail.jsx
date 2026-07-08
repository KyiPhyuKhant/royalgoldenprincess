import LinkButton from '../components/LinkButton';

function CollectionDetail({ collection, navigate }) {
  const collectionListPath = collection.group === 'gems'
    ? '/collections/gems'
    : '/collections/jewellery';
  const collectionListLabel = collection.group === 'gems'
    ? 'All Gem Collections'
    : 'All Jewellery Collections';

  return (
    <>
      <section className="page-section detail-page">
        <div className="detail-media">
          <img src={collection.image} alt="" />
        </div>
        <div className="detail-copy">
          <p className="section-kicker">Jewellery Collections</p>
          <h1>{collection.title}</h1>
          <p>{collection.description}</p>
          <p>
            Contact our team for available designs, current pricing, sizing support,
            and custom order details for this collection.
          </p>
          <div className="hero-actions">
            <LinkButton to="/contact" navigate={navigate} className="button button-primary">
              Ask About This Collection
            </LinkButton>
            <LinkButton to={collectionListPath} navigate={navigate} className="button light-button">
              {collectionListLabel}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="related-gallery">
        <div className="section-heading">
          <p className="section-kicker">Related Images</p>
          <h2>{collection.title} Gallery</h2>
        </div>

        <div className="related-gallery-grid">
          {collection.relatedImages.map((product) => (
            <figure key={product.src}>
              <img src={product.src} alt={product.title} />
              <figcaption>
                <strong>{product.title}</strong>
                <span>{product.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export default CollectionDetail;
