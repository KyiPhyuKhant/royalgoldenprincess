import { useState } from 'react';
import { customerReviews } from '../data/siteData';

function ReviewSlider() {
  const [activeReview, setActiveReview] = useState(0);
  const review = customerReviews[activeReview];

  const goToPrevious = () => {
    setActiveReview((current) => (current - 1 + customerReviews.length) % customerReviews.length);
  };

  const goToNext = () => {
    setActiveReview((current) => (current + 1) % customerReviews.length);
  };

  return (
    <section className="customer-reviews" aria-label="Customer reviews">
      <div className="review-heading">
        <p className="section-kicker">Customer Reviews</p>
        <h2>Jewellery moments our customers remember.</h2>
      </div>

      <div className="review-slider">
        <figure className="review-image">
          <img src={review.image} alt={`${review.occasion} jewellery`} />
        </figure>

        <article className="review-card">
          <div className="review-stars" aria-label="Five star review">
            <span aria-hidden="true">★ ★ ★ ★ ★</span>
          </div>
          <blockquote>“{review.quote}”</blockquote>
          <div className="review-meta">
            <strong>{review.name}</strong>
            <span>{review.occasion}</span>
          </div>

          <div className="review-controls" aria-label="Review slider controls">
            <button type="button" onClick={goToPrevious} aria-label="Previous review">
              <span aria-hidden="true">&lsaquo;</span>
            </button>
            <div className="review-dots">
              {customerReviews.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={index === activeReview ? 'active-review-dot' : undefined}
                  onClick={() => setActiveReview(index)}
                  aria-label={`Show review from ${item.name}`}
                />
              ))}
            </div>
            <button type="button" onClick={goToNext} aria-label="Next review">
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </article>
      </div>

      <div className="review-preview-strip" aria-label="Review preview images">
        {customerReviews.map((item, index) => (
          <button
            type="button"
            key={item.name}
            className={index === activeReview ? 'active-review-preview' : undefined}
            onClick={() => setActiveReview(index)}
          >
            <img src={item.image} alt="" />
            <span>{item.occasion}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ReviewSlider;
