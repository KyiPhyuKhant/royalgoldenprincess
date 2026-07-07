import { galleryImages } from '../data/siteData';

function GalleryPage() {
  return (
    <section className="page-section gallery">
      <div className="section-heading">
        <p className="section-kicker">Selected Pieces</p>
        <h1>Elegant Gems Gallery</h1>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className={index === 0 ? 'featured-piece' : undefined}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
