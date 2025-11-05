import { useState, useEffect } from 'react'

interface CarouselProps {
  images: Array<{
    url: string
    alt: string
  }>
  interval?: number // Time in milliseconds between slides
}

export function ImageCarousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Only start the timer if we have multiple images
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, interval)

    // Cleanup timer on component unmount
    return () => clearInterval(timer)
  }, [images.length, interval])

  if (!images.length) return null

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={image.url}
          className="carousel-slide"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <img src={image.url} alt={image.alt} className="carousel-image" />
        </div>
      ))}
      
      <button 
        className="carousel-arrow prev"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button 
        className="carousel-arrow next"
        onClick={goToNext}
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          border-radius: 8px;
          margin: 20px 0;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background-color 0.3s ease;
        }

        .carousel-dot.active {
          background: white;
        }

        .carousel-dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.3);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .carousel-container:hover .carousel-arrow {
          opacity: 1;
        }

        .carousel-arrow:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .carousel-arrow.prev {
          left: 16px;
        }

        .carousel-arrow.next {
          right: 16px;
        }

        .carousel-arrow svg {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  )
}