import { useEffect, useState } from 'react';
import { homeSlides } from '../data/siteData';
import LinkButton from './LinkButton';

function HomeSlider({ navigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + homeSlides.length) % homeSlides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % homeSlides.length);
  };

  return (
    <section className="hero-slider" aria-label="Featured Royal Golden Princess highlights">
      <div className="slider-track">
        {homeSlides.map((slide, index) => (
          <article
            className={index === activeSlide ? 'slider-slide active-slide' : 'slider-slide'}
            key={slide.title}
            aria-hidden={index !== activeSlide}
          >
            <img src={slide.image} alt="" />
            <div className="slider-overlay">
              <div className="hero-copy">
                <p className="eyebrow">{slide.kicker}</p>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="hero-actions">
                  <LinkButton to="/collections" navigate={navigate} className="button button-primary">
                    View Collections
                  </LinkButton>
                  <a href="tel:+9595074312" className="button button-secondary">Call Now</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="slider-controls" aria-label="Slider controls">
        <button type="button" onClick={goToPrevious} aria-label="Previous slide">
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <div className="slider-dots">
          {homeSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={index === activeSlide ? 'active-dot' : undefined}
              onClick={() => goToSlide(index)}
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>
        <button type="button" onClick={goToNext} aria-label="Next slide">
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}

export default HomeSlider;
